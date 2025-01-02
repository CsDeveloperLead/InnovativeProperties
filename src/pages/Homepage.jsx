import React from "react";
import LandingPage from "../Components/HomepageComponents/LandingPage.jsx";
import PopularProperty from "../Components/PopularProperty.jsx";
import TestimonialCarousel from "../Components/TestimonialCarousel.jsx";
import Innovative from "../Components/Innovative.jsx";
import PropertyGrid2 from "../Components/PropertyGrid2.jsx";
import { Link } from "react-router-dom";
import img1 from "../assets/14.png";

function Homepage() {
  return (
    <div className="w-full h-auto flex flex-col">
      <LandingPage />
      <PopularProperty />
      <Innovative />
      <PropertyGrid2 /> 
      <div className="px-5 md:px-10 xl:px-20 mb-20 font-jakarta">
        <div className="w-full relative h-[450px] rounded-3xl p-2 md:px-0 text-center md:text-start"
        style={{backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
          <div className="absolute bg-white top-2 md:top-6 left-1/2 -translate-x-1/2 md:-translate-x-0 lg:-translate-x-6 h-auto w-[95%] md:w-[50%] rounded-3xl px-8 py-6 flex flex-col gap-6">
            <h1 className="text-3xl md:text-5xl text-[#0f3c4c] font-bold">Step Inside Without Leaving Your Seat</h1>
            <p className="text-sm">Explore your future home from the comfort of your current one. Our 360° virtual tours give you an immersive look into every detail of our premium properties, helping you envision life in your dream home.</p>
            <Link to="/properties" className="bg-[#0F3C4C] text-white rounded-xl w-full md:w-[180px] flex justify-center items-center py-2 hover:bg-[#195e77]">Buy Properties</Link>
          </div>
        </div>
      </div>

      <TestimonialCarousel />
    </div>
  );
}

export default Homepage;
