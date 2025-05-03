import React from 'react'
import { motion } from "motion/react";

const Marquee = () => {
    return (
        <>
            <div data-scroll data-scroll-section data-scroll-speed='.1'  className="marqueesection font-roboto flex items-center w-full rounded-tl-3xl rounded-tr-2xl h-[40vh] bg-deep-teal text-2xl text-white">
                <div className=" marqueecontent w-full h-[30vh] border-t-2 border-b-2 flex justify-center overflow-x-hidden overflow-y-hidden items-center whitespace-nowrap ">
                    <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[clamp(5rem,20vw,10rem)] font-bold pr-20'>Designed to delight</motion.h1>
                    <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[clamp(5rem,20vw,10rem)] font-bold pr-20'>Designed to delight</motion.h1>
                    <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[clamp(5rem,20vw,10rem)] font-bold pr-20'>Designed to delight</motion.h1>
                </div>
            </div>
        </>
    )
}

export default Marquee