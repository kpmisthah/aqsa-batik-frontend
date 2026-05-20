export interface Product {
    id: string;
    name: string;
    category: string; // e.g., "Batik Cloth", "Batik Fabric"
    subCategory: string; // e.g., "COTTON SILK", "PURE MAHESHWARI", "HERITAGE COTTON"
    image: string;
    description: string;
    isBestSeller?: boolean;
    isWholesale?: boolean;
}

export const products: Product[] = [
    // Batik Cloth
    {
        id: "indigo-floral-batik-set",
        name: "Indigo Floral Batik Set",
        category: "Batik Cloth",
        subCategory: "COTTON SILK",
        image: "/indigo_suit.png",
        description: "Premium cotton silk batik cloth set with intricate floral patterns.",
        isBestSeller: true,
        isWholesale: true,
    },
    {
        id: "earthy-ochre-geometric",
        name: "Earthy Ochre Geometric",
        category: "Batik Cloth",
        subCategory: "PURE MAHESHWARI",
        image: "/white_mustard_suit.png",
        description: "Sophisticated Maheshwari silk batik cloth with geometric motifs.",
        isBestSeller: true,
        isWholesale: true,
    },
    {
        id: "madder-crimson-bloom",
        name: "Madder Crimson Bloom",
        category: "Batik Cloth",
        subCategory: "HERITAGE COTTON",
        image: "/cta_suits.png",
        description: "Classic Heritage cotton batik cloth in vibrant crimson.",
        isBestSeller: false,
        isWholesale: true,
    },
    {
        id: "azure-waves-ensemble",
        name: "Azure Waves Ensemble",
        category: "Batik Cloth",
        subCategory: "PREMIUM COTTON",
        image: "/hero_bg.png",
        description: "Cool azure batik cloth with wavy patterns.",
        isBestSeller: false,
        isWholesale: true,
    },
    {
        id: "terracotta-tribal-suit",
        name: "Terracotta Tribal Suit",
        category: "Batik Cloth",
        subCategory: "ORGANIC COTTON",
        image: "/history.png",
        description: "Earthy terracotta suit with tribal batik prints.",
        isBestSeller: false,
        isWholesale: true,
    },
    {
        id: "emerald-regent-set",
        name: "Emerald Regent Set",
        category: "Batik Cloth",
        subCategory: "CHANDERI SILK",
        image: "/emerald_suit.png",
        description: "Royal emerald green batik cloth in rich Chanderi silk.",
        isBestSeller: true,
        isWholesale: true,
    },
    {
        id: "saffron-glory-suit",
        name: "Saffron Glory Suit",
        category: "Batik Cloth",
        subCategory: "COTTON SILK",
        image: "/hero.png",
        description: "Bright saffron batik cloth with golden accents.",
        isWholesale: true,
    },
    {
        id: "midnight-forest-suits",
        name: "Midnight Forest Suit",
        category: "Batik Cloth",
        subCategory: "PURE MAHESHWARI",
        image: "/batik_suits_hero_category.png",
        description: "Deep midnight blue suit with mystical forest patterns.",
        isWholesale: true,
    },

    // Batik Fabric
    {
        id: "noir-shadow-batik",
        name: "Noir Shadow Batik",
        category: "Batik Fabric",
        subCategory: "CHANDERI SILK",
        image: "/hero_bg.png",
        description: "Elegant Chanderi silk batik fabric with subtle shadow prints.",
        isBestSeller: false,
        isWholesale: true,
    },
    {
        id: "sage-vine-ensemble",
        name: "Sage Vine Ensemble",
        category: "Batik Fabric",
        subCategory: "ORGANIC COTTON",
        image: "/pink_fabric.png",
        description: "Eco-friendly organic cotton batik fabric with delicate vine patterns.",
        isBestSeller: true,
        isWholesale: true,
    },
    {
        id: "mustard-clay-craft",
        name: "Mustard Clay Craft",
        category: "Batik Fabric",
        subCategory: "PREMIUM MAHESHWARI",
        image: "/emerald_suit.png",
        description: "Artisanal Maheshwari batik fabric in mustard and clay tones.",
        isBestSeller: false,
        isWholesale: true,
    },
    {
        id: "teal-ocean-fabric",
        name: "Teal Ocean Fabric",
        category: "Batik Fabric",
        subCategory: "PURE COTTON",
        image: "/indigo_suit.png",
        description: "Vibrant teal batik fabric with oceanic ripples.",
        isWholesale: true,
    },
    {
        id: "ruby-blossom-fabric",
        name: "Ruby Blossom Fabric",
        category: "Batik Fabric",
        subCategory: "HERITAGE COTTON",
        image: "/cta_suits.png",
        description: "Deep ruby red fabric with floral batik blooms.",
        isWholesale: true,
    },
    {
        id: "lavender-mist-fabric",
        name: "Lavender Mist Fabric",
        category: "Batik Fabric",
        subCategory: "COTTON SILK",
        image: "/white_mustard_suit.png",
        description: "Soft lavender fabric with misty batik patterns.",
        isWholesale: true,
    },
    {
        id: "amber-glow-fabric",
        name: "Amber Glow Fabric",
        category: "Batik Fabric",
        subCategory: "ORGANIC COTTON",
        image: "/history.png",
        description: "Warm amber fabric that glows with traditional batik art.",
        isWholesale: true,
    },
    {
        id: "charcoal-mystic-fabric",
        name: "Charcoal Mystic Fabric",
        category: "Batik Fabric",
        subCategory: "CHANDERI SILK",
        image: "/batik_fabric_hero.png",
        description: "Dark charcoal fabric with mysterious batik motifs.",
        isWholesale: true,
    }
];
