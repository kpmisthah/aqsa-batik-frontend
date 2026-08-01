            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 max-w-[1200px] mx-auto w-full">
              {[
                {
                  s: "01", t: "Browse Designs",
                  d: "Explore the latest batik print designs, premium cotton dresses for women, and fresh stock collections updated weekly.",
                  i: (
                    <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                    </svg>
                  )
                },
                {
                  s: "02", t: "Select Quantity",
                  d: "Choose pieces for retail stores, boutiques, wholesalers, or marketplace inventory.",
                  i: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 11h4" /><path d="M12 15h4" /><path d="M8 11h.01" /><path d="M8 15h.01" />
                    </svg>
                  )
                },
                {
                  s: "03", t: "Connect On WhatsApp",
                  d: "Get pricing, stock updates, and personalized support instantly.",
                  i: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 5.5Z" />
                    </svg>
                  )
                },
                {
                  s: "04", t: "Receive Wholesale Pricing",
                  d: "Bulk pricing support based on order volume and business requirements.",
                  i: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 5 4 4" /><path d="M13 7 8.7 2.7a2 2 0 0 0-2.8 0L2.7 5.9a2 2 0 0 0 0 2.8L7 13" /><path d="m19 11-4 4" /><path d="m21 15-4.5 4.5a2 2 0 0 1-2.8 0L10 15.8" /><circle cx="16" cy="16" r="2" />
                    </svg>
                  )
                },
                {
                  s: "05", t: "Fast Dispatch",
                  d: "Quick shipping across India through trusted logistics partners.",
                  i: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
                    </svg>
                  )
                }
              ].map((step, i) => {
                  let bentoClass = "";
                  switch(i) {
                     case 0: bentoClass = "md:col-span-2 lg:col-span-2 lg:row-span-2 p-8 md:p-12"; break;
                     case 1: bentoClass = "md:col-span-1 lg:col-span-1 p-6 md:p-8"; break;
                     case 2: bentoClass = "md:col-span-1 lg:col-span-1 p-6 md:p-8"; break;
                     case 3: bentoClass = "md:col-span-2 lg:col-span-1 p-6 md:p-8"; break;
                     case 4: bentoClass = "md:col-span-2 lg:col-span-2 p-6 md:p-8"; break;
                  }

                  return (
                     <div key={i} className={`bg-white rounded-[2rem] border border-primary/10 shadow-sm hover:shadow-2xl transition-all duration-300 relative group flex flex-col gap-6 overflow-hidden ${bentoClass}`}>
                        
                        <div className="absolute -bottom-4 -right-4 text-[120px] font-black text-primary/[0.03] leading-none pointer-events-none transition-transform duration-700">
                           {step.s}
                        </div>

                        <div className="flex items-center gap-4 z-10 w-full justify-between">
                           <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary text-white font-black text-sm rounded-full flex items-center justify-center shadow-md">
                              {step.s}
                           </div>
                           <div className="w-14 h-14 md:w-16 md:h-16 bg-tan/40 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                              {step.i}
                           </div>
                        </div>
                        
                        <div className="flex flex-col gap-2 z-10 w-full mt-auto">
                           <h4 className={`${i === 0 ? 'text-h2' : 'text-h4'} text-primary leading-tight font-heading`}>{step.t}</h4>
                           <p className={`${i === 0 ? 'text-body1 md:text-xl' : 'text-body2 text-sm'} text-primary/70 leading-relaxed font-medium mt-1`}>{step.d}</p>
                        </div>
                     </div>
                  );
              })}
            </div>
