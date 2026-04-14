import knee from "../../images/knee.png";
import vector1 from "../../images/Vector1.png";

const KneeReplacementInfo = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 md:px-12 py-10 md:py-20 font-sohne overflow-hidden">
      <div className="relative w-full min-h-[500px] md:min-h-[600px] flex flex-col md:block bg-transparent md:bg-[#0FB1AB33] rounded-xl">

        {/* <div className="absolute bottom-0 right-0 w-full h-[60%] md:h-[270px] bg-[#E0F3F2] rounded-[32px] md:rounded-[40px] z-0"></div> */}

        {/* <svg
          className="absolute bottom-0 left-0 w-full z-0"
          viewBox="0 60 100 40"
          height="305"
          preserveAspectRatio="none"
          style={{ width: '100%', display: 'block', borderRadius: 0 }}
        >
          <path
            d="M0 80 L40 80 Q50 90 60 80 L100 80 L100 100 L0 100 Z"
            fill="#0FB1AB33"
            stroke="red"
            strokeWidth="2"
          />
        </svg> */}
        {/* <div className="hidden md:block absolute top-[700px] right-0 w-[50%] h-[300px] bg-[#E0F3F2] rounded-tr-lg z-10"></div> */}

        <div className="relative z-20 w-full md:w-[55%] lg:w-[48%] p-4 md:p-8 lg:p-14">
          <div className="flex flex-row md:block items-start gap-4">
            <div className="w-[55%] md:w-full">
              <h2 className="text-[19px] md:text-[32px] lg:text-[42px] font-canela text-[#0B5D85] leading-tight tracking-tight mb-3 md:mb-6 lg:mb-8">
                What is <span className="italic font-bold">Knee <br /> Replacement</span> Surgery?
              </h2>
               <p className="text-[13px] md:text-[20px] lg:text-[28px] text-[#0B5D85]/80 font-sohne leading-snug lg:leading-[1.1]">
                <span className="font-semibold text-[#0B5D85]">Knee replacement surgery</span> is a procedure
                that replaces <span className="font-bold text-[#0B5D85]">damaged</span> or <span className="font-bold text-[#0B5D85]">worn-out parts</span> of
                the <span className="font-bold text-[#0B5D85]">knee joint</span> with <span className="font-bold text-[#0B5D85]">advanced artificial implants</span>.
                It is usually recommended for patients experiencing persistent <span className="font-bold text-[#0B5D85]">knee pain, stiffness, swelling</span>,
                or difficulty walking due to arthritis, injury, or <span className="font-bold text-[#0B5D85]">age-related wear and tear</span>.
              </p>
            </div>
            {/* Mobile-only knee image and info on the right */}
            <div className="flex flex-col md:hidden w-[40%] shrink-0 pt-1">
              <img
                src={knee}
                alt="Knee replacement illustration"
                className="w-full h-auto object-contain"
              />
              <div className="w-full  h-[1px] bg-[#0FB1AB] mt-[-2px] mb-2"></div>
              <p className="text-[13px] text-[#0B5D85]/90 leading-tight font-medium font-bucher">
                A knee replacement may be <span className="font-bold text-[#0B5D85]">total</span> or <span className="font-bold text-[#0B5D85]">partial</span>, depending on the <span className="font-bold text-[#0B5D85]">extent of joint damage</span>.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex absolute top-[50%] left-[750px] items-center pointer-events-none">
            <div className="w-2 h-2 rounded-xl bg-[#0FB1AB]"></div>
            <div className="w-[200px] h-[1.5px] bg-[#0B5D85]/40"></div>
          </div>
        </div>

        {/* Divider for mobile */}
        {/* <div className="block md:hidden mx-8 h-[1px] bg-[#0FB1AB]/30 my-4"></div> */}

        <div className="relative z-10 w-full md:flex items-end justify-between px-4 md:px-14 md:mb-20 ">
          {/* Desktop-only: Partial/Total info */}
          <div className="hidden md:block w-full md:w-[35%] relative order-1 md:order-2">
            <div className="hidden lg:flex absolute left-[90px] top-[-280px] h-[200px] flex-col items-center pointer-events-none">
              <div className="h-full w-[1.5px] bg-[#0B5D85]/40"></div>
              <div className="w-2 h-2 rounded-xl bg-[#0FB1AB]"></div>
            </div>

            <p className="text-[15px] mb-8 md:mb-12 md:text-[20px] lg:text-[28px] text-[#0B5D85]/90 leading-tight lg:leading-[1] font-medium font-bucher">
              A knee replacement may be <span className="font-bold text-[#0B5D85]">total</span> or <span className="font-bold text-[#0B5D85]">partial</span>, depending on the <span className="font-bold text-[#0B5D85]">extent of joint damage</span>.
            </p>
          </div>

          {/* Divider for mobile */}
          <div className="block md:hidden h-[1px] bg-[#0FB1AB]/30 my-3"></div>

          <div className="w-full md:w-[50%] mb-5 order-2 md:order-1">
            <p className="text-[16px] md:text-[22px] lg:text-[34px] text-[#0B5D85] font-canela leading-tight lg:leading-[1.1] md:pr-4">
              At Atreum, we focus on <span className="italic font-bold">precision-led treatment</span> and <span className="italic font-bold">personalised recovery plans</span> to ensure <span className="italic font-bold">better outcomes</span> and <span className="italic font-bold">faster rehabilitation</span>.
            </p>
          </div>

          {/* Divider below for mobile */}
          <div className="block md:hidden h-[1px] bg-[#0FB1AB]/30 "></div>
        </div>

        {/* Border Graphic - Desktop only */}
        <div className="hidden md:block absolute top-0 left-0 w-full -z-1" style={{ height: '450px' }}>
          <img src={vector1} alt="decorative border" className="w-full h-full object-fit" style={{ display: 'block' }} />
        </div>

        {/* Knee illustration - Desktop only (absolute positioned) */}
        <div className="hidden md:block absolute top-[10px] right-0 md:right-[2%] lg:right-[8%] w-fit z-[25] pointer-events-none">
          <img
            src={knee}
            alt="Knee replacement illustration"
            className="w-[240px] md:w-[280px] lg:w-[380px] h-auto object-contain transform scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default KneeReplacementInfo;