import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
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
      <div className="px-[200px] py-[10px]">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
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
          <TableBody>
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
                  <Button className="w-10 hover:bg-gray-300 rounded-full bg-gray-500">
                    <Minus></Minus>
                  </Button>
                  <Button className="w-10 bg-white hover:bg-white text-black">
                    1
                  </Button>
                  <Button className="w-10 bg-deep-teal hover:bg-teal-600 rounded-full">
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
        </Table>
      </div>
    </>
  );
};

export default AddtoCart;
