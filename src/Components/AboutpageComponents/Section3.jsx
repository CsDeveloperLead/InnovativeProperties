import React from 'react'
import { IoStar } from "react-icons/io5";

function Section3() {

    const agents = [
        {
            name: "John Doe",
            image: "",
            propertiesHandled: 100,
            rating: 4.5
        },
        {
            name: "John Doe",
            image: "",
            propertiesHandled: 100,
            rating: 4.5
        },
        {
            name: "John Doe",
            image: "",
            propertiesHandled: 100,
            rating: 4.5
        },
        {
            name: "John Doe",
            image: "",
            propertiesHandled: 100,
            rating: 4.5
        }
    ]

    return (
        <div className='w-full h-auto flex flex-col my-5 md:my-10 lg:mb-14 font-jakarta gap-6 lg:gap-8  px-5 md:px-10 lg:px-20'>
            <h1 className='text-[#171717] text-2xl font-semibold md:text-4xl xl:text-5xl'>
                Our Experienced Agents
            </h1>
            <div className='w-full h-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                {
                    agents.map((agent, index) => (
                        <div
                            key={index}
                            className='w-full h-auto flex flex-col gap-4 p-3 border shadow-lg rounded-xl md:hover:shadow-2xl duration-500 ease-in-out'
                        >
                            <img src={agent.image} alt="" className='w-full h-80 rounded-xl bg-gray-500' />
                            <div className='w-full h-auto flex flex-col gap-1'>
                                <h1 className='text-[#171717] text-lg font-semibold md:text-xl xl:text-2xl'>{agent.name}</h1>
                                <p className='text-sm text-[#595959] lg:text-base'>{agent.propertiesHandled} Properties Handled</p>
                                <p className='text-sm text-[#595959] lg:text-base flex items-center gap-2'><IoStar size={20} className='text-yellow-500' /> {agent.rating}/5</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Section3