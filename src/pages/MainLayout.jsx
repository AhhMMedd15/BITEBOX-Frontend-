
import Header from "@/components/ui/Header";
import React from "react";
import Restaurants from "../Restaurants/Restaurant/Restaurants";
import Footer from "./Footer";
import Marquee from "@/components/ui/Marquee";
import FoodCategory from "@/Restaurants/Category/FoodCategory";
import MainVideopage from "@/components/ui/MainVideopage";
import LocomotiveScroll from "locomotive-scroll";

const MainLayout = () => {
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <>
            <div className="main w-full min-h-screen bg-pastel overflow-hidden">
                <Header />
                <Marquee />
                <FoodCategory />
                {/* <MainVideopage/> */}
                <Restaurants />
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;
