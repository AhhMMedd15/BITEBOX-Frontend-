import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-dropdown-menu";



const Menu = () => {
  return (
    <div className="mt-10 w-full h-screen px-[50px] sm:px-[50px] md:px-[100px]">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-OpenSans font-bold mb-4">Your Dishes</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button><Plus></Plus>Add Dish</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
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
