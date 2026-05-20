"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuthSync } from "@/modules/user/hooks/useAuthSync";
import { User, LogOut, ChevronDown, Sparkles, ShoppingBag, Heart } from "lucide-react";
import { useCartStore } from "@/hooks/useCartStore";
import { useWishlistStore } from "@/hooks/useWishlistStore";

const WA = "https://wa.me/919999999999";

export default function Nav() {
    const [menu, setMenu] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { isSignedIn, user, loading, logout } = useAuthSync();
    const { getTotalItemsCount } = useCartStore();
    const { getTotalItemsCount: getWishlistCount } = useWishlistStore();
    
    // Fix hydration mismatch with Zustand persist
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Close dropdown on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getFirstName = (fullName?: string) => {
        if (!fullName) return "Account";
        return fullName.split(" ")[0] || "Account";
    };

    return (
        <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-[100] border-b border-[#5A2A1F]/5 h-24 shadow-sm">
            <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
                
                {/* Logo Section */}
                <div className="flex flex-col">
                    <Link href="/" className="font-playfair text-3xl font-black tracking-tight text-[#5A2A1F] hover:text-[#8B3A2B] transition-colors">AQSHA</Link>
                    <div className="flex items-center gap-2">
                        <span className="font-sans text-[10px] font-black tracking-[0.3em] text-[#5A2A1F]/60 uppercase leading-tight">Batik Cloth</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8 font-sans font-bold text-[#5A2A1F] text-[13px] uppercase tracking-wider">
                    <Link href="/batik-cloth" className="hover:text-[#8B3A2B] transition-colors">batik cloth</Link>
                    <Link href="/batik-fabric" className="hover:text-[#8B3A2B] transition-colors">batik fabric</Link>
                    <Link href="/wholesale" className="hover:text-[#8B3A2B] transition-colors">wholesale</Link>
                    <Link href="/about" className="hover:text-[#8B3A2B] transition-colors">about</Link>

                    {/* Authentication Section */}
                    {loading ? (
                        <div className="w-[100px] h-[38px] rounded-xl bg-[#FAF6F0]/60 border border-[#5A2A1F]/5 flex items-center justify-center gap-1.5 animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5A2A1F]/30" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5A2A1F]/30" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5A2A1F]/30" />
                        </div>
                    ) : isSignedIn && user ? (
                        <div className="relative" ref={dropdownRef}>
                            <button 
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-2 p-1 pr-3 border border-[#5A2A1F]/15 rounded-full hover:border-[#8B3A2B] hover:text-[#8B3A2B] transition-all bg-[#FAF6F0]/50 active:scale-95"
                            >
                                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#5A2A1F]/10">
                                    {user.avatar ? (
                                        <img 
                                            src={user.avatar} 
                                            alt={user.name} 
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-[#5A2A1F] text-white flex items-center justify-center text-xs font-black uppercase">
                                            {user.name.charAt(0)}
                                        </div>
                                    )}
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white animate-pulse" />
                                </div>
                                <span className="text-[12px] font-bold tracking-wider max-w-[100px] truncate ml-1">{getFirstName(user.name)}</span>
                                <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-[#5A2A1F]/10 bg-white p-2.5 shadow-2xl transition-all animate-in fade-in-50 slide-in-from-top-3 duration-200">
                                    <div className="px-3.5 py-2.5 mb-2 border-b border-[#5A2A1F]/5 text-left">
                                        <div className="text-[10px] font-black tracking-widest text-[#8B3A2B] uppercase">Logged In As</div>
                                        <div className="text-sm font-bold text-[#5A2A1F] truncate mt-0.5">{user.name}</div>
                                        <div className="text-xs text-[#5A2A1F]/60 truncate font-medium">{user.email}</div>
                                    </div>
                                    
                                    <Link 
                                        href="/profile" 
                                        onClick={() => setDropdownOpen(false)}
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#5A2A1F] hover:bg-[#FAF6F0] hover:text-[#8B3A2B] transition-all text-xs font-bold uppercase tracking-wider"
                                    >
                                        <User size={15} />
                                        <span>View Profile</span>
                                    </Link>

                                    <button 
                                        onClick={() => {
                                            setDropdownOpen(false);
                                            logout();
                                        }}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-600 hover:bg-red-50 transition-all text-xs font-bold uppercase tracking-wider text-left"
                                    >
                                        <LogOut size={15} />
                                        <span>Log Out</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link 
                            href="/login" 
                            className="hover:text-[#8B3A2B] transition-colors border border-[#5A2A1F]/15 px-6 py-2.5 rounded-xl active:scale-95 text-[13px] tracking-wider uppercase font-bold"
                        >
                            Login
                        </Link>
                    )}

                    {/* Dynamic Wishlist Icon Link */}
                    <Link href="/wishlist" className="relative p-2.5 text-[#5A2A1F] hover:text-[#8B3A2B] transition-colors active:scale-95">
                        <Heart size={22} />
                        {isMounted && getWishlistCount() > 0 && (
                            <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white animate-bounce">
                                {getWishlistCount()}
                            </span>
                        )}
                    </Link>

                    {/* Dynamic Cart Icon Link */}
                    <Link href="/cart" className="relative p-2.5 text-[#5A2A1F] hover:text-[#8B3A2B] transition-colors active:scale-95 mr-2">
                        <ShoppingBag size={22} />
                        {isMounted && getTotalItemsCount() > 0 && (
                            <span className="absolute -top-1 -right-1 bg-[#8B3A2B] text-white text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white animate-bounce">
                                {getTotalItemsCount()}
                            </span>
                        )}
                    </Link>

                    <a href={WA} target="_blank" rel="noreferrer" className="bg-[#5A2A1F] text-white px-8 py-3.5 rounded-xl hover:bg-black transition-all shadow-lg text-[14px]">
                        Get Catalog
                    </a>
                </div>

                {/* Mobile Menu Trigger */}
                <button onClick={() => setMenu(!menu)} className="lg:hidden p-2 text-[#5A2A1F] hover:text-[#8B3A2B] transition-colors active:scale-95">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            {menu && (
                <div className="fixed inset-0 bg-[#F5F1EC] z-[200] p-8 flex flex-col justify-between animate-in fade-in duration-200">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between items-center">
                            <span className="font-playfair text-3xl font-black text-[#5A2A1F]">AQSHA</span>
                            <button onClick={() => setMenu(false)} className="active:scale-95">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5A2A1F" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                        </div>
                        <a onClick={() => setMenu(false)} href="/batik-cloth" className="font-playfair text-4xl font-bold text-[#5A2A1F] hover:text-[#8B3A2B] transition-colors">batik cloth</a>
                        <a onClick={() => setMenu(false)} href="/batik-fabric" className="font-playfair text-4xl font-bold text-[#5A2A1F] hover:text-[#8B3A2B] transition-colors">batik fabric</a>
                        <a onClick={() => setMenu(false)} href="/wholesale" className="font-playfair text-4xl font-bold text-[#5A2A1F] hover:text-[#8B3A2B] transition-colors">wholesale</a>
                        <a onClick={() => setMenu(false)} href="/about" className="font-playfair text-4xl font-bold text-[#5A2A1F] hover:text-[#8B3A2B] transition-colors">about</a>
                        
                        {!loading && isSignedIn && user ? (
                            <Link 
                                onClick={() => setMenu(false)} 
                                href="/profile" 
                                className="font-playfair text-4xl font-bold text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-3"
                            >
                                <span>Profile ({getFirstName(user.name)})</span>
                            </Link>
                        ) : null}
                    </div>

                    <div className="flex flex-col gap-4">
                        {loading ? (
                            <div className="w-full bg-[#FAF6F0]/40 border border-[#5A2A1F]/5 text-center py-4 rounded-2xl flex items-center justify-center gap-1.5 animate-pulse">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#5A2A1F]/30" />
                                <span className="w-1.5 h-1.5 rounded-full bg-[#5A2A1F]/30" />
                                <span className="w-1.5 h-1.5 rounded-full bg-[#5A2A1F]/30" />
                            </div>
                        ) : isSignedIn ? (
                            <button 
                                onClick={() => {
                                    setMenu(false);
                                    logout();
                                }}
                                className="w-full bg-red-600 text-white text-center py-4 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-md active:scale-98"
                            >
                                Log Out
                            </button>
                        ) : (
                            <Link 
                                onClick={() => setMenu(false)}
                                href="/login" 
                                className="w-full bg-[#5A2A1F] text-white text-center py-4 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-md active:scale-98"
                            >
                                Login
                            </Link>
                        )}
                        <Link 
                            onClick={() => setMenu(false)}
                            href="/wishlist" 
                            className="w-full bg-[#FAF6F0] border border-[#5A2A1F]/15 text-[#5A2A1F] text-center py-4 rounded-2xl font-bold uppercase tracking-wider text-sm active:scale-98 flex items-center justify-center gap-2"
                        >
                            <Heart size={16} />
                            <span>Wishlist {isMounted && `(${getWishlistCount()})`}</span>
                        </Link>
                        <Link 
                            onClick={() => setMenu(false)}
                            href="/cart" 
                            className="w-full bg-[#FAF6F0] border border-[#5A2A1F]/15 text-[#5A2A1F] text-center py-4 rounded-2xl font-bold uppercase tracking-wider text-sm active:scale-98 flex items-center justify-center gap-2"
                        >
                            <ShoppingBag size={16} />
                            <span>Cart {isMounted && `(${getTotalItemsCount()})`}</span>
                        </Link>
                        <a href={WA} target="_blank" rel="noreferrer" className="w-full border-2 border-[#5A2A1F] text-[#5A2A1F] text-center py-4 rounded-2xl font-bold uppercase tracking-wider text-sm active:scale-98">
                            Get Catalog
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
