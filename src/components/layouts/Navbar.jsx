import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import Button from "../common/Button";
import Container from "../common/Container";
import Logo from "../common/Logo";
import navigation from "../../data/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navigation.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `transition duration-300 hover:text-[#C9A227] ${
                        isActive
                          ? "text-[#C9A227] font-semibold"
                          : "text-gray-800"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center gap-5">
              <FaSearch className="text-xl cursor-pointer hover:text-[#C9A227] transition" />

              <FaHeart className="text-xl cursor-pointer hover:text-[#C9A227] transition" />

              <FaShoppingCart className="text-xl cursor-pointer hover:text-[#C9A227] transition" />

              <Button>Login</Button>
            </div>

            {/* Mobile Right Side */}
            <div className="flex items-center gap-4 lg:hidden">
              <FaShoppingCart className="text-xl cursor-pointer" />

              <button onClick={() => setIsMenuOpen(true)}>
                <FaBars className="text-2xl" />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <Logo />

          <button onClick={() => setIsMenuOpen(false)}>
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Navigation */}
        <ul className="flex flex-col p-6 gap-6">
          {navigation.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg transition ${
                    isActive
                      ? "text-[#C9A227] font-semibold"
                      : "text-gray-700 hover:text-[#C9A227]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="px-6 pt-4 border-t">
          <div className="flex gap-6 text-xl">
            <FaSearch className="cursor-pointer hover:text-[#C9A227] transition" />
            <FaHeart className="cursor-pointer hover:text-[#C9A227] transition" />
            <FaShoppingCart className="cursor-pointer hover:text-[#C9A227] transition" />
          </div>

          <div className="mt-8">
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;