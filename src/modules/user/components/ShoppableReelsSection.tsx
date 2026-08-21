"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Sample placeholder data - user can replace these with actual video urls
const reelsData = [
  {
    id: 1,
    title: "Festive Collection '26",
    videoUrl: "/videos/Video-86985.mp4",
    posterUrl: "/pink_batik_model.png",
    whatsappMsg: "Hi, I saw the Festive Collection reel and want to know the pricing."
  },
  {
    id: 2,
    title: "Premium Cotton Batiks",
    videoUrl: "/videos/Video-22912.mp4",
    posterUrl: "/cat_batik_cloth.webp",
    whatsappMsg: "Hi, I am interested in the Cotton Batiks from the reel."
  },
  {
    id: 3,
    title: "Wholesale Exclusives",
    videoUrl: "/videos/Video-37755.mp4",
    posterUrl: "/cat_wholesale.webp",
    whatsappMsg: "Hi, I want more details on the Wholesale Exclusives reel."
  },
  {
    id: 4,
    title: "New Arrivals Try-On",
    videoUrl: "/videos/Video-4836.mp4",
    posterUrl: "/cat_new_arrival.webp",
    whatsappMsg: "Hi, I would like to order from the New Arrivals reel."
  },
  {
    id: 5,
    title: "Artisan Picks",
    videoUrl: "/videos/Video-5816.mp4",
    posterUrl: "/pink_batik_model.png",
    whatsappMsg: "Hi, I would like to order from the Artisan Picks reel."
  },
  {
    id: 6,
    title: "Trending Styles",
    videoUrl: "/videos/Video-727.mp4",
    posterUrl: "/cat_batik_cloth.webp",
    whatsappMsg: "Hi, I would like to order from the Trending Styles reel."
  }
];

const WA = "https://wa.me/918815373767?text=";

export default function ShoppableReelsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);

  // Auto-play videos when they come into view, pause when out
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    const videos = document.querySelectorAll(".reel-video");
    videos.forEach((vid) => observer.observe(vid));

    return () => {
      videos.forEach((vid) => observer.unobserve(vid));
    };
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };
  const handleScrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="scroll-animate pt-10 pb-6 md:pt-28 md:pb-16 px-6 bg-cream border-t border-primary/10 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center gap-6 mb-12 md:mb-16">
          <div className="flex flex-col items-center gap-3">
            <span className="text-overline text-accent">AQSHA Batik in Motion</span>
            <h2 className="text-h2 text-primary relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[1px] after:bg-primary/20">
              See Batik Dresses, Kurtis & <span className="text-highlight italic">Women's Suits in Motion</span>
            </h2>
            <div className="flex flex-col gap-2 max-w-3xl mt-2">
              <p className="text-body1 text-primary/80 font-medium">
                See the drape, flow, print, and finish behind our latest batik dresses, batik print kurtis, and suit sets for women.
              </p>
              <p className="text-body1 text-primary/80 font-medium">
                Real fabric. Real movement. Real style.
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 mt-2">
            <button 
              onClick={handleScrollLeft} 
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-cream transition-colors"
              aria-label="Scroll left"
            >
              &larr;
            </button>
            <button 
              onClick={handleScrollRight} 
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-cream transition-colors"
              aria-label="Scroll right"
            >
              &rarr;
            </button>
          </div>
        </div>

        <div className="relative group">
          <div 
            ref={scrollRef} 
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden pb-10"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {reelsData.map((reel) => (
              <div 
                key={reel.id} 
                className="shrink-0 w-[260px] md:w-[300px] aspect-[9/16] relative rounded-2xl overflow-hidden bg-primary shadow-xl snap-center group/card cursor-pointer border border-primary/10"
                onMouseEnter={() => setPlayingId(reel.id)}
                onMouseLeave={() => setPlayingId(null)}
                onClick={() => window.open('https://www.instagram.com/aqsha_batik_suits/', '_blank')}
              >
                {/* Fallback Image */}
                <Image
                  src={reel.posterUrl}
                  alt={reel.title}
                  fill
                  className={`object-cover transition-opacity duration-700 ${reel.videoUrl && playingId === reel.id ? 'opacity-0' : 'opacity-80 group-hover/card:opacity-100 group-hover/card:scale-105'}`}
                />

                {/* Video Element (Only rendered if URL exists) */}
                {reel.videoUrl && (
                  <video
                    className="reel-video absolute inset-0 w-full h-full object-cover"
                    src={reel.videoUrl}
                    poster={reel.posterUrl}
                    muted
                    loop
                    playsInline
                  />
                )}

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest text-white/90 border border-white/20">
                      View Look
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-white font-heading text-xl">{reel.title}</h3>
                    
                    <a 
                      href={`${WA}${encodeURIComponent(reel.whatsappMsg)}`}
                      target="_blank" 
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full bg-white text-primary text-[10px] font-bold uppercase tracking-wider py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-accent hover:text-white hover:border-accent border border-transparent transition-all"
                    >
                      <span>Inquire on WhatsApp</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" /></svg>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 md:mt-10 flex justify-center w-full">
          <Link href="/batik-ethnic-wear-for-women" className="btn-secondary group">
            <span>Watch the Collection</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
