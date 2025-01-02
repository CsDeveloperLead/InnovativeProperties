import React from 'react'
import Logo from '../assets/homepage/logo1.webp'


function Footer() {
    return (
        <div className='w-full h-auto flex flex-col relative justify-center font-jakarta items-center bg-[#0F3C4C] mt-40'>
            <div className='absolute w-[90%] mx-auto h-auto flex flex-col -top-20 rounded-3xl bg-[#626262] p-3 gap-6 sm:p-6 md:w-[85%] lg:w-[70%] lg:p-10 lg:gap-8'>
                <h1 className='text-xl font-semibold text-white md:text-2xl lg:text-4xl'>Ready to Find Your Perfect Home?</h1>
                <p className='text-sm text-[#F5F5F5] md:text-base lg:pr-40'>Our experts are here to help you every step of the way. Let’s make finding your dream property easy and enjoyable.</p>
                <div className='w-full h-auto'>
                    <button className='py-2 px-6 bg-black lg:text-lg lg:py-3 md:hover:bg-slate-900 text-sm text-white rounded-lg'>Book a Call</button>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col mt-40 px-5 md:px-10 lg:px-20 gap-5 sm:flex-row lg:mt-60 xl:justify-between'>
                <div className='w-full h-auto flex justify-between sm:justify-center sm:gap-8 lg:justify-around xl:w-[50%]'>
                    <div className='w-auto h-auto flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold text-white md:text-3xl lg:text-4xl'>Company</h1>
                        <div className='w-q h-auto flex flex-col text-gray-300 gap-1'>
                            <span>Link One</span>
                            <span>Link One</span>
                            <span>Link One</span>
                            <span>Link One</span>
                            <span>Link One</span>
                        </div>
                    </div>
                    <div className='w-auto h-auto flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold text-white md:text-3xl lg:text-4xl'>Services</h1>
                        <div className='w-full h-auto flex flex-col text-gray-300 gap-1'>
                            <span>Link One</span>
                            <span>Link One</span>
                            <span>Link One</span>
                            <span>Link One</span>
                            <span>Link One</span>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-4 xl:w-[40%]'>
                    <img src={Logo} alt="Logo" className='w-10 h-10'/>
                    <p className='text-sm text-white'>Join our newsletter to stay up to date on features and releases.</p>
                    <div className='w-full h-auto flex gap-4 items-center'>
                        <input type="email" placeholder='Enter your email' className='w-full h-10 px-3 rounded-lg bg-white text-gray-800'/>
                        <button className='py-2 px-6 border-2 border-white text-white rounded-lg'>Subscribe</button>
                    </div>
                    <p className='text-sm text-white'>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col items-center text-white my-6 px-5 md:px-10 lg:px-20 gap-6 lg:my-10 md:mt-10 lg:mt-16 xl:mt-20 xl:flex-row xl:justify-between'>
                <span className='text-sm text-center'>© 2022 – 2025 | Innovative Properties, made with 💖 by Truwix, all rights reserved</span>
                <div className='w-full h-auto flex flex-wrap justify-center gap-4 text-white xl:w-auto xl:gap-10'>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Cookies Setting</span>
                </div>
            </div>
        </div>
    )
}

export default Footer