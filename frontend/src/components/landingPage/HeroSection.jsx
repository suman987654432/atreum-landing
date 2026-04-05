import React, { useState } from 'react';
import logo from "../../images/logo.png";
import hero from "../../images/hero.png";

const HeroSection = () => {
    // Current Slide State
    const [currentSlide, setCurrentSlide] = useState(1);

    return (
        <section className="relative w-full px-4 md:px-12 py-4 md:py-6 flex justify-center items-center mt-5">
            {/* Background Wrapper shifted and balanced */}
            <div className="relative w-full max-w-[1550px] bg-[#D9D9D933] rounded-[32px] md:rounded-[20px] overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:pl-10 lg:pl-32 md:pr-4 md:py-4 border border-white/40 shadow-sm min-h-[350px] md:min-h-[350px]">

                {/* Background Watermark Logo */}
                <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.06] pointer-events-none z-0">
                    <img src={logo} alt="" className="w-full h-full object-contain" />
                </div>

                {/* Left Content Section - Shifted Right */}
                <div className="relative z-10 w-full md:w-[55%] flex flex-col gap-4 md:gap-10 text-left">
                    <div className="flex flex-col">
                        <h1 className="text-4xl md:text-[44px] lg:text-[50px] font-canela text-[#0B5D85] leading-[1.05] tracking-tight">
                            Get the <span className="italic">safest knee</span>
                        </h1>
                        <h1 className="text-4xl md:text-[44px] lg:text-[50px] font-canela italic text-[#0B5D85] leading-[1.05] tracking-tight">
                            replacement at Atreum
                        </h1>
                    </div>

                    <div className="flex flex-col gap-0.5">
                        <p className="text-[20px] md:text-[23px] font-sohne font-bold text-[#0B5D85] leading-tight mb-0.5">
                            Walk freely again with confidence.
                        </p>
                        <p className="text-[18px] md:text-[21px] font-sohne font-medium text-[#0B5D85]/80 leading-tight">
                            Book your consultation with <span className="font-bold text-[#0B5D85]">Atreum’s</span>
                        </p>
                        <p className="text-[18px] md:text-[21px] font-sohne font-semibold text-[#0B5D85]">
                            orthopaedic experts today!
                        </p>
                    </div>
                </div>

                {/* Right Image Section - Slightly Larger and Balanced */}
                <div className="relative z-10 w-full md:w-[40%] flex justify-end mt-8 md:mt-0">
                    <div className="relative rounded-[24px] md:rounded-[15px] overflow-hidden w-full md:w-[580px] md:aspect-auto">
                        <img
                            src={hero}
                            alt="Happy elderly couple"
                            className="w-full h-full object-contain"
                        />

                        {/* Carousel Dots */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 flex items-center gap-2">
                            {[0, 1, 2].map((slide) => (
                                <button
                                    key={slide}
                                    onClick={() => setCurrentSlide(slide)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${currentSlide === slide
                                        ? 'bg-white scale-125 ring-2 ring-white/30'
                                        : 'bg-white/40 hover:bg-white/60'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
