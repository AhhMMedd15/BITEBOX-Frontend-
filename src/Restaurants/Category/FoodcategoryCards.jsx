import React from "react";
import { motion } from 'motion/react'
const FoodcategoryCards = ({ items }) => {
  return (
    <div className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[240px] h-[300px] sm:h-[320px] md:h-[350px] flex items-center justify-center flex-col">
      <div className="w-full h-[50%] rounded-3xl bg-white shadow-xl relative overflow-visible flex flex-col items-center mt-20">
        
        {/* Floating Image */}
        <div className="w-[120px] sm:w-[140px] h-[120px] sm:h-[140px] rounded-full overflow-hidden absolute -top-[60px] shadow-md transition-transform hover:shadow-2xl hover:-translate-y-2">
          <motion.img
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: "linear" }}
            className="w-full h-full object-cover cursor-pointer" src={items.image} alt="Food Image" />
        </div>

        {/* Name Text */}
        <div className="mt-[80px] sm:mt-[90px] text-center font-semibold text-sm sm:text-base">
          {items.name}
        </div>
      </div>
    </div>
  );
};

export default FoodcategoryCards;
