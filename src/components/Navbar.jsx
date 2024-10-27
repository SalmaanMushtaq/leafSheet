import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FcHome, FcBusinessman, FcContacts } from "react-icons/fc";

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  // Add an event listener to toggle sticky state
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header className="container mx-auto">
      {/* Desktop Navbar */}
      <nav
        className={`container px-16 hidden  sm:flex sm:justify-end sm:items-center gap-4 pt-8 pb-3
        ${isFixed ? "fixed top-0 w-full z-10" : ""}`}
      >
        <ul className="flex gap-4 flex-wrap">
          <li>
            <NavLink
              to="/profile"
              className="p-1 px-6 bg-background rounded-full transition-all duration-200
              hover:shadow-[0px_0px_2px_10px] hover:shadow-yellow-950 hover:outline-none hover:ring-2 hover:ring-basic hover:ring-offset-2 hover:ring-offset-btnBackground"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className="p-1 px-6 bg-background rounded-full transition-all duration-200
              hover:shadow-[0px_0px_2px_10px] hover:shadow-yellow-950 hover:outline-none hover:ring-2 hover:ring-basic hover:ring-offset-2 hover:ring-offset-btnBackground"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="p-1 px-6 bg-background rounded-full transition-all duration-200
              hover:shadow-[0px_0px_2px_10px] hover:shadow-yellow-950 hover:outline-none hover:ring-2 hover:ring-basic hover:ring-offset-2 hover:ring-offset-btnBackground"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`flex sm:hidden justify-center items-center py-4 ${
          isFixed ? "w-full fixed top-0  z-10" : ""
        }`}
      >
        <ul className="flex items-center gap-16">
          <li>
            <NavLink to="/profile">
              <FcHome className="text-4xl transition-transform duration-200 hover:scale-110" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">
              <FcBusinessman className="text-4xl transition-transform duration-200 hover:scale-110" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FcContacts className="text-4xl transition-transform duration-200 hover:scale-110" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
