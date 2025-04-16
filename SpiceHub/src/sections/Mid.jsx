import React from "react";
import { motion } from "framer-motion";
import path229 from "../assets/path229.png";
import path344 from "../assets/path344.png";
import g1619 from "../assets/g1619.png";
import mix from "../assets/mix.png";

const Mid = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#fffaf0] px-4 sm:px-6 md:px-8 lg:px-10 py-10">
      
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-12">
        
        <motion.div
          className="w-full md:w-[55%] flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={path229}
            alt="Path 229"
            className="w-full max-h-[500px] object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        
        <div className="w-full md:w-[40%] flex flex-col items-center gap-4 sm:gap-6">
          
          <motion.div
            className="w-full rounded-lg shadow-lg flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={path344}
              alt="Path 344"
              className="w-full max-h-[250px] object-contain rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          
          <motion.div
            className="w-full rounded-lg shadow-lg flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={g1619}
              alt="G1619"
              className="w-full max-h-[250px] object-contain rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>

      
      <motion.div
        className="w-full max-w-7xl mt-6 px-4 flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <img
          src={mix}
          alt="Mix"
          className="w-full h-auto object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </div>
  );
};

export default Mid;
