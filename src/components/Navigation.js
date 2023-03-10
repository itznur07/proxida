import React from "react";
import { FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
  // const { cart, wish } = useSelector((state) => state.products);

  /** Get Qty Lenght for Show Frontend */
  // const cartLength = cart.length;
  // const wishLength = wish.length;

  return (
    <>
      <div className='bg-white relative'>
        <nav className='flex items-center justify-between flex-wrap  p-6 md:mx-14'>
          {/* logo here */}
          <div className='flex items-center flex-shrink-0 text-gray-500 mr-6'>
            <Link to='/'>
              <p className='text-2xl text-yellow-500 font-bold uppercase'>
                Proxida
              </p>
            </Link>
          </div>
          {/* navigation link here */}
          <div className='md:flex md:flex-row flex flex-col items-center'>
            <Link
              to='/'
              className='inline-block text-md px-4 py-2 leading-none   text-gray-800   hover:text-blue-500 hover:bg-white mt-4 lg:mt-0'
            >
              Home
            </Link>
            <Link
              to='/shop'
              className='relative inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-[#01BAD4] rounded-full'>
                {/* {cartLength} */}new
              </span>
              Shop
            </Link>
            <Link
              to='/shop'
              className='inline-block text-md px-4 py-2 leading-none  text-gray-800  hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              Product
            </Link>
            <Link
              to='/blog'
              className='relative inline-block text-md px-4 py-2 leading-none  text-red-500   hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-[#FFA800] rounded-full'>
                sale
              </span>
              Buy now
            </Link>
            <Link
              to='/contact'
              className='inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              Contact
            </Link>
          </div>
          {/* login & cart & wish icon here */}
          <div>
            <div className='flex items-center ml-9'>
              <Link to='/signup'>
                {" "}
                <FiUser className='text-gray-500 cursor-pointer' size={25} />
              </Link>
              <Link to='/wishlist' className='inline-block relative ml-4'>
                <FiHeart className='text-gray-500' size={20} />
                <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-black rounded-full'>
                  {/* {wishLength} */}0
                </span>
              </Link>
              <Link to='/cart' className='inline-block relative ml-4'>
                <FiShoppingBag className='text-gray-500' size={20} />
                <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-black rounded-full'>
                  {/* {cartLength} */}0
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
