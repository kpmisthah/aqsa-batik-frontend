import React from "react";

interface Step {
    s: string;
    t: string;
    d: string;
}

interface HorizontalProcessSectionProps {
    tag: string;
    title: React.ReactNode;
    subtitle: React.ReactNode;
    steps: Step[];
    ctaText?: string;
    whatsappLink?: string;
    wrapperClassName?: string;
}

export default function HorizontalProcessSection({ 
    tag, 
    title, 
    subtitle, 
    steps, 
    ctaText = "Start Your Order on WhatsApp",
    whatsappLink = "https://wa.me/918815373767",
    wrapperClassName = "py-16 md:py-24"
}: HorizontalProcessSectionProps) {
    return (
        <section className={`scroll-animate px-6 bg-cream text-center border-y border-primary/5 overflow-hidden ${wrapperClassName}`}>
            <div className="max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-20 relative z-10 w-full">
                {/* ── Header ── */}
                <div className="flex flex-col gap-3 md:gap-4 text-center items-center">
                    <span className="text-overline">{tag}</span>
                    <h2 className="font-heading text-h2 font-medium text-primary">
                        {title}
                    </h2>
                    <p className="text-body1 text-primary/80 max-w-4xl mt-1 leading-relaxed font-normal">
                        {subtitle}
                    </p>
                </div>

                {/* ── Steps ── */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 relative text-left">
                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col relative gap-2 md:gap-4">
                            <div className="flex items-center w-full group">
                                <span className="font-heading text-5xl md:text-6xl text-highlight font-normal group-hover:scale-110 group-hover:text-primary transition-all duration-300">{step.s}</span>
                                {i < steps.length - 1 && (
                                    <div className="hidden md:flex flex-1 items-center mx-4 relative mt-2 opacity-40">
                                        <div className="flex-1 border-b-[1.5px] border-dashed border-primary"></div>
                                        <svg className="w-4 h-4 text-primary -ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-1.5 md:gap-2 mt-2 md:mt-4">
                                <h4 className="text-lg font-heading font-medium text-primary leading-tight">{step.t}</h4>
                                <p className="text-sm text-primary/70 leading-relaxed pr-4">{step.d}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── CTA ── */}
                <div className="flex justify-center w-full mt-2 md:mt-4">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary px-8 md:px-10 py-4 w-full md:w-auto flex items-center justify-center gap-3 uppercase tracking-[0.2em] font-bold text-[10px] md:text-xs"
                    >
                        {ctaText}
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.412 2.503 1.112 3.485l-.719 2.624 2.688-.705c.95.514 2.035.804 3.19.803 3.181 0 5.767-2.584 5.768-5.766 0-3.181-2.587-5.767-5.767-5.767zm3.39 8.2l-1.006 1.005c-.122.122-.318.159-.477.087-.514-.232-1.02-.555-1.504-1.039-.485-.484-.807-.989-1.039-1.504-.072-.159-.035-.355.087-.477l1.005-1.006c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0l-.798.797c-.506.507-.639 1.243-.374 1.874.457 1.087 1.214 2.064 2.223 3.073 1.009 1.009 1.986 1.766 3.073 2.223.631.265 1.367.132 1.874-.374l.797-.798c.115-.115.115-.301 0-.416l-1.139-1.139c-.115-.115-.301-.115-.416 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
