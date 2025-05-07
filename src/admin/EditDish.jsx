import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { DollarSign, ImagePlus, StickyNote, Utensils } from "lucide-react";
import React, { useEffect, useState } from "react";

const EditDish = ({ selecteddish, editopen, seteditopen }) => {
  const [editdish, seteditdish] = useState({
    editname: "",
    editdescription: "",
    editprice: "",
    editimage: "",
  });

  const handleEditDishChnage = (e) => {
    const { name, value } = e.target;
    seteditdish({ ...editdish, [name]: value });
  };

  const handleSubmitEditDishData = (e) => {
    e.preventDefault();
    console.log(editdish);
  };

  useEffect(() => {
    seteditdish({
      editname: selecteddish.name,
      editdescription: selecteddish.description,
      editprice: selecteddish.price,
      editimage: undefined,
    });    
  }, [selecteddish]);

  return (
    <>
      <Dialog open={editopen} onOpenChange={seteditopen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-3xl text-deep-teal font-extrabold">
              Edit Dish
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmitEditDishData}>
            <div className="relative text-deep-teal">
              <Label className="font-bold">Dish Name</Label>
              <Input
                type="text"
                name="editname"
                value={editdish.editname}
                onChange={handleEditDishChnage}
                placeholder="Enter your Dish Name"
                className="focus-visible:ring-1 px-10"
              ></Input>
              <Utensils className="absolute inset-y-7.5 ml-2" />
            </div>
            <div className="relative text-deep-teal">
              <Label className="font-bold">Dish Description</Label>
              <Input
                type="text"
                name="editdescription"
                value={editdish.editdescription}
                onChange={handleEditDishChnage}
                placeholder="Enter your Dish Description"
                className="focus-visible:ring-1 px-10"
              ></Input>
              <StickyNote className="absolute inset-y-7.5 ml-2" />
            </div>
            <div className="relative text-deep-teal">
              <Label className="font-bold">Dish Price</Label>
              <Input
                type="text"
                name="editprice"
                value={editdish.editprice}
                onChange={handleEditDishChnage}
                placeholder="Enter your Dish Price"
                className="focus-visible:ring-1 px-10"
              ></Input>
              <DollarSign className="absolute inset-y-7.5 ml-2" />
            </div>
            <div className="relative text-deep-teal">
              <Label className="font-bold">Dish Image</Label>
              <Input
                type="file"
                name="editimage"
                onChange={(e) =>
                  seteditdish({
                    ...editdish,
                    editimage: e.target.files?.[0] || undefined,
                  })
                }
                accept="image/*"
                className="focus-visible:ring-1 px-10"
              ></Input>
              <ImagePlus className="absolute inset-y-7.5 ml-2" />
            </div>
            <Button size={"sm"} className="w-full mt-2">
              Edit Dish
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditDish;
