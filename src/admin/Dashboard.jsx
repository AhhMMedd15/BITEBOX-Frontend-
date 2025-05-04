import { useState } from "react";
import { Package, Layers3, ShoppingCart, Users, Tag, LineChart, Headset, Settings } from "lucide-react";

export default function Dashboard() {
  const [active, setActive] = useState("Products");

  const sampleProducts = [
    {
      id: "P001",
      name: "Colorful Building Blocks",
      price: "$25.00",
      stock: 120,
      orders: 58,
      rating: 4.7,
      status: "Active",
    },
    {
      id: "P002",
      name: "Animal Puzzle Set",
      price: "$18.99",
      stock: 75,
      orders: 102,
      rating: 4.9,
      status: "Active",
    },
    {
      id: "P003",
      name: "Magnetic Drawing Board",
      price: "$30.50",
      stock: 0,
      orders: 147,
      rating: 4.6,
      status: "Out of Stock",
    },
  ];

  const menuItems = [
    { name: "Products", icon: <Package size={20} /> },
    { name: "Categories", icon: <Layers3 size={20} /> },
    { name: "Orders", icon: <ShoppingCart size={20} /> },
    { name: "Customers", icon: <Users size={20} /> },
    { name: "Admins", icon: <Users size={20} /> },
    { name: "Promotions", icon: <Tag size={20} /> },
    { name: "Analytics", icon: <LineChart size={20} /> },
    { name: "Support", icon: <Headset size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex w-full h-[100vh] bg-seaform ">
      {/* Sidebar */}
      <aside className="w-64 fixed shadow-lg p-4 flex flex-col gap-2 border-r">
        <h1 className="text-2xl font-bold mb-6 text-center text-deep-teal">BITEBOX</h1>
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${active === item.name ? "bg-blue-100 text-deep-teal font-semibold" : "hover:bg-gray-100"
              }`}
            onClick={() => setActive(item.name)}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className="ml-[20vw] w-full p-6 bg-gray-50 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">{active}</h2>

        {active === "Products" ? (
          <div className="overflow-x-auto">
            <table className="min-w-full rounded-xl shadow">
              <thead>
                <tr className="text-left border-b bg-blue-50">
                  <th className="p-4">Product ID</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">In Stock</th>
                  <th className="p-4">Orders</th>
                  <th className="p-4">Rating</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sampleProducts.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{product.id}</td>
                    <td className="p-4">{product.name}</td>
                    <td className="p-4">{product.price}</td>
                    <td className="p-4">{product.stock}</td>
                    <td className="p-4">{product.orders}</td>
                    <td className="p-4">⭐ {product.rating}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 text-sm rounded-full font-semibold ${product.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="text-blue-600 hover:underline">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="border rounded-xl bg-white p-6 shadow-sm">
            <p>Content for <strong>{active}</strong> will go here.</p>
          </div>
        )}
      </main>
    </div>
  );
}
