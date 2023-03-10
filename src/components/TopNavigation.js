import React from "react";

const TopNavigation = () => {
  return (
    <div className='bg-[#F6F6F8] text-gray-500 md:block hidden'>
      <div className='flex justify-between px-4 py-2 md:mx-14'>
        <div className='flex items-center'>
          <span className='mr-4'>+01 23456789</span>
          <span className='mr-4'>proxida@domain.com</span>
        </div>
        <div>
          <span className='mr-4'>Summer sale discount off 50%!</span>
        </div>

        <div className='flex items-center'>
          <select className='ml-4 text-sm '>
            <option value='italy'>Italy</option>
            <option value='other'>India</option>
            <option value='other'>Bangladesh</option>
            <option value='other'>Iran</option>
            <option value='other'>Amarica</option>
            <option value='other'>Singapoure</option>
          </select>
          <select className='ml-4 text-sm'>
            <option value='USD - US Dollar'>USD - US Dollar</option>
            <option value='EUR - Euro'>EUR - Euro</option>
            <option value='IND - Rupee'>IND - Rupee</option>
            <option value='BD - Taka'>BD - Taka</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
