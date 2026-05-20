import Image from "next/image";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import ProductInteractive from "@/modules/user/components/ProductInteractive";
import { notFound } from "next/navigation";

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

    const WA = `https://wa.me/919999999999?text=${encodeURIComponent(`Hi, I want to order the ${product.name}`)}`;
    const mainImage = product.images?.[0] || "/product_white_mustard.png";

    const details = [
        { label: "Fabric", value: product.fabricDetails || "Pure Cotton 60x60" },
        { label: "Category", value: product.category },
        { label: "Sub Category", value: product.subCategory || "Batik" },
        { label: "Colours Available", value: product.colours?.join(", ") || "Standard" }
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
        <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] font-sans selection:bg-[#5A2A1F] selection:text-white scroll-smooth underline-offset-4">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'DM Sans', sans-serif; }
        .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%235A2A1F' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
      `}</style>

            <Nav />

            {/* ── BREADCRUMBS ── */}
            <div className="max-w-[1500px] mx-auto px-6 md:px-10 pt-32 pb-8">
                <nav className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-[#5A2A1F]/40">
                    <a href="/" className="hover:text-[#8B3A2B] transition-colors">Home</a>
                    <span>/</span>
                    <a href="/products" className="hover:text-[#8B3A2B] transition-colors">Products</a>
                    <span>/</span>
                    <span className="text-[#5A2A1F]">{product.name}</span>
                </nav>
            </div>

            {/* ── MODERN PRODUCT HERO (Interactive) ── */}
            <section className="pb-20 px-6 md:px-10 max-w-[1500px] mx-auto">
                <ProductInteractive product={product} />
            </section>
            <GoogleReviewBar />

            {/* ── TECHNICAL EXCELLENCE ── */}
            <section className="py-32 px-6 bg-[#F5F1EC] relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col gap-20 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Specifications</span>
                        <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#5A2A1F] mt-4 mb-8">Technical Excellence</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Specs List */}
                        <div className="bg-white p-12 rounded-[50px] shadow-2xl border border-[#5A2A1F]/10">
                            <div className="flex flex-col gap-8">
                                {details.map((detail, i) => (
                                    <div key={i} className="flex items-center justify-between py-8 border-b border-[#5A2A1F]/10 last:border-0 group">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#8B3A2B] opacity-60 group-hover:opacity-100 transition-opacity">{detail.label}</span>
                                            <span className="text-2xl font-bold text-[#5A2A1F] tracking-tight">{detail.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Best For Cards */}
                        <div className="flex flex-col gap-6">
                            <div className="relative aspect-video rounded-[50px] overflow-hidden shadow-2xl border-4 border-white group">
                                <Image src={mainImage} alt="Detail View" layout="fill" objectFit="cover" className="brightness-90 group-hover:scale-105 transition-transform duration-[2s]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#5A2A1F]/60 to-transparent"></div>
                                <div className="absolute bottom-10 left-10 text-white">
                                    <h4 className="text-4xl font-bold font-playfair italic">Ideal for Summer Collections</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ />
        </div>
    );
}
