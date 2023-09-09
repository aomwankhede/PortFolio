import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { color } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto" style={{justifyContent:'center'}}>
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Aom Wankhede
          </p>
          <ul style={{ display: "flex" }}>
            {navLinks.map((nav) => (
              <li key={nav.id} style={{ margin: "4px" }}>
                {nav.title}
              </li>
            ))}
          </ul>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
