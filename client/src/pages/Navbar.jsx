import { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="text-2xl font-extrabold tracking-wide">
            MyBrand
          </div>

          {/* Center: Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative group px-2 py-1 font-medium transition duration-300 
                  ${isActive ? "text-yellow-300" : "hover:text-gray-200"}`
                }
              >
                {item.name}
                {/* Animated underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Right: Button */}
          <div className="hidden md:block">
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-500 transition duration-300 shadow-md">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">&#10005;</span>
              ) : (
                <span className="text-2xl">&#9776;</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-700 to-pink-700 px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-2 py-2 rounded-md transition duration-300 
                ${isActive ? "bg-yellow-400 text-black" : "hover:bg-purple-600"}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button className="w-full mt-2 bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
