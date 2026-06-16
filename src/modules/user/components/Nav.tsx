"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuthSync } from "@/modules/user/hooks/useAuthSync";
import { User, LogOut, ChevronDown, Sparkles, ShoppingBag, Heart } from "lucide-react";
import { useCartStore } from "@/hooks/useCartStore";
import { useWishlistStore } from "@/hooks/useWishlistStore";

const WA = "https://wa.me/918815373767";

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

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        if (menu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [menu]);

    const getFirstName = (fullName?: string) => {
        if (!fullName) return "Account";
        return fullName.split(" ")[0] || "Account";
    };

    return (
        <>
            <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-[100] border-b border-[#5A2A1F]/5 h-24 shadow-sm">
                <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
                    
                    {/* Logo Section */}
                    <div className="flex flex-col justify-center">
                        <Link href="/home" className="hover:opacity-80 transition-opacity flex items-center">
                            <img src="/aqdas-logo.svg" alt="Aqdas Logo" className="h-20 md:h-28 w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8 font-playfair font-bold text-[#5A2A1F] text-[13px] uppercase tracking-wider">
                        <Link href="/cotton-cloth" className="hover:text-[#8B3A2B] transition-colors">batik cloth</Link>
                        <Link href="/batik-fabric" className="hover:text-[#8B3A2B] transition-colors">batik fabric</Link>
                        <Link href="/fabric-wholesale" className="hover:text-[#8B3A2B] transition-colors">wholesale</Link>
                        <Link href="/new-batik-prints" className="text-[#8B3A2B] hover:text-[#5A2A1F] transition-colors relative">
                            new arrival
                            <span className="absolute -top-1 -right-2 w-1.5 h-1.5 rounded-full bg-[#8B3A2B] animate-pulse"></span>
                        </Link>
                        <Link href="/about-us" className="hover:text-[#8B3A2B] transition-colors">about</Link>
                        <Link href="/blog" className="hover:text-[#8B3A2B] transition-colors">blog</Link>
                        <Link href="/contact-us" className="hover:text-[#8B3A2B] transition-colors">contact</Link>

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

                                        <Link 
                                            href="/profile?tab=orders" 
                                            onClick={() => setDropdownOpen(false)}
                                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#5A2A1F] hover:bg-[#FAF6F0] hover:text-[#8B3A2B] transition-all text-xs font-bold uppercase tracking-wider"
                                        >
                                            <ShoppingBag size={15} />
                                            <span>My Orders</span>
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
            </nav>

            {/* Mobile Navigation Drawer */}
            {menu && (
                <div 
                    className="fixed inset-0 z-[200] p-8 flex flex-col overflow-y-auto animate-in fade-in duration-200"
                    style={{ backgroundColor: '#FAF6F0' }}
                >
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center mb-4">
                            <img src="/aqdas-logo.svg" alt="Aqdas Logo" className="h-24 w-auto object-contain" />
                            <button 
                                onClick={() => setMenu(false)} 
                                className="p-2 text-[#5A2A1F] hover:text-[#8B3A2B] transition-colors active:scale-95 focus:outline-none"
                                aria-label="Close menu"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                        </div>
                        
                        <div className="flex flex-col font-playfair text-3xl font-bold text-[#5A2A1F] space-y-2">
                            <Link onClick={() => setMenu(false)} href="/cotton-cloth" className="hover:text-[#8B3A2B] transition-colors py-3 border-b border-[#5A2A1F]/5">batik cloth</Link>
                            <Link onClick={() => setMenu(false)} href="/batik-fabric" className="hover:text-[#8B3A2B] transition-colors py-3 border-b border-[#5A2A1F]/5">batik fabric</Link>
                            <Link onClick={() => setMenu(false)} href="/fabric-wholesale" className="hover:text-[#8B3A2B] transition-colors py-3 border-b border-[#5A2A1F]/5">wholesale</Link>
                            <Link onClick={() => setMenu(false)} href="/new-batik-prints" className="text-[#8B3A2B] hover:text-[#5A2A1F] transition-colors py-3 border-b border-[#5A2A1F]/5 flex items-center justify-between">
                                new arrival
                                <span className="text-xs px-2 py-1 bg-[#8B3A2B] text-white rounded-full animate-pulse tracking-widest">NEW</span>
                            </Link>
                            <Link onClick={() => setMenu(false)} href="/about-us" className="hover:text-[#8B3A2B] transition-colors py-3 border-b border-[#5A2A1F]/5">about</Link>
                            <Link onClick={() => setMenu(false)} href="/blog" className="hover:text-[#8B3A2B] transition-colors py-3 border-b border-[#5A2A1F]/5">blog</Link>
                            <Link onClick={() => setMenu(false)} href="/contact-us" className="hover:text-[#8B3A2B] transition-colors py-3 border-b border-[#5A2A1F]/5">contact</Link>
                            
                            {!loading && isSignedIn && user ? (
                                <Link 
                                    onClick={() => setMenu(false)} 
                                    href="/profile" 
                                    className="hover:text-[#8B3A2B] transition-colors py-3 border-b border-[#5A2A1F]/5 flex items-center gap-3 text-2xl"
                                >
                                    <span>Profile ({getFirstName(user.name)})</span>
                                </Link>
                            ) : null}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-[#5A2A1F]/10">
                        {loading ? (
                            <div className="w-full bg-white/50 border border-[#5A2A1F]/5 text-center py-4 rounded-2xl flex items-center justify-center gap-1.5 animate-pulse">
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
                                className="w-full bg-red-600 hover:bg-red-700 text-white text-center py-4 rounded-2xl font-bold uppercase tracking-wider text-xs active:scale-95 transition-colors"
                            >
                                Log Out
                            </button>
                        ) : (
                            <Link 
                                onClick={() => setMenu(false)}
                                href="/login" 
                                className="w-full bg-[#5A2A1F] hover:bg-black text-white text-center py-4 rounded-2xl font-bold uppercase tracking-wider text-xs active:scale-95 transition-all shadow-md"
                            >
                                Login
                            </Link>
                        )}
                        <Link 
                            onClick={() => setMenu(false)}
                            href="/wishlist" 
                            className="w-full bg-white hover:bg-[#FAF6F0] border border-[#5A2A1F]/15 text-[#5A2A1F] text-center py-4 rounded-2xl font-bold uppercase tracking-wider text-xs active:scale-95 flex items-center justify-center gap-2 transition-colors shadow-sm"
                        >
                            <Heart size={16} />
                            <span>Wishlist {isMounted && `(${getWishlistCount()})`}</span>
                        </Link>
                        <Link 
                            onClick={() => setMenu(false)}
                            href="/cart" 
                            className="w-full bg-white hover:bg-[#FAF6F0] border border-[#5A2A1F]/15 text-[#5A2A1F] text-center py-4 rounded-2xl font-bold uppercase tracking-wider text-xs active:scale-95 flex items-center justify-center gap-2 transition-colors shadow-sm"
                        >
                            <ShoppingBag size={16} />
                            <span>Cart {isMounted && `(${getTotalItemsCount()})`}</span>
                        </Link>
                        <a 
                            href={WA} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="w-full bg-[#5A2A1F] hover:bg-black text-white text-center py-4 rounded-2xl font-bold uppercase tracking-wider text-xs active:scale-95 transition-all shadow-md"
                        >
                            Get Catalog
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
