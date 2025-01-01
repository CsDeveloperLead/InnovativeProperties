import React from "react";
import PropertyGrid from "./PropertyGrid";

const PopularProperty = () => {
  return (
    <div className="px-5 md:px-10 xl:px-20 flex flex-col">
      <div className="flex justify-between items-center font-jakarta"> 
        <h1 className="text-xl w-1/2 md:w-full md:text-4xl text-[#0f3c4c] font-bold">
          Popular Property Near You
        </h1>
        <button className="bg-[#0F3C4C] text-white text-sm rounded-full  px-6 py-2 hover:bg-[#195e77] ">
          See more
        </button>
      </div>
      <div className="w-full my-20">
        <PropertyGrid />
      </div>
    </div>
  );
};

export default PopularProperty;