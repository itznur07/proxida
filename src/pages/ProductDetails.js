import React, { useEffect, useState } from "react";
import { FaRegHeart, FaShareAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../app/actions/productsAction";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const ProductDetails = () => {
  const [photoNumber, setPhotoNumber] = useState(0);

  const { id } = useParams();
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return (
    <div>
      <Navigation />
      {/* product details here */}
      <div className='flex items-center flex-wrap mt-8'>
        {/* image */}
        <div className='w-full md:w-1/2 p-4'>
          <div className='flex justify-center'>
            <div className='relative'>
              <img
                src={product.images[photoNumber]}
                alt='Product'
                className='max-w-full h-auto'
              />
              <div className='flex cursor-pointer items-center justify-between md:space-x-2 mt-3'>
                <img
                  onClick={() => setPhotoNumber(0)}
                  loading='lazy'
                  className='w-52 h-36 roudned border  '
                  src={product.images[0]}
                  alt=''
                />
                <img
                  onClick={() => setPhotoNumber(1)}
                  loading='lazy'
                  className='w-52 h-36 roudned border  '
                  src={product.images[1]}
                  alt=''
                />
                <img
                  onClick={() => setPhotoNumber(2)}
                  loading='lazy'
                  className='w-52 h-36 roudned border  '
                  src={product.images[2]}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
        {/* details */}
        <div className='w-full md:w-1/2 p-4'>
          <h2 className='text-3xl font-semibold mb-4'>{product.title}</h2>
          <div className='flex items-center mb-4'>
            <span className='text-yellow-500 mr-2'>
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </span>
            <span className='text-gray-600 text-sm'>(4.5)</span>
          </div>
          <div className='flex items-center mb-4'>
            <span className='text-gray-600 text-lg line-through mr-2'>
              ${product.price}
            </span>
            <span className='text-red-500 text-lg'>
              {/* ${product.discountPrice} */} $300
            </span>
          </div>
          {/* <p className='text-gray-600 mb-4'>{product.description}</p> */}
          <div className='flex items-center mb-4'>
            <span className='mr-2 font-semibold text-md uppercase'>
              Quantity:
            </span>
            <button className='bg-black text-white py-1 px-2 hover:bg-gray-800'>
              -
            </button>
            <span className='bg-black text-white py-1 px-2'>1</span>
            <button className='bg-black text-white py-1 px-2  hover:bg-gray-800'>
              +
            </button>
          </div>
          <button
            // onClick={() => handleAddToCart(product)}
            className='flex items-center bg-blue-500 text-white text-md font-semibold px-4 py-2 rounded uppercase'
          >
            Add to cart
          </button>
          <div className='flex items-center mt-4'>
            <span className='text-gray-500 mr-4'>Share:</span>
            <FaShareAlt className='text-gray-500 hover:text-gray-600 cursor-pointer mr-2' />
            <FaRegHeart className='text-gray-500 hover:text-red-500 cursor-pointer' />
          </div>
        </div>
      </div>
      {/* product details ends here */}
      <Footer />
    </div>
  );
};

export default ProductDetails;
