// import axios from "axios";
import { useState } from "react";
import "animate.css";
import { logo } from "../../assets";
import Menu from "./Menu";
import { Link } from "react-router-dom";
const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className={`fixed nav-bg shadow w-full z-50 ${menu && "bg2"}`}>
        <div className="container mx-auto py-1">
          <div className="flex justify-between">
            <Link to="/" className="flex">
              <img src={logo} alt="Logo" className="w-[60px]" />
              <p className="mt-4 ms-3 text-xl font-poppins">Zusebingo</p>
            </Link>
            {/* Large Device*/}
            <div className="lg:flex hidden mt-5 space-x-10">
              <div className="flex">
                <p className="bi-cash text-xl me-2"></p>
                <p className="text-lg chakra">
                  Balance <span className="text-white chakra">200</span>
                </p>
              </div>
              <div
                onClick={() => setMenu(!menu)}
                className="flex cursor-pointer"
              >
                <p className="bi-person-fill text-xl me-2"></p>
                <p className="text-white text-lg chakra uppercase">Ethan</p>
              </div>
            </div>
            {/* Small device */}
            <div onClick={() => setMenu(!menu)} className="lg:hidden me-2 mt-3">
              <p
                className={`${menu ? "bi-x" : "bi-list"} text-white text-3xl`}
              ></p>
            </div>
          </div>
        </div>
      </div>
      {/* Menu */}
      {menu && <Menu menu={menu} onMenu={(val: boolean) => setMenu(val)} />}
    </>
  );
};

export default Nav;
