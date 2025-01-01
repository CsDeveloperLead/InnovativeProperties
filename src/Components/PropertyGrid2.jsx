import React from "react";

const PropertyGrid2 = () => {
  const properties = [
    {
      id: 1,
      title: "Property for Sale",
      buttonText: "Buy Properties",
      tags: ["Handled by Our Professionals", "Fast Process"],
    },
    {
      id: 2,
      title: "Property for Rent",
      buttonText: "Buy Properties",
      tags: ["Handled by Our Professionals", "Fast Process"],
    },
    {
      id: 3,
      title: "Sell Your Property",
      buttonText: "Buy Properties",
      tags: ["Handled by Our Professionals", "Fast Process"],
    },
    {
      id: 4,
      title: "Development for Sale",
      buttonText: "Buy Properties",
      tags: ["Handled by Our Professionals", "Fast Process"],
    },
  ];

  return (
    <div className="px-5 md:px-10 xl:px-20 my-20 flex flex-col gap-4 font-jakarta">
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-[60%] h-[320px] bg-[#c4c4c4] rounded-3xl relative">
          <div className="absolute top-6 left-6 md:space-x-6 flex flex-col md:flex-row gap-2">
            <span className="border-white border-2 text-white px-6 py-1 rounded-full">
              Handled by Our Proffesionals
            </span>
            <span className="border-white border-2 rounded-full w-[200px] text-white text-base px-6 py-1">
              Fast Process
            </span>
          </div>
          <div className="absolute bottom-20 left-6 text-white text-4xl">Property for Sale</div>
          <button className="absolute bg-[#0F3C4C] bottom-6 left-6 text-white text-base font-bold rounded-2xl hover:bg-[#195e77] px-6 py-2">Buy Properties</button>
        </div>
        <div className="w-full md:w-[40%] h-[320px] bg-[#c4c4c4] rounded-3xl relative">
          <div className="absolute top-6 left-6 md:space-x-6 flex flex-col md:flex-row gap-2">
            <span className="border-white border-2 text-white px-6 py-1 rounded-full">
              Handled by Our Proffesionals
            </span>
            <span className="border-white border-2 rounded-full w-[200px] text-white text-base px-6 py-1">
              Fast Process
            </span>
          </div>
          <div className="absolute bottom-20 left-6 text-white text-4xl">Property for Rent</div>
          <button className="absolute bg-[#0F3C4C] bottom-6 left-6 text-white text-base font-bold rounded-2xl hover:bg-[#195e77] px-6 py-2">Buy Properties</button>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-[40%] h-[320px] bg-[#c4c4c4] rounded-3xl relative">
          {" "}
          <div className="absolute top-6 left-6 md:space-x-6 flex flex-col md:flex-row gap-2">
            <span className="border-white border-2 text-white px-6 py-1 rounded-full">
              Handled by Our Proffesionals
            </span>
            <span className="border-white border-2 rounded-full w-[200px] text-white text-base px-6 py-1">
              Fast Process
            </span>
          </div>
          <div className="absolute bottom-20 left-6 text-white text-4xl">Sell Your Property</div>
          <button className="absolute bg-[#0F3C4C] bottom-6 left-6 text-white text-base font-bold rounded-2xl hover:bg-[#195e77] px-6 py-2">Buy Properties</button>
        </div>
        <div className="w-full md:w-[60%] h-[320px] bg-[#c4c4c4] rounded-3xl relative">
          {" "}
          <div className="absolute top-6 left-6 md:space-x-6 flex flex-col md:flex-row gap-2">
            <span className="border-white border-2 text-white px-6 py-1 rounded-full">
              Handled by Our Proffesionals
            </span>
            <span className="border-white border-2 rounded-full w-[200px] text-white text-base px-6 py-1">
              Fast Process
            </span>
          </div>
          <div className="absolute bottom-20 left-6 text-white text-4xl">Development for Sale</div>
          <button className="absolute bg-[#0F3C4C] bottom-6 left-6 text-white text-base font-bold rounded-2xl hover:bg-[#195e77] px-6 py-2">Buy Properties</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyGrid2;
