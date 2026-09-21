import Image from "next/image";
import { getColorName } from "@/utils/colorHelper";

interface ProductSpecificationsProps {
    product: any;
}

export default function ProductSpecifications({ product }: ProductSpecificationsProps) {
    const mainImage = product.images?.[0] || "/product_white_mustard.png";

    const details = [
        { label: "Fabric", value: product.fabric || product.fabricDetails || "Pure Cotton 60x60" },
        { label: "Category", value: product.category },
        { label: "Product Type", value: product.subCategory || "Batik" },
        { label: "Colors Available", value: product.colours?.map((c: string) => getColorName(c)).join(", ") || "Standard" },
        { label: "Pattern", value: product.pattern },
        { label: "Fabric Quality", value: product.fabricQuality },
        { label: "Kameez Length", value: product.kameezLength },
        { label: "Shalwar Length", value: product.shalwarLength },
        { label: "Dupatta Length", value: product.dupattaLength },
    ].filter((d) => d.value);

    return (
        <section className="py-8 md:py-16 px-6 bg-cream relative overflow-hidden text-center md:text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20 relative z-10">
                <div className="max-w-3xl">
                    <span className="text-overline mb-2 md:mb-4 inline-block">Specifications</span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal text-primary mt-2 md:mt-4 mb-6 md:mb-8">Technical Excellence</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Specs List (Clean Row Layout) */}
                    <div className="w-full bg-white rounded-[24px] md:rounded-[32px] shadow-sm border border-primary/5 px-6 md:px-10">
                        {details.map((detail, i) => (
                            <div key={i} className="flex items-center justify-between gap-4 py-4 md:py-5 border-b border-primary/10 last:border-0">
                                <span className="text-xs md:text-sm font-black uppercase tracking-widest text-primary shrink-0">
                                    {detail.label}
                                </span>
                                <span className="text-sm md:text-lg font-bold text-accent text-right">
                                    {detail.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Best For Image Canvas */}
                    <div className="h-full min-h-[400px] md:min-h-[500px]">
                        <div className="relative h-full w-full rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white group">
                            <Image src={mainImage} alt="Detail View" layout="fill" objectFit="cover" objectPosition="center top" className="brightness-95 group-hover:scale-105 transition-transform duration-[2s]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white max-w-[80%]">
                                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-3">
                                    Collection Feature
                                </span>
                                <h4 className="text-3xl md:text-5xl font-black font-heading leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                                    Ideal for<br />{product.category}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
