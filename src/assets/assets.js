import img_1 from './janesca-8wC5j6pFMzs-unsplash.jpg'
import img_2 from './janesca-ovm0UCC0VWY-unsplash.jpg'
import img_3 from './molly-keesling-M56xme21M7I-unsplash.jpg'
import img_4 from './pexels-ash-craig-122861-376464.jpg'
import img_5 from './pexels-chanwalrus-941869.jpg'
import img_6 from './pexels-chanwalrus-958545.jpg'
import img_7 from './pexels-chanwalrus-1059943.jpg'
import img_8 from './pexels-chevanon-323682.jpg'
import img_9 from './pexels-dana-tentis-118658-691114.jpg'
import img_10 from './pexels-enginakyurt-1437267.jpg'
import img_11 from './pexels-enginakyurt-2347311 (1).jpg'
import img_12 from './pexels-enginakyurt-2347311.jpg'
import img_13 from './pexels-igor-ovsyannykov-56123-205961.jpg'
import img_14 from './pexels-janetrangdoan-1092730.jpg'
import img_15 from './pexels-madelynemery-954677.jpg'
import img_16 from './pexels-marvin-ozz-1297854-2474658.jpg'
import img_17 from './pexels-marvin-ozz-1297854-2474661.jpg'
import img_18 from './pexels-nano-erdozain-120534369-28895966.jpg'
import img_19 from './pexels-narda-yescas-724842-1566837.jpg'
import img_20 from './pexels-pascal-claivaz-66964-410648.jpg'
import img_21 from './pexels-pixabay-327158.jpg'
import img_22 from './pexels-samerdaboul-2233729.jpg'
import img_23 from './pexels-sydney-troxell-223521-718742.jpg'
import img_24 from './pexels-valeriya-1247677.jpg'
import img_25 from './pexels-valeriya-1639562.jpg'
import img_26 from './pexels-valeriya-10038682.jpg'
import img_27 from './pexels-vanmalidate-769289.jpg'
import img_28 from './pexels-vimgs-2611917.jpg'

import menu_1 from './menu_1.jpg';
import menu_2 from './menu_2.jpg';
import menu_3 from './menu_3.jpg';
import menu_4 from './menu_4.jpg';
import menu_5 from './menu_5.jpg';
import menu_6 from './menu_6.jpg';
import menu_7 from './menu_7.jpg';
import menu_8 from './menu_8.jpg';


