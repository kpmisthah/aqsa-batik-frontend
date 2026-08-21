"use client";
import Image from "next/image";
import Link from "next/link";

export default function PremiumTrustSection() {
    return (
        <section className="bg-cream pt-20 pb-16 md:pt-24 md:pb-20 px-4 md:px-8 border-t border-border/40 overflow-hidden">
            <div className="max-w-[1500px] mx-auto flex flex-col gap-12 md:gap-16">
                
                {/* Top Heading Area */}
                <div className="flex flex-col items-center text-center gap-3 md:gap-4 w-full max-w-4xl mx-auto">
                    <span className="text-overline uppercase tracking-[0.2em] font-bold text-primary/80">
                        The Legacy of Quality
                    </span>
                    <h2 className="text-h2 md:text-h1 text-primary font-normal leading-tight">
                        Trusted by <span className="text-highlight italic">1,000+ Retail Partners</span> for Quality Batik Fashion
                    </h2>
                    <p className="text-sm md:text-base text-primary/80 font-medium leading-relaxed max-w-3xl mt-2">
                        For 15+ years, AQSHA Batik Suits has helped boutiques, wholesalers, and resellers source dependable women's dress material, cotton fabrics, Shalwar Kameez, Dupatta/Chunni, and ready-to-sell fashion collections across India.
                    </p>
                </div>

                {/* Bottom Visual & List Content */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
                    
                    {/* Left Visual */}
                    <div className="w-full lg:w-1/2 relative group h-[450px] md:h-[550px] lg:h-[650px]">
                        <div className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl shadow-sm z-10 border border-primary/10 bg-tan">
                            <Image
                                src="/Luxury Batik Fashion Banner (169) (1).png"
                                alt="Workshop"
                                fill
                                unoptimized
                                className="object-cover object-center grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[4s]"
                            />
                            
                            {/* Overlaid elegant badge */}
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 lg:right-auto lg:max-w-md bg-white/95 backdrop-blur-md px-4 py-4 md:px-6 md:py-6 rounded-xl border border-primary/5 flex flex-col shadow-xl gap-3 md:gap-4">
                                <div className="flex flex-col gap-1 md:gap-2">
                                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Authentic Ujjain Batik Roots</span>
                                    <p className="text-[11px] md:text-[13px] text-primary/80 leading-relaxed font-medium">Our collections are rooted in the batik heritage of Bherugarh, Ujjain, where traditional printing meets contemporary Indian fashion.</p>
                                </div>
                                <div className="border-t border-primary/10 pt-3 md:pt-4 flex flex-col gap-1 md:gap-2">
                                    <h4 className="text-[12px] md:text-[14px] text-primary m-0 uppercase tracking-[0.2em] font-bold font-heading">360° Workshop Tour</h4>
                                    <p className="text-[11px] md:text-[13px] text-primary/80 leading-relaxed font-medium">See how our collections move from fabric selection and printing to careful finishing and ready dispatch.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 flex flex-col pt-0 md:pt-2 border-t md:border-primary/20 border-transparent md:border-t-solid">
                        {[
                            { num: "01", t: "15+ Years of Heritage", d: "Mastering consistent quality, detailed finishing, and dependable production since 2008." },
                            { num: "02", t: "Premium Color Fastness", d: "Carefully finished cotton fabrics designed to retain their print, color, and appeal through everyday wear." },
                            { num: "03", t: "Ready Dispatch", d: "Efficient production and trusted logistics help keep your fashion stock moving without unnecessary delays." },
                            { num: "04", t: <>Direct Manufacturer <br className="hidden md:block" /> Margins</>, d: "Source directly from an Ujjain batik manufacturer and access competitive pricing across batik suits, cotton kurtis, dress material, and wholesale fashion collections." }
                        ].map((item, i) => (
                            <div key={i} className="group relative flex flex-col md:flex-row md:items-start justify-between py-5 md:py-8 border-b border-primary/20 md:hover:bg-primary/[0.02] transition-colors duration-500 cursor-default px-1 md:-mx-4 md:px-4">
                                <div className="flex gap-3 md:gap-6 items-start w-full md:w-[45%] mb-2 md:mb-0">
                                    <span className="text-xl md:text-2xl text-highlight italic w-6 md:w-8 shrink-0 font-serif leading-none mt-1">{item.num}</span>
                                    <h4 className="text-sm md:text-[15px] lg:text-lg text-primary font-heading font-semibold md:group-hover:text-accent transition-colors leading-snug">{item.t}</h4>
                                </div>
                                <p className="text-[12px] md:text-sm text-[#6F625A] w-full md:w-[55%] leading-relaxed pl-9 md:pl-0 font-medium md:pt-1">
                                    {item.d}
                                </p>
                            </div>
                        ))}

                        {/* Seamless CTA integration */}
                        <div className="mt-8 flex justify-center w-full">
                            <Link href="/about-us" className="btn-secondary group">
                                <span>Discover Our Story</span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
