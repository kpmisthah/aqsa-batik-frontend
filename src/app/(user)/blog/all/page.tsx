import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Nav from "@/modules/user/components/Nav";
import Footer from "@/modules/user/components/Footer";
import ScrollObserver from "@/modules/user/components/ScrollObserver";

export const metadata: Metadata = {
    title: 'All Articles | Women Clothing & Batik Cotton Dress for Women Blog',
    description: 'Browse our complete collection of fashion insights, Batik Cotton Dress for Women guides, and women clothing trends.',
};

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function getBlogs() {
    try {
        const res = await fetch(`${API_BASE}/blogs`, { cache: 'no-store' });
        const json = await res.json();
        return json.data || [];
    } catch (e) {
        return [];
    }
}

export default async function AllBlogsPage() {
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

    return (
        <div className="bg-[#FDFBF7] min-h-screen font-body text-primary">
            <Nav />
            <ScrollObserver />

            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Link href="/blog" className="text-secondary font-bold text-sm uppercase tracking-widest hover:underline mb-8 inline-block">&larr; Back to Blog Overview</Link>
                        
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-[#8A9A86]"></span>
                            <h3 className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-primary/60">
                                Complete Archive
                            </h3>
                            <span className="w-12 h-[1px] bg-[#8A9A86]"></span>
                        </div>
                        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">All Articles</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post: any, i: number) => {
                            const isOnlyOneLastLg = blogPosts.length % 3 === 1 && i === blogPosts.length - 1;
                            const isOnlyOneLastMd = blogPosts.length % 2 === 1 && i === blogPosts.length - 1;
                            
                            return (
                                <Link 
                                    key={i} 
                                    href={`/blog/${post.slug}`} 
                                    className={`group bg-white rounded-xl border border-primary/10 overflow-hidden hover:shadow-xl transition-shadow flex flex-col 
                                    ${isOnlyOneLastLg ? "lg:col-start-2" : ""} 
                                    ${isOnlyOneLastMd ? "md:[grid-column:1/-1] md:justify-self-center md:w-[calc(50%-1rem)] lg:w-full lg:col-auto lg:justify-self-auto" : ""}`}
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-white">
                                        <Image src={post.image} alt={post.title} layout="fill" objectFit="contain" className="group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                                        <h4 className="font-heading text-lg md:text-[22px] font-bold text-primary mb-3 group-hover:text-[#8A9A86] transition-colors leading-tight line-clamp-2">{post.title}</h4>
                                        <p className="text-xs md:text-sm text-primary/70 mb-4 md:mb-6 flex-grow line-clamp-2">{post.excerpt}</p>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary/10">
                                            <div className="flex items-center gap-3 text-xs font-medium text-primary/60">
                                                <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> {post.readTime}</span>
                                                <span>•</span>
                                                <span>{post.date}</span>
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-primary group-hover:text-[#8A9A86] transition-colors">Read More &rarr;</span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
