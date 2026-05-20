"use client";
import { useEffect, useState } from "react";

export default function StickyEnquiryButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToForm = () => {
        const element = document.getElementById("enquiry-form");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            className={`fixed bottom-10 right-10 z-[100] transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-50 pointer-events-none"
                }`}
        >
            <button
                onClick={scrollToForm}
                className="bg-[#5A2A1F] text-white px-8 py-5 rounded-full font-black text-lg shadow-[0_20px_50px_rgba(90,42,31,0.4)] flex items-center gap-3 hover:bg-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest border border-white/20"
            >
                <span className="w-3 h-3 bg-[#FFD700] rounded-full animate-pulse"></span>
                Get Quote Now
            </button>
        </div>
    );
}
