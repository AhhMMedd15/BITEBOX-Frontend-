import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-deep-teal text-white py-10">
      <div data-scroll data-scroll-section data-scroll-speed='.10' className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">BiteBox</h2>
          <p className="text-sm text-gray-400">
            Delivering your favorite meals, fast and fresh. Order from top-rated restaurants in your area, anytime.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Restaurants</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-sm text-gray-400">Email: support@foodexpress.com</p>
          <p className="text-sm text-gray-400">Phone: +1 123 456 7890</p>
          <p className="text-sm text-gray-400 mt-4">Follow us on:</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-white text-gray-400 transition">Facebook</a>
            <a href="#" className="hover:text-white text-gray-400 transition">Instagram</a>
            <a href="#" className="hover:text-white text-gray-400 transition">Twitter</a>
          </div>
        </div>

      </div>

      <div className="mt-10 text-center text-xm">
        © {new Date().getFullYear()} FoodExpress. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer