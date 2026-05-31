export interface SlugProductMap {
  slug: string;
  names: string[];
  prefix?: string;
}

export const SLUG_MAPS: SlugProductMap[] = [
  // --- FIRST SET (cotton-cloth) ---
  {
    slug: "white-mustard-party-wear-cotton-suit-fabric",
    prefix: "/cotton-cloth",
    names: [
      "White & Mustard Batik Cotton Suit",
      "White & Mustard Batik Cotton Suit Set",
      "Wholesale White & Mustard Cotton Dress",
      "White & Mustard Party Wear Cotton Suit Set"
    ]
  },
  {
    slug: "white-orange-printed-cotton-suit-material",
    prefix: "/cotton-cloth",
    names: [
      "White & Orange Batik Cotton Fabric",
      "White & Orange Cotton Suit Fabric",
      "White & Orange Cotton Suit Fabric"
    ]
  },
  {
    slug: "white-beige-wedding-cotton-dress-material",
    prefix: "/cotton-cloth",
    names: [
      "White & Beige Batik Dress Material",
      "White & Beige Designer Dress Material",
      "White & Beige Designer Dress Material"
    ]
  },
  {
    slug: "white-sky-blue-cotton-suit-set",
    prefix: "/cotton-cloth",
    names: [
      "White & Sky Blue Batik Cotton Suit",
      "White & Sky Blue Printed Cotton Suit",
      "White & Sky Blue Printed Cotton Suit"
    ]
  },
  {
    slug: "pink-white-floral-cotton-dress-material",
    prefix: "/cotton-cloth",
    names: [
      "Pink & White Floral Batik Cotton Fabric",
      "Pink & White Floral Cotton Dress Fabric",
      "Pink & White Floral Cotton Dress Fabric"
    ]
  },
  {
    slug: "white-green-designer-cotton-suit-fabric",
    prefix: "/cotton-cloth",
    names: [
      "White & Green Printed Batik Cotton Fabric",
      "White & Green Printed Cotton Fabric",
      "White & Green Printed Cotton Fabric"
    ]
  },
  {
    slug: "white-purple-frock-suit-cotton-material",
    prefix: "/cotton-cloth",
    names: [
      "White & Purple Batik Cotton Cloth",
      "White & Purple Floral Cotton Fabric",
      "White & Purple Floral Cotton Fabric"
    ]
  },
  {
    slug: "white-brown-printed-cotton-dress-fabric",
    prefix: "/cotton-cloth",
    names: [
      "White & Brown Batik Cotton Cloth",
      "White & Brown Printed Cotton Cloth",
      "White & Brown Printed Cotton Cloth"
    ]
  },
  {
    slug: "white-red-party-wear-cotton-suit-material",
    prefix: "/cotton-cloth",
    names: [
      "White & Red Batik Cotton Fabric",
      "White & Red Party Wear Cotton Fabric",
      "White & Red Party Wear Cotton Fabric"
    ]
  },
  {
    slug: "white-pink-printed-cotton-dress-material",
    prefix: "/cotton-cloth",
    names: [
      "White & Pink Batik Cotton Fabric",
      "White & Pink Cotton Dress Material",
      "White & Pink Cotton Dress Material"
    ]
  },
  {
    slug: "white-grey-soft-cotton-dress-fabric",
    prefix: "/cotton-cloth",
    names: [
      "White & Grey Batik Cotton Dress Material",
      "White & Grey Soft Cotton Fabric",
      "White & Grey Soft Cotton Fabric"
    ]
  },
  {
    slug: "white-baby-pink-party-wear-cotton-fabric",
    prefix: "/cotton-cloth",
    names: [
      "White & Baby Pink Floral Cotton Fabric",
      "White & Baby Pink Floral Cotton Fabric"
    ]
  },

  // --- SECOND SET (new-batik-prints) ---
  {
    slug: "new-arrival-batik-cotton-kurti-set",
    prefix: "/new-batik-prints",
    names: [
      "White & Mustard Batik Cotton Suit"
    ]
  },
  {
    slug: "trending-batik-cotton-kurti-fabric",
    prefix: "/new-batik-prints",
    names: [
      "White & Orange Batik Cotton Fabric"
    ]
  },
  {
    slug: "pure-cotton-batik-dress-material",
    prefix: "/new-batik-prints",
    names: [
      "White & Beige Batik Dress Material"
    ]
  },
  {
    slug: "white-batik-cotton-kurti-fabric",
    prefix: "/new-batik-prints",
    names: [
      "White & Sky Blue Batik Cotton Suit"
    ]
  },
  {
    slug: "designer-printed-cotton-kurti-fabric",
    prefix: "/new-batik-prints",
    names: [
      "Pink & White Floral Batik Cotton Fabric"
    ]
  },
  {
    slug: "batik-cotton-kurti-design-fabric",
    prefix: "/new-batik-prints",
    names: [
      "White & Green Printed Batik Cotton Fabric"
    ]
  },
  {
    slug: "pure-cotton-floral-kurti-fabric",
    prefix: "/new-batik-prints",
    names: [
      "White & Purple Batik Cotton Cloth"
    ]
  },
  {
    slug: "white-batik-cotton-kurti-material",
    prefix: "/new-batik-prints",
    names: [
      "White & Brown Batik Cotton Cloth"
    ]
  },
  {
    slug: "batik-print-cotton-dress-material",
    prefix: "/new-batik-prints",
    names: [
      "White & Red Batik Cotton Fabric"
    ]
  },
  {
    slug: "long-cotton-kurti-batik-fabric",
    prefix: "/new-batik-prints",
    names: [
      "White & Pink Batik Cotton Fabric"
    ]
  },
  {
    slug: "designer-printed-cotton-dress-material",
    prefix: "/new-batik-prints",
    names: [
      "White & Grey Batik Cotton Dress Material"
    ]
  },
  {
    slug: "floral-print-cotton-dress-fabric",
    prefix: "/new-batik-prints",
    names: [
      "White & Baby Pink Floral Cotton Fabric"
    ]
  },

  // --- THIRD SET (wholesale-women-dresses) ---
  {
    slug: "white-sky-blue-batik-dress-for-women",
    prefix: "/wholesale-women-dresses",
    names: [
      "Wholesale White & Mustard Cotton Dress",
      "White & Mustard Batik Cotton Suit"
    ]
  },
  {
    slug: "white-red-batik-dress-for-women",
    prefix: "/wholesale-women-dresses",
    names: [
      "Wholesale White & Orange Floral Dress",
      "White & Orange Batik Cotton Fabric"
    ]
  },
  {
    slug: "white-purple-batik-dress-for-women",
    prefix: "/wholesale-women-dresses",
    names: [
      "Wholesale White & Beige Wedding Dress",
      "White & Beige Batik Dress Material"
    ]
  },
  {
    slug: "white-pink-batik-dress-for-women",
    prefix: "/wholesale-women-dresses",
    names: [
      "Wholesale White & Sky Blue Maxi Dress",
      "White & Sky Blue Batik Cotton Suit"
    ]
  },
  {
    slug: "white-orange-batik-dress-for-women",
    prefix: "/wholesale-women-dresses",
    names: [
      "Wholesale Pink & White Floral Dress",
      "Pink & White Floral Batik Cotton Fabric"
    ]
  },
  {
    slug: "white-mustard-batik-dress-for-women",
    prefix: "/wholesale-women-dresses",
    names: [
      "Wholesale White & Green Casual Dress",
      "White & Green Printed Batik Cotton Fabric"
    ]
  },
  {
    slug: "white-grey-batik-dress-for-women",
    prefix: "/wholesale-women-dresses",
    names: [
      "Wholesale White & Purple Indo Western Dress",
      "White & Purple Batik Cotton Cloth"
    ]
  },
  {
    slug: "white-green-batik-dress-for-women",
    prefix: "/wholesale-women-dresses",
    names: [
      "Wholesale White & Brown Midi Dress",
      "White & Brown Batik Cotton Cloth"
    ]
  },
  {
    slug: "white-brown-batik-dress-for-women",
    prefix: "/wholesale-women-dresses",
    names: [
      "Wholesale White & Red Party Wear Dress",
      "White & Red Batik Cotton Fabric"
    ]
  },
  {
    slug: "white-beige-batik-dress-for-women",
    prefix: "/wholesale-women-dresses",
    names: [
      "Wholesale White & Pink Cotton Midi Dress",
      "White & Pink Batik Cotton Fabric"
    ]
  },
  {
    slug: "white-baby-pink-batik-dress-for-women",
    prefix: "/wholesale-women-dresses",
    names: [
      "Wholesale White & Grey One Piece Dress",
      "White & Grey Batik Cotton Dress Material"
    ]
  },
  {
    slug: "pink-white-floral-batik-dress-for-women",
    prefix: "/wholesale-women-dresses",
    names: [
      "Wholesale White & Baby Pink Floral Dress",
      "White & Baby Pink Floral Cotton Fabric"
    ]
  }
];

