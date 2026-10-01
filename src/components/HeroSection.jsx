import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import banner1 from "../assets/banner/1.png";
import banner2 from "../assets/banner/2.png";
import banner3 from "../assets/banner/3.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: banner1,
    },
    {
      image: banner2,
    },
    {
      image: banner3,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden mt-5 lg:px-0 px-5">

      <div className="relative container mx-auto h-[300px] sm:h-[500px] lg:h-[700px] rounded-[60px] overflow-hidden">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`
              absolute inset-0
              transition-opacity
              duration-1000
              ease-in-out
              ${
                currentSlide === index
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }
            `}
          >

            <img
              src={slide.image}
              alt={slide.title}
              className={`
                absolute inset-0
                w-full h-full
                object-center
                
                transition-transform
                duration-[5000ms]
              `}
            />

            <div className="absolute inset-0 bg-black/35" />


            <div className="relative z-20 h-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-5 flex items-center">

           
            </div>

          </div>
        ))}

        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="
            absolute
            left-4
            sm:left-7
            lg:left-10
            top-1/2
            -translate-y-1/2
            z-30
            w-11
            h-11
            sm:w-14
            sm:h-14
            rounded-full
            border
            border-white/60
            bg-black/20
            backdrop-blur-sm
            text-white
            flex
            items-center
            justify-center
            hover:bg-white
            hover:text-black
            transition-all
            duration-300 cursor-pointer
          "
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            absolute
            right-4
            sm:right-7
            lg:right-10
            top-1/2
            -translate-y-1/2
            z-30
            w-11
            h-11
            sm:w-14
            sm:h-14
            rounded-full
            border
            border-white/60
            bg-black/20
            backdrop-blur-sm
            text-white
            flex
            items-center
            justify-center
            hover:bg-white
            hover:text-black
            transition-all
            duration-300 cursor-pointer
          "
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">

          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-[3px]
                transition-all
                duration-500
                ${
                  currentSlide === index
                    ? "w-12 bg-white"
                    : "w-6 bg-white/50"
                }
              `}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default HeroSection;