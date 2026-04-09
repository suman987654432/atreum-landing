import React from 'react';
import persistent from "../../images/persistent.png";
import reduced from "../../images/reduced.png";
import swelling from "../../images/swelling.png";
import difficulty from "../../images/difficulty.png";
import limited from "../../images/limited.png";
import pain from "../../images/pain.png";

const KneeSymptoms = () => {
    const symptoms = [
        {
            title: "PERSISTENT KNEE PAIN",
            image: persistent
        },
        {
            title: "DIFFICULTY WALKING OR CLIMBING STAIRS",
            image: difficulty
        },
        {
            title: "SWELLING AND STIFFNESS",
            image: swelling
        },
        {
            title: "REDUCED RANGE OF MOTION",
            image: reduced
        },
        {
            title: "PAIN THAT AFFECTS SLEEP",
            image: pain
        },
        {
            title: "LIMITED MOBILITY DESPITE MEDICATION OR PHYSIOTHERAPY",
            image: limited
        }
    ];

    return (
        <section className="relative w-full max-w-[1440px] mx-auto px-4 md:px-12 pt-0 pb-10 md:pt-0 md:pb-20 font-sohne overflow-hidden -mt-16 md:mt-0">
            {/* Header Section */}
            <div className="mb-6 md:mb-10 pl-6 md:pl-10 lg:pl-20">
                <h2 className="text-[24px] md:text-[53px] font-canela font-normal text-[#0B5D85] leading-tight md:leading-[60px] mb-2 md:mb-4 tracking-tight">
                    When Should You <span className="font-bold italic">Consider Knee Replacement?</span>
                </h2>
                <p className="text-[12px] md:text-[22px] text-[#19628D] font-semibold font-sohne tracking-[0.02em]">
                    You may need to consult a specialist if you experience:
                </p>
            </div>

            {/* Symptoms Card Grid Container */}
            <div className="bg-[#D9D9D933] rounded-lg md:rounded-[32px] px-3 py-6 md:px-12 md:py-14 lg:px-20 lg:py-16 shadow-sm border border-white/40">
                <div className="grid grid-cols-3 gap-2 sm:gap-12 md:gap-16">
                    {symptoms.map((symptom, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 md:gap-8">
                            {/* Illustration Container */}
                            <div className="w-full max-w-[80px] md:max-w-[254px] aspect-[1.25/1] flex items-center justify-center overflow-hidden">
                                <img
                                    src={symptom.image}
                                    alt={symptom.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Label */}
                            <p className="text-[11px] md:text-[24px] font-sohne font-semibold text-[#0B5D85] leading-[13px] md:leading-none uppercase tracking-tight text-center">
                                {symptom.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KneeSymptoms;