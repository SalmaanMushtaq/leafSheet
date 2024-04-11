// import { useState } from "react";
import { NavLink } from "react-router-dom";
// import styles from "./Navbar.module.css";
// FaSun
// import { FaMoon } from "react-icons/fa";

function Navbar() {
  // const [darkMode, setDarkMode] = useState(true);

  // const toggleDarkMode = () => {
  //   setDarkMode((prevMode) => !prevMode);
  //   // Here you can toggle your application's theme or update any other styles accordingly
  // };

  return (
    <nav className="flex sm:justify-end sm:items-center gap-4 pt-20 pb-3">
      {/* Navigation links */}
      <ul className="flex gap-4">
        <li>
          <NavLink
            to="/profile"
            className="p-1 px-6 bg-background rounded-full
          hover:shadow-[0px_0px_2px_10px] hover:shadow-yellow-950  hover:outline-none hover:ring-2 hover:ring-basic hover:ring-offset-2 hover:ring-offset-btnBackground"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className="p-1 px-6 bg-background rounded-full
            hover:shadow-[0px_0px_2px_10px] hover:shadow-yellow-950 hover:outline-none hover:ring-2 hover:ring-basic hover:ring-offset-2 hover:ring-offset-btnBackground"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="p-1 px-6 bg-background rounded-full 
           hover:shadow-[0px_0px_2px_10px] hover:shadow-yellow-950 hover:outline-none hover:ring-2 hover:ring-basic hover:ring-offset-2 hover:ring-offset-btnBackground"
          >
            Contact
          </NavLink>
        </li>
        {/* Dark mode/light mode toggle */}
        {/* <li>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className={styles.slider}>
              {darkMode && (
                <FaMoon className="w-[25px] h-auto p-[4px] bg-transparent" />
              )}
            </span>
          </label>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
