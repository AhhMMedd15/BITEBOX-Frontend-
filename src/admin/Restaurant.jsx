import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import {
  Building,
  Globe,
  Image,
  ImagePlus,
  Landmark,
  LayoutGrid,
  Map,
  MapPin,
  Tags,
  TimerReset,
  Utensils,
} from "lucide-react";
import React, { useState } from "react";

const Restaurant = () => {
  const [restaurantdata, setrestaurantdata] = useState({
    RestaurantName: "",
    RestaurantCity: "",
    RestaurantCountry: "",
    RestaurantDeliveryTime: "",
    RestaurantCategories: "",
    Imagefile: "",
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
      RestaurantCategories: [],
      Imagefile: "",
    });
  };

  return (
    <>
      <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center">
        <div className="w-[90%] min-h-[90%] bg-white px-5 py-5 rounded-4xl shadow-2xl">
          <h1 className="text-3xl text-deep-teal text-center font-extrabold">
            Add your Restaurant
          </h1>
          <form onSubmit={restaurantform} className="mt-5 flex flex-col gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="relative text-deep-teal">
                <Label className="font-bold">Restaurant Name</Label>
                <Input
                  type="text"
                  name="RestaurantName"
                  value={restaurantdata.RestaurantName}
                  onChange={changerihandler}
                  placeholder="Enter your Restaurant Name"
                  className="focus-visible:ring-1 px-10"
                ></Input>
                <Utensils className="absolute inset-y-7.5 ml-2" />
              </div>
              <div className="relative text-deep-teal">
                <Label className="font-bold">Restaurant City</Label>
                <Input
                  type="text"
                  name="RestaurantCity"
                  value={restaurantdata.RestaurantCity}
                  onChange={changerihandler}
                  placeholder="Enter your Restaurant City"
                  className="focus-visible:ring-1 px-10"
                ></Input>
                <MapPin className="absolute inset-y-7.5 ml-2" />
              </div>
              <div className="relative text-deep-teal">
                <Label className="font-bold">Restaurant Country</Label>
                <Input
                  type="text"
                  name="RestaurantCountry"
                  value={restaurantdata.RestaurantCountry}
                  onChange={changerihandler}
                  placeholder="Enter your Restaurant Country"
                  className="focus-visible:ring-1 px-10"
                ></Input>
                <Globe className="absolute inset-y-7.5 ml-2" />
              </div>
              <div className="relative text-deep-teal">
                <Label className="font-bold">Restaurant Delivery Time</Label>
                <Input
                  type="text"
                  name="RestaurantDeliveryTime"
                  value={restaurantdata.RestaurantDeliveryTime}
                  onChange={changerihandler}
                  placeholder="Enter your Restaurant Delivery Time"
                  className="focus-visible:ring-1 px-10"
                ></Input>
                <TimerReset className="absolute inset-y-7.5 ml-2" />
              </div>
              <div className="relative text-deep-teal">
                <Label className="font-bold">Restaurant Categories</Label>
                <Input
                  type="text"
                  name="RestaurantCategories"
                  value={restaurantdata.RestaurantCategories}
                  onChange={changerihandler}
                  placeholder="Enter your Restaurant Categories"
                  className="focus-visible:ring-1 px-10"
                ></Input>
                <Tags className="absolute inset-y-7.5 ml-2" />
              </div>
              <div className="relative text-deep-teal">
                <Label className="font-bold">Upload Restaurant Banner</Label>
                <Input
                  type="file"
                  name="Imagefile"
                  onChange={(e) => {
                    setrestaurantdata({
                      ...restaurantdata,
                      Imagefile: e.target.files?.[0] || undefined,
                    });
                  }}
                  accept="image/*"
                  className="focus-visible:ring-1 px-10"
                ></Input>
                <ImagePlus className="absolute inset-y-7.5 ml-2" />
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <Button className="w-42">Add Restaurant</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
