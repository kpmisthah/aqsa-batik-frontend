import React from "react";
import { Edit, Ban, CheckCircle2 } from "lucide-react";
import type { AdminProduct } from "../hooks/useProducts";

interface ProductTableProps {
  products: AdminProduct[];
  onToggleBlock: (id: string) => void;
  onEdit: (product: AdminProduct) => void;
}

export function ProductTable({ products, onToggleBlock, onEdit }: ProductTableProps) {
  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden md:block bg-white shadow-lg shadow-primary/5 rounded-2xl border border-primary/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-primary/10">
            <thead className="bg-cream">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-secondary uppercase tracking-widest">Product</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-secondary uppercase tracking-widest">Category</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-secondary uppercase tracking-widest">Pricing</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-secondary uppercase tracking-widest">Stock</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-secondary uppercase tracking-widest">Status</th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-black text-secondary uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-primary/5">
              {products.map((product) => (
                <tr key={product.id} className={`hover:bg-cream/50 transition-colors ${product.isBlocked ? 'opacity-50 grayscale' : ''}`}>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-14 w-14 flex-shrink-0 relative rounded-xl overflow-hidden bg-tan border border-primary/10">
                        {product.images && product.images.length > 0 ? (
                          <img className="h-14 w-14 object-cover object-top" src={product.images[0]} alt={product.name} />
                        ) : (
                          <div className="h-14 w-14 flex items-center justify-center text-primary/30 text-xs font-bold">No img</div>
                        )}
                      </div>
                      <div className="ml-5">
                        <div className="text-sm font-bold text-primary">{product.name} {product.isBlocked && "(Blocked)"}</div>
                        <div className="text-xs font-black uppercase tracking-widest text-secondary mt-1">{product.subCategory}</div>
                        {product.colours && product.colours.length > 0 && (
                          <div className="flex gap-1 mt-1.5">
                            {product.colours.slice(0, 5).map((colour, i) => (
                              <span key={i} className="w-4 h-4 rounded-full border border-primary/20 shadow-inner" style={{ backgroundColor: colour }} title={colour} />
                            ))}
                            {product.colours.length > 5 && (
                              <span className="text-[10px] text-primary/50 font-bold self-center ml-1">+{product.colours.length - 5}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs font-black uppercase tracking-wider rounded-full bg-tan/50 text-primary border border-primary/10">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-primary">₹{product.discountPrice?.toLocaleString()}</span>
                      {product.fullPrice > product.discountPrice && (
                        <span className="text-xs text-primary/40 line-through">₹{product.fullPrice?.toLocaleString()}</span>
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
                      <span className={`px-2 py-0.5 inline-flex text-[10px] font-black uppercase tracking-widest rounded-sm w-fit ${product.isBlocked ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {product.isBlocked ? 'Blocked' : 'Active'}
                      </span>
                      {product.isBestSeller && (
                        <span className="px-2 py-0.5 inline-flex text-[10px] font-black uppercase tracking-widest rounded-sm bg-accent text-primary w-fit">
                          Best Seller
                        </span>
                      )}
                      {product.isWholesale && (
                        <span className="px-2 py-0.5 inline-flex text-[10px] font-black uppercase tracking-widest rounded-sm bg-primary text-white w-fit">
                          Wholesale
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-4">
                      <button 
                        onClick={() => onEdit(product)}
                        className="text-primary/40 hover:text-accent transition-colors"
                        title="Edit Product"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => onToggleBlock(product.id)}
                        className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors border ${product.isBlocked ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100' : 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100'}`}
                      >
                        {product.isBlocked ? "Unblock" : "Block"}
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
            className={`bg-white shadow-md shadow-primary/5 rounded-2xl border border-primary/10 p-5 space-y-4 transition-all ${
              product.isBlocked ? 'opacity-70 grayscale' : ''
            }`}
          >
            {/* Top Row: Image, Name, Subcategory */}
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 flex-shrink-0 relative rounded-xl overflow-hidden bg-tan border border-primary/10">
                {product.images && product.images.length > 0 ? (
                  <img className="h-16 w-16 object-cover object-top" src={product.images[0]} alt={product.name} />
                ) : (
                  <div className="h-16 w-16 flex items-center justify-center text-primary/30 text-xs font-bold">No img</div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-primary truncate">{product.name} {product.isBlocked && "(Blocked)"}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-secondary mt-0.5">{product.subCategory}</div>
                
                {product.colours && product.colours.length > 0 && (
                  <div className="flex gap-1 mt-1.5">
                    {product.colours.slice(0, 5).map((colour, i) => (
                      <span key={i} className="w-3.5 h-3.5 rounded-full border border-primary/20 shadow-inner" style={{ backgroundColor: colour }} title={colour} />
                    ))}
                    {product.colours.length > 5 && (
                      <span className="text-[9px] text-primary/50 font-bold self-center ml-1">+{product.colours.length - 5}</span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Mid Grid Details: Category, Price, Stock & Badges */}
            <div className="grid grid-cols-2 gap-4 border-t border-primary/5 pt-3">
              <div>
                <span className="block text-[10px] font-black tracking-widest text-secondary uppercase">Category</span>
                <span className="px-2 py-0.5 inline-flex text-[10px] font-black uppercase tracking-wider rounded bg-tan/50 text-primary border border-primary/10 mt-0.5">
                  {product.category}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-black tracking-widest text-secondary uppercase">Pricing</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-sm font-bold text-primary">₹{product.discountPrice?.toLocaleString()}</span>
                  {product.fullPrice > product.discountPrice && (
                    <span className="text-xs text-primary/40 line-through">₹{product.fullPrice?.toLocaleString()}</span>
                  )}
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-black tracking-widest text-secondary uppercase">Stock</span>
                <span className={`text-xs font-bold ${product.quantity > 10 ? 'text-green-700' : product.quantity > 0 ? 'text-amber-600' : 'text-red-600'}`}>
                  {product.quantity} pcs
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-black tracking-widest text-secondary uppercase">Status / Badges</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className={`px-1.5 py-0.5 inline-flex text-[8px] font-black uppercase tracking-widest rounded-sm ${product.isBlocked ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {product.isBlocked ? 'Blocked' : 'Active'}
                  </span>
                  {product.isBestSeller && (
                    <span className="px-1.5 py-0.5 inline-flex text-[8px] font-black uppercase tracking-widest rounded-sm bg-accent text-primary">
                      Best Seller
                    </span>
                  )}
                  {product.isWholesale && (
                    <span className="px-1.5 py-0.5 inline-flex text-[8px] font-black uppercase tracking-widest rounded-sm bg-primary text-white">
                      Wholesale
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Row Actions */}
            <div className="border-t border-primary/5 pt-3 flex items-center justify-end space-x-6">
              <button 
                onClick={() => onEdit(product)}
                className="flex items-center gap-1 text-xs font-bold text-primary/80 hover:text-accent transition-colors"
              >
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
              <button 
                onClick={() => onToggleBlock(product.id)}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors border ${product.isBlocked ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100' : 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100'}`}
              >
                {product.isBlocked ? "Unblock" : "Block"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
