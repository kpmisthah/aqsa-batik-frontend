"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function BlogContent({ content }: { content: string }) {
    const router = useRouter();
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleLinkClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a");

            if (anchor && anchor.href) {
                const url = new URL(anchor.href);
                // Check if it's an internal link
                if (url.origin === window.location.origin) {
                    e.preventDefault();
                    router.push(url.pathname + url.search + url.hash);
                }
            }
        };

        const currentRef = contentRef.current;
        if (currentRef) {
            currentRef.addEventListener("click", handleLinkClick);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener("click", handleLinkClick);
            }
        };
    }, [router]);

    return (
        <div
            ref={contentRef}
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
