import React from 'react';
import Nav from '@/modules/user/components/Nav';
import Footer from '@/modules/user/components/Footer';
import FAQ from '@/modules/user/components/FAQ';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, categories, faqs } from '@/data/blogPosts';


export const metadata: Metadata = {
    title: 'Women Clothing & Batik Fabric Blog | Fashion Trends & Buying Guides',
    description: 'Explore women clothing trends, batik fabric guides, cotton dresses for women, indian dresses, wholesale buying tips, and fashion insights from Aqsha Batik.',
};







export default function BlogIndexPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen font-sans text-[#3B1C14]">
            <Nav />

            {/* ── HERO BANNER ── */}
            <section className="relative min-h-[60svh] md:min-h-screen w-full flex items-end md:items-center pb-8 md:pb-0 overflow-hidden bg-[#5A2A1F] pt-24 md:pt-0">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/cotton dress for women hero banner image .webp"
                        alt="Women Clothing & Batik Fashion Trends Blog"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-[75%_top] md:object-center brightness-[0.8] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/40 via-black/40 to-black/90 md:from-black/90 md:via-black/50 md:to-transparent shadow-2xl"></div>
                </div>

                <div className="relative z-10 max-w-[1500px] mx-auto px-5 md:px-10 w-full flex justify-start text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col gap-4 md:gap-10 items-start text-left max-w-5xl">
                        <div className="flex items-center gap-2 md:gap-4 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-6 md:py-2 rounded-full border border-white/20 w-fit">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                            <span className="text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Home &gt; Blog</span>
                        </div>

                        <div className="flex flex-col gap-2 md:gap-6">
                            <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                                <span className='hero-highlight'>Women Clothing,</span> Batik Fabric <br className="hidden md:block" /> &amp; <span className='hero-highlight'>Fashion Trends Blog</span>
                            </h1>
                            <p className="font-playfair text-xs md:text-2xl font-medium tracking-tight opacity-95 leading-[1.3] md:leading-relaxed mt-1 md:mt-2 max-w-[280px] md:max-w-4xl">
                                Explore expert insights on women clothing, batik fabric, batik cloth, cotton dresses for women, and the latest fashion trends. Learn how to choose premium fabrics, discover stylish women clothing collections, and stay updated with wholesale buying guides directly from manufacturers.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-6 pt-2 md:pt-10 items-start justify-start w-full">
                            <a href="#articles" className="inline-block bg-[#FFD700] text-[#5A2A1F] px-4 py-3 md:px-8 md:py-4.5 rounded-[10px] md:rounded-[18px] font-black text-sm md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider border-b-2 md:border-b-4 border-black/10 w-full sm:w-auto text-center">
                                Explore Articles
                            </a>
                            <a href="/wholesale" className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-4 py-3 md:px-8 md:py-4.5 rounded-[10px] md:rounded-[18px] font-black text-sm md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:bg-white hover:text-[#5A2A1F] active:scale-95 transition-all duration-300 uppercase tracking-wider w-full sm:w-auto text-center">
                                Get Wholesale Catalogue
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FEATURED ARTICLE ── */}
            <section className="py-20 px-6 bg-[#FDFBF7]">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-sm border border-[#5A2A1F]/10 overflow-hidden flex flex-col lg:flex-row">
                        <div className="lg:w-[55%] relative h-[250px] md:h-[350px] lg:h-auto">
                            <Image src="/indian dresses for girls.webp" alt="Featured Article" layout="fill" objectFit="cover" className="object-top" />
                        </div>
                        <div className="lg:w-[45%] p-10 lg:p-16 flex flex-col justify-center">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#5A2A1F] mb-4">Featured Article</span>
                            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#3B1C14] mb-6">
                                How To Choose Premium Batik Fabric For Women Clothing Collections
                            </h2>
                            <div className="flex items-center gap-4 text-sm opacity-60 mb-6 font-medium">
                                <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 5 min read</span>
                                <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> June 11, 2026</span>
                            </div>
                            <p className="text-[#3B1C14]/80 leading-relaxed mb-8">
                                Discover how retailers and wholesalers select high-quality batik fabric, cotton fabric for kurti, and printed cotton fabric for kurtis that attract customers and increase repeat sales.
                            </p>
                            <Link href="/blog/choose-premium-batik-fabric" className="text-[#3B1C14] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:text-[#8B3A2B] transition-colors w-fit">
                                Read Full Article <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CATEGORY SECTION ── */}
            <section className="py-16 px-6 bg-[#FDFBF7]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 flex items-center justify-center gap-4">
                        <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B1C14]">
                            Explore By Category
                        </h3>
                        <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                        {categories.map((cat, i) => (
                            <div key={i} className="bg-white p-3 md:p-8 rounded-xl border border-[#5A2A1F]/10 text-center flex flex-col items-center hover:shadow-lg transition-shadow">
                                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#FDFBF7] flex items-center justify-center text-[#D4AF37] mb-3 md:mb-6 shadow-sm border border-[#5A2A1F]/5">
                                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={cat.icon}></path>
                                    </svg>
                                </div>
                                <h4 className="font-playfair text-base md:text-xl font-bold text-[#3B1C14] mb-4">{cat.title}</h4>
                                <p className="text-xs md:text-sm text-[#3B1C14]/70 mb-3 md:mb-6 flex-grow line-clamp-3">{cat.description}</p>
                                <a href={cat.link} className="text-xs font-bold uppercase tracking-wider text-[#3B1C14] hover:text-[#D4AF37] transition-colors flex items-center gap-1 mt-auto">
                                    View Articles &rarr;
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LATEST ARTICLES ── */}
            <section id="articles" className="py-20 px-6 bg-[#FDFBF7]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B1C14]">
                                Latest Articles
                            </h3>
                            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                        </div>
                        <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#3B1C14] mb-6">Latest Women Clothing &amp; Batik Fashion Articles</h2>
                        <p className="text-[#3B1C14]/70 max-w-2xl mx-auto">Stay informed with expert articles covering women clothing India, batik suit designs, indian dresses for girls, and premium fabric buying guides.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, i) => (
                            <Link key={i} href={`/blog/${post.slug}`} className="group bg-white rounded-xl border border-[#5A2A1F]/10 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                                    <Image src={post.image} alt={post.title} layout="fill" objectFit="contain" className="group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-4 md:p-6 flex flex-col flex-grow">
                                    <h4 className="font-playfair text-lg md:text-[22px] font-bold text-[#3B1C14] mb-3 group-hover:text-[#D4AF37] transition-colors leading-tight line-clamp-2">{post.title}</h4>
                                    <p className="text-xs md:text-sm text-[#3B1C14]/70 mb-4 md:mb-6 flex-grow line-clamp-2">{post.excerpt}</p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#5A2A1F]/10">
                                        <div className="flex items-center gap-3 text-xs font-medium text-[#3B1C14]/60">
                                            <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> {post.readTime}</span>
                                            <span>•</span>
                                            <span>{post.date}</span>
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-[#3B1C14] group-hover:text-[#D4AF37] transition-colors">Read More &rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── TRUST SECTION ── */}
            <section className="py-20 px-6 bg-[#F5F1EC]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-2/3">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B1C14]">
                                Why Trust Aqsha Batik?
                            </h3>
                        </div>
                        <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#3B1C14] mb-6">Why Fashion Retailers Trust Aqsha Batik</h2>
                        <p className="text-[#3B1C14]/80 text-base md:text-lg mb-8 md:mb-10 max-w-2xl">For over 15 years, Aqsha Batik has supplied premium batik fabric, batik cloth, and women clothing collections to retailers, wholesalers, and growing fashion brands across India.</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "Direct Manufacturer", desc: "No middleman, better quality & pricing", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                                { title: "15+ Years Experience", desc: "Trusted by 1000+ retailers across India", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                                { title: "1000+ Happy Buyers", desc: "Long-term relationships built on trust", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                                { title: "Premium Quality Control", desc: "Strict quality checks at every stage", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="w-10 h-10 mb-3 flex items-center justify-center text-[#D4AF37]">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon}></path></svg>
                                    </div>
                                    <h4 className="font-bold text-[#3B1C14] text-sm mb-1">{item.title}</h4>
                                    <p className="text-xs text-[#3B1C14]/60 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg text-center border border-[#5A2A1F]/5">
                            <h4 className="font-playfair text-2xl font-bold text-[#3B1C14] mb-6">Looking for bulk order or custom requirements?</h4>
                            <a href="https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20wholesale%20pricing" target="_blank" rel="noreferrer" className="block w-full bg-[#3B1C14] text-white px-6 py-4 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-[#5A2A1F] transition-colors text-center">
                                Request Wholesale Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── NEWSLETTER ── */}
            <section className="py-20 px-6 bg-[#E8DCCB]">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex items-start gap-6 md:w-1/2">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                            <svg className="w-6 h-6 text-[#3B1C14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                            <h3 className="font-playfair text-lg md:text-2xl font-bold text-[#3B1C14] mb-2 uppercase tracking-wide">Stay Updated With Women Clothing & Batik Fashion Trends</h3>
                            <p className="text-[#3B1C14]/80 text-sm leading-relaxed">Get the latest updates on batik fabric collections, indian dresses, cotton dresses for women, and wholesale fashion opportunities delivered directly to your inbox.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <form action="https://wa.me/918815373767" target="_blank" className="flex flex-col sm:flex-row w-full gap-2">
                            <input type="email" name="email" placeholder="Enter your email address" className="flex-grow px-6 py-4 rounded-md outline-none text-[#3B1C14] placeholder:text-[#3B1C14]/40 shadow-sm" required />
                            <button type="submit" className="bg-[#3B1C14] text-white px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-[#5A2A1F] transition-colors shadow-sm whitespace-nowrap">
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <FAQ items={faqs} />

            {/* ── FINAL CTA ── */}
            <section className="py-20 px-6 bg-[#3B1C14] text-white">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="lg:w-2/3 text-left">
                        <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Looking For Premium Batik Fabric &amp; Women Clothing At Wholesale Prices?</h2>
                        <p className="text-white/80 text-base md:text-lg">Partner directly with a trusted manufacturer for premium batik fabric, batik cloth, women clothing, indian dresses, and wholesale fashion collections.</p>
                    </div>
                    <div className="lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-4 w-full">
                        <a href="https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20get%20your%20latest%20batik%20catalogue." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] px-6 py-4 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-[#25D366] hover:text-white transition-colors text-center w-full">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.496.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" /></svg>
                            Get Catalogue On WhatsApp
                        </a>
                        <a href="https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20wholesale%20pricing" target="_blank" rel="noreferrer" className="block border border-white text-white px-6 py-4 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#3B1C14] transition-colors text-center w-full">
                            Request Wholesale Pricing
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}
