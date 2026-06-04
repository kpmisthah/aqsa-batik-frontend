"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Search, Eye, Check, Loader2, Filter, Calendar, DollarSign, MapPin, Phone, User, ShoppingBag } from "lucide-react";
import AdminHeader from "@/modules/admin/components/AdminHeader";
import { getColorName } from "@/utils/colorHelper";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  variantColour?: string;
}

interface ShippingAddress {
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}

interface Order {
  _id: string;
  id?: string;
  user: {
    _id?: string;
    name?: string;
    email?: string;
  } | string | any;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: "Razorpay" | "COD";
  paymentStatus: "Paid" | "Pending" | "Failed";
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled" | "Returned";
  shippingAddress: ShippingAddress;
  createdAt: string;
  cancelReason?: string;
  returnReason?: string;
  returnStatus?: "None" | "Pending" | "Approved" | "Rejected";
}

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  
  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [paymentFilter, setPaymentFilter] = useState("All");

  // Debounce search input for high-speed typing responsiveness
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setCurrentPage(1);
    }, 350);
    return () => clearTimeout(timer);
  }, [searchTerm]);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Details Modal state
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // Success/Error Toast notification
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/orders`, {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to fetch store orders");
      const data = await res.json();
      setOrders(data);
    } catch (error: any) {
      console.error(error);
      showToast(error.message || "Failed to load orders.", "error");
    } finally {
      setLoading(false);
    }
  }, [API_BASE]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  // Handle status update
  const handleUpdateStatus = async (
    orderId: string,
    updates: {
      status?: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
      paymentStatus?: "Paid" | "Pending" | "Failed";
    }
  ) => {
    setUpdatingId(orderId);
    try {
      const res = await fetch(`${API_BASE}/orders/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to update order status");
      
      const resData = await res.json();
      
      // Update local state dynamically
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          (order._id === orderId || order.id === orderId) ? { ...order, ...updates } : order
        )
      );

      if (selectedOrder && (selectedOrder._id === orderId || selectedOrder.id === orderId)) {
        setSelectedOrder((prev) => prev ? { ...prev, ...updates } : null);
      }

      showToast("Order status updated successfully!", "success");
    } catch (error: any) {
      console.error(error);
      showToast(error.message || "Failed to update order status.", "error");
    } finally {
      setUpdatingId(null);
    }
  };

  // Handle Return Verification Auditing (Approve / Reject)
  const handleVerifyReturn = async (orderId: string, action: "Approve" | "Reject") => {
    setUpdatingId(orderId);
    try {
      const res = await fetch(`${API_BASE}/orders/${orderId}/verify-return`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
        credentials: "include",
      });

      if (!res.ok) throw new Error(`Failed to ${action.toLowerCase()} return request.`);
      
      const resData = await res.json();
      
      // Update local orders list state
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          (order._id === orderId || order.id === orderId) 
            ? { 
                ...order, 
                returnStatus: action === "Approve" ? "Approved" : "Rejected",
                status: action === "Approve" ? "Returned" : order.status
              } as Order
            : order
        )
      );

      // Update selected modal order state
      setSelectedOrder((prev) => 
        prev ? { 
          ...prev, 
          returnStatus: action === "Approve" ? "Approved" : "Rejected",
          status: action === "Approve" ? "Returned" : prev.status
        } as Order : null
      );

      showToast(`Return request ${action.toLowerCase()}d successfully!`, "success");
    } catch (error: any) {
      console.error(error);
      showToast(error.message || "Failed to verify return request.", "error");
    } finally {
      setUpdatingId(null);
    }
  };

  // Filter logic
  const filteredOrders = orders.filter((order) => {
    const orderIdStr = (order._id || order.id || "").toLowerCase();
    
    // Determine customer name if populated as object vs simple string
    let customerName = "Guest Customer";
    if (order.user) {
      if (typeof order.user === "object" && order.user.name) {
        customerName = order.user.name;
      } else if (typeof order.user === "string") {
        customerName = order.user;
      }
    }
    
    const matchesSearch = 
      orderIdStr.includes(debouncedSearchTerm.toLowerCase()) || 
      customerName.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      (order.shippingAddress?.phone || "").includes(debouncedSearchTerm);

    const matchesStatus = statusFilter === "All" || order.status === statusFilter;
    const matchesPayment = paymentFilter === "All" || order.paymentStatus === paymentFilter;

    return matchesSearch && matchesStatus && matchesPayment;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Formatting date
  const formatDate = (isoString?: string) => {
    if (!isoString) return "Never";
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return isoString;
    }
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-24 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border transition-all duration-300 text-sm font-bold ${
          toast.type === "success" 
            ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
            : "bg-red-50 border-red-200 text-red-800"
        }`}>
          <span className={`w-2.5 h-2.5 rounded-full ${toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'} ${toast.type === 'success' ? 'animate-ping' : ''}`} />
          <span>{toast.message}</span>
        </div>
      )}

      <AdminHeader
        title="Store Orders"
        description="Fulfill orders, track shipping logistics, and update payment capture states."
      />

      {/* Advanced Filters */}
      <div className="bg-white p-5 rounded-2xl shadow-lg shadow-[#5A2A1F]/5 border border-[#5A2A1F]/10 flex flex-col md:flex-row gap-4 items-center justify-between font-sans">
        <div className="relative w-full md:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#5A2A1F]/40" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="block w-full pl-11 pr-3 py-3 border border-[#5A2A1F]/20 rounded-xl bg-white text-[#5A2A1F] placeholder-[#5A2A1F]/40 font-medium focus:outline-none focus:ring-2 focus:ring-[#FFD700] sm:text-sm transition-all"
            placeholder="Search Order ID, customer, phone..."
          />
        </div>

        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <div className="flex-1 md:flex-none">
            <label className="block text-[9px] font-black uppercase tracking-wider text-[#8B3A2B] mb-1">Order Status</label>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="block w-full pl-3 pr-10 py-2.5 text-xs text-[#5A2A1F] font-bold border-[#5A2A1F]/20 focus:outline-none focus:ring-[#FFD700] sm:text-xs rounded-xl border bg-white cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div className="flex-1 md:flex-none">
            <label className="block text-[9px] font-black uppercase tracking-wider text-[#8B3A2B] mb-1">Payment Status</label>
            <select
              value={paymentFilter}
              onChange={(e) => {
                setPaymentFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="block w-full pl-3 pr-10 py-2.5 text-xs text-[#5A2A1F] font-bold border-[#5A2A1F]/20 focus:outline-none focus:ring-[#FFD700] sm:text-xs rounded-xl border bg-white cursor-pointer"
            >
              <option value="All">All Payments</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders List Table */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-[#5A2A1F]/10">
          <Loader2 className="animate-spin text-[#5A2A1F] mb-2" size={32} />
          <p className="text-sm text-[#5A2A1F]/60 font-bold uppercase tracking-wider">Loading Orders Data...</p>
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-[#5A2A1F]/10 font-sans">
          <p className="text-[#5A2A1F]/50 font-medium text-lg">No orders match the selected search filters.</p>
        </div>
      ) : (
        <div className="space-y-4 font-sans">
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white shadow-lg shadow-[#5A2A1F]/5 rounded-2xl border border-[#5A2A1F]/10 overflow-hidden w-full max-w-full">
            <div className="overflow-x-auto w-full">
              <table className="min-w-full divide-y divide-[#5A2A1F]/10">
                <thead className="bg-[#F5F1EC]">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Order ID</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Date</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Customer</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Payment</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Status</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Total</th>
                    <th scope="col" className="px-6 py-4 text-right text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#5A2A1F]/5">
                  {currentOrders.map((order) => {
                    const orderId = order._id || order.id || "";
                    let customerName = "Guest Customer";
                    let customerEmail = "";
                    
                    if (order.user) {
                      if (typeof order.user === "object") {
                        customerName = order.user.name || "Guest Customer";
                        customerEmail = order.user.email || "";
                      } else {
                        customerName = "User ID: " + order.user.substring(18);
                      }
                    }

                    return (
                      <tr key={orderId} className="hover:bg-[#F5F1EC]/30 transition-colors">
                        {/* Order ID */}
                        <td className="px-6 py-5 whitespace-nowrap text-sm font-bold text-[#5A2A1F]">
                          #{orderId.substring(18).toUpperCase()}
                        </td>

                        {/* Date */}
                        <td className="px-6 py-5 whitespace-nowrap text-xs text-[#5A2A1F]/70 font-medium">
                          {formatDate(order.createdAt)}
                        </td>

                        {/* Customer */}
                        <td className="px-6 py-5 whitespace-nowrap text-sm text-[#5A2A1F]">
                          <div className="font-bold">{customerName}</div>
                          {customerEmail && <div className="text-[10px] text-[#5A2A1F]/50">{customerEmail}</div>}
                        </td>

                        {/* Payment Status Dropdown */}
                        <td className="px-6 py-5 whitespace-nowrap">
                          <select
                            value={order.paymentStatus}
                            onChange={(e) => handleUpdateStatus(orderId, { paymentStatus: e.target.value as any })}
                            disabled={updatingId === orderId}
                            className={`text-xs font-black uppercase tracking-wider rounded-lg px-2.5 py-1 border cursor-pointer focus:outline-none ${
                              order.paymentStatus === "Paid"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : order.paymentStatus === "Pending"
                                ? "bg-amber-50 text-amber-700 border-amber-200"
                                : "bg-rose-50 text-rose-700 border-rose-200"
                            }`}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Paid">Paid</option>
                            <option value="Failed">Failed</option>
                          </select>
                        </td>

                        {/* Order Status Dropdown */}
                        <td className="px-6 py-5 whitespace-nowrap">
                          <select
                            value={order.status}
                            onChange={(e) => handleUpdateStatus(orderId, { status: e.target.value as any })}
                            disabled={updatingId === orderId}
                            className={`text-xs font-black uppercase tracking-wider rounded-lg px-2.5 py-1 border cursor-pointer focus:outline-none ${
                              order.status === "Delivered"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : order.status === "Pending"
                                ? "bg-amber-50 text-amber-700 border-amber-200"
                                : order.status === "Processing"
                                ? "bg-sky-50 text-sky-700 border-sky-200"
                                : order.status === "Shipped"
                                ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                                : order.status === "Returned"
                                ? "bg-purple-50 text-purple-700 border-purple-200"
                                : "bg-[#8B3A2B]/10 text-[#8B3A2B] border-[#8B3A2B]/20"
                            }`}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="Returned">Returned</option>
                          </select>
                        </td>

                        {/* Total Price */}
                        <td className="px-6 py-5 whitespace-nowrap text-sm font-black text-[#5A2A1F]">
                          ₹{order.totalAmount.toLocaleString()}
                          <span className="block text-[8px] font-black tracking-widest text-[#8B3A2B] uppercase mt-0.5">{order.paymentMethod}</span>
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-5 whitespace-nowrap text-right text-xs">
                          <button
                            type="button"
                            onClick={() => setSelectedOrder(order)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#5A2A1F] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
                          >
                            <Eye size={12} />
                            <span>Invoice</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card Grid View */}
          <div className="block md:hidden space-y-4">
            {currentOrders.map((order) => {
              const orderId = order._id || order.id || "";
              let customerName = "Guest Customer";
              let customerEmail = "";
              
              if (order.user) {
                if (typeof order.user === "object") {
                  customerName = order.user.name || "Guest Customer";
                  customerEmail = order.user.email || "";
                } else {
                  customerName = "User ID: " + order.user.substring(18);
                }
              }

              return (
                <div 
                  key={orderId} 
                  className="bg-white shadow-md shadow-[#5A2A1F]/5 rounded-2xl border border-[#5A2A1F]/10 p-5 space-y-4 transition-colors"
                >
                  {/* Top Row: Order ID & Date */}
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-[#8B3A2B] uppercase">Order ID</span>
                      <span className="block text-sm font-bold text-[#5A2A1F]">#{orderId.substring(18).toUpperCase()}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] font-black tracking-widest text-[#8B3A2B] uppercase">Date</span>
                      <span className="block text-xs text-[#5A2A1F]/70 font-medium">{formatDate(order.createdAt)}</span>
                    </div>
                  </div>

                  {/* Mid Grid Details: Customer info & Total Amount */}
                  <div className="grid grid-cols-2 gap-4 border-t border-[#5A2A1F]/5 pt-3">
                    <div className="min-w-0">
                      <span className="block text-[10px] font-black tracking-widest text-[#8B3A2B] uppercase">Customer</span>
                      <span className="block text-sm font-bold text-[#5A2A1F] truncate">{customerName}</span>
                      {customerEmail && <span className="block text-[10px] text-[#5A2A1F]/50 truncate">{customerEmail}</span>}
                    </div>
                    <div>
                      <span className="block text-[10px] font-black tracking-widest text-[#8B3A2B] uppercase">Total</span>
                      <div className="text-sm font-black text-[#5A2A1F]">
                        ₹{order.totalAmount.toLocaleString()}
                        <span className="block text-[8px] font-black tracking-widest text-[#8B3A2B] uppercase mt-0.5">{order.paymentMethod}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status Dropdowns */}
                  <div className="grid grid-cols-2 gap-4 border-t border-[#5A2A1F]/5 pt-3">
                    <div>
                      <span className="block text-[10px] font-black tracking-widest text-[#8B3A2B] uppercase mb-1">Payment</span>
                      <select
                        value={order.paymentStatus}
                        onChange={(e) => handleUpdateStatus(orderId, { paymentStatus: e.target.value as any })}
                        disabled={updatingId === orderId}
                        className={`w-full text-xs font-black uppercase tracking-wider rounded-lg px-2.5 py-1.5 border cursor-pointer focus:outline-none ${
                          order.paymentStatus === "Paid"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : order.paymentStatus === "Pending"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-rose-50 text-rose-700 border-rose-200"
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Paid">Paid</option>
                        <option value="Failed">Failed</option>
                      </select>
                    </div>
                    <div>
                      <span className="block text-[10px] font-black tracking-widest text-[#8B3A2B] uppercase mb-1">Status</span>
                      <select
                        value={order.status}
                        onChange={(e) => handleUpdateStatus(orderId, { status: e.target.value as any })}
                        disabled={updatingId === orderId}
                        className={`w-full text-xs font-black uppercase tracking-wider rounded-lg px-2.5 py-1.5 border cursor-pointer focus:outline-none ${
                          order.status === "Delivered"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : order.status === "Pending"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : order.status === "Processing"
                            ? "bg-sky-50 text-sky-700 border-sky-200"
                            : order.status === "Shipped"
                            ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                            : order.status === "Returned"
                            ? "bg-purple-50 text-purple-700 border-purple-200"
                            : "bg-[#8B3A2B]/10 text-[#8B3A2B] border-[#8B3A2B]/20"
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Returned">Returned</option>
                      </select>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="border-t border-[#5A2A1F]/5 pt-3 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => setSelectedOrder(order)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#5A2A1F] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
                    >
                      <Eye size={12} />
                      <span>Invoice</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Premium Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between gap-4 px-6 py-5 bg-[#FAF6F0]/20 border-t border-[#5A2A1F]/10">
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-[#5A2A1F]/15 rounded-xl text-xs font-bold uppercase tracking-wider text-[#5A2A1F] hover:bg-[#FAF6F0] transition-colors disabled:opacity-40"
              >
                Previous
              </button>
              <span className="text-xs font-bold text-[#5A2A1F]/70 tracking-widest uppercase">
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-[#5A2A1F]/15 rounded-xl text-xs font-bold uppercase tracking-wider text-[#5A2A1F] hover:bg-[#FAF6F0] transition-colors disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {/* Invoice Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-[#5A2A1F]/40 backdrop-blur-sm flex items-center justify-center z-[150] p-4 animate-in fade-in duration-300">
          <div className="bg-[#FAF6F0] rounded-[32px] border border-[#5A2A1F]/10 p-6 md:p-8 max-w-2xl w-full shadow-2xl relative animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh] overflow-y-auto font-sans">
            
            {/* Design Corner Borders */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#8B3A2B]/30 rounded-tl-[32px]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#8B3A2B]/30 rounded-tr-[32px]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#8B3A2B]/30 rounded-bl-[32px]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#8B3A2B]/30 rounded-br-[32px]" />

            {/* Modal Header */}
            <div className="flex justify-between items-start border-b border-[#5A2A1F]/10 pb-4 mb-6">
              <div>
                <span className="text-[9px] font-black tracking-widest text-[#8B3A2B] uppercase">ORDER INVOICE</span>
                <h3 className="font-playfair text-2xl font-black text-[#5A2A1F] mt-1">
                  #{ (selectedOrder._id || selectedOrder.id || "").substring(18).toUpperCase() }
                </h3>
                <p className="text-xs text-[#5A2A1F]/50 mt-0.5 font-medium">Placed on {formatDate(selectedOrder.createdAt)}</p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-xs font-black uppercase tracking-wider text-[#8B3A2B] hover:text-[#5A2A1F] transition-colors"
              >
                Close Window
              </button>
            </div>

            {/* Customer & Address Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2.5">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#8B3A2B]">Customer Profile</h4>
                <div className="flex items-center gap-2 text-xs font-bold text-[#5A2A1F]">
                  <User size={14} className="text-[#8B3A2B]" />
                  <span>
                    { typeof selectedOrder.user === "object" 
                      ? selectedOrder.user.name 
                      : "Guest (" + selectedOrder.user?.substring(18) + ")" 
                    }
                  </span>
                </div>
                { typeof selectedOrder.user === "object" && selectedOrder.user.email && (
                  <div className="text-xs text-[#5A2A1F]/70 font-medium pl-6">
                    {selectedOrder.user.email}
                  </div>
                )}
              </div>

              <div className="space-y-2.5">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#8B3A2B]">Shipping Logistics</h4>
                <div className="flex items-center gap-2 text-xs font-bold text-[#5A2A1F]">
                  <MapPin size={14} className="text-[#8B3A2B]" />
                  <span>
                    {selectedOrder.shippingAddress.address}, {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} - {selectedOrder.shippingAddress.zip}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#5A2A1F] pl-6 mt-1">
                  <Phone size={12} className="text-[#8B3A2B]" />
                  <span>{selectedOrder.shippingAddress.phone}</span>
                </div>
              </div>
            </div>

            {/* Cancellation Alert Banner */}
            {selectedOrder.status === 'Cancelled' && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6 font-sans">
                <span className="text-[10px] font-black uppercase tracking-widest text-red-800 font-bold block mb-1">⚠️ Order Cancelled</span>
                <p className="text-xs text-red-700 font-bold">
                  Cancellation Reason: &ldquo;{selectedOrder.cancelReason || 'Cancelled by buyer'}&rdquo;
                </p>
              </div>
            )}

            {/* Returns Auditing Alert Panel */}
            {selectedOrder.returnStatus && selectedOrder.returnStatus !== 'None' && (
              <div className={`border rounded-2xl p-4 mb-6 font-sans ${
                selectedOrder.returnStatus === 'Pending'
                  ? 'bg-purple-50 border-purple-200 text-purple-950'
                  : selectedOrder.returnStatus === 'Approved'
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-rose-50 border-rose-200 text-rose-950'
              }`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#5A2A1F]/60">
                    🔄 Return Request Status: {selectedOrder.returnStatus}
                  </span>
                  {selectedOrder.returnStatus === 'Pending' && (
                    <span className="text-[8px] font-black tracking-wider uppercase bg-purple-200 text-purple-800 px-2 py-0.5 rounded animate-pulse">
                      Needs Verification
                    </span>
                  )}
                </div>
                <p className="text-xs font-bold">
                  Return Reason: &ldquo;{selectedOrder.returnReason || 'No reason provided'}&rdquo;
                </p>

                {/* Audit Approval/Rejection buttons */}
                {selectedOrder.returnStatus === 'Pending' && (
                  <div className="flex gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => handleVerifyReturn(selectedOrder._id || selectedOrder.id || "", "Approve")}
                      disabled={updatingId !== null}
                      className="px-4 py-2 bg-emerald-700 hover:bg-black text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-95 disabled:opacity-40"
                    >
                      Approve Return
                    </button>
                    <button
                      type="button"
                      onClick={() => handleVerifyReturn(selectedOrder._id || selectedOrder.id || "", "Reject")}
                      disabled={updatingId !== null}
                      className="px-4 py-2 bg-rose-700 hover:bg-black text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-95 disabled:opacity-40"
                    >
                      Deny Return
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Order Items Table */}
            <div className="border border-[#5A2A1F]/10 rounded-2xl overflow-hidden bg-white/40 p-4 mb-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-3">Itemized Purchases</h4>
              <div className="divide-y divide-[#5A2A1F]/5 text-xs">
                {selectedOrder.items.map((item, idx) => (
                  <div key={idx} className="py-3 first:pt-0 last:pb-0 flex justify-between items-center">
                    <div className="space-y-0.5">
                      <span className="font-bold text-[#5A2A1F]">{item.name}</span>
                      {item.variantColour && (
                        <span className="block text-[10px] text-[#5A2A1F]/50 font-medium">Color: {getColorName(item.variantColour)}</span>
                      )}
                    </div>
                    <div className="text-right font-medium">
                      <span className="opacity-60">{item.quantity} x </span>
                      <span className="font-bold">₹{item.price.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary & Status Updates */}
            <div className="bg-[#FAF6F0] rounded-2xl border border-[#5A2A1F]/5 p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto">
              <div className="space-y-1">
                <span className="text-[9px] font-black tracking-widest text-[#8B3A2B] uppercase">Order Total</span>
                <div className="text-2xl font-black text-[#5A2A1F]">₹{selectedOrder.totalAmount.toLocaleString()}</div>
                <div className="text-[10px] font-black tracking-wider text-[#5A2A1F]/60 uppercase">Method: {selectedOrder.paymentMethod}</div>
              </div>

              <div className="flex flex-wrap gap-2">
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-[#8B3A2B] mb-1">Set Payment</label>
                  <select
                    value={selectedOrder.paymentStatus}
                    onChange={(e) => handleUpdateStatus(selectedOrder._id || selectedOrder.id || "", { paymentStatus: e.target.value as any })}
                    disabled={updatingId !== null}
                    className="block text-xs font-black uppercase tracking-wider rounded-lg px-2 py-1.5 border border-[#5A2A1F]/20 focus:outline-none bg-white text-[#5A2A1F] cursor-pointer"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                    <option value="Failed">Failed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-[#8B3A2B] mb-1">Set Order Status</label>
                  <select
                    value={selectedOrder.status}
                    onChange={(e) => handleUpdateStatus(selectedOrder._id || selectedOrder.id || "", { status: e.target.value as any })}
                    disabled={updatingId !== null}
                    className="block text-xs font-black uppercase tracking-wider rounded-lg px-2 py-1.5 border border-[#5A2A1F]/20 focus:outline-none bg-white text-[#5A2A1F] cursor-pointer"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Returned">Returned</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
