"use client";

import React, { useState, useEffect } from "react";
import { Search, Save, AlertTriangle, Check, X } from "lucide-react";
import { useProducts } from "@/modules/admin/products/hooks/useProducts";
import Link from "next/link";

export default function AdminInventory() {
  const {
    productList,
    pagination,
    fetchProducts,
    loading,
    isSaving,
    bulkUpdateInventory,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
  } = useProducts();

  const [edits, setEdits] = useState<{ [id: string]: number }>({});
  const [successMessage, setSuccessMessage] = useState("");

  // When changing pages/categories, we fetch with larger limit (e.g. 50) for inventory
  useEffect(() => {
    fetchProducts(1, 50, selectedCategory, searchTerm);
  }, [fetchProducts, selectedCategory, searchTerm]);

  // If products change (fetch finish), reset edits
  useEffect(() => {
    setEdits({});
  }, [productList]);

  const handleQuantityChange = (id: string, newQty: string) => {
    const qty = parseInt(newQty);
    if (isNaN(qty) || qty < 0) {
      if (newQty === "") {
        setEdits((prev) => ({ ...prev, [id]: 0 }));
      }
      return;
    }
    setEdits((prev) => ({ ...prev, [id]: qty }));
  };

  const handleApproveSingle = async (id: string) => {
    const quantity = edits[id];
    if (quantity === undefined) return;
    try {
      await bulkUpdateInventory([{ id, quantity }]);
      setEdits((prev) => {
        const newEdits = { ...prev };
        delete newEdits[id];
        return newEdits;
      });
      setSuccessMessage("Stock updated!");
      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancelSingle = (id: string) => {
    setEdits((prev) => {
      const newEdits = { ...prev };
      delete newEdits[id];
      return newEdits;
    });
  };


  const handleSave = async () => {
    const updates = Object.entries(edits).map(([id, quantity]) => ({ id, quantity }));
    if (updates.length === 0) return;

    try {
      await bulkUpdateInventory(updates);
      setEdits({});
      setSuccessMessage("Inventory updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  const hasEdits = Object.keys(edits).length > 0;
  const lowStockCount = productList.filter((p) => p.quantity < 10).length;

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-primary/10">
        <div>
          <h1 className="text-2xl font-black font-heading text-primary">Inventory Management</h1>
          <p className="text-sm text-primary/60 mt-1 font-medium">Bulk edit product stock quantities.</p>
        </div>
        <div className="flex gap-3 relative shrink-0">
          <button
            onClick={handleSave}
            disabled={!hasEdits || isSaving}
            className={`flex items-center justify-center px-6 py-2 rounded-xl font-bold shadow-md transition-all whitespace-nowrap text-sm ${
              hasEdits
                ? "bg-primary text-white hover:bg-primary/90 hover:shadow-lg active:scale-95"
                : "bg-primary/10 text-primary/40 cursor-not-allowed"
            }`}
          >
            <Save className="w-4 h-4 mr-2" />
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {successMessage && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl font-medium text-sm flex items-center shadow-sm">
           {successMessage}
        </div>
      )}

      {/* Stats row */}
      {lowStockCount > 0 && (
         <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-center justify-between shadow-sm">
            <div className="flex items-center text-red-700">
               <AlertTriangle className="w-5 h-5 mr-3" />
               <span className="font-bold text-sm">Action Needed: {lowStockCount} items are running low on stock (under 10 psc).</span>
            </div>
         </div>
      )}

      {/* Filter & Search */}
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
            placeholder="Search inventory..."
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full pl-4 pr-10 py-3 text-base text-primary font-bold border-primary/20 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm rounded-xl border bg-white cursor-pointer"
          >
            <option>All Categories</option>
            <option>Batik Prints Women Clothing</option>
            <option>Batik Cotton Dress for Women</option>
            <option>Wholesale</option>
          </select>
        </div>
      </div>

      {loading && productList.length === 0 ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      ) : productList.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-primary/10">
          <p className="text-primary/50 font-medium text-lg">
            No products found in inventory.
          </p>
        </div>
      ) : (
        <div className="bg-white shadow-lg shadow-primary/5 rounded-2xl border border-primary/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-primary/10">
              <thead className="bg-cream">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-black text-secondary uppercase tracking-widest w-2/5">Product Name</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-black text-secondary uppercase tracking-widest w-1/5">Category</th>
                  <th scope="col" className="px-6 py-4 text-center text-xs font-black text-secondary uppercase tracking-widest w-1/5">Stock Status</th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-black text-secondary uppercase tracking-widest w-1/5">Quantity</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-primary/5">
                {productList.map((product) => {
                  const currentQty = edits[product.id] !== undefined ? edits[product.id] : product.quantity;
                  const isLowStock = currentQty < 10;
                  const isOutOfStock = currentQty === 0;
                  const isEdited = edits[product.id] !== undefined && edits[product.id] !== product.quantity;

                  return (
                    <tr key={product.id} className={`hover:bg-cream/50 transition-colors ${product.isBlocked ? 'opacity-50 grayscale' : ''}`}>
                      <td className="px-6 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-12 w-12 flex-shrink-0 relative rounded-lg overflow-hidden bg-tan border border-primary/10">
                            {product.images && product.images.length > 0 ? (
                              <img className="h-12 w-12 object-cover object-top" src={product.images[0]} alt={product.name} />
                            ) : (
                              <div className="h-12 w-12 flex items-center justify-center text-primary/30 text-[10px] font-bold">No img</div>
                            )}
                          </div>
                          <div className="ml-4 truncate max-w-[200px] sm:max-w-xs block">
                            <div className="text-sm font-bold text-primary truncate" title={product.name}>{product.name} {product.isBlocked && "(Blocked)"}</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-secondary mt-0.5">{product.subCategory || 'No Sub'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap">
                        <span className="text-xs font-bold text-primary max-w-xs">{product.category}</span>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <span className={`px-2.5 py-1 inline-flex text-[10px] font-black uppercase tracking-widest rounded-md ${
                          isOutOfStock ? 'bg-red-100 text-red-700' : isLowStock ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
                        }`}>
                          {isOutOfStock ? 'Out of Stock' : isLowStock ? 'Low Stock' : 'In Stock'}
                        </span>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end">
                          <div className={`relative flex items-center border rounded-xl overflow-hidden transition-all ${isEdited ? 'border-primary ring-4 ring-primary/5 bg-white shadow-sm' : 'border-primary/20 bg-white hover:border-primary/40'}`}>
                            <input
                              type="number"
                              min="0"
                              value={currentQty}
                              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                              className="w-24 p-2.5 text-right font-bold text-primary text-sm focus:outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                            {isEdited && (
                              <div className="flex items-center border-l border-primary/10 bg-cream/30">
                                <button
                                  onClick={() => handleApproveSingle(product.id)}
                                  className="p-2.5 text-green-600/60 hover:text-green-700 hover:bg-green-50 transition-all active:scale-95"
                                  title="Save Change"
                                  disabled={isSaving}
                                >
                                  <Check className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleCancelSingle(product.id)}
                                  className="p-2.5 text-red-500/60 hover:text-red-600 hover:bg-red-50 transition-all active:scale-95 border-l border-primary/10"
                                  title="Discard Change"
                                  disabled={isSaving}
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Controls */}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-between bg-white px-6 py-4 border-t border-primary/10">
              <span className="text-sm text-primary/80 font-medium">
                Showing page <span className="font-bold text-primary">{pagination.page}</span> of <span className="font-bold text-primary">{pagination.totalPages}</span>
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => fetchProducts(pagination.page - 1, 50, selectedCategory, searchTerm)}
                  disabled={pagination.page === 1 || isSaving}
                  className="px-4 py-2 border border-primary/20 rounded-xl text-sm font-bold text-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cream transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => fetchProducts(pagination.page + 1, 50, selectedCategory, searchTerm)}
                  disabled={pagination.page === pagination.totalPages || isSaving}
                  className="px-4 py-2 border border-primary/20 rounded-xl text-sm font-bold text-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cream transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
