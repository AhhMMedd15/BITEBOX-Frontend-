import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const AddtoCart = () => {
  return (
    <>
      <div className="md:px-[100px] lg:px-[100px] py-[30px] whitespace-nowrap overflow-x-auto">
        <div className="flex justify-end mb-5">
          <Button variant='link' className='px-10'>Clear All</Button>
        </div>
        <Table>
          <TableCaption>A list of your recent Items.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[10vw]">Items</TableHead>
              <TableHead className="min-w-[10vw]">Title</TableHead>
              <TableHead className="min-w-[10vw]">Price</TableHead>
              <TableHead className="min-w-[10vw]">Quantity</TableHead>
              <TableHead className="min-w-[10vw]">Total</TableHead>
              <TableHead className="">Remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='hover:bg-gray-100'>
            <TableRow>
              <TableCell className="font-medium">
                <Avatar className="p-5 bg-seaform">
                  <AvatarImage />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>
                <div className="w-30 h-10 bg-white shadow-2xl rounded-full flex items-center justify-between">
                  <Button className="w-10 hover:bg-gray-400 rounded-full bg-gray-500">
                    <Minus></Minus>
                  </Button>
                  <Button className="w-10 bg-white hover:bg-white text-black">
                    1
                  </Button>
                  <Button className="w-10 bg-deep-teal hover:bg-teal-700 rounded-full">
                    <Plus></Plus>
                  </Button>
                </div>
              </TableCell>
              <TableCell>$250.00</TableCell>
              <TableCell className="">
                <Button>Remove</Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow className='font-bold text-2xl'>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell >80</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <div className="flex justify-end">
          <Button className='px-10'>Proceed to Checkout</Button>
        </div>
      </div>
    </>
  );
};

export default AddtoCart;
