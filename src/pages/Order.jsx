import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@radix-ui/react-dropdown-menu'


const Order = () => {
  return (
    <>
      <div className='w-full h-screen px-[50px] sm:px-[50px] md:px-[100px] py-[30px]'>
        <h1 className='text-3xl font-bold'>My Orders</h1>
        <div className='flex flex-col justify-center items-center'>
        <section className='w-[70vw] py-5'>
          <div>
            <h3 className='text-2xl mt-5'>Order #804</h3>
            <h3 className='font-semibold'>Placed on Date at Time</h3>
          </div>
          <div className='w-[70vw] sm:min-w-[55vw] bg-white rounded-2xl mt-2'>
            <div className='px-5 py-5'>

              <Table>
                <TableCaption>A list of your previous Orders.</TableCaption>

                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Items</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">Total</TableHead>
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
                    <TableCell>1</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                </TableBody>
        
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={4} >SubTotal</TableCell>
                    <TableCell className='text-right' >$250</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={4} >Delivery(Standard)</TableCell>
                    <TableCell className='text-right' >$0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={4} >Total</TableCell>
                    <TableCell className='text-right' >$250</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
              
            </div>
          </div>
        </section>
        </div>
      </div>
    </>
  )
}

export default Order