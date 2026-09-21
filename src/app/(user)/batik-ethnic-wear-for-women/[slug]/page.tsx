import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import ProductInteractive from "@/modules/user/components/ProductInteractive";
import ProductSpecifications from "@/modules/user/components/ProductSpecifications";
import { notFound, permanentRedirect } from "next/navigation";
import { Suspense } from "react";
import { getCategoryPrefix } from "@/utils/productUrl";

const CATEGORY_PREFIX = "/batik-ethnic-wear-for-women";

async function getProductBySlug(slug: string) {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000/api";
        const url = `${apiUrl.replace('localhost', '127.0.0.1')}/products/slug/${encodeURIComponent(slug)}`;

        const res = await fetch(url, { next: { revalidate: 60 } });
        if (!res.ok) return null;

        return await res.json();
    } catch (error) {
        console.error("Error fetching product by slug:", error);
        return null;
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    if (!product) {
        return {
            title: "Product Not Found | Aqsha Batik",
        };
    }

    return {
        title: product.seoTitle || product.name,
        description: product.metaDescription || product.description || product.fabricDetails,
    };
}

export default async function EthnicWearSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    // A product's canonical URL always lives under its real category. If this
    // slug is being viewed under the wrong category prefix, send crawlers and
    // users to the one true URL instead of serving duplicate content.
    const canonicalPrefix = getCategoryPrefix(product.category);
    if (canonicalPrefix && canonicalPrefix !== CATEGORY_PREFIX) {
        permanentRedirect(`${canonicalPrefix}/${slug}`);
    }

    return (
        <div className="min-h-screen bg-cream text-primary selection:bg-primary selection:text-white scroll-smooth underline-offset-4">
            <style>{`
        .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%231A1A1A' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
      `}</style>

            <Nav />

            {/* Modern Product Hero */}
            <section className="pt-32 pb-20 px-6 md:px-10 max-w-[1500px] mx-auto">
                <Suspense fallback={<div className="animate-pulse w-full h-[600px] bg-primary/5 rounded-[40px]"></div>}>
                    <ProductInteractive product={product} />
                </Suspense>
            </section>
            <GoogleReviewBar />

            <ProductSpecifications product={product} />

            <FAQ />
        </div>
    );
}
