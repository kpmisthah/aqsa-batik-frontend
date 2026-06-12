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
        <section id="faq" className="py-24 px-6 bg-[#E8D9C0]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[11px] font-bold text-[#5A2A1F]/60 uppercase tracking-[0.4em]">Common Questions</span>
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5A2A1F] mt-4">Frequently Asked Questions</h2>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="rounded-2xl overflow-hidden shadow-sm">
                            <button
                                onClick={() => setOpen(open === i ? -1 : i)}
                                className={`w-full text-left p-6 flex justify-between items-center transition-colors ${open === i ? "bg-white" : "bg-[#F5F1EC]/50 hover:bg-[#F5F1EC]"}`}
                            >
                                <span className="font-bold text-base md:text-lg text-[#5A2A1F]">{f.q}</span>
                                <span className={`text-2xl transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </button>
                            {open === i && (
                                <div className="bg-white p-6 pt-0 text-[#5A2A1F]/80 leading-relaxed font-medium">
                                    {f.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-[#5A2A1F]/60 font-medium mb-6">Still have questions? We're just a message away.</p>
                    <a href={WA} target="_blank" rel="noreferrer" className="inline-block bg-[#5A2A1F] text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-xl">
                        Ask on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
