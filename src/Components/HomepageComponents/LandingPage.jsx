import React, { useState, useEffect } from 'react'
import Card from '../../assets/homepage/card1.webp'
import { CiLocationOn } from "react-icons/ci";
import { PiHouseLineThin } from "react-icons/pi";
import { PiCurrencyDollarThin } from "react-icons/pi";
import { PiBedLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import PropertyCard from '../PropertyCard';
import Property from '../../propertyData';

function LandingPage() {
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    budget: "",
    bedrooms: "",
  });

  const [filteredProperties, setFilteredProperties] = useState(Property.slice(29));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  const applyFilters = () => {
    const filtered = Property.slice(29).filter((property) => {
      const matchesLocation =
        !filters.location || property.location?.toLowerCase().includes(filters.location.toLowerCase());
      const matchesPropertyType =
        !filters.propertyType || property.type.toLowerCase() === filters.propertyType.toLowerCase();
      const matchesBudget =
        !filters.budget || (property.price && isBudgetInRange(property.price, filters.budget));
      // const matchesBedrooms =
      //   !filters.bedrooms || (property.config && property.config.includes(filters.bedrooms));

      return matchesLocation && matchesPropertyType && matchesBudget;
    });

    setFilteredProperties(filtered);
  };

  // Helper function to check budget range
  const isBudgetInRange = (priceString, budgetRange) => {
    // Parse the numeric values from the price and budget range
    const price = parseFloat(priceString.replace(/[^\d.]/g, ""));
    const [min, max] = budgetRange.split("-").map((val) => parseFloat(val.replace(/[^\d.]/g, "")));

    // Check if the price falls within the range
    return price >= min && price <= max;
  };

  return (
    <>
      <div className='w-full h-auto flex flex-col bg-custom-gradient'>
        <div className='w-full h-auto flex flex-col gap-6 px-5 my-4 md:flex-row-reverse md:px-10 md:my-8 xl:px-20'>
          <div className='w-full h-auto relative sm:w-[60%] sm:mx-auto md:w-[50%]'>
            <img src={Property[30].img} alt="img" className='w-full h-80 md:h-full rounded-3xl' />
            <div className='w-auto h-auto absolute top-4 lg:top-6 lg:px-7 flex gap-3 px-5 xl:gap-10'>
              <span className='rounded-xl p-1 px-2 text-sm bg-[#F8F9FA]'>{Property[30].title}</span>
              <span className='rounded-xl p-1 px-2 text-sm bg-[#F8F9FA]'>{Property[30].price}</span>
            </div>
            <img src={Card} alt="card" className='absolute h-20 w-20 bottom-0 -left-2 sm:-left-6 sm:bottom-6 md:h-28 md:w-28 md:-left-10 xl:w-36 xl:h-36 xl:-left-16' />
          </div>
          <div className='w-full h-auto flex flex-col gap-6 sm:w-[60%] sm:mx-auto font-jakarta lg:gap-8 md:w-[50%]'>
            <h1 className='font-semibold text-5xl lg:text-6xl xl:text-7xl'>Find Your <br /> Perfect Place <br /> With Us</h1>
            <p className='text-[#171717]'>Connecting You with the Best Properties for Sale</p>
            <div className='w-full h-auto flex'>
              <button className='flex justify-center md:hover:bg-[#195e77] items-center w-auto rounded-2xl h-auto bg-[#0F3C4C] text-white py-2 lg:text-base lg:py-3 lg:px-6 text-sm px-4'>
                Explore Now
              </button>
            </div>
            <div className='w-auto h-auto flex gap-24 xl:gap-28 lg:mt-10'>
              <div className='w-auto h-auto flex relative items-center'>
                <img src="" alt="" className='w-10 h-10 rounded-full bg-gray-500 lg:w-11 lg:h-11 xl:w-12 xl:h-12' />
                <img src="" alt="" className='w-10 h-10 rounded-full left-7 absolute bg-gray-500 lg:w-11 lg:h-11 xl:w-12 xl:h-12 xl:left-8' />
                <img src="" alt="" className='w-10 h-10 rounded-full absolute left-14 bg-gray-500 lg:w-11 lg:h-11 xl:w-12 xl:h-12 xl:left-[60px]' />
                <span className='w-10 h-10 rounded-full absolute left-[80px] bg-[#EEA69F] flex justify-center items-center lg:w-11 lg:h-11 xl:w-12 xl:h-12 xl:left-[90px]'>
                  4.1k
                </span>
              </div>
              <div className='w-auto h-auto flex flex-col font-satoshi xl:text-lg'>
                <span className='font-bold'>200+ Companies</span>
                <span className='text-sm'>trust our firm</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='w-[90%] h-auto p-4 rounded-2xl flex flex-col lg:py-8 bg-white my-7 gap-5 mx-auto font-jakarta lg:flex-row lg:gap-3 lg:justify-between'>
          <div className='w-full h-auto grid grid-cols-2 gap-5 place-content-between md:grid-cols-4 md:place-items-center lg:w-[80%]'>
            <div className='w-auto h-auto flex flex-col'>
              <label htmlFor="location" className='font-semibold'>Select Location</label>
              <div className='w-auto h-auto flex items-center py-2 gap-2'>
                <CiLocationOn size={20} />
                <div className=''>
                  <select name="options" id="location" className="outline-none text-gray-500">
                    <option value="" disabled selected>Choose</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='w-auto h-auto flex flex-col'>
              <label htmlFor="propertyType" className='font-semibold'>Select Property Type</label>
              <div className='w-auto h-auto flex items-center py-2 gap-2'>
                <PiHouseLineThin size={20} />
                <div className=''>
                  <select name="options" id="propertyType" className="outline-none text-gray-500">
                    <option value="" disabled selected>Choose</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='w-auto h-auto flex flex-col'>
              <label htmlFor="budget" className='font-semibold'>Set Budget</label>
              <div className='w-auto h-auto flex items-center py-2 gap-2'>
                <PiCurrencyDollarThin size={20} />
                <div className=''>
                  <select name="options" id="budget" className="outline-none text-gray-500">
                    <option value="" disabled selected>Set Range</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='w-auto h-auto flex flex-col'>
              <label htmlFor="bedrooms" className='font-semibold'>Config</label>
              <div className='w-auto h-auto flex items-center py-2 gap-2'>
                <PiBedLight size={20} />
                <div className=''>
                  <select name="options" id="bedrooms" className="outline-none text-gray-500">
                    <option value="" disabled selected>Choose</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-auto flex justify-center items-center lg:w-auto xl:pr-10'>
            <button className='px-10 py-2 text-white bg-[#0F3C4C] rounded-xl lg:py-3 md:hover:bg-[#195e77]'>Search Property</button>
          </div>
        </div> */}
        <div className="w-[90%] h-auto p-4 shadow-custom rounded-3xl flex flex-col lg:py-8 bg-white my-7 gap-5 mx-auto font-jakarta lg:flex-row lg:gap-3 lg:justify-between">
          <div className="w-full h-auto grid grid-cols-2 gap-5 place-content-between md:grid-cols-3 md:place-items-center lg:w-[80%]">
            {/* Location Filter */}
            <div className="w-auto h-auto flex flex-col">
              <label htmlFor="location" className="font-semibold">
                Select Location
              </label>
              <div className="w-auto h-auto flex items-center py-2 gap-2">
                <CiLocationOn size={20} />
                <div className="">
                  <select
                    id="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    className="outline-none text-gray-500"
                  >
                    <option value="" disabled>
                      Choose
                    </option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    {/* <option value="Noida">Noida</option>
                    <option value="Greater Noida">Gr. Noida</option> */}
                    <option value="Haridwar">Uttrakhand</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Confif Filter */}
            {/* <div className="w-auto h-auto flex flex-col">
              <label htmlFor="bedrooms" className="font-semibold">
                Config
              </label>
              <div className="w-auto h-auto flex items-center py-2 gap-2">
                <PiBedLight size={20} />
                <div className="">
                  <select
                    id="bedrooms"
                    value={filters.bedrooms}
                    onChange={handleFilterChange}
                    className="outline-none text-gray-500"
                  >
                    <option value="" disabled>
                      Choose
                    </option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                    <option value="4 BHK">4 BHK</option>
                  </select>
                </div>
              </div>
            </div> */}

            {/* Budget Filter */}
            <div className="w-auto h-auto flex flex-col">
              <label htmlFor="budget" className="font-semibold">
                Set Budget
              </label>
              <div className="w-auto h-auto flex items-center py-2 gap-2">
                <PiCurrencyDollarThin size={20} />
                <div className="">
                  <select
                    id="budget"
                    value={filters.budget}
                    onChange={handleFilterChange}
                    className="outline-none text-gray-500"
                  >
                    <option value="" disabled>
                      Set Range
                    </option>
                    {/* <option value="1k-5k">₹1k - 5k/sq.ft</option>
                    <option value="6k-10k">₹6k - 10k/sq.ft</option> */}
                    <option value="11k-15k">₹11k - 20k/sq.ft</option>
                    {/* <option value="16k-20k">₹16k - 20k/sq.ft</option> */}
                    <option value="21k-30k">₹21k - 30k/sq.ft</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Property Type Filter */}
            <div className="w-auto h-auto flex flex-col">
              <label htmlFor="propertyType" className="font-semibold">
                Select Property Type
              </label>
              <div className="w-auto h-auto flex items-center py-2 gap-2">
                <PiHouseLineThin size={20} />
                <div className="">
                  <select
                    id="propertyType"
                    value={filters.propertyType}
                    onChange={handleFilterChange}
                    className="outline-none text-gray-500"
                  >
                    <option value="" disabled>
                      Choose
                    </option>
                    <option value="Commercials">Commercials</option>
                    {/* <option value="Apartment">Apartment</option> */}
                    <option value="Plots">Plots</option>
                  </select>
                </div>
              </div>
            </div>

          </div>

          {/* Search Button */}
          <div className="w-full h-auto flex justify-center items-center lg:w-auto xl:pr-10">
            <button
              onClick={applyFilters}
              className="px-10 py-2 text-white bg-[#0F3C4C] rounded-xl lg:py-3 md:hover:bg-[#195e77]"
            >
              Search Property
            </button>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-10 xl:px-20 bg-[#FCFCFC">
        <div className="flex justify-between items-center mt-10 md:mt-24 mb-6 md:mb-14 font-jakarta">
          <h1 className="text-2xl md:text-4xl text-[#0f3c4c] font-bold">
            All Property
          </h1>
          <Link to="/properties" className="bg-[#0F3C4C] text-white rounded-full px-6 py-2 hover:bg-[#195e77] ">
            See more
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 place-items-center mb-20">
          {
            filteredProperties.length === 0
              ? (
                <div className="w-full h-auto flex justify-center items-center">
                  <h1 className="text-2xl font-semibold text-gray-500 text-center">No Properties Found</h1>
                </div>
              )
              : filteredProperties.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
        </div>
      </div>
    </>
  )
}

export default LandingPage