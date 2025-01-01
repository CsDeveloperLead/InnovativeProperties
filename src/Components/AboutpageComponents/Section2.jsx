import React from 'react'
import Text from '../../assets/contact/1.png'
import Icon from '../../assets/contact/2.png'

function Section2() {
    return (
        <div className='w-[90%] mx-auto h-auto flex flex-col p-3 my-5 rounded-2xl shadow-custom3 md:my-10 gap-3 sm:flex-row sm:gap-5 lg:p-8'>
            <div className='w-full h-60 relative md:h-auto'>
                <img src="" alt="" className='bg-gray-600 w-full h-full rounded-xl lg:w-[90%]' />
                <span className='w-28 h-28 hidden lg:flex bg-white rounded-full border border-black absolute  justify-center items-center top-20 right-0 p-2 2xl:top-24'>
                    <img src={Text} alt="text image" className='w-full h-auto object-cover' />
                    <img src={Icon} alt="Icon image" className='w-8 h-8 object-cover absolute' />
                </span>
            </div>
            <div className='w-full h-auto flex flex-col py-3 font-jakarta sm:py-5 lg:px-10 xl:pr-20'>
                <h1 className='text-2xl font-semibold text-[#171717] md:text-4xl 2xl:text-5xl'>Looking for Your Next Home? We Can Help!</h1>
                <p className='text-sm my-6 lg:my-8 text-[#171717] 2xl:text-base'>Browse our latest listings and find the perfect property that fits your needs.</p>
                <div className='w-full h-auto '>
                    <button className='py-3 px-6 bg-[#171717] text-white rounded-3xl md:hover:bg-[#040404b7]'>
                        View Listing
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section2