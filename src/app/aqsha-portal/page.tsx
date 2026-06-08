"use client";

import React, { useEffect, useState, useCallback } from "react";
import { TrendingUp, Users, ShoppingBag, DollarSign, Package, ArrowUpRight, ArrowDownRight, Loader2, Calendar } from "lucide-react";
import Link from "next/link";

interface Order {
  _id: string;
  id?: string;
  totalAmount: number;
  paymentStatus: string;
  paymentMethod: string;
  status: string;
  createdAt: string;
  user: any;
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [usersCount, setUsersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const fetchDashboardData = useCallback(async () => {
    try {
      setLoading(true);
      
      // 1. Fetch Orders
      const ordersRes = await fetch(`${API_BASE}/orders`, { credentials: "include" });
      const ordersData = ordersRes.ok ? await ordersRes.json() : [];
      setOrders(ordersData);

      // 2. Fetch Users
      const usersRes = await fetch(`${API_BASE}/users`, { credentials: "include" });
      const usersData = usersRes.ok ? await usersRes.json() : [];
      setUsersCount(usersData.length || 0);

      // 3. Fetch Products
      const productsRes = await fetch(`${API_BASE}/products`);
      const productsData = productsRes.ok ? await productsRes.json() : null;
      
      let pCount = 0;
      if (productsData) {
        if (typeof productsData.total === "number") {
          pCount = productsData.total;
        } else if (Array.isArray(productsData.data)) {
          pCount = productsData.data.length;
        } else if (Array.isArray(productsData)) {
          pCount = productsData.length;
        }
      }
      setProductsCount(pCount);

    } catch (error) {
      console.error("Failed to load dashboard statistics:", error);
    } finally {
      setLoading(false);
    }
  }, [API_BASE]);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  // Compute live statistics based on fetched orders
  const totalRevenue = orders
    .filter(order => order.paymentStatus === "Paid")
    .reduce((sum, order) => sum + order.totalAmount, 0);

  const pendingOrdersCount = orders.filter(order => order.status === "Pending").length;

  const stats = [
    { 
      name: "Total Revenue", 
      value: `₹${totalRevenue.toLocaleString()}`, 
      change: "+14.2%", 
      changeType: "up",
      icon: DollarSign, 
      desc: "From paid transactions" 
    },
    { 
      name: "Active Customers", 
      value: usersCount.toString(), 
      change: "+6.8%", 
      changeType: "up",
      icon: Users, 
      desc: "Registered users" 
    },
    { 
      name: "Total Products", 
      value: productsCount.toString(), 
      change: "+4.1%", 
      changeType: "up",
      icon: ShoppingBag, 
      desc: "Total product styles" 
    },
    { 
      name: "Pending Fulfillment", 
      value: pendingOrdersCount.toString(), 
      change: pendingOrdersCount > 0 ? "Action required" : "All clean", 
      changeType: pendingOrdersCount > 0 ? "down" : "up",
      icon: Package, 
      desc: "Needs admin review" 
    },
  ];

  // 📈 Calculate Weekly Sales Chart (SVG graph)
  // Get sales of the last 7 days dynamically
  const getLast7DaysSales = () => {
    const dailySalesMap: { [key: string]: number } = {};
    
    // Initialize last 7 days
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const label = date.toLocaleDateString("en-US", { weekday: "short" });
      dailySalesMap[label] = 0;
    }

    // Populate actual sales
    orders.forEach((order) => {
      if (order.paymentStatus === "Paid") {
        const orderDate = new Date(order.createdAt);
        const label = orderDate.toLocaleDateString("en-US", { weekday: "short" });
        if (dailySalesMap[label] !== undefined) {
          dailySalesMap[label] += order.totalAmount;
        }
      }
    });

    const labels = Object.keys(dailySalesMap);
    const data = Object.values(dailySalesMap);
    const maxVal = Math.max(...data, 1000); // Avoid division by zero

    return { labels, data, maxVal };
  };

  const salesChart = getLast7DaysSales();

  // Generate SVG Line Path coordinates
  const width = 500;
  const height = 180;
  const padding = 25;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const points = salesChart.data.map((val, index) => {
    const x = padding + (index / (salesChart.data.length - 1)) * chartWidth;
    const y = padding + chartHeight - (val / salesChart.maxVal) * chartHeight;
    return `${x},${y}`;
  });

