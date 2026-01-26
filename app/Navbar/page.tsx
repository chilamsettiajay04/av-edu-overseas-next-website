"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Button from "../components/Button";
import Navlink from "../components/Navlink";
import openWhatsApp from "../utils/whatsapp";
import { siteContent } from "../constants/siteContent";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [showFab, setShowFab] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = siteContent.navbar.links;

  // Helper function to handle navigation
  const handleNavigation = (href: string, label: string) => {
    const sectionId = href.replace("#", "");
    const isHomePage = pathname === "/" || pathname === "";

    if (isHomePage) {
      // Already on home page, just scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // On another route, navigate to home with hash
      router.push(`/#${sectionId}`);
    }

    setActiveTab(label);
    closeMenu();
  };

  // Show/hide FAB on scroll (only mobile)
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;

      if (window.innerWidth < 768) {
        const scrollPos = window.scrollY;
        setShowFab(scrollPos > 100);
      } else {
        setShowFab(false); // always show navbar on larger screens
      }
    };

    // Initial check after mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // recalc on resize
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Determine active tab based on route
  useEffect(() => {
    const isHomePage = pathname === "/" || pathname === "";

    if (!isHomePage) {
      // On non-home pages, highlight based on route
      // Extract route name from pathname (e.g., "/About" -> "About", "/services" -> "services")
      const routeName = pathname.replace("/", "");

      // Find matching nav item (case-insensitive)
      const matchingItem = navItems.find(
        (item) => item.label.toLowerCase() === routeName.toLowerCase()
      );

      if (matchingItem) {
        setActiveTab(matchingItem.label);
      } else {
        setActiveTab("");
      }
      return;
    }

    // On home page, use scroll-based highlighting
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const sectionId = navItems[i].href.replace("#", "");
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPos) {
          setActiveTab(navItems[i].label);
          break;
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, navItems]);

  // Handle hash navigation on page load (when coming from another route)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace("#", "");
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`w-full bg-color-background fixed top-0 px-mobile lg:px-main border-b border-color-border z-40 transition-transform duration-300
          md:translate-y-0
          ${showFab && isOpen ? "translate-y-0" : showFab ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <div className="max-w-content w-full flex items-center justify-between mx-auto h-16">
          {/* Logo */}
          <div className="w-fit h-fit">
            <button
              onClick={() => handleNavigation("#home", "Home")}
              className="cursor-pointer"
              aria-label="Go to home"
            >
              <Image
                src={siteContent.navbar.logo.src}
                alt={siteContent.navbar.logo.alt}
                width={150}
                height={40}
                className="w-full h-10 object-contain"
                priority
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 font-fontweight-medium">
            {navItems.map((item) => (
              <Navlink
                key={item.label}
                label={item.label}
                href={item.href}
                active={activeTab === item.label}
                onClick={() => handleNavigation(item.href, item.label)}
              />
            ))}
            <Button
              label={siteContent.navbar.cta.label}
              onClick={() => openWhatsApp()}
              size="sm"
            />
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={toggleMenu}
            aria-label={
              isOpen
                ? siteContent.navbar.menu.closeAria
                : siteContent.navbar.menu.openAria
            }
          >
            <span className="w-6 h-0.5 bg-current"></span>
            <span className="w-6 h-0.5 bg-current"></span>
            <span className="w-6 h-0.5 bg-current"></span>
          </button>
        </div>
      </nav>

      {/* Mobile FAB */}
      {showFab && (
        <button
          onClick={toggleMenu}
          className="md:hidden fixed bottom-6 right-6 z-[55] w-14 h-14 rounded-full bg-color-accent text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-700 hover:scale-110"
          aria-label={
            isOpen
              ? siteContent.navbar.menu.closeAria
              : siteContent.navbar.menu.openAria
          }
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
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
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      )}

      {/* Mobile Menu Popup */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[60]">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={closeMenu} />

          {/* Popup Menu */}
          <div className="absolute bottom-0 left-0 right-0 bg-color-background rounded-t-2xl shadow-2xl max-h-[70vh] overflow-hidden">
            {/* Drag handle */}
            <div className="pt-4 flex justify-center">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
            </div>

            {/* Menu Items */}
            <div className="p-6">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <button
                      className={`w-full flex items-center justify-between p-4 rounded-lg transition-colors ${activeTab === item.label
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-gray-50"
                        }`}
                      onClick={() => handleNavigation(item.href, item.label)}
                    >
                      <span className="font-fontweight-medium">
                        {item.label}
                      </span>
                      {activeTab === item.label && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Contact Button */}
              <div className="mt-8 pt-6 border-t border-color-border">
                <Button
                  label={siteContent.navbar.cta.mobileLabel}
                  onClick={() => openWhatsApp()}
                  size="lg"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
