import React from 'react'

function Section1() {
  return (
    <div className='w-full h-auto flex flex-col my-5 gap-4 md:flex-row md:justify-between md:gap-20 md:my-10  px-5 md:px-10 lg:px-20'>
        <div className='w-full h-72 sm:w-[70%] sm:mx-auto md:h-auto lg:w-[90%]'>
            <img src="" alt="" className='bg-gray-600 w-full h-full rounded-xl' />
        </div>
        <div className='w-full h-auto flex flex-col font-jakarta sm:w-[70%] sm:mx-auto lg:py-8'>
            <h1 className='font-semibold text-3xl text-[#0F3C4C] lg:text-4xl 2xl:text-5xl'>We Make Real Estate Simple and Effective</h1>
            <p className='text-sm text-[#595959] my-8 lg:my-12 xl:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deleniti ipsam cupiditate fugit magni dolores delectus possimus debitis ipsa, voluptate distinctio reprehenderit quaerat sed sunt vel deserunt? Laudantium, ea quae aspernatur doloribus nostrum ut quam repudiandae iure. Culpa a alias quod nulla. Ipsa error in est repudiandae, expedita omnis inventore.</p>
            <div className='w-full h-auto '>
                <button className='py-3 px-6 bg-[#171717] text-white rounded-3xl md:hover:bg-[#040404b7]'>
                    Learn More
                </button>
            </div>
        </div>
    </div>
  )
}

export default Section1