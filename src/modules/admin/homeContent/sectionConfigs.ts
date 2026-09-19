import type { FieldConfig, ListFieldConfig } from "../components/HomeContentFieldInputs";

export interface SectionConfig {
  key: string;
  label: string;
  description: string;
  fields: FieldConfig[];
  lists?: ListFieldConfig[];
  /** The content currently live on the site (the component's hardcoded fallback),
   * used to pre-fill the edit form until an admin actually saves this section. */
  defaultData: Record<string, any>;
}

export const HOME_CONTENT_SECTIONS: SectionConfig[] = [
  {
    key: "google_review_bar",
    label: "Google Review Bar",
    description: "The scrolling review strip below the hero slider.",
    fields: [
      { key: "reviewUrl", label: "Google Review Link", type: "text" },
    ],
    lists: [
      {
        key: "reviews",
        label: "Reviews",
        itemFields: [
          { key: "name", label: "Name", type: "text" },
          { key: "text", label: "Review Text", type: "textarea" },
        ],
      },
    ],
    defaultData: {
      reviewUrl: "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review",
      reviews: [
        { name: "Farhan Sheikh", text: "Outstanding quality Batik Prints Women Clothing! The cotton fabric is premium and the prints are absolutely beautiful. Ordered wholesale and every piece was perfect. Will definitely order again!" },
        { name: "Aisha Begum", text: "Best Batik Prints Women Clothing manufacturer in Ujjain. Their 60×60 cotton quality is unmatched. Very professional and timely delivery across India. Highly recommended for wholesale buyers." },
        { name: "Rizwan Ali", text: "Great place to get premium Batik Prints Women Clothing! They have an amazing collection with beautiful patterns. The pricing is very competitive for wholesale. Very happy with the quality and service." },
      ],
    },
  },
  {
    key: "curated_collection_text",
    label: "Curated Collection Heading",
    description: "Heading/copy above the category grid in the tan \"Curated Collection\" section.",
    fields: [
      { key: "overline", label: "Overline", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      { key: "highlightWord", label: "Highlight Word (optional, colored)", type: "text" },
      { key: "paragraph", label: "Paragraph", type: "textarea" },
      { key: "ctaLabel", label: "CTA Label", type: "text" },
      { key: "ctaLink", label: "CTA Link", type: "text" },
    ],
    defaultData: {
      overline: "Curated for Excellence",
      heading: "Best-Selling Batik Suit Collections\nfor Every Woman",
      highlightWord: "Batik Suit Collections",
      paragraph: "Discover beautiful batik print designs, quality cotton fabric for kurtis, printed cotton fabrics for kurtis, and elegant suit designs complemented by versatile Shalwar Kameez and Dupatta/Chunni styles. From everyday comfort to occasion-ready dressing, each collection is selected for distinctive prints, wearable silhouettes, and dependable fabric quality.",
      ctaLabel: "Explore Collections",
      ctaLink: "/batik-ethnic-wear-for-women",
    },
  },
  {
    key: "shop_by_category",
    label: "Shop By Category",
    description: "The 5-category tile grid (used in two places on the home page).",
    fields: [],
    lists: [
      {
        key: "categories",
        label: "Categories",
        itemFields: [
          { key: "title", label: "Title", type: "text" },
          { key: "sub", label: "Sub Label", type: "text" },
          { key: "img", label: "Image", type: "image" },
          { key: "alt", label: "Image Alt Text", type: "text" },
          { key: "href", label: "Link", type: "text" },
        ],
      },
    ],
    defaultData: {
      categories: [
        { title: "Batik Prints Women Clothing", alt: "cotton cloth", img: "/round-category/Batik Cotton Dress for Women Catagory image.webp", href: "/batik-prints-womens-clothing", sub: "Signature" },
        { title: "Ethnic Wear for Women", alt: "ethnic wear for women", img: "/round-category/Ethnic Wear for Women.webp", href: "/batik-ethnic-wear-for-women", sub: "Everyday" },
        { title: "Batik Cotton Dress for Women", alt: "cotton dress for women", img: "/round-category/Batik Prints Women Clothing catagory image.webp", href: "/batik-cotton-dress-for-women", sub: "Comfort" },
        { title: "New Arrival", alt: "cotton kurtis for women", img: "/round-category/New Arrival catagory image.webp", href: "/new-batik-prints-suits", sub: "Latest Drops" },
        { title: "Wholesale", alt: "dresses for women", img: "/round-category/Wholesale catagory image.webp", href: "/wholesale-batik-women-dresses", sub: "Bulk Pricing" },
      ],
    },
  },
  {
    key: "featured_grid_text",
    label: "Featured Grid Heading",
    description: "Heading/copy above the 4 featured products (products themselves stay live).",
    fields: [
      { key: "overline", label: "Overline", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      { key: "highlightWord", label: "Highlight Word (optional, colored)", type: "text" },
      { key: "paragraph", label: "Paragraph", type: "textarea" },
      { key: "badgeLabel", label: "Badge Label", type: "text" },
      { key: "ctaLabel", label: "CTA Label", type: "text" },
      { key: "ctaLink", label: "CTA Link", type: "text" },
    ],
    defaultData: {
      overline: "Fresh Batik Styles",
      heading: "New Arrival Women's Suits &\nBatik Dress Material",
      highlightWord: "New Arrival",
      paragraph: "Discover fresh batik blouse designs, printed styles, designer women's dresses, and quality cotton fabric for kurtis—created for effortless everyday dressing. Explore new prints, seasonal styles, and ready-to-wear collections designed around modern Indian fashion.",
      badgeLabel: "Just Added",
      ctaLabel: "Shop New Arrivals",
      ctaLink: "/new-batik-prints-suits",
    },
  },
  {
    key: "lifestyle_banner",
    label: "Lifestyle Banner",
    description: "Single image banner with heading and two paragraphs.",
    fields: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "highlightWord", label: "Highlight Word (optional, colored)", type: "text" },
      { key: "paragraph1", label: "Paragraph 1", type: "textarea" },
      { key: "paragraph2", label: "Paragraph 2", type: "textarea" },
      { key: "ctaLabel", label: "CTA Label", type: "text" },
      { key: "ctaLink", label: "CTA Link", type: "text" },
      { key: "image", label: "Image", type: "image" },
    ],
    defaultData: {
      heading: "Batik Dresses & Suit Sets for Every Woman",
      highlightWord: "Every Woman",
      paragraph1: "Explore a thoughtful mix of batik dresses, batik print dresses, suit sets for women, and batik print kurtis, alongside versatile women's dress designs and casual dresses for women, including flattering plus-size batik styles.",
      paragraph2: "From everyday cotton comfort to occasion-ready silhouettes, find styles designed to feel as good as they look.",
      ctaLabel: "Explore Women's Fashion",
      ctaLink: "/batik-ethnic-wear-for-women",
      image: "/round-category/best dresses for women.webp",
    },
  },
  {
    key: "trending_collections_banner",
    label: "Trending Collections Banner",
    description: "The 5-tile promotional banner grid.",
    fields: [
      { key: "overline", label: "Overline", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "highlightWord", label: "Highlight Word (optional, colored)", type: "text" },
      { key: "paragraph", label: "Paragraph", type: "textarea" },
      { key: "bottomCtaLabel", label: "Bottom CTA Label", type: "text" },
      { key: "bottomCtaLink", label: "Bottom CTA Link", type: "text" },
    ],
    lists: [
      {
        key: "tiles",
        label: "Banner Tiles",
        itemFields: [
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "badgeLabel", label: "Badge Label", type: "text" },
          { key: "ctaLabel", label: "CTA Label", type: "text" },
          { key: "image", label: "Image", type: "image" },
          { key: "alt", label: "Image Alt Text", type: "text" },
          { key: "href", label: "Link", type: "text" },
        ],
      },
    ],
    defaultData: {
      overline: "Batik Styles Worth Wearing",
      heading: "Trending Batik Suits & Women's Clothing",
      highlightWord: "Women's Clothing",
      paragraph: "Explore trending batik prints, fresh Batik Prints Women Clothing designs, cotton dresses for women, and ready-to-wear collections created for everyday shoppers, boutiques, resellers, and fashion businesses.",
      bottomCtaLabel: "Explore All Collections",
      bottomCtaLink: "/batik-prints-womens-clothing",
      tiles: [
        { href: "/batik-prints-womens-clothing", image: "/a.png", alt: "Cotton Cloth", badgeLabel: "Category", title: "Batik Prints Women Clothing", description: "Distinctive batik prints for everyday Indian style.", ctaLabel: "Explore Collection" },
        { href: "/batik-cotton-dress-for-women", image: "/b.png", alt: "Cotton Dress for Women", badgeLabel: "Category", title: "Cotton Dress for Women", description: "Pure cotton dresses for women with elegant batik prints and breathable comfort.", ctaLabel: "Explore Collection" },
        { href: "/batik-ethnic-wear-for-women", image: "/c.png", alt: "Ethnic Wear for Women", badgeLabel: "Category", title: "Ethnic Wear for Women", description: "Statement-making women suits with timeless batik design character.", ctaLabel: "Explore Collection" },
        { href: "/new-batik-prints-suits", image: "/n.png", alt: "Cotton Kurtis for Women", badgeLabel: "Category", title: "New Arrival", description: "Fresh batik suits and new styles added to the collection.", ctaLabel: "Explore Collection" },
        { href: "/wholesale-batik-women-dresses", image: "/category-Homepage/womenclothing.webp", alt: "Dresses for Women", badgeLabel: "Category", title: "Wholesale", description: "Ready-stock fashion collections for growing businesses.", ctaLabel: "Explore Collection" },
      ],
    },
  },
  {
    key: "trending_products_text",
    label: "Trending Products Heading",
    description: "Heading/copy above the trending products carousel (products stay live).",
    fields: [
      { key: "overline", label: "Overline", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "highlightWord", label: "Highlight Word (optional, colored)", type: "text" },
      { key: "paragraph", label: "Paragraph", type: "textarea" },
      { key: "badgeLabel", label: "Badge Label (e.g. TREND)", type: "text" },
      { key: "ctaLabel", label: "CTA Label", type: "text" },
      { key: "ctaLink", label: "CTA Link", type: "text" },
    ],
    defaultData: {
      overline: "Best Batik Suit Designs",
      heading: "Best-Selling Batik Suits in Cotton Styles",
      highlightWord: "Cotton Styles",
      paragraph: "Discover best-selling batik suit designs, stylish suit designs for women, cotton dress material, and printed dresses made for everyday wear, festive moments, and effortless Indian styling.",
      badgeLabel: "TREND",
      ctaLabel: "Shop Best Sellers",
      ctaLink: "/batik-ethnic-wear-for-women",
    },
  },
  {
    key: "premium_trust",
    label: "Premium Trust Section",
    description: "\"Trusted by 1,000+ Retail Partners\" section.",
    fields: [
      { key: "overline", label: "Overline", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      { key: "highlightWord", label: "Highlight Word (optional, colored)", type: "text" },
      { key: "paragraph", label: "Paragraph", type: "textarea" },
      { key: "image", label: "Image (used when no video is set)", type: "image" },
      { key: "videoUrl", label: "Video (optional, overrides image)", type: "video" },
      { key: "ctaLabel", label: "CTA Label", type: "text" },
      { key: "ctaLink", label: "CTA Link", type: "text" },
    ],
    lists: [
      {
        key: "features",
        label: "Trust Features",
        itemFields: [
          { key: "num", label: "Number/Label", type: "text" },
          { key: "t", label: "Title", type: "text" },
          { key: "d", label: "Description", type: "textarea" },
        ],
      },
    ],
    defaultData: {
      overline: "The Legacy of Quality",
      heading: "Trusted by 1,000+ Retail Partners\nfor Quality Batik Fashion",
      highlightWord: "1,000+ Retail Partners",
      paragraph: "For 15+ years, AQSHA Batik Suits has helped boutiques, wholesalers, and resellers source dependable women's dress material, cotton fabrics, Shalwar Kameez, Dupatta/Chunni, and ready-to-sell fashion collections across India.",
      image: "/round-category/indian dresses for girls.webp",
      videoUrl: "",
      ctaLabel: "Discover Our Story",
      ctaLink: "/about-us",
      features: [
        { num: "01", t: "15+ Years of Heritage", d: "Mastering consistent quality, detailed finishing, and dependable production since 2008." },
        { num: "02", t: "Premium Color Fastness", d: "Carefully finished cotton fabrics designed to retain their print, color, and appeal through everyday wear." },
        { num: "03", t: "Ready Dispatch", d: "Efficient production and trusted logistics help keep your fashion stock moving without unnecessary delays." },
        { num: "04", t: "Direct Manufacturer Margins", d: "Source directly from an Ujjain batik manufacturer and access competitive pricing across batik suits, cotton kurtis, dress material, and wholesale fashion collections." },
      ],
    },
  },
  {
    key: "lookbook",
    label: "Lookbook",
    description: "The 4-image lookbook grid.",
    fields: [
      { key: "overline", label: "Overline", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      { key: "highlightWord", label: "Highlight Word (optional, colored)", type: "text" },
      { key: "paragraph", label: "Paragraph", type: "textarea" },
      { key: "ctaLabel", label: "CTA Label", type: "text" },
      { key: "ctaLink", label: "CTA Link", type: "text" },
    ],
    lists: [
      {
        key: "looks",
        label: "Looks (exactly 4 recommended — layout is built for 4)",
        itemFields: [
          { key: "title", label: "Title", type: "text" },
          { key: "img", label: "Image", type: "image" },
          { key: "link", label: "Link", type: "text" },
        ],
      },
    ],
    defaultData: {
      overline: "Style Guide",
      heading: "Find Your Perfect Everyday Look",
      highlightWord: "Everyday Look",
      paragraph: "Explore inspiring women's dress designs, batik dress designs, casual dresses for women, and versatile suit sets for women—styled to help you discover your next effortless look.",
      ctaLabel: "Explore More Styles",
      ctaLink: "/batik-ethnic-wear-for-women",
      looks: [
        { title: "Batik Party Wear Suit for Women", img: "/lookbook_emerald.png", link: "/batik-cotton-dress-for-women" },
        { title: "White Cotton Kurti for Women", img: "/lookbook_white.png", link: "/batik-prints-womens-clothing" },
        { title: "Designer Cotton Dress for Women", img: "/lookbook_designer.png", link: "/new-batik-prints-suits" },
        { title: "Premium Casual Kurti for Women", img: "/lookbook_casual.png", link: "/wholesale-batik-women-dresses" },
      ],
    },
  },
  {
    key: "partnership_banner",
    label: "Partnership Banner",
    description: "Single full-width image banner, no text.",
    fields: [
      { key: "image", label: "Image", type: "image" },
    ],
    defaultData: {
      image: "/round-category/plus size clothing.webp",
    },
  },
  {
    key: "shoppable_reels",
    label: "Shoppable Reels",
    description: "The video reel gallery.",
    fields: [
      { key: "overline", label: "Overline", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "highlightWord", label: "Highlight Word (optional, colored)", type: "text" },
      { key: "paragraph1", label: "Paragraph 1", type: "textarea" },
      { key: "paragraph2", label: "Paragraph 2", type: "textarea" },
      { key: "bottomCtaLabel", label: "Bottom CTA Label", type: "text" },
    ],
    lists: [
      {
        key: "reels",
        label: "Reels",
        itemFields: [
          { key: "title", label: "Title", type: "text" },
          { key: "videoUrl", label: "Video", type: "video" },
          { key: "posterUrl", label: "Poster Image", type: "image" },
          { key: "whatsappMsg", label: "WhatsApp Message", type: "textarea" },
        ],
      },
    ],
    defaultData: {
      overline: "AQSHA Batik in Motion",
      heading: "See Batik Dresses, Kurtis & Women's Suits in Motion",
      highlightWord: "in Motion",
      paragraph1: "See the drape, flow, print, and finish behind our latest batik dresses, batik print kurtis, and suit sets for women.",
      paragraph2: "Real fabric. Real movement. Real style.",
      bottomCtaLabel: "Watch the Collection",
      reels: [
        { title: "Festive Collection '26", videoUrl: "/videos/Video-86985.mp4", posterUrl: "/pink_batik_model.png", whatsappMsg: "Hi, I saw the Festive Collection reel and want to know the pricing." },
        { title: "Premium Cotton Batiks", videoUrl: "/videos/Video-22912.mp4", posterUrl: "/cat_batik_cloth.webp", whatsappMsg: "Hi, I am interested in the Cotton Batiks from the reel." },
        { title: "Wholesale Exclusives", videoUrl: "/videos/Video-37755.mp4", posterUrl: "/cat_wholesale.webp", whatsappMsg: "Hi, I want more details on the Wholesale Exclusives reel." },
        { title: "New Arrivals Try-On", videoUrl: "/videos/Video-4836.mp4", posterUrl: "/cat_new_arrival.webp", whatsappMsg: "Hi, I would like to order from the New Arrivals reel." },
        { title: "Artisan Picks", videoUrl: "/videos/Video-5816.mp4", posterUrl: "/pink_batik_model.png", whatsappMsg: "Hi, I would like to order from the Artisan Picks reel." },
        { title: "Trending Styles", videoUrl: "/videos/Video-727.mp4", posterUrl: "/cat_batik_cloth.webp", whatsappMsg: "Hi, I would like to order from the Trending Styles reel." },
      ],
    },
  },
  {
    key: "faq",
    label: "FAQ",
    description: "Home page FAQ accordion.",
    fields: [],
    lists: [
      {
        key: "items",
        label: "Questions",
        itemFields: [
          { key: "q", label: "Question", type: "text" },
          { key: "a", label: "Answer", type: "textarea" },
        ],
      },
    ],
    defaultData: {
      items: [
        { q: "Which Batik Cotton Dress for Women is best for daily suits for women?", a: "Cotton 60x60 is a popular choice for daily batik suits because it offers a lightweight, breathable feel suited to regular wear. It works well for batik print kurtis, everyday suits, and comfortable women's clothing." },
        { q: "Can Batik Cotton Dress for Women be used for plus-size women's clothing?", a: "Yes. Batik Cotton Dress for Women can be used to create comfortable plus-size women's clothing with flattering prints and practical silhouettes. Batik print suits, kurtis, and dresses can be designed in different cuts and sizes for comfortable everyday styling." },
        { q: "Why are batik suits becoming popular for women?", a: "Batik suits combine distinctive prints, traditional craftsmanship, and wearable modern silhouettes. From batik print kurtis to complete batik suit sets, they offer a balance of cultural character, comfort, and contemporary fashion." },
        { q: "Are batik print kurtis suitable for everyday wear?", a: "Yes. A well-made batik print kurti can be an excellent everyday option, particularly when crafted from breathable cotton fabric. Cotton-based batik kurtis provide comfortable styling for daily routines while adding distinctive prints to a woman's wardrobe." },
        { q: "Is Ujjain batik good for cotton kurtis for women?", a: "Ujjain has a strong heritage of batik craftsmanship, making its batik styles an appealing choice for cotton kurtis for women. The quality of a particular garment ultimately depends on its cotton fabric, print finishing, construction, and overall comfort." },
      ],
    },
  },
  {
    key: "lead_generation_form",
    label: "Lead Generation Form",
    description: "\"Get Personalized Pricing & Catalog\" form section.",
    fields: [
      { key: "title", label: "Title", type: "textarea" },
      { key: "highlightWord", label: "Highlight Word (optional, colored)", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
    ],
    lists: [
      {
        key: "benefits",
        label: "Benefit Bullets",
        itemFields: [
          { key: "text", label: "Benefit", type: "text" },
        ],
      },
    ],
    defaultData: {
      title: "Get Personalized Batik Fabric\nPricing & Catalog",
      highlightWord: "Batik Fabric",
      description: "Explore our latest batik designs, batik print fabric, batik dress material, and batik suit collections with personalized wholesale pricing, ready-stock updates, and collection catalogs from AQSHA Batik Suits.",
      benefits: [
        { text: "Latest Batik Print Design Catalog" },
        { text: "Wholesale Pricing & Bulk Order Support" },
        { text: "Batik & Cotton Dress Material Options" },
        { text: "Printed Cotton Fabric for Kurtis" },
        { text: "Fast WhatsApp Assistance" },
        { text: "Ready-Stock & New Collection Updates" },
      ],
    },
  },
  {
    key: "sticky_enquiry_button",
    label: "Sticky Enquiry Button",
    description: "The floating quote button.",
    fields: [
      { key: "label", label: "Button Label", type: "text" },
    ],
    defaultData: {
      label: "Get Quote Now",
    },
  },
  {
    key: "how_to_order",
    label: "How To Order",
    description: "The \"How to Order\" step-by-step section (steps themselves stay fixed — only this heading/CTA is editable here).",
    fields: [
      { key: "tag", label: "Tag", type: "text" },
      { key: "title", label: "Title", type: "text" },
      { key: "subtitle", label: "Subtitle", type: "textarea" },
      { key: "ctaText", label: "CTA Label", type: "text" },
    ],
    defaultData: {
      tag: "Wholesale Process",
      title: "How to Order Batik Suits & Women Clothing Online",
      subtitle: "Shop women's clothing online with ease—from exploring batik suit collections and fabrics to selecting your styles, requesting a quote, and receiving your order across India.",
      ctaText: "Start Your Order on WhatsApp",
    },
  },
  {
    key: "target_audience",
    label: "Target Audience",
    description: "\"Built for Boutique Owners / Resellers / Wholesalers / Marketplaces\" section.",
    fields: [
      { key: "overline", label: "Overline", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      { key: "highlightWord", label: "Highlight Word (optional, colored)", type: "text" },
      { key: "paragraph", label: "Paragraph", type: "textarea" },
    ],
    lists: [
      {
        key: "audiences",
        label: "Audience Cards",
        itemFields: [
          { key: "t", label: "Title", type: "text" },
          { key: "d", label: "Description", type: "textarea" },
          { key: "b", label: "CTA Badge Text", type: "text" },
        ],
      },
    ],
    defaultData: {
      overline: "Built for Every Buyer",
      heading: "Women's Fashion Collections\nMade for Growing Businesses",
      highlightWord: "Growing Businesses",
      paragraph: "Choose ready-to-sell women's fashion collections, from batik suits and batik blouse designs to women dress material, Shalwar Kameez, and Dupatta/Chunni styles—made for businesses that need dependable fashion stock.",
      audiences: [
        { t: "Boutique Owners", d: "Curated batik suits, blouse designs, and fresh women's clothing collections that help boutiques keep their shelves relevant and their customers coming back.", b: "Fast-Moving Designs" },
        { t: "Resellers", d: "Access attractive suit designs for women, cotton dress material, and ready-to-sell collections designed to support competitive pricing and healthier margins.", b: "Better Margins" },
        { t: "Wholesalers", d: "Source Batik Cotton Dress for Women, printed cotton fabric for kurtis, and scalable women's dress material for consistent bulk fashion orders.", b: "Bulk Consistency" },
        { t: "Marketplaces", d: "Bring searchable women's dresses, batik print styles, and everyday cotton fashion to online customers with collections aligned with modern buying demand.", b: "Trending Stock" },
      ],
    },
  },
  {
    key: "our_story",
    label: "Our Story",
    description: "The company history / stats / timeline section.",
    fields: [
      { key: "overline", label: "Overline", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      { key: "highlightWord", label: "Highlight Word (optional, colored)", type: "text" },
      { key: "image", label: "Image", type: "image" },
    ],
    lists: [
      {
        key: "stats",
        label: "Stats",
        itemFields: [
          { key: "v", label: "Value", type: "text" },
          { key: "l", label: "Label", type: "text" },
        ],
      },
      {
        key: "timeline",
        label: "Timeline",
        itemFields: [
          { key: "heading", label: "Heading", type: "text" },
          { key: "paragraph", label: "Paragraph", type: "textarea" },
        ],
      },
    ],
    defaultData: {
      overline: "Our Story",
      heading: "From 15 Handmade Batik Suits to a Trusted Ujjain Batik Manufacturer",
      highlightWord: "Ujjain Batik Manufacturer",
      image: "/round-category/beautiful dresses for women.webp",
      stats: [
        { v: "15+", l: "Years Active" },
        { v: "1,000+", l: "Retail Partners" },
        { v: "1,500+", l: "Monthly Output" },
        { v: "Pan-India", l: "Distribution" },
      ],
      timeline: [
        { heading: "2008 — The First Step", paragraph: "AQSHA Batik Suits began in Bherugarh, Ujjain, with just 15 handmade suits for women. Those early pieces shaped our commitment to quality cotton fabric, careful finishing, and fashion that earns customer trust." },
        { heading: "Building Trust", paragraph: "As demand grew, we built lasting relationships with wholesalers, boutiques, and resellers, supplying women's fashion collections designed around changing market preferences." },
        { heading: "Today — Pan-India Supply", paragraph: "Today, AQSHA Batik Suits supplies fashion retailers and business buyers across Delhi, Punjab, Gujarat, and other Indian markets with dependable batik and cotton fashion collections." },
      ],
    },
  },
  {
    key: "buyer_testimonial_gallery",
    label: "Buyer Testimonial Gallery",
    description: "\"What Buyers Say\" WhatsApp screenshot gallery.",
    fields: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "highlightWord", label: "Highlight Word (optional, colored)", type: "text" },
      { key: "statValue1", label: "Stat 1 Value (e.g. 4.9/5)", type: "text" },
      { key: "statLabel1", label: "Stat 1 Label (e.g. Average Rating)", type: "text" },
      { key: "statValue2", label: "Stat 2 Value (e.g. 10K+)", type: "text" },
      { key: "statLabel2", label: "Stat 2 Label (e.g. Orders Delivered)", type: "text" },
    ],
    lists: [
      {
        key: "images",
        label: "Screenshots",
        itemFields: [
          { key: "image", label: "Image", type: "image" },
        ],
      },
    ],
    defaultData: {
      heading: "Trusted by 1,000+ Retail Partners",
      highlightWord: "1,000+",
      statValue1: "4.9/5",
      statLabel1: "Average Rating",
      statValue2: "10K+",
      statLabel2: "Orders Delivered",
      images: [
        { image: "/WhatsApp Image 2026-06-10 at 1.15.20 PM.jpeg" },
        { image: "/WhatsApp Image 2026-06-10 at 1.15.21 PM (1).jpeg" },
        { image: "/WhatsApp Image 2026-06-10 at 1.15.21 PM (2).jpeg" },
        { image: "/WhatsApp Image 2026-06-10 at 1.15.21 PM.jpeg" },
        { image: "/WhatsApp Image 2026-06-10 at 1.15.22 PM (1).jpeg" },
        { image: "/WhatsApp Image 2026-06-10 at 1.15.22 PM.jpeg" },
      ],
    },
  },
  {
    key: "buyer_psychology",
    label: "Buyer Psychology",
    description: "\"Broad Market Appeal / Everyday Comfort / ...\" feature grid.",
    fields: [
      { key: "overline", label: "Overline", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "highlightWord", label: "Highlight Word (optional, colored)", type: "text" },
      { key: "paragraph", label: "Paragraph", type: "textarea" },
    ],
    lists: [
      {
        key: "features",
        label: "Features",
        itemFields: [
          { key: "t", label: "Title", type: "text" },
          { key: "d", label: "Description", type: "textarea" },
        ],
      },
    ],
    defaultData: {
      overline: "The Best Investment in Everyday Fashion",
      heading: "Why Smart Sellers Choose AQSHA Batik Suits",
      highlightWord: "AQSHA Batik Suits",
      paragraph: "You are investing in women's clothing collections built around repeat demand, breathable comfort, distinctive batik prints, and wearable styles customers genuinely want to buy again.",
      features: [
        { t: "Broad Market Appeal", d: "Batik suits for women and contemporary ethnic styles suited to boutiques, marketplaces, resellers, and modern fashion stores." },
        { t: "Everyday Comfort", d: "Breathable cotton dresses, cotton dress material, and comfortable kurti fabrics designed for effortless everyday wear." },
        { t: "Timeless Demand", d: "Distinctive batik print dresses and wearable styles that remain relevant across changing fashion seasons." },
        { t: "Versatile Collections", d: "Flexible collections covering batik print kurtis, suit sets for women, casual dresses for women, cotton fashion, and modern women's clothing." },
      ],
    },
  },
  {
    key: "cta_banner_marquee",
    label: "CTA Marquee Banner",
    description: "The scrolling dark banner text near the bottom of the page.",
    fields: [
      { key: "text", label: "Marquee Text", type: "text" },
    ],
    defaultData: {
      text: "Fast-Moving Suits for Women • New Batik Designs Weekly • Wholesale Orders Available",
    },
  },
];
