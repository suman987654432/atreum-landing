import React from 'react';
import doctor from "../../images/doctor.png";
import stats from "../../images/stats.avif";

const DoctorSection = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 md:px-12 py-10 md:py-14 font-sohne ">
      {/* Main Section Header - Centered on Mobile, Shifted right on Desktop */}
      <div className="flex justify-center md:justify-end mb-8 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-[53px] font-canela text-[#0B5D85] leading-tight md:leading-[69px] flex flex-col sm:flex-row items-center md:items-end gap-1 sm:gap-4 text-center md:text-right tracking-tight">
          <span className="font-bold italic uppercase sm:normal-case">Orthopaedic experts</span>
          <span className="font-normal">at Atreum</span>
        </h2>
      </div>

      {/* Professional-Grade Responsive Info Card */}
      <div className="relative w-full bg-[#F3F7F8] rounded-[24px] p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-center lg:justify-end shadow-sm border border-white/50 min-h-[300px] lg:min-h-[220px] overflow-hidden lg:overflow-visible">

        {/* Clinician Portrait - Precision Fixed Position */}
        <div className="relative lg:absolute bottom-0 lg:left-0 xl:left-8 w-[280px] sm:w-[350px] md:w-[480px] lg:w-[540px] xl:w-[580px] z-10 flex items-end -mt-20 sm:-mt-24 md:-mt-32 lg:mt-0 mb-8 lg:mb-0">
          <img
            src={doctor}
            alt="Dr. Anil Kumar H"  
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>

        {/* Clinical Details - Left-Aligned Hierarchy */}
        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6 z-20 md:mt-4 lg:mt-0 lg:pl-10 xl:pl-16">
          {/* Header Credentials */}
          <div className="space-y-1 w-full overflow-hidden">
            <h3 className="text-[20px] sm:text-2xl md:text-3xl lg:text-[40px] font-canela font-normal text-[#0B5D85] leading-tight flex flex-wrap lg:flex-nowrap justify-center lg:justify-start items-end gap-x-2 whitespace-nowrap">
              Dr Anil Kumar H <span className="text-sm sm:text-lg md:text-xl lg:text-[24px] font-sohne font-normal text-gray-700 ml-1 lg:ml-2 mb-1">(MBBS, MD)</span>
            </h3>
            <p className="text-xs sm:text-base md:text-lg lg:text-[19px] text-gray-800 font-medium">
              Experience - <span className="font-bold">18+ years</span> <span className="mx-2 text-gray-300">|</span> <span className="italic font-bold">Senior Consultant</span>
            </p>
          </div>

          {/* Departmental Intel */}
          <div className="space-y-0">
            <p className="text-xs sm:text-sm md:text-base lg:text-[20px] font-normal text-gray-900 tracking-[0.1em] uppercase">
              General Physician
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[22px] text-gray-900 font-semibold tracking-tight">
              Mon - Fri &nbsp; 7:00 PM - 8:30 PM
            </p>
          </div>

          {/* Engagement CTA */}
          <div className="mt-4 md:mt-2 lg:mt-1 flex items-center justify-center lg:justify-start gap-4 md:gap-6 w-full group lg:-ml-6">
            <span className="lg:block text-[#0B5D85] text-4xl font-bold ">‹</span>
            <button className="bg-[#0FB1AB] text-white px-8 md:px-10 lg:px-3 py-1 rounded-xl font-sohne font-semibold text-[16px] md:text-[20px] leading-[44px] transition-all flex items-center justify-center shadow-lg shadow-[#0FB1AB]/20 active:scale-95 tracking-normal uppercase">
              Book an Appointment
            </button>
            <span className="lg:block text-[#0B5D85] text-4xl font-bold ">›</span>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="w-full -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 flex flex-col items-center overflow-hidden px-4 md:px-0">
        {/* Journey Badge */}
        <div className="bg-[#F8FAFB] px-5 sm:px-6 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl shadow-sm border border-gray-100/50 z-20 translate-y-8 sm:translate-y-16 md:translate-y-24 lg:translate-y-48 transition-transform duration-300">
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