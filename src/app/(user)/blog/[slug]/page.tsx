import React from "react";
import Nav from "@/modules/user/components/Nav";
import Footer from "@/modules/user/components/Footer";
import Image from "next/image";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import Link from "next/link";
import FAQ from "@/modules/user/components/FAQ";
import BlogContent from "./BlogContent";

import { faqs } from "@/data/blogPosts";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function getBlogBySlug(slug: string) {
    try {
        const res = await fetch(`${API_BASE}/blogs/slug/${slug}`, { cache: 'no-store' });
        if (!res.ok) return null;
        return await res.json();
    } catch (e) {
        return null;
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = await getBlogBySlug(resolvedParams.slug);
    if (!post) return { title: "Blog Post" };

    return {
        title: post.metaTitle || post.title,
        description: post.metaDesc || post.excerpt,
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const backendPost = await getBlogBySlug(slug);

    if (!backendPost) {
        return (
            <div className="min-h-screen bg-cream text-primary flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
                    <Link href="/blog" className="text-accent hover:underline">Return to Blogs</Link>
                </div>
            </div>
        );
    }

    const post = {
        title: backendPost.title,
        category: backendPost.category || "General",
        date: new Date(backendPost.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        author: backendPost.author || "Admin",
        image: backendPost.featuredImg || "/dummy.png",
        content: backendPost.content || ""
    };

    return (
        <div className="min-h-screen bg-cream text-primary selection:bg-primary selection:text-white">
            <style>{`
                .blog-content { color: #3B1C14; line-height: 1.8; font-size: 1.125rem; }
                .blog-content p { margin-bottom: 1.75rem; opacity: 0.9; }
                .blog-content h2 {  font-family: var(--font-heading); font-size: clamp(1.5rem, 4vw, 2rem); font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #1A1A1A; line-height: 1.2; }
                .blog-content h3 { font-family: var(--font-heading); font-size: clamp(1.125rem, 3vw, 1.25rem); font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #1A1A1A; }
                .blog-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 2rem; opacity: 0.9; }
                .blog-content li { margin-bottom: 0.75rem; }
                .blog-content a { color: #2563EB; font-weight: 700; text-decoration: underline; text-underline-offset: 4px; transition: color 0.2s ease; }
                .blog-content a:visited { color: #2563EB; }
                .blog-content a:hover { color: #1D4ED8; }
                .blog-content img { max-width: 100%; height: auto; border-radius: 1.5rem; margin-top: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); display: inline-block; }
                .blog-content table { width: 100%; border-collapse: separate; border-spacing: 0; margin: 2rem 0; font-size: 1rem; }
                .blog-content th { background-color: #E5E0D8; color: #1A1A1A; font-weight: 700; text-align: left; padding: 1rem 1.5rem; border-bottom: 2px solid rgba(90, 42, 31, 0.1); }
                .blog-content th:first-child { border-top-left-radius: 1rem; }
                .blog-content th:last-child { border-top-right-radius: 1rem; }
                .blog-content td { padding: 1rem 1.5rem; border-bottom: 1px solid rgba(90, 42, 31, 0.05); background-color: white; }
                .blog-content tr:last-child td:first-child { border-bottom-left-radius: 1rem; }
                .blog-content tr:last-child td:last-child { border-bottom-right-radius: 1rem; }
                .blog-content td:first-child { font-weight: 600; color: #1A1A1A; }
                .blog-content .faq-section { background-color: white; padding: 2.5rem; border-radius: 1.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05); margin-top: 4rem; border: 1px solid rgba(90, 42, 31, 0.05); }
                .blog-content .faq-section h2 { margin-top: 0; text-align: center; }
                
                /* Quill Content Alignment Classes */
                .blog-content .ql-align-center { text-align: center; }
                .blog-content .ql-align-right { text-align: right; }
                .blog-content .ql-align-justify { text-align: justify; }
                
                /* Ensure images within center aligned blocks render properly */
                .blog-content .ql-align-center img { display: inline-block; }

            `}</style>

            <Nav />

            <main className="pt-40">
                <article className="max-w-4xl mx-auto px-6">
                    <div className="mb-12 flex flex-col gap-6 items-center text-center">
                        <span className="text-sm font-black uppercase tracking-[0.4em] text-secondary">{post.category}</span>
                        <h1 className="font-heading text-2xl md:text-4xl font-bold leading-tight">{post.title}</h1>
                        <p className="text-primary/80 font-bold uppercase tracking-widest text-sm flex items-center gap-4 flex-wrap justify-center mt-2">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 rounded-full bg-primary/30"></span>
                            <span>By {post.author}</span>
                        </p>

                    </div>

                    <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl mb-6">
                        <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover object-[75%_top] md:object-center bg-white" />
                    </div>
                </article>

                <article className="max-w-4xl mx-auto pt-4 px-6">
                    <BlogContent content={post.content} />
                </article>

                {faqs && <FAQ items={faqs} />}
            </main>
        </div>
    );
}
