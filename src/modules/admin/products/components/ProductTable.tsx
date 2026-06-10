import React from "react";
import { Edit, Trash2, AlertCircle } from "lucide-react";
import type { AdminProduct } from "../hooks/useProducts";

interface ProductTableProps {
  products: AdminProduct[];
  onToggleBlock: (id: string) => void;
  onEdit: (product: AdminProduct) => void;
  onDelete: (id: string) => void;
}


export function ProductTable({ products, onToggleBlock, onEdit, onDelete }: ProductTableProps) {
  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden md:block bg-white shadow-lg shadow-[#5A2A1F]/5 rounded-2xl border border-[#5A2A1F]/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#5A2A1F]/10">
            <thead className="bg-[#F5F1EC]">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Product</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Category</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Pricing</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Stock</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Status</th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#5A2A1F]/5">
              {products.map((product) => (
                <tr key={product.id} className={`hover:bg-[#F5F1EC]/50 transition-colors ${product.isBlocked ? 'opacity-50 grayscale' : ''}`}>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-14 w-14 flex-shrink-0 relative rounded-xl overflow-hidden bg-[#E8D9C0] border border-[#5A2A1F]/10">
                        {product.images && product.images.length > 0 ? (
                          <img className="h-14 w-14 object-cover object-top" src={product.images[0]} alt={product.name} />
                        ) : (
                          <div className="h-14 w-14 flex items-center justify-center text-[#5A2A1F]/30 text-xs font-bold">No img</div>
                        )}
                      </div>
                      <div className="ml-5">
                        <div className="text-sm font-bold text-[#5A2A1F]">{product.name} {product.isBlocked && "(Blocked)"}</div>
                        <div className="text-xs font-black uppercase tracking-widest text-[#8B3A2B] mt-1">{product.subCategory}</div>
                        {product.colours && product.colours.length > 0 && (
                          <div className="flex gap-1 mt-1.5">
                            {product.colours.slice(0, 5).map((colour, i) => (
                              <span key={i} className="w-4 h-4 rounded-full border border-[#5A2A1F]/20 shadow-inner" style={{ backgroundColor: colour }} title={colour} />
                            ))}
                            {product.colours.length > 5 && (
                              <span className="text-[10px] text-[#5A2A1F]/50 font-bold self-center ml-1">+{product.colours.length - 5}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs font-black uppercase tracking-wider rounded-full bg-[#E8D9C0]/50 text-[#5A2A1F] border border-[#5A2A1F]/10">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#5A2A1F]">₹{product.discountPrice?.toLocaleString()}</span>
                      {product.fullPrice > product.discountPrice && (
                        <span className="text-xs text-[#5A2A1F]/40 line-through">₹{product.fullPrice?.toLocaleString()}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className={`text-sm font-bold ${product.quantity > 10 ? 'text-green-700' : product.quantity > 0 ? 'text-amber-600' : 'text-red-600'}`}>
                      {product.quantity} pcs
                    </span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="flex flex-col gap-2">
                      {product.isBestSeller && (
                        <span className="px-2 py-0.5 inline-flex text-[10px] font-black uppercase tracking-widest rounded-sm bg-[#FFD700] text-[#5A2A1F] w-fit">
                          Best Seller
                        </span>
                      )}
                      {product.isWholesale && (
                        <span className="px-2 py-0.5 inline-flex text-[10px] font-black uppercase tracking-widest rounded-sm bg-[#5A2A1F] text-white w-fit">
                          Wholesale
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-4">
                      <button 
                        onClick={() => onToggleBlock(product.id)}
                        title={product.isBlocked ? "Unblock" : "Block"}
                        className={`${product.isBlocked ? 'text-green-600 hover:text-green-800' : 'text-[#8B3A2B] hover:text-red-700'} transition-colors`}
                      >
                        <AlertCircle className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => onEdit(product)}
                        className="text-[#5A2A1F]/40 hover:text-[#FFD700] transition-colors"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => onDelete(product.id)}
                        className="text-[#5A2A1F]/40 hover:text-red-600 transition-colors"
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

      {/* Mobile Card Grid View */}
      <div className="block md:hidden space-y-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            className={`bg-white shadow-md shadow-[#5A2A1F]/5 rounded-2xl border border-[#5A2A1F]/10 p-5 space-y-4 transition-all ${
              product.isBlocked ? 'opacity-70 grayscale' : ''
            }`}
          >
            {/* Top Row: Image, Name, Subcategory */}
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 flex-shrink-0 relative rounded-xl overflow-hidden bg-[#E8D9C0] border border-[#5A2A1F]/10">
                {product.images && product.images.length > 0 ? (
                  <img className="h-16 w-16 object-cover object-top" src={product.images[0]} alt={product.name} />
                ) : (
                  <div className="h-16 w-16 flex items-center justify-center text-[#5A2A1F]/30 text-xs font-bold">No img</div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-[#5A2A1F] truncate">{product.name} {product.isBlocked && "(Blocked)"}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mt-0.5">{product.subCategory}</div>
                
                {product.colours && product.colours.length > 0 && (
                  <div className="flex gap-1 mt-1.5">
                    {product.colours.slice(0, 5).map((colour, i) => (
                      <span key={i} className="w-3.5 h-3.5 rounded-full border border-[#5A2A1F]/20 shadow-inner" style={{ backgroundColor: colour }} title={colour} />
                    ))}
                    {product.colours.length > 5 && (
                      <span className="text-[9px] text-[#5A2A1F]/50 font-bold self-center ml-1">+{product.colours.length - 5}</span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Mid Grid Details: Category, Price, Stock & Badges */}
            <div className="grid grid-cols-2 gap-4 border-t border-[#5A2A1F]/5 pt-3">
              <div>
                <span className="block text-[10px] font-black tracking-widest text-[#8B3A2B] uppercase">Category</span>
                <span className="px-2 py-0.5 inline-flex text-[10px] font-black uppercase tracking-wider rounded bg-[#E8D9C0]/50 text-[#5A2A1F] border border-[#5A2A1F]/10 mt-0.5">
                  {product.category}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-black tracking-widest text-[#8B3A2B] uppercase">Pricing</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-sm font-bold text-[#5A2A1F]">₹{product.discountPrice?.toLocaleString()}</span>
                  {product.fullPrice > product.discountPrice && (
                    <span className="text-xs text-[#5A2A1F]/40 line-through">₹{product.fullPrice?.toLocaleString()}</span>
                  )}
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-black tracking-widest text-[#8B3A2B] uppercase">Stock</span>
                <span className={`text-xs font-bold ${product.quantity > 10 ? 'text-green-700' : product.quantity > 0 ? 'text-amber-600' : 'text-red-600'}`}>
                  {product.quantity} pcs
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-black tracking-widest text-[#8B3A2B] uppercase">Badges</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {product.isBestSeller && (
                    <span className="px-1.5 py-0.5 inline-flex text-[8px] font-black uppercase tracking-widest rounded-sm bg-[#FFD700] text-[#5A2A1F]">
                      Best Seller
                    </span>
                  )}
                  {product.isWholesale && (
                    <span className="px-1.5 py-0.5 inline-flex text-[8px] font-black uppercase tracking-widest rounded-sm bg-[#5A2A1F] text-white">
                      Wholesale
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Row Actions */}
            <div className="border-t border-[#5A2A1F]/5 pt-3 flex items-center justify-end space-x-6">
              <button 
                onClick={() => onToggleBlock(product.id)}
                title={product.isBlocked ? "Unblock" : "Block"}
                className={`flex items-center gap-1 text-xs font-bold ${product.isBlocked ? 'text-green-600 hover:text-green-800' : 'text-[#8B3A2B] hover:text-red-700'} transition-colors`}
              >
                <AlertCircle className="w-4 h-4" />
                <span>{product.isBlocked ? "Unblock" : "Block"}</span>
              </button>
              <button 
                onClick={() => onEdit(product)}
                className="flex items-center gap-1 text-xs font-bold text-[#5A2A1F]/60 hover:text-[#FFD700] transition-colors"
              >
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
              <button 
                onClick={() => onDelete(product.id)}
                className="flex items-center gap-1 text-xs font-bold text-[#5A2A1F]/60 hover:text-red-600 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
