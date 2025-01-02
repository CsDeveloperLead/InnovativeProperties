import React from "react";
import propertyData from "../propertyData";
import { Link } from "react-router-dom";

const PropertyGrid = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 font-jakarta  ">
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 bg-[#c4c4c4] h-[500px] rounded-3xl relative md:hover:w-[90%] duration-500 ease-in-out transition-all" style={{
          backgroundImage: `url(${propertyData[0].img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <div className="absolute top-6 left-6 bg-[#dadada]  text-sm px-6 py-1.5 border-2 border-white rounded-2xl shadow-md">
            <span className="text-white font-medium flex items-center gap-2 filter drop-shadow">
              <p className="text-[#ffdb4b] text-xl">★</p>4.9 rating
            </span>
          </div>
          <div className="absolute bottom-2 md:bottom-4 bg-white/64 shadow-md shadow-black/10 backdrop-blur-[8.1px] border border-white/68 w-[95%] md:w-[90%] h-[200px] rounded-3xl p-4 flex flex-col justify-evenly left-1/2 -translate-x-1/2">
            <p className="text-white text-lg">{propertyData[0].title}</p>
            <span className="flex justify-between text-lg text-white mt-2">
              <h1>{propertyData[0].config}</h1>
              <h1 className="">{propertyData[0].price}</h1>
            </span>
            <Link to={`/single-property/${propertyData[0].id}`} className="w-full h-auto bg-white text-lg flex justify-center items-center font-bold text-black rounded-2xl px-6 py-2.5 mt-4">
              Buy Properties
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-[#c4c4c4] h-[500px] rounded-3xl relative md:hover:w-[90%] duration-500 ease-in-out transition-all" style={{ backgroundImage: `url(${propertyData[1].img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute top-6 left-6 bg-[#dadada]  text-sm px-6 py-1.5 border-2 border-white rounded-2xl shadow-md">
            <span className="text-white font-medium flex items-center gap-2 filter drop-shadow">
              <p className="text-[#ffdb4b] text-xl">★</p>4.9 rating
            </span>
          </div>
          <div className="absolute bottom-2 md:bottom-4 bg-white/64 shadow-md shadow-black/10 backdrop-blur-[8.1px] border border-white/68 w-[95%] md:w-[90%] h-[200px] rounded-3xl p-4 flex flex-col justify-evenly left-1/2 -translate-x-1/2">
            <p className="text-white text-lg">{propertyData[1].title}</p>
            <span className="flex justify-between text-lg text-white mt-2">
              <h1>{propertyData[1].config}</h1>
              <h1 className="">{propertyData[1].price}</h1>
            </span>
            <Link to={`/single-property/${propertyData[1].id}`} className="w-full h-auto flex justify-center items-center bg-white text-lg font-bold text-black rounded-2xl px-6 py-2.5 mt-4">
              Buy Properties
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-[#c4c4c4] h-[500px] rounded-3xl relative md:hover:w-[90%] duration-500 ease-in-out transition-all" style={{ backgroundImage: `url(${propertyData[2].img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute top-6 left-6 bg-[#dadada]  text-sm px-6 py-1.5 border-2 border-white rounded-2xl shadow-md">
            <span className="text-white font-medium flex items-center gap-2 filter drop-shadow">
              <p className="text-[#ffdb4b] text-xl">★</p>4.9 rating
            </span>
          </div>
          <div className="absolute bottom-2 md:bottom-4 bg-white/64 shadow-md shadow-black/10 backdrop-blur-[8.1px] border border-white/68 w-[95%] md:w-[90%] h-[200px] rounded-3xl p-4 flex flex-col justify-evenly left-1/2 -translate-x-1/2">
            <p className="text-white text-lg">{propertyData[2].title}</p>
            <span className="flex justify-between text-lg text-white mt-2">
              <h1>{propertyData[2].config}</h1>
              <h1 className="">{propertyData[2].price}</h1>
            </span>
            <Link to={`/single-property/${propertyData[2].id}`} className="w-full h-auto bg-white flex justify-center items-center text-lg font-bold text-black rounded-2xl px-6 py-2.5 mt-4">
              Buy Properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyGrid;
