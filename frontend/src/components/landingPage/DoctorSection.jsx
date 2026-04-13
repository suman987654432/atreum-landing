import React from 'react';
import doctor from "../../images/drchetan.avif";
import stats from "../../images/stats.avif";

const DoctorSection = ({ onBookAppointment }) => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 md:px-12 py-10 md:py-14 font-sohne -mt-16 md:mt-10">
      {/* Main Section Header - Centered on Mobile, Shifted right on Desktop */}
      <div className="flex justify-end mt-4 mb-4 md:mb-6 transform translate-y-6 md:translate-y-0">
        <h2 className="text-[clamp(19px,4.5vw,53px)] font-canela text-[#0B5D85] leading-tight md:leading-[1.2] flex flex-row items-center md:items-end gap-1 sm:gap-4 text-center md:text-right tracking-tight">
          <span className="font-bold italic">Orthopaedic experts</span>
          <span className="font-normal">at Atreum</span>
        </h2>
      </div>

      {/* Professional-Grade Responsive Info Card */}
      <div className="relative w-full bg-[#F3F7F8] rounded-lg md:rounded-[24px] p-3 md:p-10 lg:p-14 flex flex-row items-center justify-end min-h-[132px] md:min-h-[220px] mt-10 md:mt-0 overflow-visible">

        {/* Clinician Portrait - Side-by-Side Scaling */}
        <div className="absolute bottom-0 -left-12 md:-left-4 w-[230px] sm:w-[280px] md:w-[520px] lg:w-[600px] xl:w-[650px] z-10 flex items-end translate-y-0 md:translate-y-0">
          <img
            src={doctor}
            alt="Dr. Anil Kumar H"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>

        {/* Clinical Details - Left-Aligned Hierarchy */}
        <div className="w-[60%] md:w-[50%] flex flex-col items-start text-left gap-0 md:gap-2 z-20 pl-8 lg:pl-10 xl:pl-16">
          {/* Header Credentials */}
          <div className="space-y-0 w-full overflow-hidden">
            <h3 className="text-[clamp(14px,3vw,40px)] font-canela font-normal text-[#0B5D85] leading-tight flex justify-start items-end gap-x-1 whitespace-nowrap">
              Dr Chethan Kumar P  <span className="text-[clamp(10px,1.8vw,24px)] font-sohne font-normal text-gray-700 mb-0.5">(MBBS, MD)</span>
            </h3>
          </div>

          {/* Departmental Intel */}
          <div className="space-y-0.5">
            <p className="text-[clamp(12px,1.6vw,20px)] font-semibold font-sohne text-gray-900 tracking-wider uppercase leading-tight">
              Orthopedics <span className="hidden md:inline mx-2 text-gray-300 font-normal">|</span> <span className="italic font-bold normal-case">Consultant</span>
            </p>
            <p className="text-[clamp(12px,1.8vw,22px)] text-gray-900 font-semibold tracking-tight leading-tight">
              Mon - Fri &nbsp; 1:00 PM - 4:00 PM
            </p>
          </div>

          {/* Engagement CTA */}
          <div className="mt-1 md:mt-1 flex items-center justify-start gap-1 md:gap-2 w-full -ml-2 md:-ml-6 scale-90 md:scale-100 origin-left">
            <span className="text-[#0B5D85] text-3xl md:text-4xl font-bold -translate-y-[2px] md:translate-y-0">‹</span>
            <button onClick={onBookAppointment} className="bg-[#0FB1AB] text-white px-2 md:px-10 py-0.5 md:py-1 rounded-md md:rounded-xl font-sohne font-semibold text-[10px] md:text-[20px] leading-[24px] md:leading-[44px]  flex items-center justify-center   tracking-normal uppercase">
              Book Appointment
            </button>
            <span className="text-[#0B5D85] text-3xl md:text-4xl font-bold -translate-y-[2px] md:translate-y-0">›</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 flex flex-col items-center overflow-hidden px-4 md:px-0">
        {/* Journey Badge */}
        <div className="bg-[#F8FAFB] px-5 sm:px-6 md:px-8 py-2 md:py-3 rounded-md md:rounded-2xl shadow-sm border border-gray-100/50 z-20 translate-y-20 sm:translate-y-16 md:translate-y-24 lg:translate-y-48 transition-transform duration-300">
          <p className="text-[#0B5D85] text-xs sm:text-base md:text-xl lg:text-2xl font-canela tracking-tight whitespace-nowrap">
            Our <span className="font-bold font-canela">Journey So Far</span>
          </p>
        </div>

        <img
          src={stats}
          alt="Hospital Statistics"
          className="w-[85%] sm:w-[75%] md:w-[80%] lg:w-full lg:max-w-[980px] h-auto object-contain z-10"
        />
      </div>
    </section>
  );
};

export default DoctorSection;