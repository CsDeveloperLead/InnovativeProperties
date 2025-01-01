import React from 'react'
import LandingPage from '../Components/HomepageComponents/LandingPage.jsx'
import PropertyCard from '../Components/PropertyCard.jsx'
import PopularProperty from '../Components/PopularProperty.jsx'
import  Property  from '../propertyData.js'
import TestimonialCarousel from '../Components/TestimonialCarousel.jsx'

function Homepage() {
  return (
    <div className='w-full h-auto flex flex-col'>
        <LandingPage />
        <div className="px-5 md:px-10 xl:px-20 bg-[#FCFCFC">
        <div className="flex justify-between items-center mt-10 md:mt-24 mb-6 md:mb-14 font-jakarta">
          <h1 className="text-2xl md:text-4xl text-[#0f3c4c] font-bold">All Property</h1>
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
      <TestimonialCarousel />
    </div>
  )
}

export default Homepage