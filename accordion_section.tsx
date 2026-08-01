import React, { useState } from 'react';

export default function AccordionSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex flex-col gap-4 mt-8 md:mt-12 max-w-[1000px] mx-auto w-full">
      {[
        {
          s: "01", t: "Browse Designs",
          d: "Explore the latest batik designs and fresh cotton collections.",
          i: (
            <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
          )
        },
        {
          s: "02", t: "Select Quantity",
          d: "Pick out bulk pieces for retail stores and boutiques.",
          i: (
            <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 11h4" /><path d="M12 15h4" /><path d="M8 11h.01" /><path d="M8 15h.01" />
            </svg>
          )
        },
        {
          s: "03", t: "Connect On WhatsApp",
          d: "Get immediate pricing, live stock updates, and support.",
          i: (
            <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 5.5Z" />
            </svg>
          )
        },
        {
          s: "04", t: "Receive Pricing",
          d: "Secure custom wholesale pricing based on your order bulk.",
          i: (
            <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 5 4 4" /><path d="M13 7 8.7 2.7a2 2 0 0 0-2.8 0L2.7 5.9a2 2 0 0 0 0 2.8L7 13" /><path d="m19 11-4 4" /><path d="m21 15-4.5 4.5a2 2 0 0 1-2.8 0L10 15.8" /><circle cx="16" cy="16" r="2" />
            </svg>
          )
        },
        {
          s: "05", t: "Fast Dispatch",
          d: "Quick and secure shipping across India via trusted partners.",
          i: (
            <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
            </svg>
          )
        }
      ].map((step, i) => {
          const isActive = activeIndex === i;
          return (
            <div 
              key={i} 
              onClick={() => setActiveIndex(isActive ? -1 : i)}
              className={`bg-white rounded-[2rem] border border-primary/10 shadow-sm overflow-hidden transition-all duration-500 cursor-pointer ${isActive ? 'pb-8 shadow-md' : 'hover:bg-primary/[0.02]'}`}
            >
              <div className="flex items-center gap-6 p-6 md:p-8">
                 <span className="text-secondary font-black text-xl w-12">{step.s}</span>
                 <h4 className="text-h3 md:text-h2 text-primary font-heading flex-1">{step.t}</h4>
                 <div className={`w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center transition-transform duration-500 ${isActive ? 'rotate-180 bg-primary text-white' : ''}`}>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 9 6 6 6-6"/></svg>
                 </div>
              </div>
              <div className={`px-6 md:px-8 grid transition-all duration-500 ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                 <div className="overflow-hidden">
                    <div className="flex items-start gap-6 pt-4 border-t border-primary/10">
                       <div className="w-16 h-16 bg-tan/40 rounded-2xl flex items-center justify-center text-primary shrink-0">
                          {step.i}
                       </div>
                       <p className="text-body1 md:text-xl text-primary/70 leading-relaxed max-w-2xl">{step.d}</p>
                    </div>
                 </div>
              </div>
            </div>
          );
      })}
    </div>
  );
}
