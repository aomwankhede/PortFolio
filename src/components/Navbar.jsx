import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { color } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 ">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flext">
            Aom Wankhede
          </p>
        </Link>
        <ul
          className="list-none hidden sm:flex flex-row gap-10"
          style={{ position: "absolute", right: "4rem" }}
        >
          {navLinks.map((nav) => (
            <li
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:'text-white text-[18px] font-medium cursor-pointer`}
              key={nav.id}
              style={{ margin: "4px" }}
              onClick={() => {
                setActive(nav.title);
              }}
            >
              {nav.title}
            </li>
          ))}
        </ul>

        <div className={"sm:hidden flex flex-1 justify-end items-center"}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={"w-[28px] h-[28px] object-contain cursor-pointer"}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bleck-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul
              className="list-none flex justify-end items-start flex-col gap-4"
              style={{
                backgroundColor: "black",
                border: "2px solid black",
                borderRadius: "4px",
              }}
            >
              {navLinks.map((nav) => (
                <li
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:'text-white text-[18px] font-medium cursor-pointer font-poppins font-medium cursor-pointer text-[15px]`}
                  key={nav.id}
                  style={{ margin: "4px" }}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(!toggle);
                  }}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
