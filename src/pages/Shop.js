import React, { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaFilter, FaList, FaTh } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../app/actions/productsAction";
import Navigation from "../components/Navigation";
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, );

  const { products } = useSelector((state) => state.products);

  const [view, setView] = useState(4);

  const listView = () => {
    setView(3);
  };

  return (
    <>
      <Navigation />
      <div className='flex flex-row  md:mx-14 mt-10'>
        {/* Product Listing */}
        <div className='flex flex-col '>
          <div className='flex flex-row justify-between items-center mb-4'>
            {/* filter products */}
            <div>
              <FaFilter />
            </div>
            {/* Sort Options */}
            <div className='flex flex-row items-center'>
              <span className='font-medium mr-2'>Sort by:</span>
              <select className='border rounded px-4 py-2'>
                <option value='price_asc'>Price: Low to High</option>
                <option value='price_desc'>Price: High to Low</option>
                <option value='name_asc'>Name: A to Z</option>
                <option value='name_desc'>Name: Z to A</option>
              </select>
            </div>

            {/* View Options */}
            <div className='flex flex-row items-center space-x-4'>
              <button onClick={() => listView()} className='text-gray-900'>
                <FaTh size={22} />
              </button>
              <button className='text-gray-900'>
                <FaList size={22} />
              </button>
            </div>
          </div>

          {/* Product Cards here */}

          <div className={`grid md:grid-cols-${view} gap-4 grid-cols-1`}>
            {products.slice(0, 20).map((product) => (
              <div key={product.id}>
                <img src={product.images[0]} alt={product.title} />
                <p>{product.title}</p>
                <p>{product.category.name}</p>
                <p>{product.description}</p>
              </div>
            ))}
          </div>

          {/* Product Cards ends here */}

          {/* Pagination */}
          <div className='flex flex-row justify-center mt-4  '>
            <button className='text-gray-400 mr-2'>
              <BiChevronLeft size={24} />
            </button>
            <button className='text-gray-400 ml-2'>
              <BiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
