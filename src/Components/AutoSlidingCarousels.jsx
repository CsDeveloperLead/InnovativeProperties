import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import propertyData from "../propertyData";

const AutoSlidingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const slideWidth = 100 / propertyData.slice(29).length; // Calculate the width of one slide as a percentage

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % propertyData.slice(29).length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  // Dragging handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    stopAutoSlide();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const difference = e.clientX - startX;
    if (difference > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? propertyData.slice(29).length - 1 : prevIndex - 1
      );
      setIsDragging(false);
    } else if (difference < -50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % propertyData.slice(29).length);
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    startAutoSlide();
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    stopAutoSlide();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const difference = e.touches[0].clientX - startX;
    if (difference > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? propertyData.slice(29).length - 1 : prevIndex - 1
      );
      setIsDragging(false);
    } else if (difference < -50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % propertyData.slice(29).length);
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    startAutoSlide();
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeaveCapture={() => setIsDragging(false)} // Handle edge case for dragging out
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-in-out rounded-3xl"
        style={{
          transform: `translateX(-${currentIndex * slideWidth}%)`,
          width: `${propertyData.slice(29).length * 100}%`,
        }}
      >
        {propertyData.slice(29).map((property, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 rounded-3xl"
            style={{ width: `${slideWidth}%` }}
          >
            <span className="rounded-3xl w-full h-[300px] md:h-[290px] mt-2 md:mt-6 mb-10 relative">
              <div
                className="bg-gray-300 container min-w-full rounded-[30px] h-[500px] md:h-[350px] mb-10 p-4 "
                style={{
                  backgroundImage: `url(${property.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center bottom",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex items-end md:justify-between h-full">
                  <div className="bg-[#292929] bg-opacity-95 w-full md:w-[65%] h-[60%] md:h-auto  rounded-3xl p-8  flex  md:justify-between md:items-end    ">
                    <div className="w-full flex flex-col items-center md:items-start justify-center md:justify-start gap-2 md:gap-0  ">
                      <h1
                        className="text-[#0f3c4c]  text-xl lg:text-3xl font-bold text-center md:text-start"
                        style={{
                          WebkitTextStroke: "1px white", 
                          color: "#0f3c4c", 
                        }}
                      >
                        {property.title}
                      </h1>
                      <p className="text-white text-base lg:text-2xl font-bold text-center md:text-start my-1">
                        {property.location}
                      </p>
                      <div className=" space-y-2 md:space-y-2">
                        <p className="text-white text-base lg:text-xl font-bold text-center md:text-start">
                          {property.price}
                        </p>
                        <p className="text-white text-base lg:text-xl font-bold text-center md:text-start">
                          {property.area}
                        </p>
                        {/* <p className="text-white text-base lg:text-xl font-bold text-center md:text-start">
                          {property.config}
                        </p> */}
                        <div className="w-full">
                          <Link
                            to={property.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-6 md:hidden relative group rounded-full"
                          >
                            <button className="bg-[#0f3c4c] w-full relative border border-white z-10 text-sm md:text-base py-1 md:py-2 rounded-3xl px-4 md:px-8 text-white font-bold flex justify-center items-center">
                              Get Quote
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="w-[190px] hidden md:block">
                      <Link
                        to={property.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block relative group rounded-full"
                      >
                        <button className="bg-[#0f3c4c] w-[180px] relative z-10 text-sm md:text-base py-1 md:py-2 rounded-3xl px-4 md:px-8 border border-white text-white font-bold flex justify-center items-center md:hover:bg-[#2f7892] duration-300 ease-in-out">
                          Get Quote
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlidingCarousel;
