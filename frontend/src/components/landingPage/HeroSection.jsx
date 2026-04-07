import React, { useState } from 'react';
import logo from "../../images/logo.png";
import hero from "../../images/hero.png";

const HeroSection = () => {
    // Current Slide State
    const [currentSlide, setCurrentSlide] = useState(1);
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 2000; // Luxuriously slow duration for a professional feel
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Professional Ease-In-Out-Cubic function
    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
  };
    return (
        <section className="relative w-full px-4 md:px-12 py-4 md:py-6 flex justify-center items-center mt-5">
            {/* Background Wrapper */}
            <div className="relative w-full max-w-[1440px] bg-[#D9D9D933] rounded-[32px] md:rounded-[24px] overflow-hidden flex flex-col md:flex-row items-center border border-white/40 shadow-sm min-h-[500px] md:min-h-[550px]">

                {/* Background Watermark Logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06] pointer-events-none z-0">
                    <img src={logo} alt="" className="w-full h-full object-contain" />
                </div>

                {/* Left Content Section (Half Width) */}
                <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-6 md:gap-8 text-left p-8 md:pl-16 lg:pl-24">
                    <div className="flex flex-col">
                        <h1 className="text-[32px] md:text-[48px] font-canela font-normal text-[#0B5D85] leading-tight md:leading-[57px] tracking-tight">
                            Get the <span className="font-bold italic">safest knee</span>
                        </h1>
                        <h1 className="text-[32px] md:text-[48px] font-canela font-bold italic text-[#0B5D85] leading-tight md:leading-[57px] tracking-tight">
                            replacement at Atreum
                        </h1>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-[18px] md:text-[28px] font-sohne font-semibold text-[#0B5D85] leading-snug">
                            Walk freely again with confidence.
                        </p>
                        <p className="text-[18px] md:text-[28px] font-sohne font-normal text-[#19628D]/80 leading-snug">
                            Book your consultation with <span className="font-semibold text-[#19628D]">Atreum’s</span>
                            <br className="hidden md:block" /> <span className="font-semibold text-[#19628D]">orthopaedic experts today!</span>
                        </p>
                    </div>

                    <div className="mt-2">
                        <button  onClick={(e) => scrollToSection(e, 'form-section')} className="bg-[#0FB1AB] text-white px-4 md:px-4 py-1 rounded-xl font-sohne font-semibold text-[16px] md:text-[20px] leading-[44px] transition-all flex items-center justify-center  tracking-normal uppercase ">
                            Book an Appointment
                        </button>
                    </div>
                </div>

                {/* Right Image Section (Half Width) */}
                <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end items-center md:pr-4 py-8 md:py-0">
                    <div className="relative rounded-[24px] md:rounded-[20px] overflow-hidden w-[90%] md:w-[585px] h-[350px] md:h-[497px] shadow-lg">
                        <img
                            src={hero}
                            alt="Happy elderly couple"
                            className="w-full h-full object-cover"
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
