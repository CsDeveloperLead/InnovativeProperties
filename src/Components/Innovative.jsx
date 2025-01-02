import React from "react";
import icon1 from "../assets/icon1.webp";
import icon2 from "../assets/icon2.webp";
import icon3 from "../assets/icon3.webp";
import icon4 from "../assets/icon4.webp";

const Innovative = () => {
  const features = [
    {
      id: 1,
      title: "Specially Experience",
      description:
        "We design personalized Homes to match your preferences, ensuring every home is unique to you.",
      icon: icon1, // Replace with the actual icon
    },
    {
      id: 2,
      title: "Expert Knowledge",
      description:
        "Our team of experts has insider access and knowledge of Properties. Which will guide your way.",
      icon: icon2, // Replace with the actual icon
    },
    {
      id: 3,
      title: "Stress-Free Property Planning",
      description:
        "From Buy to Renting, we handle all the details so you can enjoy a stress-free Buying experience.",
      icon: icon3, // Replace with the actual icon
    },
    {
      id: 4,
      title: "24/7 Customer Support",
      description:
        "We provide round-the-clock assistance, ensuring you’re supported throughout your Home, no matter where you are.",
      icon: icon4, // Replace with the actual icon
    },
  ];

  return (
    <div className="px-5 md:px-10 xl:px-20 flex flex-col md:flex-row gap-8 font-jakarta mt-2 md:mt-10 mb-10 md:mb-20">
      <div className="w-full md:w-1/2 flex flex-col text-3xl md:text-5xl text-[#0f3c4c] font-bold leading-10 md:leading-[60px]">
        <h1 className="text-center md:text-start ">Why Innovative Property</h1>
        <h1 className="text-center md:text-start ">is the Right Choice </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-start bg-white shadow-custom2 rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex gap-4">
                <img src={feature.icon} alt="" className="w-10 h-10" />
                <h3 className="text-sm w-2/3 font-semibold text-[#0f3c4c] mb-2">
                  {feature.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 bg-[#c4c4c4] rounded-3xl"></div>
    </div>
  );
};

export default Innovative;
