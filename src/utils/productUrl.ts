// Canonical, single-URL-per-product routing.
//
// A product belongs to exactly one of the 3 real catalog categories below.
// "New Arrivals" and "Wholesale" are filtered *views* over these same
// categories (newest-first, and isWholesale=true respectively) — not
// categories of their own — so a product's detail page always lives under
// its real category, no matter which listing page linked to it.

const CATEGORY_PREFIXES: { pattern: RegExp; prefix: string }[] = [
  { pattern: /ethnic wear for women/i, prefix: "/batik-ethnic-wear-for-women" },
  { pattern: /batik cotton dress for women/i, prefix: "/batik-cotton-dress-for-women" },
  { pattern: /batik prints women clothing/i, prefix: "/batik-prints-womens-clothing" },
];

export function normalizeSlug(slug?: string | null): string {
  return (slug || "").trim().replace(/^\/+|\/+$/g, "");
}

export function getCategoryPrefix(category?: string | null): string | null {
  if (!category) return null;
  const match = CATEGORY_PREFIXES.find((c) => c.pattern.test(category));
  return match ? match.prefix : null;
}

export interface HrefableProduct {
  _id?: string;
  id?: string;
  slug?: string;
  category?: string;
}

/** Canonical detail-page URL for a product; falls back to the id-based route
 * for products missing a slug or a recognised category. */
export function getProductHref(product: HrefableProduct): string {
  const prefix = getCategoryPrefix(product.category);
  const slug = normalizeSlug(product.slug);
  if (prefix && slug) return `${prefix}/${slug}`;
  return `/products/${product.id || product._id || ""}`;
}
