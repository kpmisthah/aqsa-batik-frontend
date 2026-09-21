import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import ProductInteractive from "@/modules/user/components/ProductInteractive";
import ProductSpecifications from "@/modules/user/components/ProductSpecifications";
import YouMightAlsoLike from "@/modules/user/components/YouMightAlsoLike";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// Define the fetch function
async function getProduct(id: string) {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000/api";
        // Force 127.0.0.1 if using localhost to avoid IPv6 connection refused in Node 18+
        const url = `${apiUrl.replace('localhost', '127.0.0.1')}/products/${id}`;

        const res = await fetch(url, { next: { revalidate: 60 } });
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
            <section className="pt-6 md:pt-36 pb-2 px-6 md:px-10 max-w-[1500px] mx-auto">
                <Suspense fallback={<div className="animate-pulse w-full h-[600px] bg-primary/5 rounded-[40px]"></div>}>
                    <ProductInteractive product={product} />
                </Suspense>
            </section>

            <ProductSpecifications product={product} />

            <YouMightAlsoLike currentProductId={id} />
            <FAQ />
        </div>
    );
}
