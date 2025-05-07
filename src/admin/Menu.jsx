import { Button } from "@/components/ui/button";
import {
  DollarSign,
  ImagePlay,
  ImagePlus,
  Plus,
  StickyNote,
  Utensils,
} from "lucide-react";
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
import EditDish from "./EditDish";

const Menu = () => {
  const dishes = [
    {
      name: "Margherita Pizza",
      description:
        "Classic pizza topped with fresh tomatoes, mozzarella, and basil.",
      price: "12.99",
      image: "/dish1.jpg",
    },
    {
      name: "Spaghetti Bolognese",
      description: "Rich meat sauce served over al dente spaghetti.",
      price: "14.50",
      image: "/dish2.jpg",
    },
    {
      name: "Caesar Salad",
      description:
        "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.",
      price: "9.75",
      image: "/dish3.jpg",
    },
    {
      name: "Grilled Chicken Sandwich",
      description:
        "Juicy grilled chicken with lettuce, tomato, and aioli on a brioche bun.",
      price: "11.25",
      image: "/dish4.jpg",
    },
    {
      name: "Chocolate Lava Cake",
      description:
        "Warm chocolate cake with a molten center, served with vanilla ice cream.",
      price: "6.99",
      image: "/dish5.jpg",
    },
  ];

  const [selecteddish, setselecteddish] = useState("");
  const [editopen, seteditopen] = useState(false);

  const [dishdata, setdishdata] = useState({
    dishname: "",
    dishdescription: "",
    dishprice: "",
    dishimage: undefined,
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
    });
  };

  return (
    <div className="mt-10 w-full h-screen px-[50px] sm:px-[50px] md:px-[120px]">
      <h3 className="text-4xl text-deep-teal font-poppin font-bold mb-4">
        Available Dishes
      </h3>
      <div className="flex justify-end items-center">
        {/* Add Dish Dialog */}
        {/* Add Dish Dialog */}
        {/* Add Dish Dialog */}

        <Dialog>
          <DialogTrigger asChild>
            <Button className="cursor-pointer sm:mr-2 md:mr-20">
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
              className="flex flex-col gap-2"
            >
              <div className="relative text-deep-teal">
                <Label className="font-bold">Dish Name</Label>
                <Input
                  type="text"
                  name="dishname"
                  value={dishdata.dishname}
                  onChange={handledishdatachange}
                  placeholder="Enter your Dish Name"
                  className="focus-visible:ring-1 px-10"
                ></Input>
                <Utensils className="absolute inset-y-7.5 ml-2" />
              </div>
              <div className="relative text-deep-teal">
                <Label className="font-bold">Dish Description</Label>
                <Input
                  type="text"
                  name="dishdescription"
                  value={dishdata.dishdescription}
                  onChange={handledishdatachange}
                  placeholder="Enter your Dish Description"
                  className="focus-visible:ring-1 px-10"
                ></Input>
                <StickyNote className="absolute inset-y-7.5 ml-2" />
              </div>
              <div className="relative text-deep-teal">
                <Label className="font-bold">Dish Price</Label>
                <Input
                  type="text"
                  name="dishprice"
                  value={dishdata.dishprice}
                  onChange={handledishdatachange}
                  placeholder="Enter your Dish Price"
                  className="focus-visible:ring-1 px-10"
                ></Input>
                <DollarSign className="absolute inset-y-7.5 ml-2" />
              </div>
              <div className="relative text-deep-teal">
                <Label className="font-bold">Dish Image</Label>
                <Input
                  type="file"
                  name="dishimage"
                  accept="image/*"
                  onChange={(e) => {
                    setdishdata({
                      ...dishdata,
                      dishimage: e.target.files?.[0] || undefined,
                    });
                  }}
                  className="focus-visible:ring-1 px-10"
                ></Input>
                <ImagePlus className="absolute inset-y-7.5 ml-2" />
              </div>
              <Button type="submit">Add Dish</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>


      {dishes.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-between items-center gap-6 mt-10"
          >
            <div className="border w-[50vw] sm:min-w-[40vw] md:w-[60vw] md:flex items-center mb-10 rounded-2xl overflow-hidden shadow-2xl bg-pastel transition-transform hover:shadow-2xl hover:-translate-y-2">
              <img
                src={item.image}
                alt="Dish"
                className="h-40 w-full md:w-[25vw] md:h-44 object-fit"
              />

              <div className="p-4">
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.description}</p>
                <p className="mt-2 font-semibold text-green-600">
                  {item.price}
                </p>
                <div className="w-[30vw] text-right">
                  <Button
                    size={"sm"}
                    className="w-full md:w-42 mt-2"
                    onClick={() => {
                      setselecteddish(item);
                      seteditopen(true);
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
            
              <EditDish
                selecteddish={selecteddish}
                editopen={editopen}
                seteditopen={seteditopen}
              />
       
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
