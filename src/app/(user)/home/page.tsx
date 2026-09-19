import Image from "next/image";
import Link from "next/link";
import Nav from "@/modules/user/components/Nav";
import HomeHeroSlider from "@/modules/user/components/HomeHeroSlider";
import FAQ from "@/modules/user/components/FAQ";
import PremiumTrustSection from "@/modules/user/components/PremiumTrustSection";
import LeadGenerationForm from "@/modules/user/components/LeadGenerationForm";
import TrendingProductsSection from "@/modules/user/components/TrendingProductsSection";
import StickyEnquiryButton from "@/modules/user/components/StickyEnquiryButton";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import HowToOrderSection from "@/modules/user/components/HowToOrderSection";
import { ShopByCategorySection, FeaturedGridSection, LifestyleBannerSection, TrendingCollectionsBannerSection, LookbookSection, PartnershipBannerSection } from "@/modules/user/components/VisualHomeSections";
import ScrollAnimationInit from "@/modules/user/components/ScrollAnimationInit";
import ShoppableReelsSection from "@/modules/user/components/ShoppableReelsSection";
import BuyerTestimonialGallery from "@/modules/user/components/BuyerTestimonialGallery";
import { renderWithHighlight } from "@/utils/textHighlight";
import { getPageContent } from "@/utils/getPageContent";

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20the%20wholesale%20catalogue";

const DEFAULT_CURATED_COLLECTION_TEXT = {
  overline: "Curated for Excellence",
  heading: "Best-Selling Batik Suit Collections\nfor Every Woman",
  highlightWord: "Batik Suit Collections",
  paragraph: "Discover beautiful batik print designs, quality cotton fabric for kurtis, printed cotton fabrics for kurtis, and elegant suit designs complemented by versatile Shalwar Kameez and Dupatta/Chunni styles. From everyday comfort to occasion-ready dressing, each collection is selected for distinctive prints, wearable silhouettes, and dependable fabric quality.",
  ctaLabel: "Explore Collections",
  ctaLink: "/batik-ethnic-wear-for-women",
};

const DEFAULT_SHOP_BY_CATEGORY = {
  categories: [
    { title: "Batik Prints Women Clothing", alt: "cotton cloth", img: "/round-category/Batik Cotton Dress for Women Catagory image.webp", href: "/batik-prints-womens-clothing", sub: "Signature" },
    { title: "Ethnic Wear for Women", alt: "ethnic wear for women", img: "/round-category/Ethnic Wear for Women.webp", href: "/batik-ethnic-wear-for-women", sub: "Everyday" },
    { title: "Batik Cotton Dress for Women", alt: "cotton dress for women", img: "/round-category/Batik Prints Women Clothing catagory image.webp", href: "/batik-cotton-dress-for-women", sub: "Comfort" },
    { title: "New Arrival", alt: "cotton kurtis for women", img: "/round-category/New Arrival catagory image.webp", href: "/new-batik-prints-suits", sub: "Latest Drops" },
    { title: "Wholesale", alt: "dresses for women", img: "/round-category/Wholesale catagory image.webp", href: "/wholesale-batik-women-dresses", sub: "Bulk Pricing" },
  ],
};

const DEFAULT_TARGET_AUDIENCE = {
  overline: "Built for Every Buyer",
  heading: "Women's Fashion Collections\nMade for Growing Businesses",
  highlightWord: "Growing Businesses",
  paragraph: "Choose ready-to-sell women's fashion collections, from batik suits and batik blouse designs to women dress material, Shalwar Kameez, and Dupatta/Chunni styles—made for businesses that need dependable fashion stock.",
  audiences: [
    { t: "Boutique Owners", d: "Curated batik suits, blouse designs, and fresh women's clothing collections that help boutiques keep their shelves relevant and their customers coming back.", b: "Fast-Moving Designs" },
    { t: "Resellers", d: "Access attractive suit designs for women, cotton dress material, and ready-to-sell collections designed to support competitive pricing and healthier margins.", b: "Better Margins" },
    { t: "Wholesalers", d: "Source Batik Cotton Dress for Women, printed cotton fabric for kurtis, and scalable women's dress material for consistent bulk fashion orders.", b: "Bulk Consistency" },
    { t: "Marketplaces", d: "Bring searchable women's dresses, batik print styles, and everyday cotton fashion to online customers with collections aligned with modern buying demand.", b: "Trending Stock" }
  ],
};

