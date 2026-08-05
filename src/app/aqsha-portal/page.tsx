"use client";

import React, { useEffect, useState, useCallback } from "react";
import { TrendingUp, Users, ShoppingBag, DollarSign, Package, Loader2, ArrowRight } from "lucide-react";
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
      
      const ordersRes = await fetch(`${API_BASE}/orders`, { credentials: "include" });
      const ordersData = ordersRes.ok ? await ordersRes.json() : [];
      setOrders(ordersData);

      const usersRes = await fetch(`${API_BASE}/users`, { credentials: "include" });
      const usersData = usersRes.ok ? await usersRes.json() : [];
      setUsersCount(usersData.length || 0);

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

  const totalRevenue = orders
    .filter(order => order.paymentStatus === "Paid")
    .reduce((sum, order) => sum + order.totalAmount, 0);

  const pendingOrdersCount = orders.filter(order => order.status === "Pending").length;

  const stats = [
    { 
      name: "Gross Revenue", 
      value: `₹${totalRevenue.toLocaleString()}`, 
      change: "+14.2%", 
      changeType: "up",
      icon: DollarSign, 
      desc: "From paid orders" 
    },
    { 
      name: "Customer Base", 
      value: usersCount.toString(), 
      change: "+6.8%", 
      changeType: "up",
      icon: Users, 
      desc: "Registered accounts" 
    },
    { 
      name: "Inventory Styles", 
      value: productsCount.toString(), 
      change: "+4.1%", 
      changeType: "up",
      icon: ShoppingBag, 
      desc: "Total product styles" 
    },
    { 
      name: "Pending Orders", 
      value: pendingOrdersCount.toString(), 
      change: pendingOrdersCount > 0 ? "Action Req" : "All clean", 
      changeType: pendingOrdersCount > 0 ? "down" : "up",
      icon: Package, 
      desc: "Awaiting fulfillment" 
    },
  ];

  const getLast7DaysSales = () => {
    const dailySalesMap: { [key: string]: number } = {};
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const label = date.toLocaleDateString("en-US", { weekday: "short" });
      dailySalesMap[label] = 0;
    }

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
    const maxVal = Math.max(...data, 1000);

    return { labels, data, maxVal };
  };

  const salesChart = getLast7DaysSales();

  const width = 600;
  const height = 220;
  const paddingX = 40;
  const paddingY = 30;
  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingY * 2;

  const pointsData = salesChart.data.map((val, index) => {
    const x = paddingX + (index / (salesChart.data.length - 1)) * chartWidth;
    const y = paddingY + chartHeight - (val / salesChart.maxVal) * chartHeight;
    return { x, y, val };
  });

  // Calculate elegant smooth curve using horizontal midpoints
  const createSmoothPath = (points: {x: number, y: number}[]) => {
    if (points.length === 0) return "";
    let d = `M ${points[0].x},${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        const midX = (p1.x + p2.x) / 2;
        d += ` C ${midX},${p1.y} ${midX},${p2.y} ${p2.x},${p2.y}`;
    }
    return d;
  };

  const pathD = pointsData.length > 0 ? createSmoothPath(pointsData) : "";
  const fillD = pointsData.length > 0 
    ? `${pathD} L ${paddingX + chartWidth},${paddingY + chartHeight} L ${paddingX},${paddingY + chartHeight} Z` 
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
      <div className="flex flex-col items-center justify-center min-h-[60vh] font-heading">
        <Loader2 className="animate-spin text-primary mb-5" size={40} />
        <p className="text-sm font-black text-secondary tracking-widest uppercase">Loading Analytics...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 font-heading pb-10">
      
      {/* Header section (Restructured into a clean banner card) */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-primary/10 shadow-sm relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none transform translate-x-10 -translate-y-10">
           <TrendingUp className="w-48 h-48 text-primary" />
        </div>
        
        <div className="relative z-10 w-full">
          <h1 className="text-3xl sm:text-4xl font-black text-primary tracking-tight">Dashboard Overview</h1>
          <p className="mt-2 text-sm text-primary/60 font-bold tracking-wide">Live store telemetry, payments, and product stock levels.</p>
        </div>
      </div>

      {/* Metrics Row (Redesigned with floating icons and strict spacing) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-2">
        {stats.map((stat) => (
          <div key={stat.name} className="relative bg-white rounded-2xl border border-primary/10 shadow-sm p-6 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-tan border border-primary/10 rounded-xl shadow-inner inline-flex">
                  <stat.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <p className="text-[11px] font-black uppercase tracking-widest text-secondary">{stat.name}</p>
              </div>
              
              <div className="mt-auto">
                <p className="text-3xl sm:text-4xl font-black text-primary leading-none tracking-tight">{stat.value}</p>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-primary/5">
                   <span className={`px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider ${stat.changeType === 'up' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                     {stat.change}
                   </span>
                   <span className="text-primary/50 text-xs font-bold truncate">{stat.desc}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
        
        {/* Sales Curve */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-primary/10 shadow-sm p-6 sm:p-8 flex flex-col relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-4 relative z-10">
            <div>
              <h3 className="text-xl font-black text-primary tracking-tight">Revenue Analytics</h3>
              <p className="text-[10px] uppercase tracking-widest font-bold text-primary/50 mt-1.5">Paid Orders Over Last 7 Days</p>
            </div>
            <div className="flex items-center gap-2 text-primary bg-primary/5 px-4 py-2 rounded-xl border border-primary/10 text-xs font-black uppercase tracking-widest shadow-sm self-start sm:self-auto">
              <TrendingUp size={16} />
              <span>Live Chart</span>
            </div>
          </div>

          <div className="relative w-full h-[280px] flex-1 items-center justify-center pt-4">
            {salesChart.data.every(v => v === 0) ? (
              <div className="flex h-full items-center justify-center text-sm font-bold text-primary/40 uppercase tracking-widest bg-cream/30 rounded-2xl border border-primary/5">
                No revenue recorded in this 7-day window
              </div>
            ) : (
              <svg className="w-full h-full overflow-visible" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F4C430" stopOpacity="0.4" />
                    <stop offset="60%" stopColor="#F4C430" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#F4C430" stopOpacity="0.0" />
                  </linearGradient>
                  
                  {/* Grid pattern for background */}
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4A3423" strokeOpacity="0.03" />
                  </pattern>
                </defs>
                
                {/* Background Grid */}
                <rect x={paddingX} y={paddingY} width={chartWidth} height={chartHeight} fill="url(#grid)" />
                
                {/* Horizontal Guide Lines */}
                <line x1={paddingX} y1={paddingY} x2={width - paddingX} y2={paddingY} stroke="#4A3423" strokeOpacity="0.1" strokeDasharray="4,6" />
                <line x1={paddingX} y1={paddingY + chartHeight/2} x2={width - paddingX} y2={paddingY + chartHeight/2} stroke="#4A3423" strokeOpacity="0.1" strokeDasharray="4,6" />
                <line x1={paddingX} y1={paddingY + chartHeight} x2={width - paddingX} y2={paddingY + chartHeight} stroke="#4A3423" strokeOpacity="0.2" />
                
                {fillD && <path d={fillD} fill="url(#chartGradient)" className="transition-all duration-1000 ease-in-out" />}
                
                {pathD && (
                  <path 
                    d={pathD} 
                    fill="none" 
                    stroke="#F4C430" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="drop-shadow-lg"
                  />
                )}
                
                {pointsData.map((pt, index) => {
                  return (
                    <g key={index} className="group/node cursor-pointer">
                      {/* Invisible larger circle for easier hovering */}
                      <circle cx={pt.x} cy={pt.y} r="20" fill="transparent" />
                      
                      {/* Actual dot */}
                      <circle cx={pt.x} cy={pt.y} r="5" fill="#ffffff" stroke="#F4C430" strokeWidth="3" className="shadow-md transition-all duration-300 group-hover/node:r-[7px] group-hover/node:stroke-[4px]" />
                      
                      {/* Tooltip (Only visible on hover) */}
                      <g className="opacity-0 group-hover/node:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <rect x={pt.x - 30} y={pt.y - 35} width="60" height="24" rx="4" fill="#4A3423" />
                        <text x={pt.x} y={pt.y - 20} textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="system-ui, sans-serif">
                          ₹{pt.val}
                        </text>
                        <polygon points={`${pt.x - 4},${pt.y - 11} ${pt.x + 4},${pt.y - 11} ${pt.x},${pt.y - 6}`} fill="#4A3423" />
                      </g>
                    </g>
                  );
                })}
              </svg>
            )}
          </div>

          <div className="flex justify-between text-[10px] font-black uppercase text-secondary tracking-widest mt-2 relative z-10 w-full" style={{ paddingLeft: `${(paddingX/width)*100}%`, paddingRight: `${(paddingX/width)*100}%` }}>
            {salesChart.labels.map((lbl, idx) => (
              <span key={idx}>{lbl}</span>
            ))}
          </div>
        </div>

        {/* Payment Ratios Col */}
        <div className="bg-white rounded-2xl border border-primary/10 shadow-sm p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-black text-primary tracking-tight">Fulfillment & Risk</h3>
            <p className="text-[10px] uppercase tracking-widest font-bold text-primary/50 mt-1.5">Operational Ratio Breakdowns</p>
          </div>

          <div className="space-y-8 pt-8 relative z-10">
            {(() => {
              const paidCount = orders.filter(o => o.paymentStatus === "Paid").length;
              const pendingCount = orders.filter(o => o.paymentStatus === "Pending").length;
              const totalCount = orders.length || 1;
              const paidPercent = Math.round((paidCount / totalCount) * 100);
              const pendingPercent = Math.round((pendingCount / totalCount) * 100);

              return (
                <>
                  <div className="space-y-3 p-4 bg-tan/40 rounded-xl border border-primary/5">
                    <div className="flex justify-between text-xs font-black text-primary">
                      <span className="flex items-center gap-2 uppercase tracking-widest">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm" />
                        <span>Paid Orders</span>
                      </span>
                      <span>{paidPercent}% <span className="text-primary/50 font-bold ml-1">({paidCount})</span></span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2.5 overflow-hidden border border-primary/5">
                      <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${paidPercent}%` }} />
                    </div>
                  </div>

                  <div className="space-y-3 p-4 bg-tan/40 rounded-xl border border-primary/5">
                    <div className="flex justify-between text-xs font-black text-primary">
                      <span className="flex items-center gap-2 uppercase tracking-widest">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm" />
                        <span>Pending Pay</span>
                      </span>
                      <span>{pendingPercent}% <span className="text-primary/50 font-bold ml-1">({pendingCount})</span></span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2.5 overflow-hidden border border-primary/5">
                      <div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{ width: `${pendingPercent}%` }} />
                    </div>
                  </div>
                </>
              );
            })()}

            {(() => {
              const codCount = orders.filter(o => o.paymentMethod === "COD").length;
              const onlineCount = orders.filter(o => o.paymentMethod === "Razorpay").length;
              const totalCount = orders.length || 1;
              const codPercent = Math.round((codCount / totalCount) * 100);
              const onlinePercent = Math.round((onlineCount / totalCount) * 100);

              return (
                <div className="space-y-4 pt-6 border-t border-primary/10">
                  <div className="flex justify-between text-xs font-black text-primary uppercase tracking-widest">
                    <span>Payment Methods</span>
                  </div>
                  <div className="w-full bg-tan rounded-full h-4 flex overflow-hidden border border-primary/10 shadow-inner">
                    <div className="bg-secondary h-full transition-all duration-500" style={{ width: `${onlinePercent}%` }} title={`Online: ${onlinePercent}%`} />
                    <div className="bg-primary h-full transition-all duration-500" style={{ width: `${codPercent}%` }} title={`COD: ${codPercent}%`} />
                  </div>
                  <div className="flex justify-between text-[10px] font-black uppercase text-primary/70 tracking-widest">
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"/> Online ({onlinePercent}%)</span>
                    <span className="flex items-center gap-1.5">COD ({codPercent}%) <span className="w-1.5 h-1.5 rounded-full bg-primary"/></span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

      </div>

      {/* Recent Orders Listing */}
      <div className="bg-white rounded-2xl border border-primary/10 shadow-sm overflow-hidden mt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-8 border-b border-primary/10 gap-4 bg-cream/30">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-primary tracking-tight">Recent Transactions</h2>
            <p className="text-[11px] uppercase tracking-widest font-bold text-primary/50 mt-1.5">Latest store checkout logs</p>
          </div>
          <Link 
            href="/aqsha-portal/orders" 
            className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors bg-white px-5 py-2.5 rounded-xl border border-primary/10 shadow-sm self-start sm:self-auto"
          >
            Manage Orders 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {orders.length === 0 ? (
          <div className="text-center py-16 bg-white">
            <p className="text-sm font-black text-primary/40 uppercase tracking-widest">No checkout orders registered yet.</p>
          </div>
        ) : (
          <div>
            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto w-full p-6">
              <div className="rounded-xl overflow-hidden border border-primary/10">
                <table className="min-w-full divide-y divide-primary/10">
                  <thead className="bg-cream">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-[10px] font-black text-secondary uppercase tracking-widest border-r border-primary/5">Order ID</th>
                      <th scope="col" className="px-6 py-4 text-left text-[10px] font-black text-secondary uppercase tracking-widest border-r border-primary/5">Customer</th>
                      <th scope="col" className="px-6 py-4 text-left text-[10px] font-black text-secondary uppercase tracking-widest border-r border-primary/5">Date</th>
                      <th scope="col" className="px-6 py-4 text-left text-[10px] font-black text-secondary uppercase tracking-widest border-r border-primary/5">Payment</th>
                      <th scope="col" className="px-6 py-4 text-left text-[10px] font-black text-secondary uppercase tracking-widest border-r border-primary/5">Status</th>
                      <th scope="col" className="px-6 py-4 text-right text-[10px] font-black text-secondary uppercase tracking-widest">Total</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-primary/5">
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
                        <tr key={orderId} className="hover:bg-cream/50 transition-colors group">
                          <td className="px-6 py-5 whitespace-nowrap text-xs font-black text-primary border-r border-primary/5">
                            #{orderId.substring(18).toUpperCase()}
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-sm font-bold text-primary/80 border-r border-primary/5">
                            {customerName}
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-xs font-bold text-primary/60 border-r border-primary/5">
                            {formatDate(order.createdAt)}
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap border-r border-primary/5">
                            <span className={`px-3 py-1.5 inline-flex text-[9px] font-black uppercase tracking-wider rounded-md ${
                              order.paymentStatus === "Paid" 
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                                : "bg-amber-50 text-amber-700 border border-amber-200"
                            }`}>
                              {order.paymentStatus}
                            </span>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap border-r border-primary/5">
                            <span className={`px-3 py-1.5 inline-flex text-[9px] font-black uppercase tracking-wider rounded-md ${
                              order.status === "Delivered" 
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                                : order.status === "Pending" 
                                ? "bg-amber-50 text-amber-700 border border-amber-200" 
                                : "bg-primary/5 text-primary border border-primary/10"
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-sm font-black text-primary text-right bg-primary/[0.02] group-hover:bg-primary/[0.04]">
                            ₹{order.totalAmount.toLocaleString()}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile/Tablet Card Grid View */}
            <div className="grid grid-cols-1 lg:hidden gap-0 border-t border-primary/5">
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
                  <div key={orderId} className="p-6 border-b border-primary/5 hover:bg-cream/30 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="block text-[10px] font-black uppercase tracking-widest text-secondary mb-1">Order ID</span>
                        <span className="block text-sm font-black text-primary">#{orderId.substring(18).toUpperCase()}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[10px] font-black uppercase tracking-widest text-secondary mb-1">Total</span>
                        <span className="block text-lg font-black text-primary">₹{order.totalAmount.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="bg-tan/30 rounded-xl p-4 border border-primary/5 space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-bold text-primary/80">{customerName}</span>
                        <span className="font-bold text-primary/50 text-xs">{formatDate(order.createdAt)}</span>
                      </div>
                      <div className="flex gap-2 border-t border-primary/10 pt-4">
                         <span className={`px-2.5 py-1 inline-flex text-[9px] font-black uppercase tracking-wider rounded border ${
                           order.paymentStatus === "Paid" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-amber-50 text-amber-700 border-amber-200"
                         }`}>
                           {order.paymentStatus}
                         </span>
                         <span className={`px-2.5 py-1 inline-flex text-[9px] font-black uppercase tracking-wider rounded border ${
                           order.status === "Delivered" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : order.status === "Pending" ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-white text-primary border-primary/20"
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
