import Image from "next/image";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import ProductInteractive from "@/modules/user/components/ProductInteractive";
import YouMightAlsoLike from "@/modules/user/components/YouMightAlsoLike";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getColorName } from "@/utils/colorHelper";

// Define the fetch function
async function getProduct(id: string) {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000/api";
        // Force 127.0.0.1 if using localhost to avoid IPv6 connection refused in Node 18+
        const url = `${apiUrl.replace('localhost', '127.0.0.1')}/products/${id}`;

        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) {
            console.error(`Failed to fetch product ${id}: ${res.status} ${res.statusText}`);
            return null;
        }
        return res.json();
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}

// Generate Dynamic Metadata for Google SEO!
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await getProduct(id);
    if (!product) {
        return {
            title: "Product Not Found | Sproute Kid",
        };
    }

    return {
        title: product.seoTitle || product.name,
        description: product.metaDescription || product.description || product.fabricDetails,
    };
}

export default async function DynamicProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        notFound();
    }

    const WA = `https://wa.me/918815373767?text=${encodeURIComponent(`Hi, I want to order the ${product.name}`)}`;
    const mainImage = product.images?.[0] || "/product_white_mustard.png";

    const details = [
        { label: "Fabric", value: product.fabricDetails || "Pure Cotton 60x60", icon: "🧵" },
        { label: "Category", value: product.category, icon: "🏷️" },
        { label: "Sub Category", value: product.subCategory || "Batik", icon: "✨" },
        { label: "Colors Available", value: product.colours?.map((c: string) => getColorName(c)).join(", ") || "Standard", icon: "🎨" }
    ];

    const whyItSells = [
        { t: "High Demand Design", d: "Sophisticated palette that is a retail favorite.", i: "✨" },
        { t: "Premium Comfort", d: "Breathable fabric ensuring all-day comfort.", i: "☁️" },
        { t: "Affordable Pricing", d: "Priced for volume sales and high margins.", i: "💰" }
    ];

    const bestFor = [
        { t: "Daily wear dresses", i: "🏢" },
        { t: "Summer collection", i: "☀️" },
        { t: "Boutique resale", i: "🛍️" }
    ];

    const productFAQs = [
        { q: "Is this stitched?", a: "No. It is unstitched dress material, allowing your customers to customize the fit." },
        { q: "Is cotton suitable for summer?", a: "Yes. Our pure cotton is highly breathable and ideal for the Indian summer." },
        { q: "Can I order in bulk?", a: "Yes. We specialize in wholesale and bulk orders with priority shipping." }
    ];

    const reviews = [
        { name: "Anita Sharma", location: "New Delhi", date: "2 Days ago", rating: 5, text: "The quality is exactly what my customers were looking for. Very soft and breathable." },
        { name: "Priya Patel", location: "Ahmedabad", date: "1 Week ago", rating: 5, text: "Fastest delivery I've experienced in wholesale. The prints are very clean." },
        { name: "Kiran Kaur", location: "Ludhiana", date: "2 Weeks ago", rating: 4, text: "Excellent margins for my boutique. Will definitely be ordering more batches soon." }
    ];

    return (
        <div className="min-h-screen bg-cream text-primary selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
            <style>{`
        .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%231A1A1A' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
      `}</style>

            <Nav />

            {/* ── MODERN PRODUCT HERO (Interactive) ── */}
            <section className="pt-28 md:pt-36 pb-2 px-6 md:px-10 max-w-[1500px] mx-auto">
                <Suspense fallback={<div className="animate-pulse w-full h-[600px] bg-primary/5 rounded-[40px]"></div>}>
                    <ProductInteractive product={product} />
                </Suspense>
            </section>

            {/* ── TECHNICAL EXCELLENCE ── */}
            <section className="py-8 md:py-16 px-6 bg-cream relative overflow-hidden text-center md:text-left">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-overline mb-2 md:mb-4 inline-block">Specifications</span>
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal text-primary mt-2 md:mt-4 mb-6 md:mb-8">Technical Excellence</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Specs List (Sleek Grid Layout) */}
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:flex lg:flex-col xl:grid xl:grid-cols-2 justify-center gap-3 md:gap-5 w-full">
                            {details.map((detail, i) => (
                                <div key={i} className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-5 p-4 sm:p-5 md:p-6 bg-white rounded-[20px] md:rounded-[24px] shadow-sm hover:shadow-xl border border-primary/5 hover:border-secondary/20 transition-all duration-300 group hover:-translate-y-1 text-center sm:text-left w-full h-full">
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-cream flex items-center justify-center text-xl md:text-3xl text-primary group-hover:scale-110 transition-transform shrink-0">
                                        {detail.icon}
                                    </div>
                                    <div className="flex flex-col flex-1 items-center sm:items-start w-full">
                                        <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.2em] text-accent opacity-70 group-hover:opacity-100 transition-opacity">
                                            {detail.label}
                                        </span>
                                        <span className="text-xs md:text-lg font-bold text-primary tracking-tight leading-snug mt-1 md:mt-1.5 w-full">
                                            {detail.value}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Best For Image Canvas */}
                        <div className="h-full min-h-[400px] md:min-h-[500px]">
                            <div className="relative h-full w-full rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white group">
                                <Image src={mainImage} alt="Detail View" layout="fill" objectFit="cover" objectPosition="center top" className="brightness-95 group-hover:scale-105 transition-transform duration-[2s]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white max-w-[80%]">
                                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-3">
                                        Collection Feature
                                    </span>
                                    <h4 className="text-3xl md:text-5xl font-black font-heading leading-tight tracking-tight">
                                        Ideal for<br />Summer Collections
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <YouMightAlsoLike currentProductId={id} />
            <FAQ />
        </div>
    );
}
