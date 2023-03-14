import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaRegHeart,
  FaShareAlt,
  FaStar,
  FaStarHalfAlt
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../app/actions/productsAction";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const ProductDetails = () => {
  const [photo, setPhoto] = useState(0);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const { product } = useSelector((state) => state.products);

  return (
    <>
      <Navigation />
      {/* product details here */}
      <div className='flex items-center flex-wrap mt-5'>
        {/* image */}
        <div className='w-full md:w-1/2 p-4'>
          <div className='flex justify-center'>
            <div className='relative'>
              <Link to='/shop'>
                {" "}
                <button className='text-sm font-medium text-black px-4 py-2.5 border mb-2 flex items-center space-x-2'>
                  <FaArrowLeft /> <span>Back</span>
                </button>
              </Link>
              <img
                src={product.images[photo]}
                alt='Product'
                className='max-w-full h-auto'
              />
              <div className='flex cursor-pointer items-center justify-between md:space-x-2 mt-3'>
                <img
                  onClick={() => setPhoto(0)}
                  loading='lazy'
                  className='w-52 h-36 roudned border  '
                  src={product.images[0]}
                  alt=''
                />
                <img
                  onClick={() => setPhoto(1)}
                  loading='lazy'
                  className='w-52 h-36 roudned border  '
                  src={product.images[1]}
                  alt=''
                />
                <img
                  onClick={() => setPhoto(2)}
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
            <ul className='flex items-center mb-1 mt-2 cursor-pointer'>
              <span className='w-5 h-5 rounded-full text-yellow-500'>
                <FaStar />
              </span>
              <span className='w-5 h-5 rounded-full text-yellow-500'>
                <FaStar />
              </span>
              <span className='w-5 h-5 rounded-full text-yellow-500'>
                <FaStar />
              </span>
              <span className='w-5 h-5 rounded-full text-yellow-500'>
                <FaStar />
              </span>
              <span className='w-5 h-5 rounded-full text-yellow-500'>
                <FaStarHalfAlt />
              </span>
            </ul>
            <span className='text-gray-600 text-sm'>(4.5)</span>
          </div>
          <div className='flex items-center mb-4'>
            <span className='text-gray-600 text-lg font-medium mr-2'>
              Price: ${product.price}
            </span>
          </div>
          <p className='text-gray-600 mb-4'>
            {product.description.slice(0, 85)}
          </p>
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
    </>
  );
};

export default ProductDetails;
