import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/siteConfig";
import { getCategoryPrefix, getProductHref, HrefableProduct } from "@/utils/productUrl";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

interface BlogSummary {
  slug: string;
  updatedAt?: string;
  createdAt?: string;
}

async function getPublishedBlogs(): Promise<BlogSummary[]> {
  try {
    const res = await fetch(`${API_BASE}/blogs`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json?.data) ? json.data : [];
  } catch {
    return [];
  }
}

interface ProductSummary extends HrefableProduct {
  updatedAt?: string;
  createdAt?: string;
}

async function getLiveProducts(): Promise<ProductSummary[]> {
  try {
    const res = await fetch(`${API_BASE}/products?limit=1000`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json?.data) ? json.data : [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/batik-ethnic-wear-for-women`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/batik-prints-womens-clothing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/batik-cotton-dress-for-women`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/new-batik-prints-suits`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/wholesale-batik-women-dresses`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/blog/all`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/refund-return-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/shipping-delivery-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/cancellation-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogs = await getPublishedBlogs();
  const blogPages: MetadataRoute.Sitemap = blogs
    .filter((b) => !!b.slug)
    .map((b) => ({
      url: `${SITE_URL}/blog/${b.slug}`,
      lastModified: b.updatedAt || b.createdAt ? new Date(b.updatedAt || b.createdAt!) : now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const products = await getLiveProducts();
  const productPages: MetadataRoute.Sitemap = products
    .filter((p) => !!getCategoryPrefix(p.category))
    .map((p) => ({
      url: `${SITE_URL}${getProductHref(p)}`,
      lastModified: p.updatedAt || p.createdAt ? new Date(p.updatedAt || p.createdAt!) : now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [...staticPages, ...productPages, ...blogPages];
}