export function getSlugByProductName(name: string): string | null {
  if (!name) return null;
  const cleanName = name.trim().toLowerCase();
  const match = SLUG_MAPS.find(item => 
    item.names.some(n => cleanName === n.toLowerCase() || cleanName.includes(n.toLowerCase()))
  );
  return match ? match.slug : null;
}

export function getProductPathByName(name: string, category?: string, overridePrefix?: string): string | null {
  if (!name) return null;
  const cleanName = name.trim().toLowerCase();
  
  // overridePrefix takes top priority (e.g. when called from wholesale page)
  let targetPrefix: string | undefined = overridePrefix;
  if (!targetPrefix && category) {
    const cleanCategory = category.toLowerCase();
    if (cleanCategory.includes("fabric")) {
      targetPrefix = "/cotton-cloth";
    } else if (cleanCategory.includes("wholesale")) {
      targetPrefix = "/wholesale-women-dresses";
    } else if (cleanCategory.includes("cloth") || cleanCategory.includes("cotton")) {
      targetPrefix = "/new-batik-prints";
    }
  }

  const matches = SLUG_MAPS.filter(item => 
    item.names.some(n => cleanName === n.toLowerCase() || cleanName.includes(n.toLowerCase()))
  );

  if (matches.length === 0) return null;

  let match = matches[0];
  if (targetPrefix) {
    const specificMatch = matches.find(m => m.prefix === targetPrefix);
    if (specificMatch) {
      match = specificMatch;
    }
  }

  const prefix = match.prefix || "/cotton-cloth";
  return `${prefix}/${match.slug}`;
}

export function getProductNamesBySlug(slug: string): string[] {
  const match = SLUG_MAPS.find(item => item.slug === slug);
  return match ? match.names : [];
}
