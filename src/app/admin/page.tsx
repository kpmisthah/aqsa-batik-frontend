import React from "react";
import { TrendingUp, Users, ShoppingBag, DollarSign, Package } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { name: "Total Revenue", value: "₹4,25,000", change: "+12.5%", icon: DollarSign },
    { name: "Active Users", value: "1,240", change: "+5.2%", icon: Users },
    { name: "Total Products", value: "142", change: "+2.4%", icon: ShoppingBag },
    { name: "Pending Orders", value: "28", change: "-1.5%", icon: Package },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-[#5A2A1F] font-playfair tracking-tight">Dashboard Overview</h1>
        <p className="mt-2 text-lg text-[#5A2A1F]/70 italic font-medium">Welcome back! Here's what's happening with your store today.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow-lg shadow-[#5A2A1F]/5 rounded-2xl border border-[#5A2A1F]/10 transition-transform hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-[#E8D9C0] flex items-center justify-center shadow-inner">
                    <stat.icon className="w-7 h-7 text-[#5A2A1F]" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-xs font-black uppercase tracking-widest text-[#8B3A2B] truncate">{stat.name}</dt>
                    <dd className="flex items-baseline mt-1">
                      <div className="text-3xl font-black text-[#5A2A1F]">{stat.value}</div>
                      <div className={`ml-3 flex items-baseline text-sm font-bold ${
                        stat.change.startsWith("+") ? "text-green-600" : "text-[#8B3A2B]"
                      }`}>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Placeholder */}
      <div className="bg-white shadow-lg shadow-[#5A2A1F]/5 rounded-2xl border border-[#5A2A1F]/10 p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#5A2A1F] font-playfair">Recent Orders</h2>
          <a href="#" className="text-sm font-black uppercase tracking-widest text-[#8B3A2B] hover:text-[#5A2A1F] transition-colors border-b-2 border-transparent hover:border-[#5A2A1F]">View all</a>
        </div>
        <div className="border border-[#5A2A1F]/10 rounded-xl overflow-hidden">
          <table className="min-w-full divide-y divide-[#5A2A1F]/10">
            <thead className="bg-[#F5F1EC]">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Order ID</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Customer</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Status</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-[#8B3A2B] uppercase tracking-widest">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#5A2A1F]/5">
              {[
                { id: "#ORD-001", customer: "Rajesh Kumar", status: "Processing", total: "₹12,450" },
                { id: "#ORD-002", customer: "Anita Sharma", status: "Shipped", total: "₹8,900" },
                { id: "#ORD-003", customer: "Mohammad Ali", status: "Delivered", total: "₹24,000" },
              ].map((order) => (
                <tr key={order.id} className="hover:bg-[#F5F1EC]/50 transition-colors">
                  <td className="px-6 py-5 whitespace-nowrap text-sm font-bold text-[#5A2A1F]">{order.id}</td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-[#5A2A1F]/80">{order.customer}</td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs font-black uppercase tracking-wider rounded-full ${
                      order.status === "Delivered" ? "bg-green-100 text-green-800 border border-green-200" :
                      order.status === "Processing" ? "bg-[#FFD700]/20 text-[#5A2A1F] border border-[#FFD700]/50" :
                      "bg-blue-100 text-blue-800 border border-blue-200"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm font-bold text-[#5A2A1F]">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
