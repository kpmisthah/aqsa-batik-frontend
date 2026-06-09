"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Users, ShoppingBag, Settings, Menu, X, LogOut, Bell, Package, Loader2 } from "lucide-react";
import { useAuthSync } from "@/modules/user/hooks/useAuthSync";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  const { user, loading, logout, isSignedIn } = useAuthSync();

  const navigation = [
    { name: "Dashboard", href: "/aqsha-portal", icon: LayoutDashboard },
    { name: "Orders", href: "/aqsha-portal/orders", icon: ShoppingBag },
    { name: "Products", href: "/aqsha-portal/products", icon: Package },
    { name: "Users", href: "/aqsha-portal/users", icon: Users },
    { name: "Banners", href: "/aqsha-portal/banners", icon: Settings },
  ];

  // 🚪 Bypass admin dashboard shell completely for login screen
  if (pathname === "/aqsha-portal/login") {
    return <>{children}</>;
  }

  // 🛡️ Protected Route Logic
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F1EC] flex items-center justify-center font-playfair">
        <Loader2 className="w-12 h-12 text-[#5A2A1F] animate-spin" />
      </div>
    );
  }

  if (!isSignedIn || user?.role !== 'Admin') {
    // We use a timeout to avoid Next.js setState warning during render
    setTimeout(() => {
      router.push("/aqsha-portal/login");
    }, 0);
    return null;
  }

  return (
    <div className="min-h-screen bg-[#F5F1EC] flex font-playfair">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#5A2A1F]/80 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#E8D9C0] border-r border-[#5A2A1F]/10 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:flex-shrink-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col relative overflow-hidden">
          {/* subtle pattern bg */}
          <div className="absolute inset-0 bg-pattern opacity-[0.03] pointer-events-none"></div>
          
          <div className="h-16 flex items-center justify-between px-6 border-b border-[#5A2A1F]/10 bg-[#E8D9C0] relative z-10">
            <span className="text-xl font-black font-playfair tracking-tight text-[#5A2A1F] uppercase">
              Aqsha Admin
            </span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-[#5A2A1F]/60 hover:text-[#5A2A1F]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto relative z-10">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-bold rounded-xl transition-all ${
                    isActive
                      ? "bg-[#5A2A1F] text-white shadow-lg shadow-[#5A2A1F]/20 translate-x-1"
                      : "text-[#5A2A1F]/70 hover:bg-white/50 hover:text-[#5A2A1F]"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 mr-3 flex-shrink-0 ${
                      isActive ? "text-[#FFD700]" : "text-[#5A2A1F]/50"
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-[#5A2A1F]/10 relative z-10">
            <button 
              onClick={() => logout()}
              className="flex items-center w-full px-4 py-3 text-sm font-bold text-[#8B3A2B] rounded-xl hover:bg-[#8B3A2B] hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3 opacity-80" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-white border-b border-[#5A2A1F]/10 sticky top-0 z-30 shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-[#5A2A1F]/60 hover:text-[#5A2A1F] -ml-2 p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex-1" />

          <div className="flex items-center space-x-4">
            <button className="text-[#5A2A1F]/60 hover:text-[#5A2A1F] relative p-2">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#8B3A2B] rounded-full border-2 border-white"></span>
            </button>
            <div className="w-9 h-9 rounded-full bg-[#FFD700] flex items-center justify-center border-2 border-[#5A2A1F]/10 shadow-sm">
              <span className="text-sm font-black text-[#5A2A1F]">AD</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 lg:p-8 relative w-full max-w-full">
           <div className="absolute inset-0 bg-pattern opacity-[0.02] pointer-events-none"></div>
           <div className="relative z-10 w-full max-w-full">
             {children}
           </div>
        </main>
      </div>
    </div>
  );
}