export const restaurantData = [
  {
    "id": 1,
    "name": "The Italian Bistro",
    "img": img_1,
    "rating": 4.5,
    "reviews": [
      { "user": "John Doe", "review": "Great food and service!", "rating": 5 },
      { "user": "Jane Smith", "review": "Good but a bit pricey.", "rating": 4 }
    ],
    "hours": { "open": "10:00 AM", "close": "10:00 PM" },
    "deliveryFee": "$2.99",
    "paymentMethods": ["Credit Card", "Cash on Delivery"],
    "locations": [
      { "city": "New York", "address": "123 Italian St, NY", "phone": "+1234567890" },
      { "city": "Los Angeles", "address": "456 Italian Blvd, LA", "phone": "+9876543210" }
    ],
    "dishes": [
      {
        "name": "Spaghetti Carbonara",
        "img": img_2,
        "price": "$12.99",
        "rating": 4.7,
        "reviews": [
          { "user": "Alice", "review": "Loved it, very creamy!", "rating": 5 },
          { "user": "Bob", "review": "It was okay.", "rating": 3 }
        ]
      },
      {
        "name": "Margherita Pizza",
        "img": img_3,
        "price": "$10.99",
        "rating": 4.9,
        "reviews": [
          { "user": "Charlie", "review": "Perfect pizza, crispy crust.", "rating": 5 }
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Sushi Paradise",
    "img": img_4,
    "rating": 4.8,
    "reviews": [
      { "user": "Sandy", "review": "Best sushi in town!", "rating": 5 }
    ],
    "hours": { "open": "11:00 AM", "close": "11:00 PM" },
    "deliveryFee": "$3.50",
    "paymentMethods": ["Credit Card", "PayPal"],
    "locations": [
      { "city": "San Francisco", "address": "789 Sushi Rd, SF", "phone": "+1234567890" }
    ],
    "dishes": [
      {
        "name": "California Roll",
        "img": img_5,
        "price": "$9.99",
        "rating": 4.6
      },
      {
        "name": "Spicy Tuna Roll",
        "img": img_6,
        "price": "$12.99",
        "rating": 4.7
      }
    ]
  },
  {
    "id": 3,
    "name": "Burger Haven",
    "img": img_7,
    "rating": 4.7,
    "reviews": [
      { "user": "Jacob", "review": "The best burger in town!", "rating": 5 }
    ],
    "hours": { "open": "9:00 AM", "close": "11:00 PM" },
    "deliveryFee": "$2.50",
    "paymentMethods": ["Credit Card", "Cash on Delivery"],
    "locations": [
      { "city": "Chicago", "address": "456 Burger St, Chicago", "phone": "+9876543210" }
    ],
    "dishes": [
      {
        "name": "Classic Cheeseburger",
        "img": img_8,
        "price": "$8.99",
        "rating": 4.8
      },
      {
        "name": "BBQ Bacon Burger",
        "img": img_9,
        "price": "$10.49",
        "rating": 4.5
      }
    ]
  },
  {
    "id": 4,
    "name": "Taco Fiesta",
    "img": img_10,
    "rating": 4.3,
    "reviews": [
      { "user": "Lisa", "review": "Good tacos but could use more spice!", "rating": 4 }
    ],
    "hours": { "open": "10:00 AM", "close": "9:00 PM" },
    "deliveryFee": "$1.99",
    "paymentMethods": ["Credit Card", "Cash on Delivery"],
    "locations": [
      { "city": "Houston", "address": "321 Taco Ln, Houston", "phone": "+1122334455" }
    ],
    "dishes": [
      {
        "name": "Chicken Tacos",
        "img": img_11,
        "price": "$6.99",
        "rating": 4.6
      },
      {
        "name": "Beef Burrito",
        "img": img_12,
        "price": "$8.49",
        "rating": 4.4
      }
    ]
  },
  {
    "id": 5,
    "name": "Indian Spice Hub",
    "img": img_13,
    "rating": 4.8,
    "reviews": [
      { "user": "Raj", "review": "Amazing flavors and textures!", "rating": 5 }
    ],
    "hours": { "open": "11:00 AM", "close": "10:00 PM" },
    "deliveryFee": "$3.00",
    "paymentMethods": ["Credit Card", "Cash on Delivery"],
    "locations": [
      { "city": "New Delhi", "address": "123 Spice St, Delhi", "phone": "+911234567890" }
    ],
    "dishes": [
      {
        "name": "Butter Chicken",
        "img": img_14,
        "price": "$14.99",
        "rating": 4.9
      },
      {
        "name": "Paneer Tikka",
        "img": img_15,
        "price": "$12.99",
        "rating": 4.8
      }
    ]
  },
  {
    "id": 6,
    "name": "Vegan Delights",
    "img": img_16,
    "rating": 4.6,
    "reviews": [
      { "user": "Tina", "review": "Great vegan options!", "rating": 5 }
    ],
    "hours": { "open": "8:00 AM", "close": "9:00 PM" },
    "deliveryFee": "$2.00",
    "paymentMethods": ["Credit Card", "Cash on Delivery"],
    "locations": [
      { "city": "Los Angeles", "address": "789 Vegan Blvd, LA", "phone": "+9876543210" }
    ],
    "dishes": [
      {
        "name": "Vegan Burger",
        "img": img_17,
        "price": "$10.99",
        "rating": 4.7
      },
      {
        "name": "Quinoa Salad",
        "img": img_18,
        "price": "$8.99",
        "rating": 4.6
      }
    ]
  },
  {
    "id": 7,
    "name": "Seafood Shack",
    "img": img_19,
    "rating": 4.7,
    "reviews": [
      { "user": "Sam", "review": "Best seafood I’ve had in a while.", "rating": 5 }
    ],
    "hours": { "open": "11:00 AM", "close": "10:00 PM" },
    "deliveryFee": "$3.50",
    "paymentMethods": ["Credit Card", "Cash on Delivery"],
    "locations": [
      { "city": "Miami", "address": "123 Ocean Dr, Miami", "phone": "+1234567890" }
    ],
    "dishes": [
      {
        "name": "Grilled Salmon",
        "img": img_20,
        "price": "$15.99",
        "rating": 4.8
      },
      {
        "name": "Shrimp Tacos",
        "img": img_21,
        "price": "$12.49",
        "rating": 4.7
      }
    ]
  },
  {
    "id": 8,
    "name": "French Fine Dining",
    "img": img_22,
    "rating": 4.9,
    "reviews": [
      { "user": "Emma", "review": "The best fine dining experience!", "rating": 5 }
    ],
    "hours": { "open": "12:00 PM", "close": "11:00 PM" },
    "deliveryFee": "$4.00",
    "paymentMethods": ["Credit Card", "Cash on Delivery"],
    "locations": [
      { "city": "Paris", "address": "10 Champs-Elysees, Paris", "phone": "+33123456789" }
    ],
    "dishes": [
      {
        "name": "Coq au Vin",
        "img": img_23,
        "price": "$22.99",
        "rating": 4.9
      },
      {
        "name": "Coq au Vin",
        "img": img_24,
        "price": "$22.99",
        "rating": 4.9
      }
    ]
  },


]


export const menuItems = [
  { "id": 1, "name": "menu_1", "image": menu_1},
  { "id": 2, "name": "menu_2", "image": menu_2 },
  { "id": 3, "name": "menu_3", "image": menu_3},
  { "id": 4, "name": "menu_4", "image": menu_4 },
  { "id": 5, "name": "menu_5", "image": menu_5 },
  { "id": 6, "name": "menu_6", "image": menu_6 },
  { "id": 7, "name": "menu_7", "image": menu_7 },
  { "id": 8, "name": "menu_8", "image": menu_8 }
]
