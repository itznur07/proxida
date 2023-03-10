import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  /** Slider settings */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const imgSrc = [
    "/images/slider-1.jpg",
    "/images/slider-2.jpg",
    "/images/slider-3.jpg",
  ];

  return (
    <>
      <Slider {...settings}>
        <div className='relative' style={{ height: "500px" }}>
          <img
            src={imgSrc[0]}
            alt='Banner 1'
            className='w-full h-full object-cover '
          />
          {/* text slide */}
          <motion.div
            animate={{ x: 100 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className='absolute top-32 left-36'
          >
            <div className='md:space-y-3 flex flex-col'>
              <span className='text-2xl font-medium'>
                Spring - Summer - 2023
              </span>{" "}
              <span className='text-5xl uppercase font-bold'>
                Flash Sales 70% off
              </span>{" "}
              <span className='text-md text-gray-400 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Amet numquam nam, ut ab excepturi aspernatur!
              </span>
            </div>
            <div>
              <button className='mt-4 uppercase border border-gray-900 px-5 py-2 font-medium rounded-full text-gray-900 group flex items-center '>
                Shop now{" "}
                <span className='transition-all duration-500 delay-150 hidden group-hover:block text-xl text-gray-800'>
                  &#x2192;
                </span>
              </button>
            </div>
          </motion.div>
        </div>
        <div className='relative' style={{ height: "500px" }}>
          <img
            src={imgSrc[1]}
            alt='Banner 2'
            className='w-full h-full object-cover '
          />
          <motion.div
            animate={{ y2: 100 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className='absolute top-32 left-1/3 ml-14 text-center'
          >
            <div className='md:space-y-3 flex flex-col'>
              <span className='text-2xl font-medium'>
                Spring - Summer - 2023
              </span>{" "}
              <span className='text-3xl uppercase font-bold'>
                Flash Sales 70% off
              </span>{" "}
              <span className='text-md text-gray-400 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Amet numquam nam, ut ab excepturi aspernatur!
              </span>
            </div>
            <div className='flex justify-center'>
              <button className='mt-4 uppercase border border-gray-900 px-5 py-2 font-medium rounded-full text-gray-900 group flex items-center'>
                Shop now{" "}
                <span className='transition-all duration-500 delay-150 hidden group-hover:block text-xl text-gray-800'>
                  &#x2192;
                </span>
              </button>
            </div>
          </motion.div>
        </div>
        <div className='relative' style={{ height: "500px" }}>
          <img
            src={imgSrc[2]}
            alt='Banner 3'
            className='w-full h-full object-cover'
          />
          <motion.div
            animate={{ x2: 100 }}
            transition={{ ease: "easeOut", duration: 1, loop: Infinity  }}
            className='absolute top-32 right-36'
          >
            <div className='md:space-y-3 flex flex-col'>
              <span className='text-2xl font-medium'>
                Spring - Summer - 2023
              </span>{" "}
              <span className='text-5xl uppercase font-bold'>
                Flash Sales 70% off
              </span>{" "}
              <span className='text-md text-gray-400 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Amet numquam nam, ut ab excepturi aspernatur!
              </span>
            </div>
            <div>
              <button className='mt-4 uppercase border border-gray-900 px-5 py-2 font-medium rounded-full text-gray-900 group flex items-center '>
                Shop now{" "}
                <span className='transition-all duration-500 delay-150 hidden group-hover:block text-xl text-gray-800'>
                  &#x2192;
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </Slider>
    </>
  );
};

export default Banner;
