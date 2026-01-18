"use client";
import { useState } from "react";
import Button from "../components/Button";
import Navlink from "../components/Navlink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-color-background fixed top-0 px-4 lg:px-main border-b border-color-border z-50">
      <div className="max-w-content mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="w-auto h-10">
          <img
            src="./logo.png"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-fontweight-medium">
          <Navlink label="Home" href="/" active />
          <Navlink label="About" href="/about" />
          <Navlink label="Services" href="/services" />
          <Button label="Contact" size="sm" />
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-60"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-color-background z-50">
          {/* Close button at top right */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
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

          {/* Centered Navigation Links */}
          <div className="h-full flex flex-col items-center justify-center relative -top-24">
            <ul className="flex flex-col items-center gap-8 font-fontweight-medium text-xl">
              <Navlink label="Home" href="/" active />
              <Navlink label="About" href="/about" />
              <Navlink label="Services" href="/services" />
            </ul>

            {/* Contact Button - Centered below links */}
            <div className="mt-12">
              <Button
                label="Contact"
                size="lg"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
