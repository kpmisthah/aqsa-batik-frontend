import { notFound, permanentRedirect } from "next/navigation";
import { getCategoryPrefix, getProductHref } from "@/utils/productUrl";

// "New Arrivals" is a filtered view (newest-first), not a real category, so a
// product never canonically lives here. This route only exists to 301 any
// old /new-batik-prints-suits/<slug> links to the product's real category URL.
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

export default async function NewArrivalSlugRedirect({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product || !getCategoryPrefix(product.category)) {
        notFound();
    }

    permanentRedirect(getProductHref(product));
}
