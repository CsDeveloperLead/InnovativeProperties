import React from 'react'
import Section1 from '../Components/AboutpageComponents/Section1'
import Section2 from '../Components/AboutpageComponents/Section2'
import Section3 from '../Components/AboutpageComponents/Section3'
import TestimonialCarousel from '../Components/TestimonialCarousel'

function About() {
    return (
        <div className='w-full h-auto flex flex-col'>
            <Section1 />
            <Section2 />
            <Section3 />
            <TestimonialCarousel />
        </div>
    )
}

export default About