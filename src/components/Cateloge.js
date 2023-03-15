import React from "react";
const Cateloge = () => {
  return (
    <div className='grid md:grid-cols-4 gap-5 sm:grid-cols-1 justify-center md:mx-14 my-20'>
      <CatelogeCard img='/images/footwear-big_2.jpg' title='Footwear' />
      <CatelogeCard img='/images/head-phone_2.jpg' title='Accessories' />
      <CatelogeCard img='/images/watch-big_2.jpg' title='Watch' />
      <CatelogeCard img='/images/hatcap_2.jpg' title='Hatcap' />
    </div>
  );
};

const CatelogeCard = ({ img, title }) => {
  return (
    <div className='relative max-w-sm max-h-96 rounded-sm cursor-pointer'>
      <img className='w-full h-full object-cover ' src={img} alt={title} />
      <div className='absolute bottom-12 left-28 right-0'>
        <button className='bg-white px-8 py-2 rounded-sm text-gray-800 hover:bg-transparent hover:border hover:text-white transition ease-linear duration-200 delay-75'>
          {title}
        </button>
      </div>
    </div>
  );
};

export default Cateloge;
