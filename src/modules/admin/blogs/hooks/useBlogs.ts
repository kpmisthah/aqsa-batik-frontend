import { useState, useEffect, useCallback } from "react";

export interface AdminBlog {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featuredImg?: string;
  published: boolean;
  author?: string;
  metaTitle?: string;
  metaDesc?: string;
  category?: string;
  createdAt: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export function useBlogs() {
  const [blogList, setBlogList] = useState<AdminBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<AdminBlog | null>(null);

  const fetchBlogs = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/blogs?admin=true`);
      const data = await res.json();
      setBlogList(data.data || []);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const createBlog = async (formData: FormData) => {
    try {
      setIsSaving(true);
      
      const imageFile = formData.get("imageFile") as File;
      let imageUrl = "";
      if (imageFile && imageFile.size > 0) {
        const uploadForm = new FormData();
        uploadForm.append("images", imageFile);
        const uploadRes = await fetch(`${API_BASE}/upload/multiple`, { method: "POST", body: uploadForm });
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.imageUrls?.[0] || "";
      }

      const body = {
        title: formData.get("title") as string,
        excerpt: formData.get("excerpt") as string,
        content: formData.get("content") as string,
        published: formData.getAll("published").includes("true"),
        author: formData.get("author") as string,
        metaTitle: formData.get("metaTitle") as string,
        metaDesc: formData.get("metaDesc") as string,
        category: formData.get("category") as string,
      };

      if (imageUrl) {
        (body as any).featuredImg = imageUrl;
      }

      const res = await fetch(`${API_BASE}/blogs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed to create blog");
      await fetchBlogs();
    } catch (error) {
      console.error("Failed to create blog:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const updateBlog = async (id: string, formData: FormData) => {
    try {
      setIsSaving(true);
      
      const imageFile = formData.get("imageFile") as File;
      let imageUrl = formData.get("existingImage") as string;
      
      if (imageFile && imageFile.size > 0) {
        const uploadForm = new FormData();
        uploadForm.append("images", imageFile);
        const uploadRes = await fetch(`${API_BASE}/upload/multiple`, { method: "POST", body: uploadForm });
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.imageUrls?.[0] || imageUrl;
      }

      const body = {
        title: formData.get("title") as string,
        excerpt: formData.get("excerpt") as string,
        content: formData.get("content") as string,
        published: formData.getAll("published").includes("true"),
        author: formData.get("author") as string,
        metaTitle: formData.get("metaTitle") as string,
        metaDesc: formData.get("metaDesc") as string,
        category: formData.get("category") as string,
        featuredImg: imageUrl,
      };

      const res = await fetch(`${API_BASE}/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed to update blog");
      await fetchBlogs();
    } catch (error) {
      console.error("Failed to update blog:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const deleteBlog = async (id: string) => {
    try {
      const res = await fetch(`${API_BASE}/blogs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete blog");
      await fetchBlogs();
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  const togglePublished = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`${API_BASE}/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !currentStatus }),
      });
      if (!res.ok) throw new Error("Failed to toggle status");
      await fetchBlogs();
    } catch (error) {
      console.error("Failed to toggle status:", error);
    }
  };

  const openAddModal = () => setIsAddModalOpen(true);

  const closeModals = () => {
    setIsAddModalOpen(false);
    setEditingBlog(null);
  };

  return {
    blogList,
    fetchBlogs,
    loading,
    isSaving,
    isAddModalOpen,
    editingBlog,
    setEditingBlog,
    createBlog,
    updateBlog,
    deleteBlog,
    togglePublished,
    openAddModal,
    closeModals,
  };
}
