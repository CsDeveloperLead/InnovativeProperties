import React from "react";
import scale from "../assets/homepage/straighten.svg";
import { Link } from "react-router-dom";
const PropertyCard = ({ property }) => {
  return (
    <Link to={
      property.link?.includes("https://teja-build-tech.vercel.app/properties")
        ? property.link
        : `/single-property/${property.id}`
    } className="bg-white rounded-2xl shadow-lg border md:hover:shadow-2xl duration-500 border-[#ACACAC]  w-[320px] h-[545px] font-jakarta">
      {/* Image Section */}
      <div className="relative w-full  object-cover rounded-2xl  h-[350px] bg-gray-300">
        <img
          src={property.img}
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute top-2 left-2 bg-[#dadada]  text-sm px-6 py-1 border-2 border-white rounded-full shadow-md">
          <span className="text-white font-medium flex items-center gap-2 filter drop-shadow">
            <p className="text-[#bee1fa] text-xl">★</p> {property.rating}4.9
            rating
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Location */}
        <p className="text-gray-600 text-sm">{property.location}</p>

        {/* Property Title and Price */}
        <div className="flex justify-between items-center mt-2 text-[#0f3c4c]">
          <h3 className="font-semibold text-md">{property.config}</h3>
          <p className="text-md font-semibold ">{property.price}</p>
        </div>

        {/* Property Details */}
        <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
          {/* <p className="flex items-center">
            <span className="mr-1">🛏</span>{property.bedrooms} bedrooms
          </p> */}
          <p className="flex items-center">
            <span className="mr-1">
              <img src={scale} className="w-6" alt="" />
            </span>
            {property.area} area
          </p>
        </div>

        {/* Button */}
        <button className="w-full mt-6 bg-[#0f3c4c] text-white py-2.5 rounded-2xl shadow-md hover:bg-[#195e77] transition">
          Buy Properties
        </button>
      </div>
    </Link>
  );
};

export default PropertyCard;
