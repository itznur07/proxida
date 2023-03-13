import { FaTimes } from "react-icons/fa";

const QuickViewModel = ({
  product,
  isOpen,
  onClose,
  quantity,
  setQuantity,
}) => {
    
//   const dispatch = useDispatch();

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className='flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
        <div className='fixed inset-0 transition-opacity'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
        </div>
        <div className='relative z-50 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
          <div className='absolute top-0 right-0 pt-2 pr-2'>
            <button
              onClick={onClose}
              className='text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500'
            >
              <FaTimes size={24} />
            </button>
          </div>
          <div className='px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <img
              src={product.image}
              alt={product.title}
              className='mx-auto w-full h-96 object-contain'
            />
            <h3 className='text-lg font-medium text-gray-900 mt-4'>
              {product.title}
            </h3>
            <p className='text-gray-700 text-sm'>{product.tag}</p>
            <div className='mt-4 flex items-center justify-between'>
              <div>
                <p className='text-gray-700 text-sm'>
                  Rating: {product.rating}
                </p>
                <p className='text-gray-700 text-sm'>
                  Discount Price: ${product.discountPrice}
                </p>
                {product.discountPrice && (
                  <p className='text-gray-500  text-sm'>
                    Orginal Price:{" "}
                    <span className='line-through'>${product.price}</span>
                  </p>
                )}
              </div>
              <div>
                <label htmlFor='quantity' className='sr-only'>
                  Quantity
                </label>
                <input
                  id='quantity'
                  name='quantity'
                  type='number'
                  min='1'
                  max={product.qty}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className='w-20 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-center'
                />
                <button
                  onClick={() => handleAddToCart(product)}
                  className='ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModel;
