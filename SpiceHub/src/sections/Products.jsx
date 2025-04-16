import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { motion } from "framer-motion"; 

const Products = () => {
  const products = useSelector((state) => state.products?.products || []);
  const dispatch = useDispatch();
  const [clickedButton, setClickedButton] = useState(null);

  const handleAddToCart = (product) => {
    setClickedButton(product.id);
    dispatch(addToCart(product));

    setTimeout(() => {
      setClickedButton(null);
    }, 500); 
  };

  return (
    <div className="w-full py-12 bg-[#f8e9d2] px-4 sm:px-6 lg:px-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#8B4513] mb-8 md:mb-12">
        🌿 Authentic Indian Spices 🌶️
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              
              <div className="w-full aspect-[4/3] flex items-center justify-center p-2">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full max-w-full h-auto object-contain rounded-t-lg"
                />
              </div>

              
              <div className="p-4 text-center w-full">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#8B4513]">
                  {product.name}
                </h3>
                <p className="text-md sm:text-lg md:text-xl font-semibold text-[#D2691E] mt-2">
                  ₹{product.price}
                </p>

                
                <motion.button
                  onClick={() => handleAddToCart(product)}
                  className={`mt-4 w-full sm:w-auto px-4 sm:px-6 py-2 text-white font-semibold rounded-full transition-all ease-in-out duration-500 text-sm sm:text-base md:text-lg ${
                    clickedButton === product.id
                      ? "bg-green-500 scale-105 shadow-lg"
                      : "bg-[#8B4513] hover:bg-[#5a2d0c]"
                  }`}
                  whileTap={{
                    scale: 0.9, 
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  animate={{
                    backgroundColor:
                      clickedButton === product.id ? "#4CAF50" : "#8B4513",
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                >
                  {clickedButton === product.id ? "✅ Added!" : "🛒 Add to Cart"}
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-700 text-lg sm:text-xl md:text-2xl">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
