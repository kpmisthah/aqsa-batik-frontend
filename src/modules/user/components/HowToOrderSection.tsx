import React from "react";

interface HowToOrderSectionProps {
    title: React.ReactNode;
    whatsappLink: string;
    tag?: string;
    subtitle?: string;
}

const DEFAULT_SUBTITLE =
    "Five simple steps. Zero confusion. Fast delivery of premium batik fabric, Batik Cloth, trending batik color collections, and quality cotton cloth across India.";

const STEPS = [
    {
        s: "01",
        t: "Browse Designs",
        d: "Explore latest batik print designs, cotton dresses for women, and fresh stock collections.",
        i: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>,
    },
    {
        s: "02",
        t: "Select Quantity",
        d: "Choose pieces for retail stores, boutiques, or bulk wholesale orders.",
        i: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 11h4" /><path d="M12 15h4" /><path d="M8 11h.01" /><path d="M8 15h.01" /></svg>,
    },
    {
        s: "03",
        t: "Connect via WhatsApp",
        d: "Get pricing and custom support instantly.",
        i: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 5.5Z" /></svg>,
    },
    {
        s: "04",
        t: "Receive Quotes",
        d: "Bulk pricing support based on order volume and business requirements.",
        i: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5 4 4" /><path d="M13 7 8.7 2.7a2 2 0 0 0-2.8 0L2.7 5.9a2 2 0 0 0 0 2.8L7 13" /><path d="m19 11-4 4" /><path d="m21 15-4.5 4.5a2 2 0 0 1-2.8 0L10 15.8" /><circle cx="16" cy="16" r="2" /></svg>,
    },
    {
        s: "05",
        t: "Fast Dispatch",
        d: "Quick shipping across India through trusted logistics partners.",
        i: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></svg>,
    },
];

const BENTO_CLASSES = [
    "col-span-1 md:col-span-2 lg:col-span-2", // Card 1
    "col-span-1 md:col-span-1 lg:col-span-1", // Card 2
    "col-span-1 md:col-span-1 lg:col-span-1", // Card 3
    "col-span-1 md:col-span-1 lg:col-span-2", // Card 4
    "col-span-2 md:col-span-1 lg:col-span-2", // Card 5
];

export default function HowToOrderSection({
    title,
    whatsappLink,
    tag = "Wholesale Process",
    subtitle = DEFAULT_SUBTITLE,
}: HowToOrderSectionProps) {
    return (
        <section className="scroll-animate pt-10 pb-8 md:pt-12 md:pb-12 px-6 bg-cream text-center border-t border-border/40">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-6 md:gap-8 relative z-10 w-full">
                {/* ── Header ── */}
                <div className="flex flex-col gap-3 text-center items-center">
                    <span className="text-overline">{tag}</span>
                        <h2 className="text-h2 text-primary">
                            {title}
                        </h2>
                        <p className="text-body1 text-primary max-w-lg mt-1 leading-relaxed font-normal">
                            {subtitle}
                        </p>
                    </div>

                {/* ── Minimalist Timeline Grid ── */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 mx-auto w-full pt-2">
                    {STEPS.map((step, i) => (
                        <div
                            key={i}
                            className={`flex flex-col items-center md:items-start text-center md:text-left group relative ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}
                        >
                            {/* Number & Creative Connector Arrow */}
                            <div className="flex items-center justify-center md:justify-start w-full mb-3 md:mb-5">
                                <span className="text-3xl md:text-4xl lg:text-5xl text-accent font-heading leading-none font-normal shrink-0 group-hover:scale-110 group-hover:text-primary transition-all duration-300 md:pr-2">
                                    {step.s}
                                </span>

                                {/* Dotted Arrow (Hidden on Mobile & Last Step) */}
                                {i !== STEPS.length - 1 && (
                                    <div className="hidden md:flex flex-1 items-center px-2 lg:px-4">
                                        <div className="flex-1 border-t-[1px] md:border-t-2 border-dashed border-secondary"></div>
                                        <svg className="w-4 h-4 md:w-5 md:h-5 text-secondary shrink-0 -ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                    </div>
                                )}
                            </div>
                            
                            <div className="w-8 h-[1px] md:h-[2px] bg-secondary mb-3 md:hidden"></div>

                            {/* Text */}
                            <div className="flex flex-col gap-1 md:gap-2 px-1 md:pr-4 lg:pr-8">
                                <h4 className="text-sm md:text-h4 text-primary font-normal">
                                    {step.t}
                                </h4>
                                <p className="text-[10px] md:text-body2 text-primary font-normal leading-tight md:leading-relaxed">
                                    {step.d}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── CTA ── */}
                <div className="flex justify-center w-full mt-4">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-10 py-4.5 rounded-full font-semibold uppercase tracking-[0.15em] text-[11px] shadow-sm transition-all duration-300"
                    >
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.412 2.503 1.112 3.485l-.719 2.624 2.688-.705c.95.514 2.035.804 3.19.803 3.181 0 5.767-2.584 5.768-5.766 0-3.181-2.587-5.767-5.767-5.767zm3.39 8.2l-1.006 1.005c-.122.122-.318.159-.477.087-.514-.232-1.02-.555-1.504-1.039-.485-.484-.807-.989-1.039-1.504-.072-.159-.035-.355.087-.477l1.005-1.006c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0l-.798.797c-.506.507-.639 1.243-.374 1.874.457 1.087 1.214 2.064 2.223 3.073 1.009 1.009 1.986 1.766 3.073 2.223.631.265 1.367.132 1.874-.374l.797-.798c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0z" />
                        </svg>
                        Start Your Order on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
