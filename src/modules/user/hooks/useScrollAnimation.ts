"use client";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

export function useScrollAnimation() {
    const pathname = usePathname();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Stop observing once visible to only play once
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.02,
        });

        const observeElements = () => {
            const elements = document.querySelectorAll('.scroll-animate:not(.is-visible)');
            elements.forEach((el) => observer.observe(el));
        };

        // Initial check and observe
        observeElements();

        // Use MutationObserver to catch elements that are rendered incrementally or streamed
        const mutationObserver = new MutationObserver(() => {
            observeElements();
        });
        
        // Only observe body if it's available (client-side)
        if (typeof document !== "undefined") {
            mutationObserver.observe(document.body, { childList: true, subtree: true });
        }

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, [pathname]);
}

export function useParallax() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return offset;
}
