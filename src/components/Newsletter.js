import React from "react";
import { FiMail, FiSend } from "react-icons/fi";

const Newsletter = () => {
  return (
    <div className='bg-gray-100 pt-10'>
      <div className='md:flex md:items-center md:justify-between'>
        <div className='mb-4 md:mb-0'>
          <h3 className='text-3xl  font-bold text-gray-800'>
            Subscribe to our Newsletter
          </h3>
          <p className='text-gray-500'>
            Stay updated with our latest products and offers.
          </p>
        </div>
        <div className='flex items-center'>
          <div className='relative rounded-md shadow-sm'>
            <input
              type='email'
              name='newsletter'
              id='newsletter'
              className='block w-full px-5 py-3 pr-12 sm:text-sm  rounded-md border outline-none'
              placeholder='Enter your email'
            />
            <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
              <FiMail className='h-5 w-5 text-gray-400' aria-hidden='true' />
            </div>
          </div>
          <button className='ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
            <FiSend className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
            <span>Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
