"use client";
import { useState } from "react";
import Button from "../components/Button";
import Navlink from "../components/Navlink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full bg-color-background fixed top-0 px-mobile lg:px-main border-b border-color-border z-50">
      <div className="max-w-content mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="w-fit h-fit">
          <a href="/">
            <img
              src="./logo.png"
              alt="logo"
              className="w-full h-10 object-contain"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-fontweight-medium">
          <Navlink label="Home" href="/" active />
          <Navlink label="About" href="#about" />
          <Navlink label="Services" href="#services" />
          <Button label="Contact" size="sm" />
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-[55]"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-current"></span>
          <span className="w-6 h-0.5 bg-current"></span>
          <span className="w-6 h-0.5 bg-current"></span>
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-color-background z-[60]">
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button onClick={closeMenu} className="p-2" aria-label="Close menu">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="h-full flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center gap-8 font-fontweight-medium text-xl">
              <Navlink label="Home" href="/" active onClick={closeMenu} />
              <Navlink label="About" href="#about" onClick={closeMenu} />
              <Navlink label="Services" href="#services" onClick={closeMenu} />
            </ul>

            <div className="mt-12">
              <Button label="Contact" size="lg" onClick={closeMenu} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