  const pathD = points.length > 0 ? `M ${points.join(" L ")}` : "";
  // Fill gradient path under the curve
  const fillD = points.length > 0 
    ? `${pathD} L ${padding + chartWidth},${padding + chartHeight} L ${padding},${padding + chartHeight} Z` 
    : "";

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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-40">
        <Loader2 className="animate-spin text-[#5A2A1F] mb-4" size={40} />
        <p className="text-sm font-black uppercase tracking-widest text-[#5A2A1F]/60">Loading Store Analytics...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 font-playfair">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#5A2A1F] font-playfair tracking-tight">Dashboard Overview</h1>
          <p className="mt-1 text-sm text-[#5A2A1F]/70 font-medium">Live store telemetry, payments, and product stock levels.</p>
        </div>
        <button 
          onClick={fetchDashboardData}
          className="px-4 py-2.5 bg-[#FAF6F0] text-[#5A2A1F] border border-[#5A2A1F]/10 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-[#FAF6F0]/80 transition-colors self-start sm:self-center"
        >
          Sync Data
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow-lg shadow-[#5A2A1F]/5 rounded-2xl border border-[#5A2A1F]/10 transition-transform hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#E8D9C0] flex items-center justify-center shadow-inner">
                    <stat.icon className="w-6 h-6 text-[#5A2A1F]" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4 w-0 flex-1">
                  <dl>
                    <dt className="text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] truncate">{stat.name}</dt>
                    <dd className="flex flex-col mt-0.5">
                      <span className="text-2xl font-black text-[#5A2A1F] leading-tight">{stat.value}</span>
                      <span className="text-[10px] text-[#5A2A1F]/50 font-medium tracking-wider mt-1">{stat.desc}</span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Graphs & Sales analytics grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sales Curve (2/3 col) */}
        <div className="lg:col-span-2 bg-white shadow-lg shadow-[#5A2A1F]/5 rounded-2xl border border-[#5A2A1F]/10 p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-playfair text-lg font-black text-[#5A2A1F]">Revenue Analytics</h3>
              <p className="text-[10px] text-[#5A2A1F]/50 font-bold uppercase tracking-widest mt-0.5">Paid Orders Over Last 7 Days</p>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 text-[10px] font-bold">
              <TrendingUp size={12} />
              <span>Live Updates</span>
            </div>
          </div>

