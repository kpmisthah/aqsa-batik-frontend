import React from "react";
import Nav from "@/modules/user/components/Nav";
import Footer from "@/modules/user/components/Footer";
import Image from "next/image";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import Link from "next/link";
import { Share2 } from "lucide-react";
import FAQ from "@/modules/user/components/FAQ";
import BlogContent from "./BlogContent";

import { BLOG_POSTS } from "@/data/blogPosts";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = BLOG_POSTS[resolvedParams.slug];
    if (!post) return { title: "Blog Post" };

    return {
        title: post.seoTitle || post.title,
        description: post.seoDescription || "Read our latest blog post about batik.",
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const post = BLOG_POSTS[slug] || BLOG_POSTS["best-dress-material-guide-cotton-cloth"];

    return (
        <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] selection:bg-[#5A2A1F] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap');
                .font-playfair { font-family: 'Playfair Display', serif; }
                .font-sans { font-family: 'DM Sans', sans-serif; }

                .blog-content { font-family: 'DM Sans', sans-serif; color: #3B1C14; line-height: 1.8; font-size: 1.125rem; }
                .blog-content p { margin-bottom: 1.75rem; opacity: 0.9; }
                .blog-content h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.5rem, 4vw, 2rem); font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #5A2A1F; line-height: 1.2; }
                .blog-content h3 { font-family: 'DM Sans', sans-serif; font-size: clamp(1.125rem, 3vw, 1.25rem); font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #8B3A2B; }
                .blog-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 2rem; opacity: 0.9; }
                .blog-content li { margin-bottom: 0.75rem; }
                .blog-content a { color: #2563EB; font-weight: 700; text-decoration: underline; text-underline-offset: 4px; transition: color 0.2s ease; }
                .blog-content a:visited { color: #2563EB; }
                .blog-content a:hover { color: #1D4ED8; }
                .blog-content img { width: 100%; border-radius: 1.5rem; margin: 3rem 0; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
                .blog-content table { width: 100%; border-collapse: separate; border-spacing: 0; margin: 2rem 0; font-size: 1rem; }
                .blog-content th { background-color: #F5F1EC; color: #8B3A2B; font-weight: 700; text-align: left; padding: 1rem 1.5rem; border-bottom: 2px solid rgba(90, 42, 31, 0.1); }
                .blog-content th:first-child { border-top-left-radius: 1rem; }
                .blog-content th:last-child { border-top-right-radius: 1rem; }
                .blog-content td { padding: 1rem 1.5rem; border-bottom: 1px solid rgba(90, 42, 31, 0.05); background-color: white; }
                .blog-content tr:last-child td:first-child { border-bottom-left-radius: 1rem; }
                .blog-content tr:last-child td:last-child { border-bottom-right-radius: 1rem; }
                .blog-content td:first-child { font-weight: 600; color: #5A2A1F; }
                .blog-content .faq-section { background-color: white; padding: 2.5rem; border-radius: 1.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05); margin-top: 4rem; border: 1px solid rgba(90, 42, 31, 0.05); }
                .blog-content .faq-section h2 { margin-top: 0; text-align: center; }

            `}</style>

            <Nav />

            <main className="pt-40">
                <article className="max-w-4xl mx-auto px-6">
                    <div className="mb-12 flex flex-col gap-6 items-center text-center">
                        <span className="text-sm font-black uppercase tracking-[0.4em] text-[#8B3A2B]">{post.category}</span>
                        <h1 className="font-playfair text-2xl md:text-4xl font-bold leading-tight">{post.title}</h1>
                        <p className="text-[#5A2A1F]/60 font-bold uppercase tracking-widest text-sm flex items-center gap-4 flex-wrap justify-center mt-2">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 rounded-full bg-[#5A2A1F]/30"></span>
                            <span>By {post.author}</span>
                        </p>

                    </div>

                    <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl mb-16">
                        <Image src={post.image} alt={post.title} fill className="object-cover object-[75%_top] md:object-center" />
                    </div>
                </article>

                <GoogleReviewBar />

                <article className="max-w-4xl mx-auto pt-24 px-6">
                    <BlogContent content={post.content} />
                </article>

                {post.faqs && <FAQ items={post.faqs} />}
            </main>
        </div>
    );
}