const DEFAULT_OUR_STORY = {
  overline: "Our Story",
  heading: "From 15 Handmade Batik Suits to a Trusted Ujjain Batik Manufacturer",
  highlightWord: "Ujjain Batik Manufacturer",
  image: "/round-category/beautiful dresses for women.webp",
  stats: [
    { v: "15+", l: "Years Active" },
    { v: "1,000+", l: "Retail Partners" },
    { v: "1,500+", l: "Monthly Output" },
    { v: "Pan-India", l: "Distribution" }
  ],
  timeline: [
    { heading: "2008 — The First Step", paragraph: "AQSHA Batik Suits began in Bherugarh, Ujjain, with just 15 handmade suits for women. Those early pieces shaped our commitment to quality cotton fabric, careful finishing, and fashion that earns customer trust." },
    { heading: "Building Trust", paragraph: "As demand grew, we built lasting relationships with wholesalers, boutiques, and resellers, supplying women's fashion collections designed around changing market preferences." },
    { heading: "Today — Pan-India Supply", paragraph: "Today, AQSHA Batik Suits supplies fashion retailers and business buyers across Delhi, Punjab, Gujarat, and other Indian markets with dependable batik and cotton fashion collections." },
  ],
};

const DEFAULT_BUYER_TESTIMONIAL_GALLERY = {
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
};

const DEFAULT_BUYER_PSYCHOLOGY = {
  overline: "The Best Investment in Everyday Fashion",
  heading: "Why Smart Sellers Choose AQSHA Batik Suits",
  highlightWord: "AQSHA Batik Suits",
  paragraph: "You are investing in women's clothing collections built around repeat demand, breathable comfort, distinctive batik prints, and wearable styles customers genuinely want to buy again.",
  features: [
    { t: "Broad Market Appeal", d: "Batik suits for women and contemporary ethnic styles suited to boutiques, marketplaces, resellers, and modern fashion stores." },
    { t: "Everyday Comfort", d: "Breathable cotton dresses, cotton dress material, and comfortable kurti fabrics designed for effortless everyday wear." },
    { t: "Timeless Demand", d: "Distinctive batik print dresses and wearable styles that remain relevant across changing fashion seasons." },
    { t: "Versatile Collections", d: "Flexible collections covering batik print kurtis, suit sets for women, casual dresses for women, cotton fashion, and modern women's clothing." }
  ],
};

const DEFAULT_HOW_TO_ORDER = {
  tag: "Wholesale Process",
  title: "How to Order Batik Suits & Women Clothing Online",
  subtitle: "Shop women's clothing online with ease—from exploring batik suit collections and fabrics to selecting your styles, requesting a quote, and receiving your order across India.",
  ctaText: "Start Your Order on WhatsApp",
};

const DEFAULT_CTA_BANNER_MARQUEE = {
  text: "Fast-Moving Suits for Women • New Batik Designs Weekly • Wholesale Orders Available",
};

