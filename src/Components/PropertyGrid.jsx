import React from "react";

const PropertyGrid = () => {
  return (
    <div className="flex gap-4 font-jakarta  ">
      {/* first big card */}
      <div className="w-1/2 rounded-3xl bg-[#c4c4c4] h-[500px] relative ">
        <div className="absolute top-6 left-6 bg-[#dadada]  text-sm px-6 py-1.5 border-2 border-white rounded-2xl shadow-md">
          <span className="text-white font-medium flex items-center gap-2 filter drop-shadow">
            <p className="text-[#ffdb4b] text-xl">★</p>4.9 rating
          </span>
        </div>
        <div className="absolute bottom-4 left-6 bg-[#d9d9d9] w-[80%] h-[180px] rounded-3xl p-6 flex flex-col justify-evenly">
          <p className="text-white text-lg">Punjabi Bagh, New Delhi</p>
          <span className="flex justify-between text-2xl text-white mt-2">
            <h1>2BHK House </h1>
            <h1 className="">₹2.5Cr per person</h1>
          </span>
          <button className="w-full h-auto bg-white text-lg font-bold text-black rounded-2xl px-6 py-2.5 mt-4">
            Buy Properties
          </button>
        </div>
      </div>

      {/* second two cards */}
      <div className="w-1/2 flex gap-4">
        <div className="w-1/2 bg-[#c4c4c4] h-[500px] rounded-3xl relative">
          <div className="absolute top-6 left-6 bg-[#dadada]  text-sm px-6 py-1.5 border-2 border-white rounded-2xl shadow-md">
            <span className="text-white font-medium flex items-center gap-2 filter drop-shadow">
              <p className="text-[#ffdb4b] text-xl">★</p>4.9 rating
            </span>
          </div>
          <div className="absolute bottom-4  bg-[#d9d9d9] w-[90%] h-[200px] rounded-3xl p-4 flex flex-col justify-evenly left-1/2 -translate-x-1/2">
            <p className="text-white text-lg">Punjabi Bagh, New Delhi</p>
            <span className="flex justify-between text-lg text-white mt-2">
              <h1>2BHK House </h1>
              <h1 className="">₹400</h1>
            </span>
            <button className="w-full h-auto bg-white text-lg font-bold text-black rounded-2xl px-6 py-2.5 mt-4">
              Buy Properties
            </button>
          </div>
        </div>
        <div className="w-1/2 bg-[#c4c4c4] h-[500px] rounded-3xl relative">
          <div className="absolute top-6 left-6 bg-[#dadada]  text-sm px-6 py-1.5 border-2 border-white rounded-2xl shadow-md">
            <span className="text-white font-medium flex items-center gap-2 filter drop-shadow">
              <p className="text-[#ffdb4b] text-xl">★</p>4.9 rating
            </span>
          </div>
          <div className="absolute bottom-4  bg-[#d9d9d9] w-[90%] h-[200px] rounded-3xl p-4 flex flex-col justify-evenly left-1/2 -translate-x-1/2">
            <p className="text-white text-lg">Punjabi Bagh, New Delhi</p>
            <span className="flex justify-between text-lg text-white mt-2">
              <h1>2BHK House </h1>
              <h1 className="">₹400</h1>
            </span>
            <button className="w-full h-auto bg-white text-lg font-bold text-black rounded-2xl px-6 py-2.5 mt-4">
              Buy Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyGrid;
