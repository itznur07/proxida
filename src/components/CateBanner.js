import React from "react";

const CateBanner = () => {
  return (
    <div className='flex items-center gap-5 justify-around md:mx-14 my-20'>
      {/* card 1 */}
      <div className='relative w-96 h-96 rounded-sm cursor-pointer'>
        <img
          className='w-full h-full object-cover '
          src="/images/watch-big_2.jpg"
          alt=""
        />
        <div className='absolute bottom-2 left-5 right-0 space-y-2'>
          <p className='text-md font-medium'>VIEW COLLECTIONS</p>
          <h1 className='text-4xl font-bold'>LOOKBOOK</h1>
          <p className='text-md text-gray-700'>
            your world of fashion in numbers
          </p>
        </div>
      </div>
      {/* card 2 */}
      <div className='relative w-96  h-96 rounded-sm cursor-pointer'>
        <img
          className='w-full h-full object-cover '
          src="/images/head-phone_2.jpg"
          alt=""
        />
        <div className='absolute bottom-2 left-5 right-0 space-y-2'>
          <p className='text-md font-medium'>VIEW COLLECTIONS</p>
          <h1 className='text-4xl font-bold'>LOOKBOOK</h1>
          <p className='text-md text-gray-700'>
            your world of fashion in numbers
          </p>
        </div>
      </div>
      <div className='relative w-96  h-96 rounded-sm cursor-pointer'>
        <img
          className='w-full h-full object-cover '
          src="/images/footwear-big_2.jpg"
          alt=""
        />
        <div className='absolute bottom-2 left-5 right-0 space-y-2'>
          <p className='text-md font-medium'>VIEW COLLECTIONS</p>
          <h1 className='text-4xl font-bold'>LOOKBOOK</h1>
          <p className='text-md text-gray-700'>
            your world of fashion in numbers
          </p>
        </div>
      </div>
    </div>
  );
};

export default CateBanner;
