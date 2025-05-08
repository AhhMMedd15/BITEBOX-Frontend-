import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./button";
import {
  ClipboardList,
  Home,
  icons,
  LayoutDashboard,
  List,
  LogOut,
  Menu,
  Moon,
  Package,
  ShoppingCart,
  Sun,
  User,
  Utensils,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

const Navbar = () => {
  const handlemainpage = () => {
    navigate("/");
  };
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handlelogout = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="w-full h-[80px] bg-pastel">
        <nav
          className={`fixed top-0 z-10 w-full text-white font-OpenSans transition-transform duration-500 ease-in-out ${showNavbar ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          <div className="nav-content h-[80px] md:w-[100vw] bg-deep-teal flex justify-between items-center lg:px-20 px-5 md:py-5 ">
            <div className="left ">
              <div className="min-w-[15vw] h-[20vh] cursor-pointer">
                <img
                  onClick={handlemainpage}
                  className="w-full h-full object-cover"
                  src="Logo Bitebox.png"
                  alt="Loading..."
                />
              </div>
            </div>
            <div className="center"></div>
            <div className="right hidden lg:flex items-center gap-5">
              <div className="flex font-semibold items-center gap-5">
                <Link
                  to="/"
                  className="transition-all hover:-translate-y-[2px]"
                >
                  Home
                </Link>
                <Link
                  to="/profile"
                  className="transition-all hover:-translate-y-[2px]"
                >
                  Profile
                </Link>
                <Link
                  to="/orders"
                  className="transition-all hover:-translate-y-[2px]"
                >
                  Orders
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className='bg-deep-teal border-2 outline-0 px-5 py-2 rounded-2xl transition-all hover:-translate-y-[2px] cursor-pointer'>Dashboard</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link to='/admin/restaurant'><DropdownMenuItem>Restaurant</DropdownMenuItem></Link>
                    <Link to='/admin/dishes'><DropdownMenuItem>Dishes</DropdownMenuItem></Link>
                    <Link to='/admin/orders'><DropdownMenuItem>Orders</DropdownMenuItem></Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center gap-5">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Sun className="h-[1.2rem] w-[1.2rem] text-black rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Dark
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="relative transition-all hover:-translate-y-[2px]">
                  <Link to="/addtocart">
                    <ShoppingCart />

                    <Button
                      size={icons}
                      className="bg-red-600 absolute -inset-y-2.5 text-center text-sm p-1 rounded-full w-auto h-4 ml-3"
                    >
                      0
                    </Button>
                  </Link>
                </div>

                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Button
                  onClick={handlelogout}
                  className="shadow-2xl border-2 cursor-pointer transition-all hover:-translate-y-[2px]"
                >
                  Log Out
                </Button>
              </div>
            </div>

            <MobileRsponsive />
          </div>
        </nav>
      </div>
    </>
  );
};

const MobileRsponsive = () => {
  return (
    <>
      <div className="lg:hidden flex items-center gap-3">
        {/* Sheet menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="w-full h-[25px]"></Menu>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="lg:hidden flex flex-col justify-between bg-white text-black p-6 w-80 md:w-100"
          >
            {/* Header */}
            <div>
              <SheetHeader>
                <SheetTitle className="text-xl mb-4">Menu</SheetTitle>
              </SheetHeader>

              {/* User Info */}
              <div className="flex items-center gap-3 mb-6">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?img=3" />
                  <AvatarFallback>BB</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-base">AHMED ASIF</p>
                  <p className="text-sm text-gray-500">Customer</p>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-3 font-medium">
                <SheetClose asChild>
                  <Link
                    to="/"
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-mint"
                  >
                    <Home className="w-5 h-5" /> Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-mint"
                  >
                    <User className="w-5 h-5" /> Profile
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/orders"
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-mint"
                  >
                    <Package className="w-5 h-5" /> Orders
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/admin/restaurant"
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-mint"
                  >
                    <Utensils className="w-5 h-5" /> Restaurant
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/admin/dishes"
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-mint"
                  >
                    <List className="w-5 h-5" /> Dish
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/admin/orders"
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-mint"
                  >
                    <ClipboardList className="w-5 h-5" /> Orders
                  </Link>
                </SheetClose>
              </div>

              {/* Cart */}
              <div className="flex relative items-center gap-3 mt-6 p-2 rounded-md hover:bg-mint">
              <Link to="/addtocart">
                    <ShoppingCart />

                    <Button
                      size={icons}
                      className="bg-red-600 absolute -inset-y-1 text-center text-sm p-1 rounded-full w-auto h-4 ml-3"
                    >
                      0
                    </Button>
                  </Link>
                  <Link to="/addtocart">
                <span className="ml-1">Cart</span></Link>
              </div>
            </div>
          
            {/* Logout */}
            <div className="mt-6">
              <SheetClose asChild>
                <Button className="w-full bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2">
                  <LogOut className="w-4 h-4" /> Log Out
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navbar;
