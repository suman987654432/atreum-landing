import knee from "../../images/knee.png";

const KneeReplacementInfo = () => {
  return (
    <section className="relative w-full max-w-[1550px] mx-auto px-4 md:px-12 py-20 font-sohne overflow-hidden">
      <div className="relative w-full min-h-[600px] flex flex-col md:block">

        {/* <div className="absolute bottom-0 right-0 w-full h-[60%] md:h-[270px] bg-[#E0F3F2] rounded-[32px] md:rounded-[40px] z-0"></div> */}

        <svg
          className="absolute bottom-0 left-0 w-full z-0 rounded-b-xl"
          viewBox="0 60 100 40"
          height="200"
          preserveAspectRatio="none"
          style={{ width: '100%', display: 'block' }}
        >
          <path
            d="M 0 80 Q 0 78 2 78 L 53 78 Q 55 78 55 76 L 55 66 Q 55 64 57 64 L 98 64 Q 100 64 100 66 L 100 98 Q 100 100 100 100 L 2 100 Q 0 100 0 100 L 0 82 Q 0 80 0 100 Z"
            fill="#E0F3F2"
          />
        </svg>
        <div className="hidden md:block absolute top-[700px] right-0 w-[50%] h-[300px] bg-[#E0F3F2] rounded-tr-[40px] z-0"></div>

        <div className="relative z-20 w-full md:w-[55%] lg:w-[48%] bg-white p-8 md:p-14 ">
          <h2 className="text-3xl md:text-[42px] font-canela text-[#0B5D85] leading-tight tracking-tight mb-8">
            What is <span className="italic font-bold">Knee Replacement</span> Surgery?
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#0B5D85]/80 leading-[1.7]">
            <span className="font-bold text-[#0B5D85]">Knee replacement surgery</span> is a procedure
            that replaces <span className="font-bold text-[#0B5D85]">damaged</span> or <span className="font-bold text-[#0B5D85]">worn-out parts</span> of
            the <span className="font-bold text-[#0B5D85]">knee joint</span> with <span className="font-bold text-[#0B5D85]">advanced artificial implants</span>.
            It is usually recommended for patients experiencing persistent <span className="font-bold text-[#0B5D85]">knee pain, stiffness, swelling</span>,
            or difficulty walking due to arthritis, injury, or <span className="font-bold text-[#0B5D85]">age-related wear and tear</span>.
          </p>

          <div className="hidden lg:flex absolute top-[55%] -right-12 items-center pointer-events-none">
            <div className="w-12 h-[1.5px] bg-[#0B5D85]/40"></div>
            <div className="w-2 h-2 rounded-full bg-[#0FB1AB]"></div>
          </div>
        </div>

        <div className="relative z-10 w-full mt-12 md:mt-24 md:flex items-end justify-between px-2 md:px-14">
          <div className="w-full md:w-[50%] mb-10 md:mb-0">
            <p className="text-[18px] md:text-[23px] text-[#0B5D85] font-medium leading-[1.4] pr-4">
              At Atreum, we focus on <span className="italic font-bold">precision-led treatment</span> and <span className="italic font-bold">personalised recovery plans</span> to ensure <span className="italic font-bold">better outcomes</span> and <span className="italic font-bold">faster rehabilitation</span>.
            </p>
          </div>

          <div className="w-full md:w-[35%] relative">
            <div className="hidden lg:flex absolute left-[-40px] top-[-180px] h-[160px] flex-col items-center pointer-events-none">
              <div className="h-full w-[1.5px] bg-[#0B5D85]/40"></div>
              <div className="w-2 h-2 rounded-full bg-[#0FB1AB]"></div>
            </div>

            <p className="text-[15px] md:text-[17px] text-[#0B5D85]/90 leading-relaxed font-medium">
              A knee replacement may be <span className="font-bold text-[#0B5D85]">total</span> or <span className="font-bold text-[#0B5D85]">partial</span>, depending on the <span className="font-bold text-[#0B5D85]">extent of joint damage</span>.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 md:right-[5%] lg:right-[8%] w-fit z-[25] pointer-events-none">
          <img
            src={knee}
            alt="Knee replacement illustration"
            className="w-[240px] md:w-[320px] lg:w-[380px] h-auto object-contain transform scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default KneeReplacementInfo;