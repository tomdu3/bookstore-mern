import React from "react";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";

const navigation = [
  {
    name: "Dashboard",
    href: "/user-dashboard",
  },
  {
    name: "Orders",
    href: "/orders",
  },
  {
    name: "Cart Page",
    href: "/cart",
  },
  {
    name: "Checkout",
    href: "/checkout",
  },
];

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* Search Bar */}
        <div className="relative sm:w-72 w-40 flex items-center">
          <IoSearchOutline className="text-2xl absolute left-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#eaeaea] w-full py-1 pl-10 pr-4 rounded-md focus:outline-none"
          />
        </div>

        {/* Menu Button (Mobile) */}
        <div className="flex items-center md:gap-16 gap-4">
          <button className="md:hidden">
            <RiMenu2Fill />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navigation.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-gray-500 hover:text-gray-700"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Icons (Wishlist, Cart) */}
        <div className="flex items-center gap-4">
          <button>
            <HiOutlineHeart className="size-6" />
          </button>
          <button>
            <HiOutlineShoppingCart className="size-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;