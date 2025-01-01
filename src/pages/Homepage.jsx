import React from "react";
import LandingPage from "../Components/HomepageComponents/LandingPage.jsx";
import PropertyCard from "../Components/PropertyCard.jsx";
import PopularProperty from "../Components/PopularProperty.jsx";
import Property from "../propertyData.js";
import TestimonialCarousel from "../Components/TestimonialCarousel.jsx";
import Innovative from "../Components/Innovative.jsx";
import PropertyGrid2 from "../Components/PropertyGrid2.jsx";

function Homepage() {
  return (
    <div className="w-full h-auto flex flex-col">
      <LandingPage />
      <div className="px-5 md:px-10 xl:px-20 bg-[#FCFCFC">
        <div className="flex justify-between items-center mt-10 md:mt-24 mb-6 md:mb-14 font-jakarta">
          <h1 className="text-2xl md:text-4xl text-[#0f3c4c] font-bold">
            All Property
          </h1>
          <button className="bg-[#0F3C4C] text-white rounded-full px-6 py-2 hover:bg-[#195e77] ">
            See more
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 place-items-center mb-20">
          {Property.slice(0, 4).map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
      <PopularProperty />
      <Innovative />
      <PropertyGrid2 />
      <div className="px-5 md:px-10 xl:px-20 mb-20 font-jakarta">
        <div className="w-full relative bg-[#c4c4c4] h-[450px] rounded-3xl p-2 md:px-0 text-center md:text-start">
          <div className="absolute bg-white top-2 md:top-6 left-1/2 -translate-x-1/2 md:-translate-x-0 lg:-translate-x-6 h-auto w-[95%] md:w-[50%] rounded-3xl px-8 py-6 flex flex-col gap-6">
            <h1 className="text-3xl md:text-5xl text-[#0f3c4c] font-bold">Step Inside Without Leaving Your Seat</h1>
            <p className="text-sm">Explore your future home from the comfort of your current one. Our 360° virtual tours give you an immersive look into every detail of our premium properties, helping you envision life in your dream home.</p>
            <button className="bg-[#0F3C4C] text-white rounded-xl w-full md:w-[180px] py-2 hover:bg-[#195e77]">Buy Properties</button>
          </div>
        </div>

      </div>

      <TestimonialCarousel />
    </div>
  );
}

export default Homepage;
