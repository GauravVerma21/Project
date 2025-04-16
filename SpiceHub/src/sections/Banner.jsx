import React from "react";
import { GiChiliPepper } from "react-icons/gi"; 
import { motion } from "framer-motion"; 

const Banner = () => {
  return (
    <div
      className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-cover bg-center pt-20" // Added pt-20 for padding-top
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?spices')",
      }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E]/60 to-[#4E342E]/60"></div>

      
      <div className="relative z-10 max-w-4xl px-4">
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <GiChiliPepper className="text-[#FFB74D] text-6xl sm:text-7xl md:text-8xl mb-4 animate-bounce drop-shadow-lg" />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-serif leading-relaxed">
            Spice Up Your Cooking with{" "}
            <span className="text-[#FFB74D]">Premium Flavors</span>
          </h1>
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl mt-3 text-white opacity-90 font-serif leading-relaxed">
            Handpicked, aromatic spices to add magic to every dish.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
