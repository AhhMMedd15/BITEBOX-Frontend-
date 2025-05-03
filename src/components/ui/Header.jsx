import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "motion/react";


const Header = () => {
  const [input, setInput] = useState({ search: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching:", input.search);
  };

  return (
    <section data-scroll data-scroll-section data-scroll-speed='-.3' className="w-full h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-10 bg-pastel gap-10">
      {/* Left Content */}

      <div className="lg:w-1/2 flex flex-col justify-center items-start text-center lg:text-left pt-[100px] md:pt-[100px] sm:pt-[100px] lg:pt-0">
        <div className="overflow-hidden h-[100px] md:h-[120px] lg:h-[140px] ">
          <motion.h1
            initial={{ y: "100%", rotateZ: 10 }}
            whileInView={{ y: 0, rotateZ: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className=" text-deep-teal font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-poppin leading-snug"
          >
            Hungry? Let <span className="text-orange-500">BITEBOX</span> Deliver the Flavor!
          </motion.h1>
        </div>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="relative w-full mt-8 max-w-[550px] mx-auto lg:mx-0"
        >
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-deep-teal" />
          <Input
            type="text"
            name="search"
            value={input.search}
            onChange={handleChange}
            placeholder="Search by City, Country or Restaurant"
            className="pl-14 py-5 rounded-full border border-deep-teal focus-visible:ring-deep-teal focus-visible:ring-2 text-base w-full"
          />
        </form>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <motion.img
          initial={{ x: '100%', rotateZ: 10, opacity: 0, transformOrigin: "left" }}
          whileInView={{ x: 0, rotateZ: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src="mainbite_img.png"
          alt="Delicious Food"
          className="w-[80%] md:w-[70%] lg:w-[80%] rounded-3xl shadow-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default Header;
