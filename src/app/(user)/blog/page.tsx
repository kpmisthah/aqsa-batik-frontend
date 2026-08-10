import React from 'react';
import Nav from '@/modules/user/components/Nav';
import Footer from '@/modules/user/components/Footer';
import FAQ from '@/modules/user/components/FAQ';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { categories, faqs } from '@/data/blogPosts';
import ScrollObserver from "@/modules/user/components/ScrollObserver";
import ScrollIndicator from "@/modules/user/components/ScrollIndicator";
import WavyHero from "@/modules/user/components/WavyHero";


export const metadata: Metadata = {
    title: 'Women Clothing & Batik Fabric Blog | Fashion Trends & Buying Guides',
    description: 'Explore women clothing trends, batik fabric guides, cotton dresses for women, indian dresses, wholesale buying tips, and fashion insights from Aqsha Batik.',
};

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function getHeroBanner() {
    try {
        const res = await fetch(`${API_BASE}/banners/blog`, { cache: 'no-store' });
        const json = await res.json();
        return json.imageUrl || "/cotton dress for women hero banner image .webp";
    } catch (e) {
        return "/cotton dress for women hero banner image .webp";
    }
}

async function getBlogs() {
    try {
        const res = await fetch(`${API_BASE}/blogs`, { cache: 'no-store' });
        const json = await res.json();
        return json.data || [];
    } catch (e) {
        return [];
    }
}

