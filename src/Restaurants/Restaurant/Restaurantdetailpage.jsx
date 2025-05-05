import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Restaurantdetailpage = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      <section className="w-full bg-mint">
        <div className="w-full h-[100%]">
          <div className="relative w-full h-[300px] rounded-b-3xl p-1">
            <img
              src={state.restaurant.img}
              alt="Loading..."
              className="object-cover w-full h-full rounded-b-3xl"
            />

            <div className="absolute inset-5 bg-opacity-40 flex items-end p-6">
              <h1 className="text-4xl text-center text-white px-[30px] py-[10px] backdrop-blur-xl bg-transparent rounded-2xl font-bold">
                {state.restaurant.name}
              </h1>
            </div>
          </div>

          {/* Info Section */}
          <div className="max-w-5xl mx-auto p-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h2 className="text-2xl font-semibold">About</h2>
                <p className="mt-2 text-gray-600">
                  A fine dining experience blending modern cuisine with classic
                  flavors. Located in the heart of the city.
                </p>
              </div>
              <div className="text-right">
                <span className="block text-yellow-500 text-xl font-bold">
                  {state.rating}
                </span>
                <span className="text-sm text-gray-500">1,240 reviews</span>
              </div>
            </div>

            {/* Menu Preview */}
            <div className="mt-10">
              <h3 className="text-3xl font-OpenSans font-semibold mb-4">Popular Dishes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                {state.restaurant.dishes.map((item) => (
                  <div
                    key={item}
                    className="border rounded-2xl overflow-hidden shadow-2xl bg-pastel transition-transform hover:shadow-2xl hover:-translate-y-2"
                  >
                    <img
                      src={item.img}
                      alt="Dish"
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-bold">Signature Dish {item.name}</h4>
                      <p className="text-gray-500 text-sm">
                        Delicious and handcrafted with love.
                      </p>
                      <p className="mt-2 font-semibold text-green-600">
                        {item.price}
                      </p>

                      <Link to={`/restaurant/dishes`}>
                        <Button className="w-full mt-2">View Menu</Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurantdetailpage;
