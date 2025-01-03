import React, { useState, useEffect } from "react";
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
    <div className="px-5 md:px-10 xl:px-20 mb-40">
      {/* section1 */}
      {/* <div className="w-full h-[450px] bg-gray-400 rounded-3xl my-10"></div> */}
      <div className="mt-6">
        <AutoSlidingCarousel />
      </div>

      {/* section2 */}
      <div className="w-full h-auto p-4 shadow-custom rounded-3xl flex flex-col lg:py-8 bg-white my-7 gap-5 mx-auto font-jakarta lg:flex-row lg:gap-3 lg:justify-between">
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

          {/* Config Filter */}
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

      {/* section3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 place-items-center mt-20">
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
  );
};

export default Properties;
