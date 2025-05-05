import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";

const Restaurant = () => {
  const [restaurantdata, setrestaurantdata] = useState({
    RestaurantName: "",
    RestaurantCity: "",
    RestaurantCountry: "",
    RestaurantDeliveryTime: "",
    RestaurantCategories: "",
  });

  const changerihandler = (e) => {
    const { name, value } = e.target;
    setrestaurantdata({ ...restaurantdata, [name]: value });
  };

  const restaurantform = (e) => {
    e.preventDefault();
    console.log(restaurantdata);

    setrestaurantdata({
      RestaurantName: "",
      RestaurantCity: "",
      RestaurantCountry: "",
      RestaurantDeliveryTime: "",
      RestaurantCategories: "",
    })
  };

 
  return (
    <>
      <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center">
        <div className="w-[90%] h-[90%] bg-white px-5 py-5 rounded-4xl shadow-2xl">
          <h1 className="text-3xl text-deep-teal text-center font-extrabold">
            Add your Restaurant
          </h1>
          <form onSubmit={restaurantform} className="mt-10 flex flex-col gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div>
                <Label className="font-bold">Restaurant Name</Label>
                <Input
                  type="text"
                  name="RestaurantName"
                  value={restaurantdata.RestaurantName}
                  onChange={changerihandler}
                  placeholder="Enter your Restaurant Name"
                ></Input>
              </div>
              <div>
                <Label className="font-bold">Restaurant City</Label>
                <Input
                  type="text"
                  name="RestaurantCity"
                  value={restaurantdata.RestaurantCity}
                  onChange={changerihandler}
                  placeholder="Enter your Restaurant City"
                ></Input>
              </div>
              <div>
                <Label className="font-bold">Restaurant Country</Label>
                <Input
                  type="text"
                  name="RestaurantCountry"
                  value={restaurantdata.RestaurantCountry}
                  onChange={changerihandler}
                  placeholder="Enter your Restaurant Country"
                ></Input>
              </div>
              <div>
                <Label className="font-bold">Restaurant Delivery Time</Label>
                <Input
                  type="text"
                  name="RestaurantDeliveryTime"
                  value={restaurantdata.RestaurantDeliveryTime}
                  onChange={changerihandler}
                  placeholder="Enter your Restaurant Delivery Time"
                ></Input>
              </div>
              <div>
                <Label className="font-bold">Restaurant Categories</Label>
                <Input
                  type="text"
                  name="RestaurantCategories"
                  value={restaurantdata.RestaurantCategories}
                  onChange={changerihandler}
                  placeholder="Enter your Restaurant Categories"
                ></Input>
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <Button className="w-64">Add your Restaurant</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
