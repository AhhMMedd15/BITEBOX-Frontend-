import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  ImagePlus,
  StickyNote,
  Utensils
} from "lucide-react";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";

const EditDish = ({ selecteddish, editopen, seteditopen }) => {
  const [editdishdata, seteditdishdata] = useState({
    dishname: "",
    dishdescription: "",
    dishprice: "",
    dishimage: undefined,
  });

  useEffect(() => {
    console.log(selecteddish)
    if (selecteddish) {
      seteditdishdata({
        dishname: selecteddish.name || "",
        dishdescription: selecteddish.description || "",
        dishprice: selecteddish.price || "",
        dishimage: selecteddish.image || undefined,
      });
    }
  }, [selecteddish]);

  const handleeditdishdatachange = (e) => {
    const { name, value } = e.target;
    seteditdishdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitEditDishdata = (e) => {
    e.preventDefault();
    console.log("Edited dish:", editdishdata);
    
   
    seteditdishdata({
      dishname: "",
      dishdescription: "",
      dishprice: "",
      dishimage: undefined,
    });
    seteditopen(false);
  };

  return (
    <Dialog open={editopen} onOpenChange={seteditopen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl text-deep-teal font-extrabold">
            Edit Dish
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmitEditDishdata} className="flex flex-col gap-4">
      
          <div className="relative text-deep-teal">
            <Label className="font-bold">Dish Name</Label>
            <Input
              type="text"
              name="dishname"
              value={editdishdata.dishname}
              onChange={handleeditdishdatachange}
              placeholder="Enter your Dish Name"
              className="focus-visible:ring-1 px-10"
            />
            <Utensils className="absolute inset-y-7.5 ml-2" />
          </div>

          <div className="relative text-deep-teal">
            <Label className="font-bold">Dish Description</Label>
            <Input
              type="text"
              name="dishdescription"
              value={editdishdata.dishdescription}
              onChange={handleeditdishdatachange}
              placeholder="Enter your Dish Description"
              className="focus-visible:ring-1 px-10"
            />
            <StickyNote className="absolute inset-y-7.5 ml-2" />
          </div>

          <div className="relative text-deep-teal">
            <Label className="font-bold">Dish Price</Label>
            <Input
              type="text"
              name="dishprice"
              value={editdishdata.dishprice}
              onChange={handleeditdishdatachange}
              placeholder="Enter your Dish Price"
              className="focus-visible:ring-1 px-10"
            />
            <DollarSign className="absolute inset-y-7.5 ml-2" />
          </div>

          <div className="relative text-deep-teal">
            <Label className="font-bold">Dish Image</Label>
            <Input
              type="file"
              name="dishimage"
              accept="image/*"
              onChange={(e) =>
                seteditdishdata((prev) => ({
                  ...prev,
                  dishimage: e.target.files?.[0] || undefined,
                }))
              }
              className="focus-visible:ring-1 px-10"
            />
            <ImagePlus className="absolute inset-y-7.5 ml-2" />
          </div>

          <Button type="submit">Save Changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditDish;
