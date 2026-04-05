import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import logo from "../../images/logo.png";

const Navbar = () => {
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
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#f0f0f0] shadow-md">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-6 py-4 md:py-6">

        {/* Logo Section */}
        <div className="flex items-center gap-1.5 md:gap-3">
          <img
            src={logo}
            alt="logo"
            className="h-8 md:h-14 w-auto object-contain shrink-0"
          />
          <div className="flex flex-col font-sohne text-[#0B5D85]">
            <span className="text-xl md:text-[28px] font-extrabold leading-none tracking-tight">ATREUM</span>
            <span className="text-[10px] md:text-[14px] font-medium leading-none mt-0.5 md:mt-1 whitespace-nowrap">Speciality Hospital</span>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="flex items-center gap-1.5 md:gap-4 font-sohne shrink-0">

          {/* Appointment Button - Only shown on Desktop (md onwards) */}
          <button 
            onClick={(e) => scrollToSection(e, 'form-section')}
            className="hidden md:block bg-[#00A5A9] text-white px-5 py-3 rounded-[6px] text-[14px] font-semibold uppercase tracking-wider transition-all hover:bg-[#008c8f] whitespace-nowrap active:scale-95"
          >
            BOOK APPOINTMENT
          </button>

          <div className="flex items-center gap-1 md:gap-1.5 font-sohne">
            {/* Phone Icon Box - Always Visible (Mobile and Desktop) */}
            <a 
              href="tel:+919784524567" 
              className="bg-[#4980AA] text-white p-2.5 md:p-3.5 rounded-[4px] md:rounded-[6px] flex items-center justify-center transition-all hover:bg-[#3d6b8f] cursor-pointer shadow-sm active:scale-95"
              title="Call Us"
            >
              <FaPhoneAlt className="text-[12px] md:text-base" />
            </a>

            {/* Phone Number Box - Only shown on Desktop (md onwards) */}
            <a 
              href="tel:+919784524567" 
              className="hidden md:flex bg-[#4980AA] text-white px-5 py-3 rounded-[6px] items-center text-[16px] font-medium transition-all hover:bg-[#3d6b8f] whitespace-nowrap shadow-sm active:scale-95"
              title="Call Us"
            >
              +91-9784524567
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
