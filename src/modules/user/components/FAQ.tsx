"use client";
import { useState } from "react";

const WA = "https://wa.me/918815373767";

interface FAQItem {
    q: string;
    a: React.ReactNode;
}

interface FAQProps {
    items?: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
    const [open, setOpen] = useState(0);
    const defaultFaqs = [
        { 
            q: "Which batik fabric is best for daily suits for women?", 
            a: "Cotton 60x60 is a popular choice for daily batik suits because it offers a lightweight, breathable feel suited to regular wear. It works well for batik print kurtis, everyday suits, and comfortable women's clothing." 
        },
        { 
            q: "Can batik fabric be used for plus-size women's clothing?", 
            a: "Yes. Batik fabric can be used to create comfortable plus-size women's clothing with flattering prints and practical silhouettes. Batik print suits, kurtis, and dresses can be designed in different cuts and sizes for comfortable everyday styling." 
        },
        { 
            q: "Why are batik suits becoming popular for women?", 
            a: "Batik suits combine distinctive prints, traditional craftsmanship, and wearable modern silhouettes. From batik print kurtis to complete batik suit sets, they offer a balance of cultural character, comfort, and contemporary fashion." 
        },
        { 
            q: "Are batik print kurtis suitable for everyday wear?", 
            a: "Yes. A well-made batik print kurti can be an excellent everyday option, particularly when crafted from breathable cotton fabric. Cotton-based batik kurtis provide comfortable styling for daily routines while adding distinctive prints to a woman's wardrobe." 
        },
        { 
            q: "Is Ujjain batik good for cotton kurtis for women?", 
            a: "Ujjain has a strong heritage of batik craftsmanship, making its batik styles an appealing choice for cotton kurtis for women. The quality of a particular garment ultimately depends on its cotton fabric, print finishing, construction, and overall comfort." 
        }
    ];

    const faqs = items || defaultFaqs;

    return (
        <section id="faq" className="pt-8 pb-10 md:pt-10 md:pb-12 px-6 bg-cream border-t border-primary/5">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <div className="text-center mb-8 flex flex-col gap-4 items-center">
                    <span className="text-xl leading-none text-accent">&diams; <span className="text-[11px] font-bold uppercase tracking-[0.25em] ml-2 text-primary/80">Support</span></span>
                    <h2 className="font-heading text-h2 font-medium text-primary">Frequently Asked <span className="text-highlight italic">Questions</span></h2>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-tan/15 rounded-[1.5rem] overflow-hidden shadow-sm border border-tan/30 transition-all">
                            <button
                                onClick={() => setOpen(open === i ? -1 : i)}
                                className="w-full text-left p-6 md:p-8 flex justify-between items-center bg-transparent hover:bg-tan/25 transition-colors"
                            >
                                <span className="font-heading font-medium text-lg md:text-xl text-primary">{f.q}</span>
                                <span className={`text-accent shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? "max-h-[500px]" : "max-h-0"}`}>
                                <div className="p-6 md:p-8 pt-0 text-primary/80 leading-relaxed font-medium">
                                    {f.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center flex flex-col items-center gap-6">
                    <p className="text-primary/80 font-medium">Still have questions? We're just a message away.</p>
                    <a href={WA} target="_blank" rel="noreferrer" className="btn-secondary px-10">
                        Ask on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
