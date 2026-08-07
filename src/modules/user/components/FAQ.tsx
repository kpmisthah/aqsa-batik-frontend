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
            q: "What makes batik fabric popular in women's clothing collections?", 
            a: "Batik fabric is loved for its unique print patterns, breathable comfort, and versatile styling. It is widely used in women's clothing collections, indian dresses, kurtis, and everyday ethnic fashion because of its lightweight feel and timeless appeal." 
        },
        { 
            q: "Is batik cloth suitable for cotton dresses for women?", 
            a: "Yes. Batik cloth is commonly used for cotton dress for women's collections because it combines soft fabric comfort with stylish batik print designs that work perfectly for daily wear and festive ethnic fashion." 
        },
        { 
            q: "Do you manufacture Indian dresses for girls using batik fabric?", 
            a: "Yes. AQSHA BATIK SUITS manufactures batik fabric collections suitable for Indian dresses for girls, coordinated ethnic wear, casual cotton outfits, and modern women clothing trends." 
        },
        { 
            q: "Do you offer plus size clothing fabric options in batik prints?", 
            a: "Absolutely. Our breathable batik fabric and cotton dress materials are ideal for plus size clothing collections, offering comfortable fitting, wearable styling, and lightweight fabric suitable for all-day wear." 
        },
        { 
            q: "Why are batik print designs trending in Indian dresses?", 
            a: "Batik print design styles continue to trend because they blend traditional artistry with modern women's fashion. Their elegant patterns, wearable comfort, and versatile styling make them highly popular in Indian dresses and daily wear women clothing." 
        }
    ];

    const faqs = items || defaultFaqs;

    return (
        <section id="faq" className="pt-16 pb-20 md:pt-20 md:pb-24 px-6 bg-surface border-t border-primary/5">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <div className="text-center mb-16 flex flex-col gap-4 items-center">
                    <span className="text-xl leading-none text-accent">&diams; <span className="text-[11px] font-bold uppercase tracking-[0.25em] ml-2 text-foreground">Support</span></span>
                    <h2 className="font-heading text-h2 font-medium text-primary">Frequently Asked Questions</h2>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm border border-primary/5 transition-all">
                            <button
                                onClick={() => setOpen(open === i ? -1 : i)}
                                className="w-full text-left p-6 md:p-8 flex justify-between items-center bg-white hover:bg-cream/30 transition-colors"
                            >
                                <span className="font-heading font-medium text-lg md:text-xl text-primary">{f.q}</span>
                                <span className={`text-accent shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? "max-h-[500px]" : "max-h-0"}`}>
                                <div className="p-6 md:p-8 pt-0 text-foreground leading-relaxed font-medium">
                                    {f.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center flex flex-col items-center gap-6">
                    <p className="text-foreground font-medium">Still have questions? We're just a message away.</p>
                    <a href={WA} target="_blank" rel="noreferrer" className="bg-transparent border border-primary/20 hover:border-primary text-primary px-10 py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] transition-colors">
                        Ask on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
