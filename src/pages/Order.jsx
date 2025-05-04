import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { Badge } from 'lucide-react'
import React from 'react'

const Order = () => {

  const orders = [
    {
      id: "ORD-1001",
      date: "2025-05-03",
      items: ["Snack Box", "Drink Pack"],
      total: "$29.99",
      status: "Delivered",
    },
    {
      id: "ORD-1002",
      date: "2025-04-28",
      items: ["Fruit Kit"],
      total: "$14.99",
      status: "Processing",
    },
  ]
  return (
    <>
       <section className="min-h-[calc(100vh-80px)] bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      <div className="w-full max-w-3xl space-y-6">
        {orders.map((order) => (
          <Card key={order.id} className="shadow-sm">
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg">{order.id}</h2>
                <Badge
                  variant={
                    order.status === "Delivered"
                      ? "success"
                      : order.status === "Processing"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {order.status}
                </Badge>
              </div>
              <Separator />
              <div className="text-sm">
                <p>
                  <span className="font-medium text-gray-600">Date:</span>{" "}
                  {order.date}
                </p>
                <p>
                  <span className="font-medium text-gray-600">Items:</span>{" "}
                  {order.items.join(", ")}
                </p>
                <p>
                  <span className="font-medium text-gray-600">Total:</span>{" "}
                  {order.total}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    </>
  )
}

export default Order