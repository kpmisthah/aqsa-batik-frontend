import Image from "next/image";
import Nav from "@/modules/user/components/Nav";
import FAQ from "@/modules/user/components/FAQ";
import GoogleReviewBar from "@/modules/user/components/GoogleReviewBar";
import ProductGrid from "@/modules/user/components/ProductGrid";
import PremiumFeatureSection from "@/modules/user/components/PremiumFeatureSection";
import AdvantageSection from "@/modules/user/components/AdvantageSection";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function getProducts() {
    try {
        const res = await fetch(`${API_BASE}/products?limit=100`, { cache: 'no-store' });
        const json = await res.json();
        return json.data || [];
    } catch (e) {
        return [];
    }
}

async function getHeroBanner() {
    try {
        const res = await fetch(`${API_BASE}/banners/new-arrivals`, { cache: 'no-store' });
        const json = await res.json();
        return json.imageUrl || "/hero_bg.png";
    } catch (e) {
        return "/hero_bg.png";
    }
}

const WA = "https://wa.me/918815373767?text=Hi%2C%20I%20want%20to%20enquire%20about%20New%20Arrival%20Batik%20Clothing";

export default async function NewArrivalPage() {
    const allProducts = await getProducts();
    const heroBannerUrl = await getHeroBanner();

    // Sort all products by createdAt in descending order (newest first)
    const sortedProducts = [...allProducts].sort((a: any, b: any) => {
        const dateA = new Date(a.createdAt || 0).getTime();
        const dateB = new Date(b.createdAt || 0).getTime();
        return dateB - dateA;
    });

    // Display the 12 most recent products
    const displayProducts = sortedProducts.slice(0, 12);

    return (
        <div className="min-h-screen bg-[#F5F1EC] text-[#5A2A1F] font-playfair selection:bg-[#5A2A1F] selection:text-white scroll-smooth underline-offset-4">
            <title>New Arrival Batik Clothing | Latest Dresses for Women 2024</title>
            <meta name="description" content="Discover newly added batik clothing, trending batik dresses, and fresh cotton dress styles for modern women. Direct manufacturer supply from Ujjain." />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap');
                .font-playfair { font-family: 'Playfair Display', serif; }
                .font-sans { font-family: 'Playfair Display', serif; }
                .bg-pattern { background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 30V26h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%235A2A1F' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E"); }
            `}</style>

            <Nav />

            {/* ── HERO SECTION ── */}
            <section className="relative min-h-[85vh] md:h-screen w-full flex items-center overflow-hidden bg-[#5A2A1F]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroBannerUrl}
                        alt="New Arrival Batik Collection"
                        fill
                        priority
                        className="object-cover object-[center_top] md:object-[center_20%] brightness-[0.7] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/90 shadow-2xl"></div>
                </div>

                <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10 w-full flex justify-center text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col gap-6 md:gap-10 items-center text-center max-w-5xl">
                        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 w-fit">
                            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Fresh Styles Just Dropped</span>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-6">
                            <h1 className="font-playfair text-3xl md:text-4xl font-bold leading-[1.4] md:leading-[1.3] tracking-tight">
                                <span className='hero-highlight'>New Arrival</span> <span className='hero-highlight'>Batik Clothing</span> & Latest Dresses
                            </h1>
                            <p className="font-playfair text-xl md:text-2xl font-medium tracking-tight opacity-95 leading-relaxed max-w-4xl">
                                Discover newly added batik clothing, trending batik dresses, and fresh cotton dress styles designed for modern women clothing. Updated regularly for boutiques, resellers, and fashion buyers across India.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-8 md:pt-10 items-center justify-center w-full">
                            <a href={WA} target="_blank" rel="noreferrer" className="inline-block bg-[#FFD700] text-[#5A2A1F] px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest border-b-4 border-black/10">
                                Shop New Arrivals
                            </a>
                            <a href="#collection" className="inline-block bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-white hover:text-[#5A2A1F] active:scale-95 transition-all duration-300 uppercase tracking-widest">
                                View Latest Collection
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <GoogleReviewBar />

            {/* ── SECTION: TREND VALUE (WHY NEW ARRIVALS) ── */}
            <section className="py-32 px-6 bg-[#F5F1EC] relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-20">
                    <div className="flex flex-col gap-6 text-center items-center mx-auto max-w-4xl">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Built for Demand</span>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5A2A1F]">New Women Cotton Cloth Designs That Actually Sell Faster</h2>
                        <p className="text-xl text-[#5A2A1F]/70 font-medium italic leading-relaxed">Fashion changes fast. Your stock should too. Our latest batik print dress, stylish dress for women, and fresh arrivals are selected based on real market demand—not guesswork.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                t: "Trend-Driven Designs",
                                d: "Latest batik dresses and new dress styles aligned with current fashion demand.",
                                i: (
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.62 1.96v14.16a2 2 0 002 2h16a2 2 0 002-2V5.42a2 2 0 00-1.62-1.96z" />
                                        <path d="M12 2v19" />
                                    </svg>
                                )
                            },
                            {
                                t: "Fresh Prints & Patterns",
                                d: "New batik design clothing with updated patterns that attract attention instantly.",
                                i: (
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-4.4-4.5-8-10-8z" />
                                    </svg>
                                )
                            },
                            {
                                t: "Everyday Wear Ready",
                                d: "Comfortable cotton dress and ladies cotton dresses designed for daily fashion.",
                                i: (
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2v20" /><path d="M9 7v10" /><path d="M15 7v10" /><path d="M6 5h12v14H6z" />
                                    </svg>
                                )
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-12 bg-white rounded-[40px] border border-[#5A2A1F]/5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center">
                                <div className="text-[#8B3A2B] mb-8 group-hover:scale-110 transition-transform inline-block">{item.i}</div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.t}</h3>
                                <p className="text-[#5A2A1F]/70 font-medium leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRODUCT GRID ── */}
            <section id="collection" className="py-16 lg:py-24 px-6 bg-white relative">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-12 lg:gap-16">
                    <div className="flex flex-col gap-4 text-center items-center mx-auto max-w-4xl">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Latest Collection</span>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5A2A1F]">Explore New Arrival Batik Dress Designs</h2>
                        <p className="text-xl text-[#5A2A1F]/70 font-medium italic leading-relaxed">Browse our newest batik dress online shop collection featuring trending styles, updated prints, and ready-to-wear fashion for modern buyers.</p>
                    </div>

                    <ProductGrid products={displayProducts} columns={4} />
                </div>
            </section>

            <AdvantageSection
                tag="THE NEW ARRIVAL ADVANTAGE"
                title={<>Be the First to <br /> Define the Trend</>}
                items={[
                    "Exclusive trending patterns",
                    "Seasonal color drops",
                    "Market-ready fashion cuts",
                    "Consistent boutique supply"
                ]}
                imageSrc="/hero.png"
                featureTag="JUST IN"
                featureTitle="Season 2024 Designs"
                featureDesc="Freshly manufactured batik clothing optimized for current retail and wholesale demand."
            />

            <PremiumFeatureSection
                tag="Buyer Psychology"
                title={<>Why These Batik Dresses <br />Get Picked First</>}
                features={[
                    {
                        t: "Modern Styling",
                        d: "Designed for today’s woman dress preferences and evolving fashion trends.",
                        c: "text-blue-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        )
                    },
                    {
                        t: "Cotton Comfort",
                        d: "Lightweight cotton fabric makes these styles wearable all day.",
                        c: "text-emerald-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 2v20" /><path d="M9 7v10" /><path d="M15 7v10" /><path d="M6 5h12v14H6z" />
                            </svg>
                        )
                    },
                    {
                        t: "Fast-Moving Styles",
                        d: "High-demand trendy dresses for women that convert quickly.",
                        c: "text-orange-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        )
                    },
                    {
                        t: "Versatile Looks",
                        d: "Perfect for full sleeve dress for women, casual wear, and occasion styling.",
                        c: "text-red-400",
                        i: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            </svg>
                        )
                    }
                ]}
                imageSrc="/hero_bg.png"
                quote="Our new arrivals represent the pinnacle of modern batik—designed for boutiques that value both heritage and high-speed sales."
            />

            {/* ── SECTION: Navigation / Next Step ── */}
            <section className="py-32 px-6 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-[0.02]"></div>
                <div className="max-w-7xl mx-auto flex flex-col gap-20 relative z-10">
                    <div className="text-center flex flex-col gap-6 max-w-4xl mx-auto">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Explore More</span>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5A2A1F]">Continue Your Batik Shopping Journey</h2>
                        <p className="text-xl text-[#5A2A1F]/60 font-medium italic leading-relaxed">Explore categories, discover fabrics, or browse new arrivals—built for every stage of your buying decision.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <a href="/batik-cloth" className="group relative rounded-[40px] overflow-hidden shadow-2xl transition-all hover:-translate-y-2 border border-[#5A2A1F]/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image src="/cta_suits.png" alt="Explore Batik Cloth" layout="fill" objectFit="cover" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-playfair text-2xl font-bold text-white">Explore Batik Cloth</h3>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col gap-6 flex-grow">
                                <p className="text-[#5A2A1F]/70 font-medium leading-relaxed">Discover materials for cotton dress, daily wear, and custom stitching.</p>
                                <div className="flex items-center gap-3 text-[#8B3A2B] font-bold text-sm uppercase tracking-widest mt-auto">
                                    View Collection
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href="/batik-fabric" className="group relative rounded-[40px] overflow-hidden shadow-2xl transition-all hover:-translate-y-2 border border-[#5A2A1F]/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image src="/batik_fabric_hero.png" alt="Explore Batik Fabric" layout="fill" objectFit="cover" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#8B3A2B]/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-playfair text-2xl font-bold text-white">Explore Batik Fabric</h3>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col gap-6 flex-grow">
                                <p className="text-[#5A2A1F]/70 font-medium leading-relaxed">Browse premium cotton fabric and print-focused collections.</p>
                                <div className="flex items-center gap-3 text-[#8B3A2B] font-bold text-sm uppercase tracking-widest mt-auto">
                                    View Fabric
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>

                        <a href="/wholesale" className="group relative rounded-[40px] overflow-hidden shadow-2xl transition-all hover:-translate-y-2 border border-[#5A2A1F]/10 bg-white flex flex-col h-full">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image src="/history.png" alt="Explore Wholesale" layout="fill" objectFit="cover" className="group-hover:scale-110 transition-all duration-[2s] brightness-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Category</span>
                                    <h3 className="font-playfair text-2xl font-bold text-white leading-tight">Explore Wholesale Fabric for Women Clothing</h3>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col gap-6 flex-grow">
                                <p className="text-[#5A2A1F]/70 font-medium leading-relaxed">Stay updated with fresh batik clothing, latest styles, and trending fashion.</p>
                                <div className="flex items-center gap-3 text-[#8B3A2B] font-bold text-sm uppercase tracking-widest mt-auto">
                                    View Wholesale
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION: BATIK JOURNAL (BLOG) ── */}
            <section className="py-32 px-6 bg-[#F5F1EC] border-t border-[#5A2A1F]/10">
                <div className="max-w-7xl mx-auto flex flex-col gap-20">
                    <div className="text-center flex flex-col gap-6 max-w-4xl mx-auto">
                        <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-[0.4em]">Editorial Corner</span>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5A2A1F]">The Batik Fashion Journal</h2>
                        <p className="text-xl text-[#5A2A1F]/60 font-medium italic leading-relaxed">Insights on latest batik clothing, styling trends, and ideas for choosing the right stylish dress for women in today’s fashion market.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { slug: "the-art-of-hand-blocked-batik", title: "The Art of Hand-Blocked Batik", date: "May 15, 2024", cat: "Craftsmanship", img: "/hero_bg.png" },
                            { slug: "batik-fashion-trends-2024", title: "Batik Fashion Trends 2024", date: "June 2, 2024", cat: "Fashion", img: "/cta_suits.png" },
                            { slug: "wholesale-success-stories", title: "Wholesale Success Stories", date: "June 10, 2024", cat: "Business", img: "/history.png" }
                        ].map((post, i) => (
                            <a key={i} href={`/blog/${post.slug}`} className="group flex flex-col gap-6 bg-white p-6 rounded-[40px] shadow-sm hover:shadow-2xl transition-all border border-transparent hover:border-[#5A2A1F]/10">
                                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden">
                                    <Image src={post.img} alt={post.title} layout="fill" objectFit="cover" className="group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                                <div className="flex flex-col gap-1 px-4 pb-4">
                                    <span className="text-[10px] font-bold text-[#8B3A2B] uppercase tracking-[0.3em]">{post.cat} • {post.date}</span>
                                    <h3 className="font-playfair text-2xl font-bold text-[#5A2A1F] group-hover:text-[#8B3A2B] transition-colors">{post.title}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ items={[
                {
                    q: "What are the latest batik dresses for women?",
                    a: "Latest batik dresses include modern prints, cotton dress styles, and comfortable everyday wear designed for current fashion trends."
                },
                {
                    q: "Where can I buy new arrival batik clothing online?",
                    a: "You can shop batik dress online from trusted brands offering updated collections and fresh designs regularly."
                },
                {
                    q: "Which batik dresses are trending right now?",
                    a: "Trending styles include batik print dress, full sleeve dress for women, and lightweight cotton outfits."
                },
                {
                    q: "Are cotton batik dresses good for daily wear?",
                    a: "Yes. Cotton dress styles in batik fabric are breathable, comfortable, and perfect for everyday use."
                },
                {
                    q: "What styles are available in batik clothing?",
                    a: "You can find stylish dress for women, casual wear, festive designs, and modern batik clothing collections."
                }
            ]} />
        </div>
    );
}
