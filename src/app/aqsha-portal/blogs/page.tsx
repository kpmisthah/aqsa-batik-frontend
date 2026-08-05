"use client";

import React, { useRef, useState } from "react";
import { Search, X, Edit, Trash2 } from "lucide-react";
import { useBlogs } from "@/modules/admin/blogs/hooks/useBlogs";
import AdminModal from "@/modules/admin/components/AdminModal";
import ImageCropperModal from "@/modules/admin/components/ImageCropperModal";
import RichTextEditor from "@/modules/admin/components/RichTextEditor";
import Link from "next/link";

export default function AdminBlogs() {
  const {
    blogList,
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
  } = useBlogs();

  const formRef = useRef<HTMLFormElement>(null);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [croppingFile, setCroppingFile] = useState<File | null>(null);
  const [imageItem, setImageItem] = useState<{ id: string; type: 'existing'; url: string } | { id: string; type: 'new'; file: File; previewUrl: string } | null>(null);
  const [confirmAction, setConfirmAction] = useState<{ id: string, name: string, type: 'delete' } | null>(null);
  const [blogContent, setBlogContent] = useState("");

  // Initialize image on edit
  React.useEffect(() => {
    if (editingBlog && editingBlog.featuredImg) {
      setImageItem({ id: `existing-1`, type: 'existing', url: editingBlog.featuredImg });
    } else {
      setImageItem(null);
    }
    
    if (editingBlog) {
      setBlogContent(editingBlog.content || "");
    } else {
      setBlogContent("");
    }
  }, [editingBlog, isAddModalOpen]);

  const handleSave = async () => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);

    if (imageItem) {
      if (imageItem.type === 'existing') {
        formData.append("existingImage", imageItem.url);
      } else {
        formData.append("imageFile", imageItem.file);
      }
    } else {
      formData.append("existingImage", "");
    }

    formData.set("content", blogContent);

    if (editingBlog) {
      await updateBlog(editingBlog.id, formData);
    } else {
      await createBlog(formData);
    }
    closeModals();
    setImageItem(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCroppingFile(e.target.files[0]);
    }
    e.target.value = "";
  };

  const handleCropSave = (croppedFile: File) => {
    setImageItem({ id: `new-${Date.now()}`, type: 'new', file: croppedFile, previewUrl: URL.createObjectURL(croppedFile) });
    setCroppingFile(null);
  };

  const removeImage = () => {
    setImageItem(null);
  };

  const handleClose = () => {
    closeModals();
    setImageItem(null);
    setCroppingFile(null);
  };

  const filteredBlogs = blogList.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    blog.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-primary/10">
        <div>
          <h1 className="text-2xl font-black font-heading text-primary">Blogs / Articles</h1>
          <p className="text-sm text-primary/60 mt-1 font-medium">Manage your content marketing and SEO articles.</p>
        </div>
        <div className="flex gap-3 relative shrink-0">
          <button
            onClick={openAddModal}
            className="flex items-center justify-center px-6 py-2 bg-primary text-white rounded-xl font-bold shadow-md hover:bg-primary/90 hover:shadow-lg transition-all active:scale-95 whitespace-nowrap text-sm"
          >
            + New Article
          </button>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-lg shadow-primary/5 border border-primary/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-primary/40" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-11 pr-3 py-3 border border-primary/20 rounded-xl leading-5 bg-white placeholder-primary/40 text-primary font-medium focus:outline-none focus:placeholder-primary/30 focus:ring-2 focus:ring-accent focus:border-accent sm:text-sm transition-colors"
            placeholder="Search blogs..."
          />
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-primary/10">
          <p className="text-primary/50 font-medium text-lg">
            No articles found. Click "+ New Article" to write your first post.
          </p>
        </div>
      ) : (
        <div className="bg-white shadow-lg shadow-primary/5 rounded-2xl border border-primary/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-primary/10">
              <thead className="bg-cream">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-black text-secondary uppercase tracking-widest">Article</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-black text-secondary uppercase tracking-widest">Author & Category</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-black text-secondary uppercase tracking-widest">Status</th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-black text-secondary uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-primary/5">
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-cream/50 transition-colors">
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center gap-4">
                        <div className="h-14 w-20 flex-shrink-0 relative rounded-lg overflow-hidden bg-tan border border-primary/10">
                          {blog.featuredImg ? (
                            <img className="h-14 w-20 object-cover" src={blog.featuredImg} alt={blog.title} />
                          ) : (
                            <div className="h-14 w-20 flex items-center justify-center text-primary/30 text-[10px] font-bold">No img</div>
                          )}
                        </div>
                        <div className="min-w-0 max-w-[250px] truncate">
                          <div className="text-sm font-bold text-primary truncate" title={blog.title}>{blog.title}</div>
                          <div className="text-xs font-medium text-primary/60 mt-1 truncate">{blog.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="text-sm font-bold text-primary">{blog.author || 'Admin'}</div>
                      <span className="px-2 py-0.5 mt-1 inline-flex text-[10px] font-black uppercase tracking-wider rounded bg-tan/50 text-primary border border-primary/10">
                        {blog.category || 'General'}
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                       <button
                         onClick={() => togglePublished(blog.id, blog.published)}
                         className={`px-3 py-1 text-xs font-bold rounded-md transition-colors border ${blog.published ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100' : 'bg-primary/5 text-primary/60 border-primary/10 hover:bg-primary/10'}`}
                       >
                         {blog.published ? "Published" : "Draft"}
                       </button>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-4">
                        <button 
                          onClick={() => setEditingBlog(blog)}
                          className="text-primary/40 hover:text-accent transition-colors p-1"
                          title="Edit Article"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => setConfirmAction({ id: blog.id, name: blog.title, type: 'delete' })}
                          className="text-primary/40 hover:text-red-500 transition-colors p-1"
                          title="Delete Article"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add/Edit Modal */}
      <AdminModal
        isOpen={isAddModalOpen || !!editingBlog}
        onClose={handleClose}
        title={editingBlog ? "Edit Article" : "Write New Article"}
        onSave={handleSave}
        saveText={editingBlog ? "Save Changes" : "Create Article"}
        isSaving={isSaving}
        maxWidth="max-w-4xl"
      >
        <form ref={formRef} className="space-y-6 max-h-[70vh] overflow-y-auto px-2 -mx-2">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="md:col-span-2 space-y-5">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-secondary mb-2">Article Title</label>
                  <input type="text" name="title" defaultValue={editingBlog?.title || ""} className="w-full border border-primary/20 rounded-xl p-3 text-primary focus:ring-2 focus:ring-accent focus:outline-none font-medium" placeholder="E.g. The Ultimate Guide to Batik..." required />
                </div>
                
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-secondary mb-2">Excerpt / Short Description</label>
                  <textarea name="excerpt" defaultValue={editingBlog?.excerpt || ""} rows={2} className="w-full border border-primary/20 rounded-xl p-3 text-primary focus:ring-2 focus:ring-accent focus:outline-none font-medium resize-none" placeholder="A brief summary..." />
                </div>
                
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-secondary mb-2">Content (HTML allowed)</label>
                  <RichTextEditor value={blogContent} onChange={setBlogContent} placeholder="Write your article here..." />
                </div>
             </div>
             
             <div className="space-y-5">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-secondary mb-2">Featured Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full border border-primary/20 rounded-xl p-3 text-primary focus:ring-2 focus:ring-accent focus:outline-none font-medium file:mr-4 file:py-1 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-tan file:text-primary hover:file:bg-accent cursor-pointer text-sm"
                  />
                  {imageItem && (
                    <div className="relative group mt-4 w-full aspect-video rounded-xl overflow-hidden border border-primary/20 shadow-sm bg-tan">
                      <img src={imageItem.type === 'existing' ? imageItem.url : imageItem.previewUrl} alt="Preview" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-2 right-2 bg-red-500/90 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-red-600 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                </div>
                  
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-secondary mb-2">Category</label>
                  <input type="text" name="category" defaultValue={editingBlog?.category || ""} className="w-full border border-primary/20 rounded-xl p-3 text-primary focus:ring-2 focus:ring-accent focus:outline-none font-medium" placeholder="E.g. Fashion Trends" />
                </div>
                
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-secondary mb-2">Author</label>
                  <input type="text" name="author" defaultValue={editingBlog?.author || ""} className="w-full border border-primary/20 rounded-xl p-3 text-primary focus:ring-2 focus:ring-accent focus:outline-none font-medium" placeholder="E.g. Admin" />
                </div>

                <div className="border border-primary/20 rounded-xl p-4 space-y-3 bg-cream/30">
                   <h3 className="text-xs font-black uppercase tracking-widest text-primary border-b border-primary/10 pb-2 mb-2">SEO Settings</h3>
                   <div>
                     <label className="block text-[10px] font-bold uppercase text-primary/60 mb-1">Meta Title</label>
                     <input type="text" name="metaTitle" defaultValue={editingBlog?.metaTitle || ""} className="w-full border border-primary/20 rounded-lg p-2 text-sm text-primary focus:ring-2 focus:ring-accent focus:outline-none" />
                   </div>
                   <div>
                     <label className="block text-[10px] font-bold uppercase text-primary/60 mb-1">Meta Description</label>
                     <textarea name="metaDesc" defaultValue={editingBlog?.metaDesc || ""} rows={3} className="w-full border border-primary/20 rounded-lg p-2 text-sm text-primary focus:ring-2 focus:ring-accent focus:outline-none resize-none" />
                   </div>
                </div>

                <label className="flex items-center gap-3 cursor-pointer p-4 border border-primary/20 rounded-xl hover:bg-cream/50 transition-colors">
                  <input type="hidden" name="published" value="false" />
                  <input type="checkbox" name="published" value="true" defaultChecked={editingBlog ? editingBlog.published : false} className="w-5 h-5 rounded text-primary focus:ring-accent" />
                  <span className="text-sm font-bold text-primary">Publish Immediately</span>
                </label>
             </div>
          </div>
        </form>
      </AdminModal>

      {croppingFile && (
        <ImageCropperModal
          imageFile={croppingFile}
          onClose={() => setCroppingFile(null)}
          onCropSave={handleCropSave}
          aspectRatio={16/9}
        />
      )}

      {/* Confirmation Modal */}
      <AdminModal
        isOpen={!!confirmAction}
        onClose={() => setConfirmAction(null)}
        title="Confirm Delete"
        onSave={() => {
          if (confirmAction && confirmAction.type === 'delete') {
             deleteBlog(confirmAction.id);
          }
          setConfirmAction(null);
        }}
        saveText="Yes, Delete"
      >
        <p className="text-primary/70 font-medium text-lg">
          Are you sure you want to delete the article 
          <strong className="text-primary font-black uppercase tracking-widest text-sm bg-tan/50 px-2 py-1 rounded inline-block mx-1">
             {confirmAction?.name}
          </strong>? This cannot be undone.
        </p>
      </AdminModal>
    </div>
  );
}