export default async function HomePage() {
  const [
    curatedCollectionText,
    { categories: curatedCategories },
    targetAudience,
    ourStory,
    buyerGallery,
    buyerPsychology,
    howToOrder,
    ctaBanner,
  ] = await Promise.all([
    getPageContent("curated_collection_text", DEFAULT_CURATED_COLLECTION_TEXT),
    getPageContent("shop_by_category", DEFAULT_SHOP_BY_CATEGORY),
    getPageContent("target_audience", DEFAULT_TARGET_AUDIENCE),
    getPageContent("our_story", DEFAULT_OUR_STORY),
    getPageContent("buyer_testimonial_gallery", DEFAULT_BUYER_TESTIMONIAL_GALLERY),
    getPageContent("buyer_psychology", DEFAULT_BUYER_PSYCHOLOGY),
    getPageContent("how_to_order", DEFAULT_HOW_TO_ORDER),
    getPageContent("cta_banner_marquee", DEFAULT_CTA_BANNER_MARQUEE),
  ]);

  return (
    <div className="min-h-screen bg-cream selection:bg-primary selection:text-white scroll-smooth flex flex-col font-sans">
      <ScrollAnimationInit />
      <Nav />

      {/* ── HOME HERO SLIDER ── */}
      <HomeHeroSlider />

      <GoogleReviewBar />

      <TrendingCollectionsBannerSection />

      <TrendingProductsSection />

      <ShopByCategorySection />

      <FeaturedGridSection />

      {/* ── CURATED COLLECTION ── */}
      <section id="collection" className="pt-16 pb-20 md:pt-20 md:pb-32 bg-tan">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-12 md:mb-16 max-w-4xl mx-auto">
            <span className="text-overline uppercase tracking-[0.2em] font-bold text-[#8A4B32]">{curatedCollectionText.overline}</span>
            <h2 className="text-h2 md:text-h1 text-primary font-normal leading-tight">
              {renderWithHighlight(curatedCollectionText.heading, curatedCollectionText.highlightWord)}
            </h2>
            <p className="text-sm md:text-base text-primary/80 font-medium leading-relaxed mt-2">
              {curatedCollectionText.paragraph}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-10">
            {curatedCategories.map((item: any, i: number) => (
              <a key={i} href={item.href} className="group block cursor-pointer flex flex-col items-center text-center w-full">
                <div className="overflow-hidden aspect-[4/5] w-full relative mb-4 md:mb-6 rounded-sm shadow-sm border border-primary/10">
                  <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover opacity-100 group-hover:scale-[1.05] transition-all duration-[1.5s] ease-out" />
                </div>
                <h3 className="text-[13px] md:text-lg font-heading font-semibold text-primary group-hover:text-accent transition-colors leading-tight px-1">{item.title}</h3>
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold mt-2 opacity-80 text-primary/70 decoration-accent group-hover:underline underline-offset-4 transition-all">
                  {item.sub}
                </span>
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-10 md:mt-14">
            <a href={curatedCollectionText.ctaLink} className="btn-secondary group">
              <span>{curatedCollectionText.ctaLabel}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── TARGET AUDIENCE ── */}
      <section className="scroll-animate pt-16 pb-24 md:pt-20 md:pb-32 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-3 md:gap-4 text-center items-center max-w-4xl mx-auto">
            <span className="text-overline uppercase tracking-[0.2em] font-bold text-[#8A4B32]">{targetAudience.overline}</span>
            <h2 className="text-h2 md:text-h1 text-primary font-normal leading-tight">
              {renderWithHighlight(targetAudience.heading, targetAudience.highlightWord)}
            </h2>
            <p className="text-sm md:text-base text-primary/80 font-medium leading-relaxed mt-2">
              {targetAudience.paragraph}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 w-full">
            {targetAudience.audiences.map((item: any, i: number) => (
              <div key={i} className="flex flex-col bg-tan/15 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-tan/30 hover:-translate-y-1 hover:bg-tan/25 transition-all duration-500">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-cream text-accent rounded-full border border-tan/40 flex items-center justify-center font-heading text-sm md:text-base mb-3 md:mb-5">
                  0{i + 1}
                </div>
                <h3 className="text-xs md:text-base font-heading font-medium mb-1 md:mb-2 text-primary leading-tight">{item.t}</h3>
                <p className="text-[10px] md:text-[13px] leading-relaxed text-primary/80 font-medium mb-4 md:mb-6 flex-grow">{item.d}</p>
                <a href={WA} className="text-[8px] md:text-[10px] text-accent uppercase tracking-[0.15em] font-bold hover:text-primary flex items-center gap-1 md:gap-3 transition-all">
                  {item.b} <span className="text-sm md:text-base leading-none">&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnershipBannerSection />

      <PremiumTrustSection />

      <LifestyleBannerSection />

      <section id="about" className="py-10 md:py-14 bg-[#F9F8F6] border-t border-primary/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-10">

          {/* Mobile-Only Heading (Appears before image on mobile) */}
          <div className="flex lg:hidden flex-col gap-3 text-center items-center w-full">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#8A4B32]">{ourStory.overline}</span>
            <h2 className="text-h2 leading-[1.1]">
              {renderWithHighlight(ourStory.heading, ourStory.highlightWord)}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start lg:items-stretch w-full">
            {/* Visual side with stats */}
            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full min-h-[450px] bg-cream overflow-hidden rounded-[2px] shadow-sm border border-primary/10 lg:order-1 order-1">
              <Image
                src={ourStory.image}
                alt="Aqsha Roots"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-[6s]"
              />

              {/* Transparent Stats Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-cream/95 backdrop-blur-md border-t border-primary/10 p-4 md:p-8 grid grid-cols-2 gap-4 md:gap-6">
                {ourStory.stats.map((stat: any, i: number) => (
                  <div key={i} className="flex flex-col gap-1 md:gap-1.5">
                    <span className="text-2xl md:text-3xl lg:text-4xl text-highlight italic">{stat.v}</span>
                    <span className="text-[7.5px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-accent mt-0.5 md:mt-1">{stat.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline side (The Journey) */}
            <div className="flex flex-col h-full gap-10 lg:gap-14 relative lg:pl-10 lg:order-2 order-2 lg:py-6">

              {/* Desktop-Only Heading */}
              <div className="hidden lg:flex flex-col gap-4">
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#8A4B32]">{ourStory.overline}</span>
                <h2 className="text-h2 leading-[1.1]">{renderWithHighlight(ourStory.heading, ourStory.highlightWord)}</h2>
              </div>

              {/* Vertical Timeline */}
              <div className="flex flex-col gap-10 relative before:absolute before:inset-0 before:left-[11px] before:w-[1px] before:h-[80%] before:bg-primary/20">
                {ourStory.timeline.map((entry: any, i: number) => (
                  <div key={i} className="flex gap-8 relative z-10 group">
                    <div className="w-6 h-6 flex-shrink-0 rounded-full bg-cream border border-primary/40 flex items-center justify-center mt-1 group-hover:border-accent transition-colors">
                      <div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-accent transition-colors"></div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-h4 text-primary">{entry.heading}</h3>
                      <p className="text-body2 text-primary/80 leading-relaxed">{entry.paragraph}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* ── WHAT BUYERS SAY ── */}
      <BuyerTestimonialGallery data={buyerGallery} />

      {/* ── BUYER PSYCHOLOGY ── */}
      <section className="pt-16 pb-4 md:pt-20 md:pb-10 px-6 bg-cream border-t border-border/40">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center gap-10 md:gap-12">
          <div className="flex flex-col gap-3 max-w-5xl items-center">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-[#8A4B32]">{buyerPsychology.overline}</span>
            <h2 className="text-h2">
              {renderWithHighlight(buyerPsychology.heading, buyerPsychology.highlightWord)}
            </h2>
            <p className="text-sm md:text-base mt-2 leading-relaxed text-primary/80 font-medium">
              {buyerPsychology.paragraph}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 w-full text-left">
            {buyerPsychology.features.map((item: any, i: number) => (
              <div key={i} className="flex flex-col bg-tan/15 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-tan/30 hover:-translate-y-1 hover:bg-tan/25 transition-all duration-500">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-cream text-accent rounded-full border border-tan/40 flex items-center justify-center font-heading text-sm md:text-base mb-3 md:mb-5">
                  0{i + 1}
                </div>
                <h3 className="text-xs md:text-base font-heading font-medium mb-1 md:mb-2 text-primary">{item.t}</h3>
                <p className="text-[10px] md:text-[13px] text-primary/80 font-medium leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-2 md:mt-4">
            <Link href="/wholesale-batik-women-dresses" className="btn-secondary group">
              <span>Start Your Wholesale Journey</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <ShoppableReelsSection />

      <LookbookSection />

      <HowToOrderSection
        title={howToOrder.title}
        whatsappLink={WA}
        tag={howToOrder.tag}
        subtitle={howToOrder.subtitle}
        ctaText={howToOrder.ctaText}
      />


      <section className="bg-primary text-white py-10 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-base md:text-lg font-heading font-normal max-w-3xl text-center md:text-left leading-snug">
            {ctaBanner.text}
          </h3>
          <a href={WA} className="btn-primary">
            ENQUIRE NOW
          </a>
        </div>
      </section>

      <FAQ />
      <LeadGenerationForm />
      <StickyEnquiryButton />
    </div>
  );
}