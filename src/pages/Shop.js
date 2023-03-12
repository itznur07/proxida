import React, { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import {
  FaEye,
  FaHeart,
  FaList,
  FaShoppingBasket,
  FaTh,
  FaWindowClose
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../app/actions/productsAction";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
const Shop = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);
  const [view, setView] = useState(4);
  const [showFiterModel, setShowFilterModel] = useState("hidden");
  const [showProduct, setShowProduct] = useState(20);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleLoadMore = (text) => {
    if (text === "inc") {
      if (showProduct <= 50) {
        setShowProduct(showProduct + 10);
      } else {
        setShowProduct(20);
      }
    } else if (text === "dec") {
      setShowProduct(15);
    } else {
      setShowProduct(20);
    }
  };

  const listView = () => {
    setView(3);
  };

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleMinChange = (e) => {
    setMinPrice(parseInt(e.target.value));
  };

  const handleMaxChange = (e) => {
    setMaxPrice(parseInt(e.target.value));
  };

  return (
    <>
      <Navigation />
      <div className={`flex flex-row  md:mx-14 mt-10 mx-5`}>
        {/* Product Listing */}
        <div className='flex flex-col '>
          <div className='flex flex-row justify-between items-center mb-4'>
            {/* filter products */}
            <div
              className='flex items-center text-gray-700'
              onClick={() => setShowFilterModel("flex")}
            >
              <BsFilter size={24} className='cursor-pointer font-medium' />{" "}
              <span className='text-md font-medium cursor-pointer'>Filter</span>
            </div>
            {/* filter model */}

            {/* Categories Sidebar */}
            <div
              className={`${showFiterModel} fixed shadow-lg left-0 top-0 bottom-0 bg-white flex-col w-1/4 h-full overflow-scroll py-10 px-10`}
            >
              <div className='flex items-center justify-between'>
                {" "}
                <h2 className='text-md border-b-4 border-black uppercase font-bold '>
                  Filter by Category
                </h2>{" "}
                <span className='cursor-pointer'>
                  <FaWindowClose
                    size={24}
                    className='text-red-500 hover:text-black'
                    onClick={() => setShowFilterModel("hidden")}
                  />
                </span>
              </div>

              <ul className='list-none md:space-y-4 mt-5 text-md font-medium text-gray-500 my-6'>
                <li className='flex items-center justify-between'>
                  <a href='# ' className=''>
                    Watch
                  </a>
                  <span>(11)</span>
                </li>
                <hr />
                <li className='flex items-center justify-between'>
                  <a href='# ' className=''>
                    Footwear
                  </a>
                  <span>(21)</span>
                </li>
                <hr />
                <li className='flex items-center justify-between'>
                  <a href='# ' className=''>
                    Clothing
                  </a>
                  <span>(15)</span>
                </li>
                <hr />
                <li className='flex items-center justify-between'>
                  <a href='# ' className=''>
                    Electronices
                  </a>
                  <span>(17)</span>
                </li>
                <hr />
                <li className='flex items-center justify-between'>
                  <a href='# ' className=''>
                    Furnitures
                  </a>
                  <span>(17)</span>
                </li>
              </ul>

              {/* Dropdowns or Filter Ranges here */}
              <div className='flex items-center justify-between mt-9'>
                {" "}
                <h2 className='text-md border-b-4 border-black uppercase font-bold '>
                  Filter by Prices
                </h2>{" "}
                <span></span>
              </div>
              <div>
                <div className='cursor-pointer mt-5'>
                  <div className='flex items-center'>
                    <div className='w-1/4 mr-4'>
                      <label className='block mb-2 text-gray-700'>
                        Min Price (${minPrice})
                      </label>
                      <input
                        type='range'
                        min={0}
                        max={100}
                        value={minPrice}
                        onChange={handleMinChange}
                        className='w-full appearance-none h-2 bg-gray-300 rounded-md outline-none'
                      />
                    </div>
                    <div className='w-1/4'>
                      <label className='block mb-2 text-gray-700'>
                        Max Price (${maxPrice})
                      </label>
                      <input
                        type='range'
                        min={0}
                        max={100}
                        value={maxPrice}
                        onChange={handleMaxChange}
                        className='w-full appearance-none h-2 bg-gray-300 rounded-md outline-none'
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* ... */}
              {/* filter by color */}
              <div className='flex items-center justify-between mt-10'>
                {" "}
                <h2 className='text-md border-b-4 border-black uppercase font-bold '>
                  Filter by Color
                </h2>{" "}
                <span className='cursor-pointer'></span>
              </div>
              <ul className='flex items-center gap-3 mt-5 cursor-pointer'>
                <span className='w-7 h-7 rounded-full bg-orange-500'></span>
                <span className='w-7 h-7 rounded-full bg-red-500'></span>
                <span className='w-7 h-7 rounded-full bg-purple-500'></span>
                <span className='w-7 h-7 rounded-full bg-pink-500'></span>
                <span className='w-7 h-7 rounded-full bg-yellow-500'></span>
                <span className='w-7 h-7 rounded-full bg-blue-500'></span>
              </ul>

              {/* filter by size */}
              <div className='flex items-center justify-between mt-10'>
                {" "}
                <h2 className='text-md border-b-4 border-black uppercase font-bold '>
                  Filter by Size
                </h2>{" "}
                <span className='cursor-pointer'></span>
              </div>
              <ul className='flex items-center gap-3 mt-5 cursor-pointer'>
                <li className='border px-5 py-1 rounded-md'>M</li>
                <li className='border px-5 py-1 rounded-md'>XL</li>
                <li className='border px-5 py-1 rounded-md'>XXL</li>
              </ul>
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

          <div className={`grid md:grid-cols-${view} gap-4 grid-cols-1 `}>
            {products.slice(0, showProduct).map((product) => (
              <div className='group relative' key={product.id}>
                <img src={product.images[0]} alt={product.title} />
                <p>{product.title}</p>
                <p>${product.price}</p>
                <div className='hidden  absolute top-14 right-4 group-hover:flex flex-col items-center  space-y-5 cursor-pointer'>
                  <span className='px-3.5 py-3.5 rounded-full bg-white text-black hover:border hover:bg-transparent hover:text-white cursor-pointer transition ease-linear duration-200 delay-150'>
                    <FaShoppingBasket />
                  </span>
                  <span className='px-3.5 py-3.5 rounded-full bg-white text-black hover:border hover:bg-transparent hover:text-white cursor-pointer transition ease-linear duration-200 delay-150'>
                    <FaHeart />
                  </span>
                  <span className='px-3.5 py-3.5 rounded-full bg-white text-black hover:border hover:bg-transparent hover:text-white cursor-pointer transition ease-linear duration-200 delay-150'>
                    <FaEye />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Product Cards ends here */}

          {/* Pagination */}
          <div className='flex flex-row justify-center my-10  '>
            <button
              onClick={() => handleLoadMore("dec")}
              className='text-gray-400 mr-2'
            >
              <BiChevronLeft size={24} />
            </button>
            <button
              onClick={() => handleLoadMore("inc")}
              className='text-gray-400 ml-2'
            >
              <BiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
