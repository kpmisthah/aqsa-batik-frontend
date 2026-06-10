"use client";

import React from "react";
import Nav from "@/modules/user/components/Nav";
import Image from "next/image";
import PremiumTrustSection from "@/modules/user/components/PremiumTrustSection";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import Link from "next/link";
import { useParams } from "next/navigation";

const BLOG_POSTS: Record<string, any> = {
    "the-art-of-hand-blocked-batik": {
        title: "The Art of Hand-Blocked Batik: A Master artisan's Journey",
        date: "May 15, 2024",
        category: "Craftsmanship",
        content: `
            <p className="text-xl leading-relaxed mb-6">
                Batik is more than just a printing technique; it is a labor of love that has been passed down through generations. The process begins with high-quality cotton fabric, which serves as the canvas for our master artisans. 
            </p>
            <p className="text-xl leading-relaxed mb-6">
                When you choose to buy <a href="/cotton-cloth" class="text-[#8B3A2B] font-bold underline">Batik Cloth online</a>, you are not just purchasing a garment; you are investing in a piece of heritage. Each block is placed with precision, ensuring that the wax creates a perfect resist for the dyes that follow.
            </p>
            <p className="text-xl leading-relaxed mb-6">
                Our collection of <a href="/batik-fabric" class="text-[#8B3A2B] font-bold underline">premium batik fabric</a> is curated to meet the needs of modern boutiques and designers who value authenticity and durability.
            </p>
        `,
        image: "/journal_craftsmanship.png"
    },
    "batik-fashion-trends-2024": {
        title: "Batik Fashion Trends 2024: From Tradition to Modern Chic",
        date: "June 2, 2024",
        category: "Fashion",
        content: `
            <p className="text-xl leading-relaxed mb-6">
                The world of fashion is constantly evolving, but some styles remain timeless. In 2024, we are seeing a resurgence of traditional prints in contemporary silhouettes.
            </p>
            <p className="text-xl leading-relaxed mb-6">
                Finding the best <a href="/cotton-cloth" class="text-[#8B3A2B] font-bold underline">Batik Cloth online</a> has never been easier. Designers are now experimenting with bolder color palettes like mustard, indigo, and charcoal, blending them with traditional motif patterns.
            </p>
            <p className="text-xl leading-relaxed mb-6">
                Whether you prefer the soft drape of cotton silk or the crispness of pure cotton <a href="/batik-fabric" class="text-[#8B3A2B] font-bold underline">batik fabric</a>, our latest collection has something for every style preference.
            </p>
        `,
        image: "/journal_fashion.png"
    }
};

export default function BlogPost() {
    const params = useParams();
    const slug = params.slug as string;
    const post = BLOG_POSTS[slug] || BLOG_POSTS["the-art-of-hand-blocked-batik"];

    return (
        <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] selection:bg-[#5A2A1F] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap');
                .font-playfair { font-family: 'Playfair Display', serif; }
                .font-sans { font-family: 'Playfair Display', serif; }
            `}</style>

            <Nav />

            <main className="pt-40 pb-24 px-6">
                <article className="max-w-4xl mx-auto">
                    <div className="mb-12 flex flex-col gap-6 items-center text-center">
                        <span className="text-sm font-black uppercase tracking-[0.4em] text-[#8B3A2B]">{post.category}</span>
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
                        <p className="text-[#5A2A1F]/40 font-bold uppercase tracking-widest text-base">{post.date} • By Aqsha Editorial Team</p>
                    </div>

                    <div className="relative aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl mb-16">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                </article>

                <GoogleReviewBar />

                <article className="max-w-4xl mx-auto pt-24">
                    <div
                        className="prose prose-xl prose-stone max-w-none text-[#5A2A1F]/80 font-medium"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-20 pt-12 border-t border-[#5A2A1F]/10 flex flex-col gap-10">
                        <h3 className="font-playfair text-3xl font-bold italic">Enjoyed this article?</h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/cotton-cloth" className="bg-[#5A2A1F] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#8B3A2B] transition-colors">Shop Batik Cloth</Link>
                            <Link href="/batik-fabric" className="bg-white text-[#5A2A1F] border border-[#5A2A1F]/20 px-8 py-4 rounded-xl font-bold hover:bg-[#F5F1EC] transition-colors">Explore Fabrics</Link>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}