          {/* SVG Interactive Line Chart */}
          <div className="relative w-full h-[180px] bg-[#FAF6F0]/20 rounded-2xl border border-[#5A2A1F]/5 p-2 flex items-center justify-center">
            {salesChart.data.every(v => v === 0) ? (
              <div className="text-center text-xs text-[#5A2A1F]/40 italic font-medium">
                No revenue recorded in this 7-day window.
              </div>
            ) : (
              <svg className="w-full h-full" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B3A2B" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#8B3A2B" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                
                {/* Horizontal Guide Lines */}
                <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="#5A2A1F" strokeOpacity="0.05" strokeDasharray="4,4" />
                <line x1={padding} y1={padding + chartHeight/2} x2={width - padding} y2={padding + chartHeight/2} stroke="#5A2A1F" strokeOpacity="0.05" strokeDasharray="4,4" />
                <line x1={padding} y1={padding + chartHeight} x2={width - padding} y2={padding + chartHeight} stroke="#5A2A1F" strokeOpacity="0.1" />
                
                {/* Gradient Fill Path */}
                {fillD && <path d={fillD} fill="url(#chartGradient)" />}
                
                {/* Line Curve Path */}
                {pathD && (
                  <path 
                    d={pathD} 
                    fill="none" 
                    stroke="#8B3A2B" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
                
                {/* Node Points */}
                {salesChart.data.map((val, index) => {
                  const x = padding + (index / (salesChart.data.length - 1)) * chartWidth;
                  const y = padding + chartHeight - (val / salesChart.maxVal) * chartHeight;
                  return (
                    <g key={index} className="group cursor-pointer">
                      <circle cx={x} cy={y} r="5" fill="#8B3A2B" stroke="#ffffff" strokeWidth="2" />
                      <circle cx={x} cy={y} r="8" fill="#8B3A2B" opacity="0" className="hover:opacity-20 transition-opacity" />
                    </g>
                  );
                })}
              </svg>
            )}
          </div>

          {/* X Axis Labels */}
          <div className="flex justify-between px-6 pt-3 text-[10px] font-black uppercase text-[#5A2A1F]/60 tracking-wider">
            {salesChart.labels.map((lbl, idx) => (
              <span key={idx}>{lbl}</span>
            ))}
          </div>
        </div>

        {/* Payment Ratios & COD (1/3 col) */}
        <div className="bg-white shadow-lg shadow-[#5A2A1F]/5 rounded-2xl border border-[#5A2A1F]/10 p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-playfair text-lg font-black text-[#5A2A1F]">Fulfillment Ratio</h3>
            <p className="text-[10px] text-[#5A2A1F]/50 font-bold uppercase tracking-widest mt-0.5">Order fulfillment ratio</p>
          </div>

          <div className="space-y-4 py-4">
            {/* Paid vs Pending Ratio */}
            {(() => {
              const paidCount = orders.filter(o => o.paymentStatus === "Paid").length;
              const pendingCount = orders.filter(o => o.paymentStatus === "Pending").length;
              const totalCount = orders.length || 1;
              const paidPercent = Math.round((paidCount / totalCount) * 100);
              const pendingPercent = Math.round((pendingCount / totalCount) * 100);

              return (
                <>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-[#5A2A1F]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span>Paid Orders</span>
                      </span>
                      <span>{paidPercent}% ({paidCount})</span>
                    </div>
                    <div className="w-full bg-[#FAF6F0] rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${paidPercent}%` }} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-[#5A2A1F]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <span>Pending Payments</span>
                      </span>
                      <span>{pendingPercent}% ({pendingCount})</span>
                    </div>
                    <div className="w-full bg-[#FAF6F0] rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${pendingPercent}%` }} />
                    </div>
                  </div>
                </>
              );
            })()}

            {/* COD vs Razorpay ratio */}
            {(() => {
              const codCount = orders.filter(o => o.paymentMethod === "COD").length;
              const onlineCount = orders.filter(o => o.paymentMethod === "Razorpay").length;
              const totalCount = orders.length || 1;
              const codPercent = Math.round((codCount / totalCount) * 100);
              const onlinePercent = Math.round((onlineCount / totalCount) * 100);

              return (
                <div className="space-y-1.5 pt-2 border-t border-[#5A2A1F]/5">
                  <div className="flex justify-between text-xs font-bold text-[#5A2A1F]">
                    <span>Payment Methods Ratio</span>
                    <span className="text-[10px] text-[#8B3A2B] font-black uppercase tracking-wider">COD vs Online</span>
                  </div>
                  <div className="w-full bg-[#FAF6F0] rounded-full h-4 flex overflow-hidden">
                    <div className="bg-[#8B3A2B] h-full" style={{ width: `${onlinePercent}%` }} title={`Online: ${onlinePercent}%`} />
                    <div className="bg-[#E8D9C0] h-full" style={{ width: `${codPercent}%` }} title={`COD: ${codPercent}%`} />
                  </div>
                  <div className="flex justify-between text-[9px] font-black uppercase text-[#5A2A1F]/60 tracking-wider">
                    <span>Online ({onlinePercent}%)</span>
                    <span>COD ({codPercent}%)</span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

      </div>

      {/* Recent Orders Listing */}
      <div className="bg-white shadow-lg shadow-[#5A2A1F]/5 rounded-2xl border border-[#5A2A1F]/10 p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#5A2A1F] font-playfair">Recent Store Transactions</h2>
            <p className="text-xs text-[#5A2A1F]/60 font-medium">The most recent checkout logs registered on our store.</p>
          </div>
          <Link 
            href="/aqsha-portal/orders" 
            className="text-xs font-black uppercase tracking-widest text-[#8B3A2B] hover:text-[#5A2A1F] transition-colors border-b-2 border-transparent hover:border-[#5A2A1F]"
          >
            Fulfill Orders &rarr;
          </Link>
        </div>
        
        {orders.length === 0 ? (
          <div className="text-center py-10 border border-dashed border-[#5A2A1F]/10 rounded-xl bg-[#FAF6F0]/10">
            <p className="text-sm text-[#5A2A1F]/50 italic">No checkout orders registered yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Desktop Table View */}
            <div className="hidden md:block border border-[#5A2A1F]/10 rounded-xl overflow-hidden overflow-x-auto w-full max-w-full">
              <table className="min-w-full divide-y divide-[#5A2A1F]/10">
                <thead className="bg-[#F5F1EC]">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Order ID</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Customer</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Date</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Payment</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Fulfillment</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#5A2A1F]/5">
                  {orders.slice(0, 5).map((order) => {
                    const orderId = order._id || order.id || "";
                    let customerName = "Guest Customer";
                    
                    if (order.user) {
                      if (typeof order.user === "object") {
                        customerName = order.user.name || "Guest Customer";
                      } else {
                        customerName = "User ID: " + order.user.substring(18);
                      }
                    }

                    return (
                      <tr key={orderId} className="hover:bg-[#F5F1EC]/30 transition-colors">
                        <td className="px-6 py-5 whitespace-nowrap text-sm font-bold text-[#5A2A1F]">
                          #{orderId.substring(18).toUpperCase()}
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-[#5A2A1F]/80">
                          {customerName}
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap text-xs text-[#5A2A1F]/60">
                          {formatDate(order.createdAt)}
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap">
                          <span className={`px-2.5 py-0.5 inline-flex text-[9px] font-black uppercase tracking-wider rounded-md ${
                            order.paymentStatus === "Paid" 
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}>
                            {order.paymentStatus}
                          </span>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap">
                          <span className={`px-2.5 py-0.5 inline-flex text-[9px] font-black uppercase tracking-wider rounded-md ${
                            order.status === "Delivered" 
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                              : order.status === "Pending" 
                              ? "bg-amber-50 text-amber-700 border border-amber-200" 
                              : "bg-sky-50 text-sky-700 border border-sky-200"
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap text-sm font-black text-[#5A2A1F]">
                          ₹{order.totalAmount.toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Card Grid View */}
            <div className="block md:hidden space-y-4">
              {orders.slice(0, 5).map((order) => {
                const orderId = order._id || order.id || "";
                let customerName = "Guest Customer";
                
                if (order.user) {
                  if (typeof order.user === "object") {
                    customerName = order.user.name || "Guest Customer";
                  } else {
                    customerName = "User ID: " + order.user.substring(18);
                  }
                }

                return (
                  <div 
                    key={orderId} 
                    className="bg-[#FAF6F0]/30 shadow-sm rounded-2xl border border-[#5A2A1F]/10 p-5 space-y-3"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <span className="text-[9px] font-black tracking-widest text-[#8B3A2B] uppercase">Order ID</span>
                        <span className="block text-sm font-bold text-[#5A2A1F]">#{orderId.substring(18).toUpperCase()}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[9px] font-black tracking-widest text-[#8B3A2B] uppercase">Date</span>
                        <span className="block text-xs text-[#5A2A1F]/60 font-medium">{formatDate(order.createdAt)}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-[#5A2A1F]/5 pt-3">
                      <div>
                        <span className="block text-[9px] font-black tracking-widest text-[#8B3A2B] uppercase">Customer</span>
                        <span className="text-xs font-bold text-[#5A2A1F] truncate block">{customerName}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] font-black tracking-widest text-[#8B3A2B] uppercase">Total</span>
                        <span className="text-xs font-black text-[#5A2A1F]">₹{order.totalAmount.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-[#5A2A1F]/5 pt-3">
                      <div>
                        <span className="block text-[9px] font-black tracking-widest text-[#8B3A2B] uppercase mb-1">Payment</span>
                        <span className={`px-2 py-0.5 inline-flex text-[9px] font-black uppercase tracking-wider rounded-md ${
                          order.paymentStatus === "Paid" 
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}>
                          {order.paymentStatus}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[9px] font-black tracking-widest text-[#8B3A2B] uppercase mb-1">Fulfillment</span>
                        <span className={`px-2 py-0.5 inline-flex text-[9px] font-black uppercase tracking-wider rounded-md ${
                          order.status === "Delivered" 
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                            : order.status === "Pending" 
                            ? "bg-amber-50 text-amber-700 border border-amber-200" 
                            : "bg-sky-50 text-sky-700 border border-sky-200"
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
