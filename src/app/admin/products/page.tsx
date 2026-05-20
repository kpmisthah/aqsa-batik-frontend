"use client";

import React, { useRef, useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useProducts } from "@/modules/admin/products/hooks/useProducts";
import AdminHeader from "@/modules/admin/components/AdminHeader";
import AdminModal from "@/modules/admin/components/AdminModal";
import { ProductTable } from "@/modules/admin/products/components/ProductTable";
import ImageCropperModal from "@/modules/admin/components/ImageCropperModal";

export default function AdminProducts() {
  const {
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
  } = useProducts();

  const formRef = useRef<HTMLFormElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [croppingFile, setCroppingFile] = useState<File | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredProducts = productList.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.subCategory && product.subCategory.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Clear files when modal closes or editing product changes
  useEffect(() => {
    if (!isAddModalOpen && !editingProduct) {
      setSelectedFiles([]);
    }
  }, [isAddModalOpen, editingProduct]);

  const handleSave = async () => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);

    // Replace native file input with our state
    formData.delete("imageFiles");
    selectedFiles.forEach((file) => {
      formData.append("imageFiles", file);
    });

    if (editingProduct) {
      await updateProduct(editingProduct.id, formData);
    } else {
      await createProduct(formData);
    }
    closeModals();
    setSelectedFiles([]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Just take the first file selected to crop it
      setCroppingFile(e.target.files[0]);
    }
    e.target.value = ""; // Reset input so same file can be picked again
  };

  const handleCropSave = (croppedFile: File) => {
    setSelectedFiles((prev) => [...prev, croppedFile]);
    setCroppingFile(null);
  };

  const removeFile = (indexToRemove: number) => {
    setSelectedFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleClose = () => {
    closeModals();
    setSelectedFiles([]);
    setCroppingFile(null);
  };

  return (
    <div className="space-y-6">
      <AdminHeader
        title="Products"
        description="Manage your product catalog, categories, and inventory."
        buttonText="Add Product"
        onAddClick={openAddModal}
      />

      {/* Filter & Search */}
      <div className="bg-white p-5 rounded-2xl shadow-lg shadow-[#5A2A1F]/5 border border-[#5A2A1F]/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#5A2A1F]/40" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-11 pr-3 py-3 border border-[#5A2A1F]/20 rounded-xl leading-5 bg-white placeholder-[#5A2A1F]/40 text-[#5A2A1F] font-medium focus:outline-none focus:placeholder-[#5A2A1F]/30 focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] sm:text-sm transition-colors"
            placeholder="Search products..."
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full pl-4 pr-10 py-3 text-base text-[#5A2A1F] font-bold border-[#5A2A1F]/20 focus:outline-none focus:ring-[#FFD700] focus:border-[#FFD700] sm:text-sm rounded-xl border bg-white cursor-pointer"
          >
            <option>All Categories</option>
            <option>Batik Cloth</option>
            <option>Batik Fabric</option>
            <option>Wholesale</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-[#5A2A1F]/20 border-t-[#5A2A1F] rounded-full animate-spin" />
        </div>
      ) : productList.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-[#5A2A1F]/10">
          <p className="text-[#5A2A1F]/50 font-medium text-lg">No products yet. Click &quot;Add Product&quot; to get started.</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-[#5A2A1F]/10">
          <p className="text-[#5A2A1F]/50 font-medium text-lg">No products matched your search or filters.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <ProductTable
            products={filteredProducts}
            onToggleBlock={toggleBlock}
            onEdit={setEditingProduct}
            onDelete={deleteProduct}
          />
          {/* Pagination Controls */}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-between bg-white px-6 py-4 border border-[#5A2A1F]/10 rounded-2xl shadow-sm">
              <span className="text-sm text-[#5A2A1F]/60 font-medium">
                Showing page <span className="font-bold text-[#5A2A1F]">{pagination.page}</span> of <span className="font-bold text-[#5A2A1F]">{pagination.totalPages}</span>
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => fetchProducts(pagination.page - 1, pagination.limit)}
                  disabled={pagination.page === 1}
                  className="px-4 py-2 border border-[#5A2A1F]/20 rounded-xl text-sm font-bold text-[#5A2A1F] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F5F1EC] transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => fetchProducts(pagination.page + 1, pagination.limit)}
                  disabled={pagination.page === pagination.totalPages}
                  className="px-4 py-2 border border-[#5A2A1F]/20 rounded-xl text-sm font-bold text-[#5A2A1F] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F5F1EC] transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <AdminModal
        isOpen={isAddModalOpen || !!editingProduct}
        onClose={handleClose}
        title={editingProduct ? "Edit Product" : "Add New Product"}
        onSave={handleSave}
        saveText={editingProduct ? "Save Changes" : "Create Product"}
        isSaving={isSaving}
      >
        <form ref={formRef} className="space-y-5 max-h-[60vh] overflow-y-auto pr-2">
          {/* Product Name */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Product Name</label>
            <input type="text" name="name" defaultValue={editingProduct?.name || ""} className="w-full border border-[#5A2A1F]/20 rounded-xl p-3 text-[#5A2A1F] focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-medium" placeholder="E.g. White Mustard Batik Suit" required />
          </div>

          {/* Category & Sub Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Category</label>
              <select name="category" defaultValue={editingProduct?.category || "Batik Cloth"} className="w-full border border-[#5A2A1F]/20 rounded-xl p-3 text-[#5A2A1F] focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-medium bg-white">
                <option>Batik Cloth</option>
                <option>Batik Fabric</option>
                <option>Wholesale</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Sub Category</label>
              <input type="text" name="subCategory" defaultValue={editingProduct?.subCategory || ""} className="w-full border border-[#5A2A1F]/20 rounded-xl p-3 text-[#5A2A1F] focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-medium" placeholder="E.g. Cotton Silk" />
            </div>
          </div>

          {/* Images */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Product Images</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-[#5A2A1F]/20 rounded-xl p-3 text-[#5A2A1F] focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-medium file:mr-4 file:py-1 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-[#E8D9C0] file:text-[#5A2A1F] hover:file:bg-[#FFD700] cursor-pointer"
            />

            <div className="flex gap-4 mt-4 flex-wrap">
              {/* Show Existing Images if Editing */}
              {editingProduct?.images && editingProduct.images.length > 0 && selectedFiles.length === 0 && (
                editingProduct.images.map((img, i) => (
                  <div key={`existing-${i}`} className="relative group">
                    <img src={img} alt={`Existing ${i + 1}`} className="w-20 h-20 rounded-xl object-cover border border-[#5A2A1F]/20 shadow-sm" />
                    <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-white text-xs font-bold text-center px-1">Currently Saved</span>
                    </div>
                  </div>
                ))
              )}

              {/* Show New Selected Previews */}
              {selectedFiles.map((file, i) => (
                <div key={`new-${i}`} className="relative group">
                  <img src={URL.createObjectURL(file)} alt={`Preview ${i + 1}`} className="w-20 h-20 rounded-xl object-cover border border-[#5A2A1F]/20 shadow-sm" />
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md hover:bg-red-600 transition-colors"
                  >
                    <X size={14} />
                  </button>
                  {i === 0 && (
                    <div className="absolute -bottom-2 -left-2 bg-[#FFD700] text-[#5A2A1F] text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm border border-[#5A2A1F]/10">
                      Thumbnail
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#5A2A1F]/50 mt-2 font-medium">Click to select more images. The first image will be the main thumbnail.</p>
          </div>

          {/* Colours */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Colours / Variations</label>
            <input type="text" name="colours" defaultValue={editingProduct?.colours?.join(", ") || ""} className="w-full border border-[#5A2A1F]/20 rounded-xl p-3 text-[#5A2A1F] focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-medium" placeholder="E.g. #FFFFFF, #FFD700, #8B3A2B" />
            <p className="text-xs text-[#5A2A1F]/40 mt-1">Enter hex codes or colour names, separated by commas.</p>
          </div>

          {/* Descriptions & SEO */}
          <div className="space-y-4 border-t border-b border-[#5A2A1F]/10 py-4 my-2">
            <h3 className="text-sm font-black uppercase tracking-widest text-[#5A2A1F]">Descriptions & SEO</h3>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Short Fabric Details (Internal/Specs)</label>
              <textarea name="fabricDetails" defaultValue={editingProduct?.fabricDetails || ""} rows={2} className="w-full border border-[#5A2A1F]/20 rounded-xl p-3 text-[#5A2A1F] focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-medium resize-none" placeholder="E.g. Premium cotton silk, 100% breathable..." />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-2">SEO Optimized Product Description (For Customers)</label>
              <textarea name="description" defaultValue={editingProduct?.description || ""} rows={4} className="w-full border border-[#5A2A1F]/20 rounded-xl p-3 text-[#5A2A1F] focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-medium resize-none" placeholder="Paste the long, marketing description here..." />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-2">SEO Title (For Google)</label>
              <input type="text" name="seoTitle" defaultValue={editingProduct?.seoTitle || ""} className="w-full border border-[#5A2A1F]/20 rounded-xl p-3 text-[#5A2A1F] focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-medium" placeholder="E.g. Premium Mustard Yellow Party Wear Batik Suit | Brand" />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Meta Description (For Google)</label>
              <textarea name="metaDescription" defaultValue={editingProduct?.metaDescription || ""} rows={2} className="w-full border border-[#5A2A1F]/20 rounded-xl p-3 text-[#5A2A1F] focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-medium resize-none" placeholder="Shop our premium mustard yellow batik suit for women..." />
            </div>
          </div>

          {/* Quantity & Pricing */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Stock Qty</label>
              <input type="number" name="quantity" defaultValue={editingProduct?.quantity ?? 0} min="0" className="w-full border border-[#5A2A1F]/20 rounded-xl p-3 text-[#5A2A1F] focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-medium" placeholder="0" required />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Full Price (₹)</label>
              <input type="number" name="fullPrice" defaultValue={editingProduct?.fullPrice ?? ""} min="0" step="0.01" className="w-full border border-[#5A2A1F]/20 rounded-xl p-3 text-[#5A2A1F] focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-medium" placeholder="999" required />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Discount (₹)</label>
              <input type="number" name="discountPrice" defaultValue={editingProduct?.discountPrice ?? ""} min="0" step="0.01" className="w-full border border-[#5A2A1F]/20 rounded-xl p-3 text-[#5A2A1F] focus:ring-2 focus:ring-[#FFD700] focus:outline-none font-medium" placeholder="799" required />
            </div>
          </div>

          {/* Flags */}
          <div className="flex gap-6 pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="hidden" name="isBestSeller" value="false" />
              <input type="checkbox" name="isBestSeller" value="true" defaultChecked={editingProduct?.isBestSeller} className="w-5 h-5 rounded text-[#5A2A1F] focus:ring-[#FFD700]" />
              <span className="text-sm font-bold text-[#5A2A1F]">Best Seller</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="hidden" name="isWholesale" value="false" />
              <input type="checkbox" name="isWholesale" value="true" defaultChecked={editingProduct?.isWholesale} className="w-5 h-5 rounded text-[#5A2A1F] focus:ring-[#FFD700]" />
              <span className="text-sm font-bold text-[#5A2A1F]">Wholesale</span>
            </label>
          </div>
        </form>
      </AdminModal>

      {croppingFile && (
        <ImageCropperModal
          imageFile={croppingFile}
          onClose={() => setCroppingFile(null)}
          onCropSave={handleCropSave}
        />
      )}
    </div>
  );
}
