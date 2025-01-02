import React from "react";
import { Link } from "react-router-dom";
import bgimg1 from "../assets/1.webp";
import bgimg2 from "../assets/2.webp";
import bgimg3 from "../assets/3.webp";
import bgimg4 from "../assets/4.webp";

const PropertyGrid2 = () => {

  return (
    <div className="px-5 md:px-10 xl:px-20 my-20 flex flex-col gap-4 font-jakarta">
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-[60%] h-[320px]  rounded-3xl relative"  style={{backgroundImage: `url(${bgimg1})`, backgroundSize: "cover", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat"}}>
          <div className="absolute top-6 text-shadow left-6 md:space-x-6 flex flex-col md:flex-row gap-2">
            <span className="border-white border-2 text-white px-6 py-1 rounded-full">
              Handled by Our Proffesionals
            </span>
            <span className="border-white border-2 rounded-full w-[150px] text-white text-base px-6 py-1">
              Fast Process
            </span>
          </div>
          <div className="absolute bottom-20 left-6 text-white text-4xl text-shadow">Property for Sale</div>
          <button className="absolute bg-[#0F3C4C] drop-shadow-md bottom-6 left-6 text-white text-base font-bold rounded-xl hover:bg-[#195e77] px-6 py-2">Buy Properties</button>
        </div>
        <div className="w-full md:w-[40%] h-[320px]  rounded-3xl relative "  style={{backgroundImage: `url(${bgimg2})`, backgroundSize: "cover", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat"}}>
          <div className="absolute top-6 text-shadow left-6 md:space-x-6 flex flex-col md:flex-row gap-2">
            <span className="border-white border-2 text-white px-6 py-1 rounded-full">
              Handled by Our Proffesionals
            </span>
            <span className="border-white border-2 rounded-full w-[150px] text-white text-base px-6 py-1">
              Fast Process
            </span>
          </div>
          <div className="absolute bottom-20 left-6 text-white text-4xl text-shadow">Property for Rent</div>
          <button className="absolute bg-[#0F3C4C] drop-shadow-md bottom-6 left-6 text-white text-base font-bold rounded-xl hover:bg-[#195e77] px-6 py-2">Buy Properties</button>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-[40%] h-[320px]  rounded-3xl relative"  style={{backgroundImage: `url(${bgimg3})`, backgroundSize: "cover", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat"}}>
          {" "}
          <div className="absolute top-6 text-shadow left-6 md:space-x-6 flex flex-col md:flex-row gap-2">
            <span className="border-white border-2 text-white px-6 py-1 rounded-full">
              Handled by Our Proffesionals
            </span>
            <span className="border-white border-2 rounded-full w-[150px] text-white text-base px-6 py-1">
              Fast Process
            </span>
          </div>
          <div className="absolute bottom-20 left-6 text-white text-4xl text-shadow">Sell Your Property</div>
          <button className="absolute bg-[#0F3C4C] drop-shadow-md bottom-6 left-6 text-white text-base font-bold rounded-xl hover:bg-[#195e77] px-6 py-2">Buy Properties</button>
        </div>
        <div className="w-full md:w-[60%] h-[320px] rounded-3xl relative"  style={{backgroundImage: `url(${bgimg4})`, backgroundSize: "cover", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat"}}>
          {" "}
          <div className="absolute top-6 text-shadow left-6 md:space-x-6 flex flex-col md:flex-row gap-2">
            <span className="border-white border-2 text-white px-6 py-1 rounded-full">
              Handled by Our Proffesionals
            </span>
            <span className="border-white border-2 rounded-full w-[150px] text-white text-base px-6 py-1">
              Fast Process
            </span>
          </div>
          <div className="absolute bottom-20 left-6 text-white text-4xl text-shadow">Development for Sale</div>
          <button className="absolute bg-[#0F3C4C] drop-shadow-md bottom-6 left-6 text-white text-base font-bold rounded-xl hover:bg-[#195e77] px-6 py-2">Buy Properties</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyGrid2;
