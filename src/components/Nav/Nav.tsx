// import axios from "axios";
import { useEffect, useState } from "react";
import "animate.css";
import { logo } from "../../assets";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import useAuth from "../../store/useAuth";
import axios from "axios";
import { baseUrl } from "../../services/apiClient";
import { UserProps } from "../Protected/Protected";

const Nav = () => {
  const { username, wallet, login } = useAuth();
  const [menu, setMenu] = useState(false);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .post<UserProps>(
        `${baseUrl}/auth/me`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        // console.log(loading);
        // setLoading(true);
        login(
          response.data.id,
          response.data.wallet,
          response.data.username,
          response.data.phone_number,
          response.data.referral_code,
          response.data.social_media_link,
          response.data.can_create_group_game
        );
      })
      .catch((error) => {
        // setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className={`fixed nav-bg shadow w-full z-40 ${menu && "bg2"}`}>
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
                  Balance <span className="text-white chakra">{wallet}</span>
                </p>
              </div>
              <div
                onClick={() => setMenu(!menu)}
                className="flex cursor-pointer"
              >
                <p className="bi-person-fill text-xl me-2"></p>
                <p className="text-white text-lg chakra uppercase">
                  {username}
                </p>
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
      {menu && (
        <Menu
          username={username ? username : ""}
          balance={wallet ? wallet : 0}
          menu={menu}
          onMenu={(val: boolean) => setMenu(val)}
        />
      )}
    </>
  );
};

export default Nav;
