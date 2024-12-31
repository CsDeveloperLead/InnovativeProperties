import React from 'react'
import Card from '../../assets/homepage/card1.png'
import { CiLocationOn } from "react-icons/ci";
import { PiHouseLineThin } from "react-icons/pi";
import { PiCurrencyDollarThin } from "react-icons/pi";
import { PiBedLight } from "react-icons/pi";

function LandingPage() {
  return (
    <div className='w-full h-auto flex flex-col bg-custom-gradient'>
      <div className='w-full h-auto flex flex-col gap-6 px-5 my-4 md:flex-row-reverse md:px-10 md:my-8 xl:px-20'>
        <div className='w-full h-auto relative sm:w-[60%] sm:mx-auto md:w-[50%]'>
          <img src="" alt="" className='w-full h-80 md:h-full bg-gray-200 rounded-3xl' />
          <div className='w-auto h-auto absolute top-4 lg:top-6 lg:px-7 flex gap-3 px-5 xl:gap-16'>
            <span className='rounded-xl p-1 px-2 text-sm bg-[#F8F9FA]'>Punjabi Bagh</span>
            <span className='rounded-xl p-1 px-2 text-sm bg-[#F8F9FA]'>Punjabi Bagh</span>
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
      <div className='w-[90%] h-auto p-4 rounded-2xl flex flex-col lg:py-8 bg-white my-7 gap-5 mx-auto font-jakarta lg:flex-row lg:gap-3 lg:justify-between'>
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
            <label htmlFor="bedrooms" className='font-semibold'>Bedroom(s)</label>
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
      </div>
    </div>
  )
}

export default LandingPage