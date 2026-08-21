export interface Product {
    id: string;
    name: string;
    category: string; // e.g., "Batik Prints Women Clothing", "Batik Cotton Dress for Women"
    subCategory: string; // e.g., "COTTON SILK", "PURE MAHESHWARI", "HERITAGE COTTON"
    image: string;
    description: string;
    isBestSeller?: boolean;
    isWholesale?: boolean;
}

export const products: Product[] = [
    // Batik Prints Women Clothing
    {
        id: "indigo-floral-batik-set",
        name: "Indigo Floral Batik Set",
        category: "Batik Prints Women Clothing",
        subCategory: "COTTON SILK",
        image: "/indigo_suit.png",
        description: "Premium cotton silk Batik Prints Women Clothing set with intricate floral patterns.",
        isBestSeller: true,
        isWholesale: true,
    },
    {
        id: "earthy-ochre-geometric",
        name: "Earthy Ochre Geometric",
        category: "Batik Prints Women Clothing",
        subCategory: "PURE MAHESHWARI",
        image: "/white_mustard_suit.png",
        description: "Sophisticated Maheshwari silk Batik Prints Women Clothing with geometric motifs.",
        isBestSeller: true,
        isWholesale: true,
    },
    {
        id: "madder-crimson-bloom",
        name: "Madder Crimson Bloom",
        category: "Batik Prints Women Clothing",
        subCategory: "HERITAGE COTTON",
        image: "/cta_suits.png",
        description: "Classic Heritage cotton Batik Prints Women Clothing in vibrant crimson.",
        isBestSeller: false,
        isWholesale: true,
    },
    {
        id: "azure-waves-ensemble",
        name: "Azure Waves Ensemble",
        category: "Batik Prints Women Clothing",
        subCategory: "PREMIUM COTTON",
        image: "/hero_bg.png",
        description: "Cool azure Batik Prints Women Clothing with wavy patterns.",
        isBestSeller: false,
        isWholesale: true,
    },
    {
        id: "terracotta-tribal-suit",
        name: "Terracotta Tribal Suit",
        category: "Batik Prints Women Clothing",
        subCategory: "ORGANIC COTTON",
        image: "/pink_fabric.png",
        description: "Earthy terracotta suit with tribal batik prints.",
        isBestSeller: false,
        isWholesale: true,
    },
    {
        id: "emerald-regent-set",
        name: "Emerald Regent Set",
        category: "Batik Prints Women Clothing",
        subCategory: "CHANDERI SILK",
        image: "/emerald_suit.png",
        description: "Royal emerald green Batik Prints Women Clothing in rich Chanderi silk.",
        isBestSeller: true,
        isWholesale: true,
    },
    {
        id: "saffron-glory-suit",
        name: "Saffron Glory Suit",
        category: "Batik Prints Women Clothing",
        subCategory: "COTTON SILK",
        image: "/hero.png",
        description: "Bright saffron Batik Prints Women Clothing with golden accents.",
        isWholesale: true,
    },
    {
        id: "midnight-forest-suits",
        name: "Midnight Forest Suit",
        category: "Batik Prints Women Clothing",
        subCategory: "PURE MAHESHWARI",
        image: "/batik_suits_hero_category.png",
        description: "Deep midnight blue suit with mystical forest patterns.",
        isWholesale: true,
    },

    // Batik Cotton Dress for Women
    {
        id: "noir-shadow-batik",
        name: "Noir Shadow Batik",
        category: "Batik Cotton Dress for Women",
        subCategory: "CHANDERI SILK",
        image: "/hero_bg.png",
        description: "Elegant Chanderi silk Batik Cotton Dress for Women with subtle shadow prints.",
        isBestSeller: false,
        isWholesale: true,
    },
    {
        id: "sage-vine-ensemble",
        name: "Sage Vine Ensemble",
        category: "Batik Cotton Dress for Women",
        subCategory: "ORGANIC COTTON",
        image: "/pink_fabric.png",
        description: "Eco-friendly organic cotton Batik Cotton Dress for Women with delicate vine patterns.",
        isBestSeller: true,
        isWholesale: true,
    },
    {
        id: "mustard-clay-craft",
        name: "Mustard Clay Craft",
        category: "Batik Cotton Dress for Women",
        subCategory: "PREMIUM MAHESHWARI",
        image: "/emerald_suit.png",
        description: "Artisanal Maheshwari Batik Cotton Dress for Women in mustard and clay tones.",
        isBestSeller: false,
        isWholesale: true,
    },
    {
        id: "teal-ocean-fabric",
        name: "Teal Ocean Fabric",
        category: "Batik Cotton Dress for Women",
        subCategory: "PURE COTTON",
        image: "/indigo_suit.png",
        description: "Vibrant teal Batik Cotton Dress for Women with oceanic ripples.",
        isWholesale: true,
    },
    {
        id: "ruby-blossom-fabric",
        name: "Ruby Blossom Fabric",
        category: "Batik Cotton Dress for Women",
        subCategory: "HERITAGE COTTON",
        image: "/cta_suits.png",
        description: "Deep ruby red fabric with floral batik blooms.",
        isWholesale: true,
    },
    {
        id: "lavender-mist-fabric",
        name: "Lavender Mist Fabric",
        category: "Batik Cotton Dress for Women",
        subCategory: "COTTON SILK",
        image: "/white_mustard_suit.png",
        description: "Soft lavender fabric with misty batik patterns.",
        isWholesale: true,
    },
    {
        id: "amber-glow-fabric",
        name: "Amber Glow Fabric",
        category: "Batik Cotton Dress for Women",
        subCategory: "ORGANIC COTTON",
        image: "/pink_fabric.png",
        description: "Warm amber fabric that glows with traditional batik art.",
        isWholesale: true,
    },
    {
        id: "charcoal-mystic-fabric",
        name: "Charcoal Mystic Fabric",
        category: "Batik Cotton Dress for Women",
        subCategory: "CHANDERI SILK",
        image: "/batik_fabric_hero_new.png",
        description: "Dark charcoal fabric with mysterious batik motifs.",
        isWholesale: true,
    }
];
