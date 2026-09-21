import { notFound, permanentRedirect } from "next/navigation";
import { getCategoryPrefix, getProductHref } from "@/utils/productUrl";

// "Wholesale" is a filtered view (isWholesale=true), not a real category, so a
// product never canonically lives here. This route only exists to 301 any old
// /wholesale-women-dresses/<slug> links to the product's real category URL.
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

export default async function WholesaleSlugRedirect({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product || !getCategoryPrefix(product.category)) {
        notFound();
    }

    permanentRedirect(getProductHref(product));
}
