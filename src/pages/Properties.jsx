import React,{useEffect} from "react";
import {
  PiBedLight,
  PiHouseLineThin,
  PiCurrencyDollarThin,
} from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import PropertyCard from "../Components/PropertyCard";
import Property from "../propertyData";
import AutoSlidingCarousel from "../Components/AutoSlidingCarousels.jsx";

const Properties = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-5 md:px-10 xl:px-20">
      {/* section1 */}
      {/* <div className="w-full h-[450px] bg-gray-400 rounded-3xl my-10"></div> */}
      <div className="mt-6">
        <AutoSlidingCarousel />
      </div>

      {/* section2 */}

      <div className="w-full h-auto p-4 shadow-custom rounded-3xl flex flex-col lg:py-8 bg-white my-7 gap-5 mx-auto font-jakarta lg:flex-row lg:gap-3 lg:justify-between">
        <div className="w-full h-auto grid grid-cols-2 gap-5 place-content-between md:grid-cols-4 md:place-items-center lg:w-[80%]">
          <div className="w-auto h-auto flex flex-col">
            <label htmlFor="location" className="font-semibold">
              Select Location
            </label>
            <div className="w-auto h-auto flex items-center py-2 gap-2">
              <CiLocationOn size={20} />
              <div className="">
                <select
                  name="options"
                  id="location"
                  className="outline-none text-gray-500"
                >
                  <option value="" disabled selected>
                    Choose
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto flex flex-col">
            <label htmlFor="propertyType" className="font-semibold">
              Select Property Type
            </label>
            <div className="w-auto h-auto flex items-center py-2 gap-2">
              <PiHouseLineThin size={20} />
              <div className="">
                <select
                  name="options"
                  id="propertyType"
                  className="outline-none text-gray-500"
                >
                  <option value="" disabled selected>
                    Choose
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto flex flex-col">
            <label htmlFor="budget" className="font-semibold">
              Set Budget
            </label>
            <div className="w-auto h-auto flex items-center py-2 gap-2">
              <PiCurrencyDollarThin size={20} />
              <div className="">
                <select
                  name="options"
                  id="budget"
                  className="outline-none text-gray-500"
                >
                  <option value="" disabled selected>
                    Set Range
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto flex flex-col">
            <label htmlFor="bedrooms" className="font-semibold">
              Bedroom(s)
            </label>
            <div className="w-auto h-auto flex items-center py-2 gap-2">
              <PiBedLight size={20} />
              <div className="">
                <select
                  name="options"
                  id="bedrooms"
                  className="outline-none text-gray-500"
                >
                  <option value="" disabled selected>
                    Choose
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center lg:w-auto xl:pr-10">
          <button className="px-10 py-2 text-white bg-[#0F3C4C] rounded-xl lg:py-3 md:hover:bg-[#195e77]">
            Search Property
          </button>
        </div>
      </div>

      {/* section3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 place-items-center my-20">
        {Property.slice(0, 29).map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
