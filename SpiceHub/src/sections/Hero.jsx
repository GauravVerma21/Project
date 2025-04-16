import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import img from "../assets/img.png";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-6 md:px-16 py-10 bg-gradient-to-br from-[#f9f8f5] to-[#ecebe7]">
      
      
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        
        
        <motion.div
          className="md:w-[55%] flex items-center justify-center rounded-lg shadow-[0_10px_25px_rgba(180,170,160,0.2)]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={image1}
            alt="Main Hero"
            className="w-full h-[500px] rounded-lg object-contain"
          />
        </motion.div>

        
        <div className="md:w-[40%] flex flex-col gap-8 mt-8 md:mt-0">
          
          
          <motion.div
            className="rounded-lg shadow-[0_5px_20px_rgba(160,150,140,0.15)]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={image2}
              alt="Top Right"
              className="w-full h-[250px] rounded-lg object-contain"
            />
          </motion.div>

          
          <motion.div
            className="rounded-lg shadow-[0_5px_20px_rgba(160,150,140,0.15)]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src={image3}
              alt="Bottom Right"
              className="w-full h-[250px] rounded-lg object-contain"
            />
          </motion.div>

        </div>
      </div>

      
      <motion.div
        className="w-full mt-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <img 
          src={img} 
          alt="Bottom Decoration" 
          className="w-full h-[200px] rounded-lg shadow-[0_8px_20px_rgba(150,140,130,0.15)] object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
