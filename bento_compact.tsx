            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12 max-w-[1200px] mx-auto w-full">
              {[
                {
                  s: "01", t: "Browse Designs",
                  d: "Explore latest batik print designs, cotton dresses for women, and fresh stock collections.",
                  i: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                    </svg>
                  )
                },
                {
                  s: "02", t: "Select Quantity",
                  d: "Choose pieces for retail stores and boutiques.",
                  i: (
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 11h4" /><path d="M12 15h4" /><path d="M8 11h.01" /><path d="M8 15h.01" />
                    </svg>
                  )
                },
                {
                  s: "03", t: "Connect via WhatsApp",
                  d: "Get pricing and custom support instantly.",
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
                     case 0: bentoClass = "md:col-span-2 lg:col-span-2 p-6 md:p-8 flex-col sm:flex-row lg:flex-row items-center"; break; // Wide Card
                     case 1: bentoClass = "md:col-span-1 lg:col-span-1 p-6 md:p-8 flex-col items-start"; break; // Square Card
                     case 2: bentoClass = "md:col-span-1 lg:col-span-1 p-6 md:p-8 flex-col items-start"; break; // Square Card
                     case 3: bentoClass = "md:col-span-1 lg:col-span-2 p-6 md:p-8 flex-col sm:flex-row lg:flex-row items-center"; break; // Wide Card
                     case 4: bentoClass = "md:col-span-1 lg:col-span-2 p-6 md:p-8 flex-col sm:flex-row lg:flex-row items-center"; break; // Wide Card
                  }

                  return (
                     <div key={i} className={`bg-white rounded-[2rem] border border-primary/10 shadow-sm hover:shadow-2xl transition-all duration-300 relative group flex gap-5 md:gap-6 overflow-hidden ${bentoClass}`}>
                        
                        <div className="absolute -bottom-4 right-0 lg:-right-4 text-[120px] font-black text-primary/[0.03] leading-none pointer-events-none group-hover:-translate-y-2 transition-transform duration-700">
                           {step.s}
                        </div>

                        <div className="flex flex-col gap-4 z-10 shrink-0">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary text-white font-black text-sm rounded-full flex items-center justify-center shadow-md shrink-0">
                                 {step.s}
                              </div>
                              <div className={`w-14 h-14 md:w-16 md:h-16 bg-tan/40 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0 ${i === 1 || i === 2 ? 'hidden sm:flex' : 'flex'}`}>
                                 {step.i}
                              </div>
                           </div>
                           {(i === 1 || i === 2) && (
                              <div className="w-14 h-14 md:w-16 md:h-16 bg-tan/40 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0 sm:hidden">
                                 {step.i}
                              </div>
                           )}
                        </div>
                        
                        <div className="flex flex-col gap-1 z-10 w-full justify-center">
                           <h4 className="text-h4 text-primary leading-tight font-heading pr-2">{step.t}</h4>
                           <p className="text-body2 text-sm md:text-[15px] text-primary/70 leading-relaxed font-medium">{step.d}</p>
                        </div>
                     </div>
                  );
              })}
            </div>
