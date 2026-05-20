import { useState, useEffect, useCallback } from "react";

export interface AdminProduct {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  images: string[];
  colours: string[];
  fabricDetails: string;
  quantity: number;
  fullPrice: number;
  discountPrice: number;
  isBestSeller: boolean;
  isWholesale: boolean;
  isBlocked: boolean;
  seoTitle?: string;
  metaDescription?: string;
  description?: string;
}

const API_BASE = "http://localhost:5000/api";

export function useProducts() {
  const [productList, setProductList] = useState<AdminProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [pagination, setPagination] = useState({ page: 1, limit: 10, totalPages: 1, total: 0 });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<AdminProduct | null>(null);

  const fetchProducts = useCallback(async (page: number = 1, limit: number = 10) => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/products?page=${page}&limit=${limit}`);
      const data = await res.json();
      setProductList(data.data || []);
      setPagination({
        page: data.page,
        limit: data.limit,
        totalPages: data.totalPages,
        total: data.total
      });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const uploadImages = async (files: FileList): Promise<string[]> => {
    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("images", file));
    const res = await fetch(`${API_BASE}/upload/multiple`, { method: "POST", body: formData });
    const data = await res.json();
    return data.imageUrls || [];
  };

  const createProduct = async (formData: FormData) => {
    try {
      setIsSaving(true);
      // Upload images if files are provided
      const imageFiles = formData.getAll("imageFiles") as File[];
      let imageUrls: string[] = [];
      const validFiles = imageFiles.filter((f) => f.size > 0);
      if (validFiles.length > 0) {
        const uploadForm = new FormData();
        validFiles.forEach((f) => uploadForm.append("images", f));
        const uploadRes = await fetch(`${API_BASE}/upload/multiple`, { method: "POST", body: uploadForm });
        const uploadData = await uploadRes.json();
        imageUrls = uploadData.imageUrls || [];
      }

      // Parse colours from comma-separated string
      const coloursRaw = (formData.get("colours") as string) || "";
      const colours = coloursRaw.split(",").map((c) => c.trim()).filter(Boolean);

      const body = {
        name: formData.get("name") as string,
        category: formData.get("category") as string,
        subCategory: formData.get("subCategory") as string,
        images: imageUrls,
        colours,
        fabricDetails: formData.get("fabricDetails") as string,
        quantity: Number(formData.get("quantity")),
        fullPrice: Number(formData.get("fullPrice")),
        discountPrice: Number(formData.get("discountPrice")),
        isBestSeller: formData.get("isBestSeller") === "true",
        isWholesale: formData.get("isWholesale") === "true",
        seoTitle: formData.get("seoTitle") as string,
        metaDescription: formData.get("metaDescription") as string,
        description: formData.get("description") as string,
      };

      const res = await fetch(`${API_BASE}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed to create product");
      await fetchProducts(1, pagination.limit); // fetch page 1 after creating
    } catch (error) {
      console.error("Failed to create product:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const updateProduct = async (id: string, formData: FormData) => {
    try {
      setIsSaving(true);
      // Upload new images if provided
      const imageFiles = formData.getAll("imageFiles") as File[];
      const validFiles = imageFiles.filter((f) => f.size > 0);
      let newImageUrls: string[] | undefined;
      if (validFiles.length > 0) {
        const uploadForm = new FormData();
        validFiles.forEach((f) => uploadForm.append("images", f));
        const uploadRes = await fetch(`${API_BASE}/upload/multiple`, { method: "POST", body: uploadForm });
        const uploadData = await uploadRes.json();
        newImageUrls = uploadData.imageUrls || [];
      }

      const coloursRaw = (formData.get("colours") as string) || "";
      const colours = coloursRaw.split(",").map((c) => c.trim()).filter(Boolean);

      const body: Record<string, any> = {
        name: formData.get("name") as string,
        category: formData.get("category") as string,
        subCategory: formData.get("subCategory") as string,
        colours,
        fabricDetails: formData.get("fabricDetails") as string,
        quantity: Number(formData.get("quantity")),
        fullPrice: Number(formData.get("fullPrice")),
        discountPrice: Number(formData.get("discountPrice")),
        isBestSeller: formData.get("isBestSeller") === "true",
        isWholesale: formData.get("isWholesale") === "true",
        seoTitle: formData.get("seoTitle") as string,
        metaDescription: formData.get("metaDescription") as string,
        description: formData.get("description") as string,
      };
      if (newImageUrls) body.images = newImageUrls;

      const res = await fetch(`${API_BASE}/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed to update product");
      await fetchProducts(pagination.page, pagination.limit);
    } catch (error) {
      console.error("Failed to update product:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const toggleBlock = async (id: string) => {
    try {
      const res = await fetch(`${API_BASE}/products/${id}/toggle-block`, { method: "PATCH" });
      if (!res.ok) throw new Error("Failed to toggle block");
      await fetchProducts(pagination.page, pagination.limit);
    } catch (error) {
      console.error("Failed to toggle block:", error);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      const res = await fetch(`${API_BASE}/products/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete product");
      await fetchProducts(pagination.page, pagination.limit);
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const openAddModal = () => setIsAddModalOpen(true);

  const closeModals = () => {
    setIsAddModalOpen(false);
    setEditingProduct(null);
  };

  return {
    productList,
    pagination,
    fetchProducts,
    loading,
    isSaving,
    isAddModalOpen,
    editingProduct,
    setEditingProduct,
    createProduct,
    updateProduct,
    toggleBlock,
    deleteProduct,
    openAddModal,
    closeModals,
  };
}
