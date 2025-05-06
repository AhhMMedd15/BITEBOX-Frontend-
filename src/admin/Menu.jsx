import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

const Menu = () => {
  const [dishdata, setdishdata] = useState({
    dishname: "",
    dishdescription: "",
    dishprice: "",
    dishimage: "",
  });

  const handledishdatachange = (e) => {
    const { name, value } = e.target;
    setdishdata({ ...dishdata, [name]: value });
  };
  const handleSubmitDIshdata = (e) => {
    e.preventDefault();
    console.log(dishdata);

    setdishdata({
      dishname: "",
      dishdescription: "",
      dishprice: "",
      dishimage: "",
    })
  };

  return (
    <div className="mt-10 w-full h-screen px-[50px] sm:px-[50px] md:px-[120px]">
      <h3 className="text-4xl text-deep-teal font-poppin font-bold mb-4">
        Your Dishes
      </h3>
      <div className="flex justify-end items-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="cursor-pointer">
              <Plus></Plus>Add Dish
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-center text-3xl text-deep-teal font-extrabold">
                Add a New Dish
              </DialogTitle>
            </DialogHeader>
            <form
              onSubmit={handleSubmitDIshdata}
              className="flex flex-col gap-2 text-deep-teal"
            >
              <div>
                <Label className="font-bold">Dish Name</Label>
                <Input
                  type="text"
                  name="dishname"
                  value={dishdata.dishname}
                  onChange={handledishdatachange}
                  placeholder="Enter your Dish Name"
                  className="focus-visible:ring-1"
                ></Input>
              </div>
              <div>
                <Label className="font-bold">Dish Description</Label>
                <Input
                  type="text"
                  name="dishdescription"
                  value={dishdata.dishdescription}
                  onChange={handledishdatachange}
                  placeholder="Enter your Dish Description"
                  className="focus-visible:ring-1"
                ></Input>
              </div>
              <div>
                <Label className="font-bold">Dish Price</Label>
                <Input
                  type="text"
                  name="dishprice"
                  value={dishdata.dishprice}
                  onChange={handledishdatachange}
                  placeholder="Enter your Dish Price"
                  className="focus-visible:ring-1"
                ></Input>
              </div>
              <div>
                <Label className="font-bold">Dish Image</Label>
                <Input
                  type="file"
                  name="dishimage"
                  value={dishdata.dishimage}
                  onChange={handledishdatachange}
                  className="focus-visible:ring-1"
                ></Input>
              </div>
              <Button type="submit">Add Dish</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col justify-between items-center gap-6">
        <div className="border w-[50vw] rounded-2xl overflow-hidden shadow-2xl bg-pastel transition-transform hover:shadow-2xl hover:-translate-y-2">
          <img
            src="/menu.jpg"
            alt="Dish"
            className="h-40 w-full object-cover"
          />

          <div className="p-4">
            <h4 className="font-bold">Signature Dish</h4>
            <p className="text-gray-500 text-sm">
              Delicious and handcrafted with love.
            </p>
            <p className="mt-2 font-semibold text-green-600">$80</p>

            <Button className="w-full mt-2">Edit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
