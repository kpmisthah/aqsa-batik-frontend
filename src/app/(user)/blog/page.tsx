"use client";
import React from 'react';
import Nav from '@/modules/user/components/Nav';
import Footer from '@/modules/user/components/Footer';
import Image from 'next/image';

const blogPosts = [
    {
        title: "The Art of Traditional Wax Batik in Ujjain",
        excerpt: "Discover the centuries-old process behind the vibrant patterns of Bherugarh batik and why it remains a favorite for cotton dress material.",
        category: "Heritage",
        date: "May 15, 2026",
        image: "/history.png",
        slug: "art-of-traditional-wax-batik"
    },
    {
        title: "Why Pure 60x60 Cotton is Best for Daily Wear",
        excerpt: "Exploring the science of fabric comfort—how our premium cotton ensures breathability and durability for Indian climates.",
        category: "Fabric Guide",
        date: "May 10, 2026",
        image: "/batik_fabric_hero.png",
        slug: "why-60x60-cotton-is-best"
    },
    {
        title: "5 Trending Batik Cloth Styles for Your Boutique",
        excerpt: "From floral patterns to geometric block prints, stay ahead of the fashion curve with these must-have batik clothing designs.",
        category: "Styling",
        date: "May 05, 2026",
        image: "/new_arrival_hero.png",
        slug: "trending-batik-suit-styles"
    },
    {
        title: "How to Choose a Reliable Batik Wholesale Supplier",
        excerpt: "A business guide for boutique owners and resellers on finding manufacturers who deliver consistent quality and scalable supply.",
        category: "Business",
        date: "April 28, 2026",
        image: "/cta_suits.png",
        slug: "choosing-reliable-wholesale-supplier"
    }
];

export default function BlogIndexPage() {
    return (
        <div className="bg-[#F5F1EC] min-h-screen font-sans text-[#5A2A1F]">
            <Nav />

            {/* ── HERO ── */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col gap-8 text-center">
                    <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.5em]">Editorial Corner</span>
                    <h1 className="font-playfair text-6xl md:text-9xl font-bold leading-tight">The <span className='hero-highlight'>Batik Journal</span></h1>
                    <p className="text-xl md:text-2xl opacity-60 font-medium italic max-w-3xl mx-auto">
                        Insights into the heritage of batik, styling guides for modern women, and strategic sourcing tips for wholesale buyers.
                    </p>
                </div>
            </section>

            {/* ── FEATURED POST ── */}
            <section className="pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <a href={`/blog/${blogPosts[0].slug}`} className="group relative block rounded-[60px] overflow-hidden bg-white shadow-2xl border border-[#5A2A1F]/5 h-[600px]">
                        <Image src={blogPosts[0].image} alt={blogPosts[0].title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-[3s] brightness-75" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-10 md:p-20 flex flex-col gap-6 text-white max-w-4xl">
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#FFD700]">{blogPosts[0].category} • {blogPosts[0].date}</span>
                            <h2 className="font-playfair text-4xl md:text-6xl font-bold leading-tight">{blogPosts[0].title}</h2>
                            <p className="text-lg opacity-80 line-clamp-2 font-medium">{blogPosts[0].excerpt}</p>
                            <span className="text-sm font-black uppercase tracking-widest border-b-2 border-white/40 pb-1 w-fit group-hover:border-[#FFD700] transition-colors">Read Featured Story</span>
                        </div>
                    </a>
                </div>
            </section>

            {/* ── BLOG GRID ── */}
            <section className="pb-40 px-6">
                <div className="max-w-7xl mx-auto flex flex-col gap-20">
                    <div className="flex justify-between items-center border-b border-[#5A2A1F]/10 pb-10">
                        <h3 className="font-playfair text-4xl font-bold">Latest Stories</h3>
                        <div className="flex gap-4">
                            {["All", "Heritage", "Styling", "Business"].map((cat, i) => (
                                <button key={i} className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-[#5A2A1F] text-white' : 'bg-white text-[#5A2A1F]/40 hover:bg-[#5A2A1F]/5'}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogPosts.slice(1).map((post, i) => (
                            <a key={i} href={`/blog/${post.slug}`} className="group flex flex-col gap-8">
                                <div className="relative h-[400px] rounded-[45px] overflow-hidden shadow-xl border border-[#5A2A1F]/5">
                                    <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="group-hover:scale-110 transition-all duration-[3s]" />
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-[#5A2A1F]">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 px-4">
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{post.date}</span>
                                    <h4 className="font-playfair text-3xl font-bold leading-tight group-hover:text-[#8B3A2B] transition-colors">{post.title}</h4>
                                    <p className="text-base opacity-60 line-clamp-3 font-medium leading-relaxed">{post.excerpt}</p>
                                    <span className="text-xs font-black uppercase tracking-widest text-[#8B3A2B] flex items-center gap-2 mt-2">
                                        Read Article
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── NEWSLETTER ── */}
            <section className="pb-40 px-6">
                <div className="max-w-7xl mx-auto bg-white rounded-[60px] p-12 md:p-32 text-center flex flex-col gap-8 shadow-2xl relative overflow-hidden border border-[#5A2A1F]/5">
                    <div className="absolute inset-0 bg-pattern opacity-[0.02]"></div>
                    <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.5em] relative z-10">Batik Insider</span>
                    <h2 className="font-playfair text-5xl md:text-7xl font-bold leading-tight relative z-10">Get the Latest <br /> Collections & Insights</h2>
                    <p className="text-xl opacity-60 font-medium italic relative z-10 max-w-2xl mx-auto">Subscribe to our newsletter to receive styling tips, manufacturing updates, and early access to new arrival batik dresses.</p>
                    <div className="max-w-lg mx-auto w-full flex flex-col md:flex-row gap-4 relative z-10 mt-6">
                        <input type="email" placeholder="Enter your business email" className="flex-grow bg-[#F5F1EC] border-none rounded-2xl py-6 px-8 text-sm font-bold focus:ring-4 focus:ring-[#5A2A1F]/10 transition-all" />
                        <button className="bg-[#5A2A1F] text-white px-10 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">Join Now</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
