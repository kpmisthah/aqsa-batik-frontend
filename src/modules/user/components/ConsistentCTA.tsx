"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useHomeContent } from "@/modules/user/hooks/useHomeContent";
import { renderWithHighlight } from "@/utils/textHighlight";

const DEFAULT_SITEWIDE_CTA = {
    tagText: "MADE TO WEAR. MADE TO SELL.",
    heading: "Batik Suits Customers\nLove to Wear Again",
    highlightWord: "Wear Again",
    paragraph: "Discover comfortable, distinctive Batik suits made for everyday style, while giving boutiques and retailers a collection customers want to come back for.",
    image: "/luxury_ethnic_seated.png",
    ctaLabel1: "Shop Batik Suits",
    ctaLabel2: "Become a Wholesale Partner",
};

export default function ConsistentCTA() {
    const cta = useHomeContent("sitewide_cta_banner", DEFAULT_SITEWIDE_CTA);
    return (
        <section className="scroll-animate py-16 md:py-24 px-6 bg-[#FDFBF7]">
            <div className="max-w-7xl mx-auto bg-white rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-primary/10">

                {/* Left Side: Content */}
                <div className="lg:w-[55%] p-8 sm:p-10 md:p-16 flex flex-col justify-center bg-[#FDFBF7]">
                    <span className="text-overline tracking-[0.3em] font-bold uppercase mb-4 flex items-center gap-2" style={{ color: '#8A4B32' }}>
                        <span className="text-lg" style={{ color: '#8A4B32' }}>♦</span> {cta.tagText}
                    </span>

                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal text-primary leading-[1.1] mb-6">
                        {renderWithHighlight(cta.heading, cta.highlightWord)}
                    </h2>

                    <p className="text-body1 text-primary/80 mb-10 leading-relaxed font-medium max-w-xl">
                        {cta.paragraph}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/batik-prints-womens-clothing" className="bg-highlight hover:bg-highlight/90 text-white px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest transition-colors shadow-sm text-center">
                            {cta.ctaLabel1}
                        </Link>
                        <Link href="/contact-us" className="border border-primary/20 text-primary px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest hover:border-accent hover:text-accent transition-colors text-center bg-transparent">
                            {cta.ctaLabel2}
                        </Link>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="lg:w-[45%] relative min-h-[400px] lg:min-h-auto">
                    <Image
                        src={cta.image}
                        alt="Batik Suits Model"
                        fill
                        className="object-cover object-center"
                    />
                </div>

            </div>
        </section>
    );
}
