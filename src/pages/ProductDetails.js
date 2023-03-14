import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaRegHeart, FaShareAlt, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../app/actions/productAction";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const ProductDetails = () => {
  const [photo, setPhoto] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, [id, dispatch]);
  const { product } = useSelector((state) => state.product);
  return (
    <>
      <Navigation />
      {/* product details here */}
      {product && (
        <div className='flex items-center flex-wrap mt-5'>
          {/* image */}
          <div className='w-full md:w-1/2 p-4'>
            <div className='flex justify-center'>
              <div className='relative'>
                <Link to='/shop'>
                  {" "}
                  <button className='text-sm font-medium text-black px-4 py-2.5 border mb-2 flex items-center space-x-2'>
                    <FaArrowLeft />
                    <span>Back</span>
                  </button>
                </Link>
                <img
                  src={product?.images?.[photo]}
                  alt={product?.title}
                  className='max-w-full h-auto'
                />
                <div className='flex cursor-pointer items-center justify-between md:space-x-2 mt-3'>
                  {product?.images?.map((img, index) => (
                    <img
                      key={index}
                      onClick={() => setPhoto(index)}
                      loading='lazy'
                      className='w-52 h-36 rounded border'
                      src={img}
                      alt=''
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* details */}
          <div className='w-full md:w-1/2 p-4'>
            <h2 className='text-3xl font-semibold mb-4'>{product.title}</h2>
            <div className='flex items-center mb-4'>
              <ul className='flex items-center mb-1 mt-2 cursor-pointer'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`w-5 h-5 rounded-full text-yellow-500 ${
                      index < Math.round(product?.rating) ? "" : "opacity-50"
                    }`}
                  >
                    <FaStar className='text-yellow-500' />
                  </span>
                ))}
                <span className='text-gray-600 text-sm'>(5.0)</span>
              </ul>
            </div>
            <div className='flex items-center mb-4'>
              <span className='text-gray-600 text-lg font-medium mr-2'>
                Price: ${product?.price}
              </span>
            </div>
            <p className='text-gray-600 mb-4'>
              {product?.description?.slice(0, 85)}
            </p>
            <div className='flex items-center mb-4'>
              <span className='mr-2 font-semibold text-md uppercase'>
                Quantity:
              </span>
              <button className='bg-black text-white py-1 px-2 hover:bg-gray-800'>
                -
              </button>
              <span
                className='bg-black text-white py-1 px-2
hover:bg-gray-800 mx-2'
              >
                1
              </span>
              <button className='bg-black text-white py-1 px-2 hover:bg-gray-800'>
                +
              </button>
            </div>
            <div className='flex items-center mb-4'>
              <button className='bg-gray-800 text-white py-2 px-4 mr-2 hover:bg-gray-700'>
                <FaRegHeart />
              </button>
              <button className='bg-gray-800 text-white py-2 px-4 hover:bg-gray-700'>
                <FaShareAlt />
              </button>
            </div>
            <button className='bg-yellow-500 text-white py-2 px-4 hover:bg-yellow-400'>
              Add to Cart
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
export default ProductDetails;
