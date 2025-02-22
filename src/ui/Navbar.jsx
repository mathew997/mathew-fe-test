import { useState } from "react";
import routes from "../lib/routes";
import { CommentsIcon } from "../lib/icon";

const Navbar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSubmenu = (index) => {
    setIsSubmenuOpen(isSubmenuOpen === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Shared component for rendering menu items
  const MenuItems = ({ isMobile = false }) => {
    const commonClasses = {
      link: isMobile
        ? "block px-4 py-2 text-white hover:bg-gray-700"
        : "text-white hover:text-gray-300 transition-colors ease-in-out duration-300",
      button: isMobile
        ? "w-full text-left px-4 py-2 text-white hover:bg-gray-700 flex items-center justify-between"
        : "text-white hover:text-gray-300 flex items-center transition-colors ease-in-out duration-300",
      submenu: isMobile
        ? "bg-gray-700"
        : "absolute left-0 mt-2 bg-white border rounded shadow-lg",
      submenuItem: isMobile
        ? "block px-4 py-2 text-white hover:bg-gray-600"
        : "block transition-colors ease-in-out duration-300 px-4 py-2 text-gray-800 hover:bg-gray-200",
    };

    return routes?.map((route, index) => (
      <div key={index} className={isMobile ? "" : "relative"}>
        {route.children ? (
          <>
            <button
              onClick={() => toggleSubmenu(index)}
              className={commonClasses.button}
            >
              {route.label}
              <svg
                className={isMobile ? "w-4 h-4" : "w-4 h-4 ml-1"}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isSubmenuOpen === index && (
              <div className={commonClasses.submenu}>
                {route.children.map((child, i) => (
                  <a
                    key={i}
                    href={child.href}
                    className={commonClasses.submenuItem}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </>
        ) : (
          <a href={route.href} className={commonClasses.link}>
            {route.label}
          </a>
        )}
      </div>
    ));
  };

  return (
    <nav className="font-brand-bold py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden lg:flex space-x-4">
          <MenuItems />
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex gap-1.5 items-center">
          <span className="text-[#DAD2D8]">
            <CommentsIcon />
          </span>
          Contact
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <MenuItems isMobile={true} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
