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
        <section className="relative w-full max-w-[1550px] mx-auto px-4 md:px-12 py-4 md:py-6 font-sohne">
            {/* Header Section - Shifted Right */}
            <div className="mb-6 md:pl-10 lg:pl-20">
                <h2 className="text-3xl md:text-[40px] font-canela text-[#0B5D85] leading-tight mb-2 tracking-tight">
                    When Should You <span className="italic font-semibold">Consider Knee Replacement?</span>
                </h2>
                <p className="text-[16px] md:text-[18px] text-[#0B5D85] font-semibold">
                    You may need to consult a specialist if you experience:
                </p>
            </div>

            {/* Symptoms Card Grid Container */}
            <div className="bg-[#F8FAFB] rounded-[20px] p-4 md:p-8 lg:p-10  shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {symptoms.map((symptom, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-2">
                            {/* Illustration Container */}
                            <div className="w-full h-[120px] md:h-[140px] flex items-center justify-center">
                                <img 
                                    src={symptom.image} 
                                    alt={symptom.title} 
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            
                            {/* Label */}
                            <p className="text-[14px] md:text-[16px] font-bold text-[#0B5D85] leading-[1.3] max-w-[240px] uppercase tracking-tight">
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