import React from 'react'
import Logo from '../assets/homepage/Logo.png'
import { HiMiniBars2 } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='w-full h-16 flex justify-between items-center px-5 lg:px-10 lg:h-20'>
            <div className='w-auto h-auto '>
                <img src={Logo} alt="Logo image" className='w-10 h-10' />
            </div>
            <div className='w-auto h-full hidden items-center md:flex gap-10 font-jakarta lg:gap-16'>
                <NavLink to="/" className={({ isActive }) => `${isActive ? 'border-b-2 border-[#0F3C4C] text-[#0F3C4C]' : 'text-[#6E6E6E]'} h-full flex justify-center items-center font-semibold`}>Home</NavLink>
                <NavLink to='/about' className={({ isActive }) => `${isActive ? 'border-b-2 border-[#0F3C4C] text-[#0F3C4C]' : 'text-[#6E6E6E]'} h-full flex justify-center items-center font-semibold`}>About Us</NavLink>
                <NavLink to='/properties' className={({ isActive }) => `${isActive ? 'border-b-2 border-[#0F3C4C] text-[#0F3C4C]' : 'text-[#6E6E6E]'} h-full flex justify-center items-center font-semibold`}>Our Properties</NavLink>
                <NavLink to='/blog' className={({ isActive }) => `${isActive ? 'border-b-2 border-[#0F3C4C] text-[#0F3C4C]' : 'text-[#6E6E6E]'} h-full flex justify-center items-center font-semibold`}>Blogs</NavLink>
                <NavLink to='/contact' className={({ isActive }) => `${isActive ? 'border-b-2 border-[#0F3C4C] text-[#0F3C4C]' : 'text-[#6E6E6E]'} h-full flex justify-center items-center font-semibold`}>Contact Us</NavLink>
            </div>
            <button className='hidden md:flex md:hover:bg-[#195e77] justify-center items-center w-auto rounded-2xl font-jakarta h-auto bg-[#0F3C4C] text-white py-2 lg:text-base lg:py-3 lg:px-6 text-sm px-4'>
                Get A Quote
            </button>
            <div className='w-auto h-auto flex justify-center items-center md:hidden'>
                <HiMiniBars2 size={30} />
            </div>
        </div>
    )
}

export default Header