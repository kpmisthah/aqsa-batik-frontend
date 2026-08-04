import React from "react";

interface HowToOrderSectionProps {
    /** The page-specific title, rendered as JSX. E.g. <>How To Order <span className='text-accent'>Batik Fabric</span> Online</> */
    title: React.ReactNode;
    /** WhatsApp link for the CTA button */
    whatsappLink: string;
    /** Optional override for the tag line above the title. Defaults to "Simple Process" */
    tag?: string;
    /** Optional override for the subtitle text */
    subtitle?: string;
}

const DEFAULT_SUBTITLE =
    "Five simple steps. Zero confusion. Fast delivery of premium batik fabric, Batik Cloth, trending batik color collections, and quality cotton cloth across India.";

const STEPS = [
    {
        s: "01",
        t: "Browse Designs",
        d: "Explore latest batik print designs, cotton dresses for women, and fresh stock collections.",
        i: (
            <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
        ),
    },
    {
        s: "02",
        t: "Select Quantity",
        d: "Choose pieces for retail stores, boutiques, or bulk wholesale orders.",
        i: (
            <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 11h4" /><path d="M12 15h4" /><path d="M8 11h.01" /><path d="M8 15h.01" />
            </svg>
        ),
    },
    {
        s: "03",
        t: "Connect via WhatsApp",
        d: "Get pricing and custom support instantly.",
        i: (
            <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 5.5Z" />
            </svg>
        ),
    },
    {
        s: "04",
        t: "Receive Wholesale Pricing",
        d: "Bulk pricing support based on order volume and business requirements.",
        i: (
            <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 5 4 4" /><path d="M13 7 8.7 2.7a2 2 0 0 0-2.8 0L2.7 5.9a2 2 0 0 0 0 2.8L7 13" /><path d="m19 11-4 4" /><path d="m21 15-4.5 4.5a2 2 0 0 1-2.8 0L10 15.8" /><circle cx="16" cy="16" r="2" />
            </svg>
        ),
    },
    {
        s: "05",
        t: "Fast Dispatch",
        d: "Quick shipping across India through trusted logistics partners.",
        i: (
            <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
            </svg>
        ),
    },
];

const BENTO_CLASSES = [
    "col-span-1 md:col-span-2 lg:col-span-2 p-4 sm:p-6 md:p-8 flex-col md:flex-row items-start md:items-center", // Card 1
    "col-span-1 md:col-span-1 lg:col-span-1 p-4 sm:p-6 md:p-8 flex-col items-start", // Card 2
    "col-span-1 md:col-span-1 lg:col-span-1 p-4 sm:p-6 md:p-8 flex-col items-start", // Card 3
    "col-span-1 md:col-span-1 lg:col-span-2 p-4 sm:p-6 md:p-8 flex-col md:flex-row items-start md:items-center", // Card 4
    "col-span-2 md:col-span-1 lg:col-span-2 p-4 sm:p-6 md:p-8 flex-col sm:flex-row items-center justify-center text-center md:text-left", // Card 5
];

export default function HowToOrderSection({
    title,
    whatsappLink,
    tag = "Simple Process",
    subtitle = DEFAULT_SUBTITLE,
}: HowToOrderSectionProps) {
    return (
        <section className="scroll-animate py-12 md:py-24 px-6 bg-tan/50 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-16 relative z-10">
                {/* ── Header ── */}
                <div className="flex flex-col gap-3 md:gap-4 max-w-4xl mx-auto w-full">
                    <div className="text-center flex flex-col gap-1 md:gap-2 items-center">
                        <span className="text-[10px] md:text-sm font-black text-secondary uppercase tracking-[0.5em] mb-1 block">
                            {tag}
                        </span>
                        <h2 className="font-heading text-[1.15rem] sm:text-xl md:text-4xl font-medium text-primary leading-tight">
                            {title}
                        </h2>
                    </div>
                    <p className="text-sm md:text-xl text-primary/90 font-medium mx-auto leading-relaxed text-center mt-3 max-w-2xl">
                        {subtitle}
                    </p>
                </div>

                {/* ── Bento Grid ── */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-8 md:mt-12 max-w-[1200px] mx-auto w-full">
                    {STEPS.map((step, i) => (
                        <div
                            key={i}
                            className={`bg-white rounded-[2rem] border border-primary/10 shadow-sm hover:shadow-2xl transition-all duration-300 relative group flex gap-4 sm:gap-5 md:gap-6 overflow-hidden ${BENTO_CLASSES[i]}`}
                        >
                            {/* Background step number */}
                            <div className="absolute -bottom-2 md:-bottom-4 right-0 lg:-right-4 text-[70px] sm:text-[100px] md:text-[120px] font-black text-primary/[0.03] leading-none pointer-events-none group-hover:-translate-y-2 transition-transform duration-700">
                                {step.s}
                            </div>

                            {/* Dynamic Icon Layout: Spaced out on mobile, grouped on desktop */}
                            <div className="flex justify-between w-full md:w-auto md:flex-row items-center gap-2 sm:gap-3 md:gap-4 z-10 shrink-0 mb-1 md:mb-0">
                                <div className="w-8 h-8 md:w-12 md:h-12 bg-secondary text-white font-black text-xs md:text-sm rounded-full flex items-center justify-center shadow-sm shrink-0">
                                    {step.s}
                                </div>
                                <div className="w-9 h-9 md:w-16 md:h-16 bg-tan/40 md:bg-tan/50 rounded-full md:rounded-2xl flex items-center justify-center text-primary/80 md:text-primary group-hover:scale-110 transition-transform shrink-0 scale-[0.8] md:scale-100">
                                    {step.i}
                                </div>
                            </div>

                            {/* Text */}
                            <div className="flex flex-col gap-1 md:gap-2 z-10 w-full justify-center">
                                <h4 className="text-base sm:text-lg md:text-2xl text-primary leading-tight font-heading font-bold md:pr-2">
                                    {step.t}
                                </h4>
                                <p className="text-xs sm:text-sm md:text-base text-primary/90 leading-snug md:leading-relaxed font-semibold">
                                    {step.d}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── CTA ── */}
                <div className="flex justify-center mt-6 md:mt-12">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 md:gap-4 bg-primary text-white px-4 py-3 md:px-10 md:py-5 rounded-xl md:rounded-3xl font-bold text-[11px] md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest group text-center"
                    >
                        <svg className="w-4 h-4 md:w-6 md:h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.412 2.503 1.112 3.485l-.719 2.624 2.688-.705c.95.514 2.035.804 3.19.803 3.181 0 5.767-2.584 5.768-5.766 0-3.181-2.587-5.767-5.767-5.767zm3.39 8.2l-1.006 1.005c-.122.122-.318.159-.477.087-.514-.232-1.02-.555-1.504-1.039-.485-.484-.807-.989-1.039-1.504-.072-.159-.035-.355.087-.477l1.005-1.006c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0l-.798.797c-.506.507-.639 1.243-.374 1.874.457 1.087 1.214 2.064 2.223 3.073 1.009 1.009 1.986 1.766 3.073 2.223.631.265 1.367.132 1.874-.374l.797-.798c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0z" />
                        </svg>
                        <span>Start Your Order on WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
