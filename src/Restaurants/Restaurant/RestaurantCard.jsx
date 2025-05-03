import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Heart } from "lucide-react";

const RestaurantCard = ({ restaurant, dishes }) => {
    return (
        <>
            <div className="flex justify-center items-center mt-6">
                <div className="w-[90%] sm:w-[80%] md:w-[25vw] h-[350px] sm:h-[380px] md:h-[250px] rounded-2xl bg-pastel transition-transform hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                    {/* Image */}
                    <div className="relative w-full h-[70%] rounded-t-2xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={restaurant.img}
                            alt={restaurant.name}
                        />
                        <Heart className="absolute top-2.5 right-2.5 text-white cursor-pointer" />
                    </div>

                    {/* Content */}
                    <div className="flex justify-between items-center p-3">
                        <h1 className="font-semibold text-lg sm:text-xl ml-2">
                            {restaurant.name}
                        </h1>
                        <Link to={`/restaurant/${restaurant.id}`} state={{restaurant}}>
                            <Button size="sm" className='cursor-pointer'>View Menu</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RestaurantCard;
