import React from 'react';


const ContactSection = () => {
    return (
        <section className="relative w-full px-4 md:px-12 py-4 md:py-8 flex justify-center items-center">
            {/* Main Container - Same style as Hero Section */}
            <div className="relative w-full max-w-[1550px] bg-[#D9D9D933] rounded-[32px] md:rounded-[20px] overflow-hidden p-6 md:px-14 md:py-10 border border-white/40 shadow-sm min-h-0">
                
              
                <div className="relative z-10 w-full flex flex-col items-center gap-6 md:gap-8 transition-all duration-300">
                    {/* Centered Heading */}
                    <h2 className="text-4xl md:text-[40px] font-canela text-[#0B5D85] leading-tight tracking-tight text-center">
                        Get a <span className="italic font-light">free cost estimate</span> now
                    </h2>

                    {/* Contact Form */}
                    <form className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {/* Full Name */}
                        <div className="flex flex-col gap-2">
                            <input 
                                type="text" 
                                placeholder="Full Name"
                                className="w-full px-6 py-3.5 bg-white/60 border border-[#0FB1AB] rounded-2xl md:rounded-[15px] text-lg font-sohne text-[#0B5D85] placeholder:text-black focus:outline-none "
                            />
                        </div>

                        {/* Mobile Number */}
                        <div className="flex flex-col gap-2">
                            <input 
                                type="tel" 
                                placeholder="Mobile Number"
                                className="w-full px-6 py-3.5 bg-white/60 border border-[#0FB1AB] rounded-2xl md:rounded-[15px] text-lg font-sohne text-[#0B5D85] placeholder:text-black focus:outline-none "
                            />
                        </div>

                        {/* Email ID */}
                        <div className="flex flex-col gap-2">
                            <input 
                                type="email" 
                                placeholder="Email ID"
                                className="w-full px-6 py-3.5 bg-white/60 border border-[#0FB1AB] rounded-2xl md:rounded-[15px] text-lg font-sohne text-[#0B5D85] placeholder:text-black focus:outline-none "
                            />
                        </div>

                        {/* Type your Query */}
                        <div className="flex flex-col gap-2">
                            <input 
                                type="text" 
                                placeholder="Type your Query"
                                className="w-full px-6 py-3.5 bg-white/60 border border-[#0FB1AB] rounded-2xl md:rounded-[15px] text-lg font-sohne text-[#0B5D85] placeholder:text-black focus:outline-none "
                            />
                        </div>

                        {/* Submit Button Container */}
                        <div className="col-span-1 md:col-span-2 flex justify-center">
                            <button 
                                type="submit"
                                className="px-14 py-3 bg-[#0B5D85] text-white font-sohne font-bold text-lg rounded-xl md:rounded-[10px] hover:bg-[#094d6e] transition-all shadow-md active:scale-95"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;