export default async function BlogIndexPage() {
    const heroBannerUrl = await getHeroBanner();
    const apiBlogs = await getBlogs();

    // Map database blog format to frontend structure
    const blogPosts = apiBlogs.map((blog: any) => ({
        title: blog.title,
        excerpt: blog.excerpt || "",
        category: blog.category || "General",
        date: new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        readTime: "5 min read",
        image: blog.featuredImg || "/dummy.png",
        slug: blog.slug
    }));

    const displayedBlogs = blogPosts.slice(0, 6);

    return (
        <div className="bg-cream min-h-screen font-body text-primary">
            <Nav />
            <ScrollObserver />
            <WavyHero
                pillText="Home > Blog"
                pillHighlight=""
                title={
                    <>
                        <span className='text-accent'>Women Clothing</span>, Batik Fabric <br className="hidden md:block" /> &amp; <span className='text-accent'>Fashion Trends</span> Blog
                    </>
                }
                description="Explore expert insights on women clothing, batik fabric, batik cloth, cotton dresses for women, and the latest fashion trends. Learn how to choose premium fabrics, discover stylish women clothing collections, and stay updated with wholesale buying guides directly from manufacturers."
                imageSrc="/blog_wavy_hero.png" // Updated image
                imageAlt="Women Clothing &amp; Batik Fashion Trends Blog"
                buttons={
                    <>
                        <a href="#articles" className="bg-accent hover:bg-accent/90 text-white px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors shadow-sm">
                            Explore Articles
                        </a>
                        <a href="/wholesale" className="border border-primary/15 hover:border-accent text-primary px-7 py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 transition-colors bg-transparent hover:text-accent">
                            Get Wholesale Catalogue
                        </a>
                    </>
                }
            />

            {/* ── FEATURED ARTICLE ── */}
            <section className="scroll-animate py-20 px-6 bg-cream">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-sm border border-primary/10 overflow-hidden flex flex-col lg:flex-row">
                        <div className="lg:w-[55%] relative h-[250px] md:h-[350px] lg:h-auto">
                            <Image src="/indian dresses for girls.webp" alt="Featured Article" layout="fill" objectFit="cover" className="object-top" />
                        </div>
                        <div className="lg:w-[45%] p-10 lg:p-16 flex flex-col justify-center">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Featured Article</span>
                            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-primary mb-6">
                                How To Choose Premium Batik Fabric For Women Clothing Collections
                            </h2>
                            <div className="flex items-center gap-4 text-sm opacity-60 mb-6 font-medium">
                                <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 5 min read</span>
                                <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> June 11, 2026</span>
                            </div>
                            <p className="text-primary/80 leading-relaxed mb-8">
                                Discover how retailers and wholesalers select high-quality batik fabric, cotton fabric for kurti, and printed cotton fabric for kurtis that attract customers and increase repeat sales.
                            </p>
                            <Link href="/blog/best-dress-material-guide-cotton-cloth" className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:text-secondary transition-colors w-fit">
                                Read Full Article <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CATEGORY SECTION ── */}
            <section className="scroll-animate py-16 px-6 bg-cream">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 flex items-center justify-center gap-4">
                        <span className="w-12 h-[1px] bg-primary/20"></span>
                        <h3 className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-accent">
                            Explore By Category
                        </h3>
                        <span className="w-12 h-[1px] bg-primary/20"></span>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8 max-w-7xl mx-auto w-full">
                        {categories.map((cat, i) => (
                            <div key={i} className="bg-white rounded-[24px] p-8 md:p-10 lg:p-12 border border-border flex flex-col items-center text-center gap-6 group hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:border-transparent h-full">
                                <div className="text-secondary group-hover:scale-110 transition-transform duration-500 relative z-10 w-fit h-fit mx-auto">
                                    <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={cat.icon}></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col flex-1 relative z-10 w-full justify-between">
                                    <div className="flex flex-col gap-1.5 sm:gap-3 md:gap-4">
                                        <h4 className="font-heading text-sm sm:text-lg md:text-xl text-primary font-normal tracking-wide">{cat.title}</h4>
                                        <p className="text-[10px] sm:text-xs md:text-sm text-primary/80 leading-relaxed font-medium tracking-wide">{cat.description}</p>
                                    </div>
                                    <div className="mt-4 sm:mt-8 flex items-center justify-center gap-1.5 sm:gap-2 text-accent text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span>View Collection</span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LATEST ARTICLES ── */}
            <section id="articles" className="scroll-animate py-20 px-6 bg-cream">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-primary/20"></span>
                            <h3 className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-accent">
                                Latest Articles
                            </h3>
                            <span className="w-12 h-[1px] bg-primary/20"></span>
                        </div>
                        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-normal text-primary mb-6">Latest Women Clothing &amp; Batik Fashion Articles</h2>
                        <p className="text-primary/90 max-w-2xl mx-auto">Stay informed with expert articles covering women clothing India, batik suit designs, indian dresses for girls, and premium fabric buying guides.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedBlogs.map((post: any, i: number) => {
                            const isOnlyOneLastLg = displayedBlogs.length % 3 === 1 && i === displayedBlogs.length - 1;
                            const isOnlyOneLastMd = displayedBlogs.length % 2 === 1 && i === displayedBlogs.length - 1;
                            
                            return (
                            <Link 
                                key={i} 
                                href={`/blog/${post.slug}`} 
                                className={`group flex flex-col gap-5 md:gap-6 block hover:-translate-y-1 transition-transform duration-300 
                                ${isOnlyOneLastLg ? "lg:col-start-2" : ""} 
                                ${isOnlyOneLastMd ? "md:[grid-column:1/-1] md:justify-self-center md:w-[calc(50%-1rem)] lg:w-full lg:col-auto lg:justify-self-auto" : ""}`}
                            >
                                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-[24px] overflow-hidden border border-border bg-white">
                                    <Image src={post.image} alt={post.title} layout="fill" objectFit="contain" className="group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex flex-col flex-grow px-2">
                                    <h4 className="font-heading text-lg md:text-[22px] font-normal text-primary mb-3 group-hover:text-accent transition-colors leading-tight line-clamp-2">{post.title}</h4>
                                    <p className="text-xs md:text-sm text-primary/80 mb-4 md:mb-6 flex-grow line-clamp-2">{post.excerpt}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-3 text-xs font-medium text-primary/60">
                                            <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> {post.readTime}</span>
                                            <span>•</span>
                                            <span>{post.date}</span>
                                        </div>
                                        <span className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mt-2 group-hover:text-accent transition-colors duration-300">Read More <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
                                    </div>
                                </div>
                            </Link>
                            );
                        })}
                    </div>
                    
                    {blogPosts.length > 6 && (
                        <div className="mt-12 flex justify-center">
                            <Link 
                                href="/blog/all"
                                className="bg-accent text-primary px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:-translate-y-1 hover:shadow-xl transition-all shadow-sm active:scale-95 text-xs md:text-sm"
                            >
                                Read More Articles
                            </Link>
                        </div>
                    )}

                </div>
            </section>

            {/* ── TRUST SECTION ── */}
            <section className="scroll-animate py-20 px-6 bg-cream">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 w-full">
                            <span className="w-12 h-[1px] bg-primary/20"></span>
                            <h3 className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-accent">
                                Why Trust Aqsha Batik?
                            </h3>
                            <span className="w-12 h-[1px] bg-primary/20"></span>
                        </div>
                        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-normal text-primary mb-4 sm:mb-6">Why Fashion Retailers Trust Aqsha Batik</h2>
                        <p className="text-primary/90 text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0">For over 15 years, Aqsha Batik has supplied premium batik fabric, batik cloth, and women clothing collections to retailers, wholesalers, and growing fashion brands across India.</p>

                        <div className="grid grid-cols-2 gap-3 md:gap-6 w-full">
                            {[
                                { title: "Direct Manufacturer", desc: "No middleman, better quality & pricing", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                                { title: "15+ Years Experience", desc: "Trusted by 1000+ retailers across India", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                                { title: "1000+ Happy Buyers", desc: "Long-term relationships built on trust", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                                { title: "Premium Quality Control", desc: "Strict quality checks at every stage", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-4 bg-white p-3 sm:p-5 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-8 h-8 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center bg-cream text-accent rounded-full border border-primary/5">
                                        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon}></path></svg>
                                    </div>
                                    <div className="flex flex-col gap-1 sm:gap-0">
                                        <h4 className="font-bold text-primary text-[11px] sm:text-sm md:text-base mb-0 sm:mb-1 leading-tight">{item.title}</h4>
                                        <p className="text-[9px] sm:text-xs md:text-sm text-primary/80 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg text-center border border-primary/5">
                            <h4 className="font-heading text-2xl font-normal text-primary mb-6">Looking for bulk order or custom requirements?</h4>
                            <a href="https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20wholesale%20pricing" target="_blank" rel="noreferrer" className="block w-full bg-primary text-white px-6 py-4 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-primary transition-colors text-center">
                                Request Wholesale Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── NEWSLETTER ── */}
            <section className="scroll-animate py-20 px-6 bg-cream">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-tan rounded-[32px] p-8 md:p-12 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                        <div className="flex items-start gap-4 md:gap-6 md:w-1/2 relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-heading text-xl md:text-2xl font-normal text-primary leading-tight">Join The Insider Design Newsletter</h3>
                                <p className="text-sm md:text-base text-primary/90 leading-relaxed font-normal">Get exclusive updates on batik fabric collections, trending women's fashion, and wholesale buying opportunities.</p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 relative z-10">
                            <form action="https://wa.me/918815373767" target="_blank" className="flex flex-col sm:flex-row w-full gap-2 p-1.5 bg-white/60 backdrop-blur-md rounded-2xl sm:rounded-full border border-white/60 shadow-sm">
                                <input type="email" name="email" placeholder="Enter your email address" className="flex-grow px-6 py-4 sm:py-0 rounded-2xl sm:rounded-full outline-none text-primary placeholder:text-primary/50 bg-transparent font-medium" required />
                                <button type="submit" className="bg-primary text-white px-8 py-4 sm:py-3.5 rounded-xl sm:rounded-full font-bold text-sm uppercase tracking-wider hover:bg-black transition-colors whitespace-nowrap shadow-md">
                                    Subscribe Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ items={faqs} />

            {/* ── FINAL CTA ── */}
            <section className="scroll-animate py-24 px-6 bg-cream border-t border-primary/10">
                <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 md:p-16 text-center border border-primary/10 shadow-sm flex flex-col items-center">
                    <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-normal text-primary mb-4 leading-tight">Looking For Premium Batik Fabric &amp; Women Clothing At Wholesale Prices?</h2>
                    <p className="text-primary/80 text-base md:text-lg mb-10 max-w-2xl font-medium">Partner directly with a trusted manufacturer for premium batik fabric, batik cloth, women clothing, indian dresses, and wholesale fashion collections.</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                        <a href="https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20get%20your%20latest%20batik%20catalogue." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest transition-colors shadow-sm w-full md:w-auto">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.496.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" /></svg>
                            Get Catalogue On WhatsApp
                        </a>
                        <a href="https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20wholesale%20pricing" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 border border-primary/20 text-primary px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest hover:border-accent hover:text-accent transition-colors w-full md:w-auto bg-transparent">
                            Request Wholesale Pricing
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
