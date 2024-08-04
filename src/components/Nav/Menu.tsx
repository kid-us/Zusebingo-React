import { Link, useLocation } from "react-router-dom";
import navMenu from "../../services/navMenu";
import axios from "axios";
import { baseUrl } from "../../services/apiClient";
import useAuth from "../../store/useAuth";

interface Props {
  username: string;
  balance: number;
  menu: boolean;
  onMenu: (val: boolean) => void;
}

const Menu = ({ menu, onMenu, balance, username }: Props) => {
  const location = useLocation();
  const path = location.pathname;

  const { logout } = useAuth();

  const handleLogout = () => {
    axios
      .post(
        `${baseUrl}/api/v2/auth/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        logout();
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div onClick={() => onMenu(false)} className="overlay z-10"></div>
      <div
        className={`fixed ${
          menu
            ? "animate__animated animate__fadeInRight"
            : "animate__animated animate__fadeOutRight"
        } top-16 mt-1 right-0 w-full lg:w-[22%] bg-white z-20 bg lg:rounded lg:px-10 px-7 lg:pt-16`}
      >
        <div className="lg:hidden flex justify-between py-7">
          <div>
            <p className="uppercase chakra text-2xl text-white">
              <span className="bi-person-fill me-2"></span>
              {username}
            </p>
          </div>
          <div>
            <p className="uppercase chakra text-2xl text-white">
              <span className="bi-cash me-2"></span>
              {balance}
            </p>
          </div>
        </div>

        <hr className="lg:hidden py-4 border[1px] border-zinc-950 " />

        {navMenu.map((menus) => (
          <Link
            key={menus.icon}
            to={menus.link}
            className="flex lg:mb-8 mb-5 hover:text-gray-800"
          >
            <p className={`${menus.icon} text-white text-2xl me-4`}></p>
            <p
              className={`lg:text-xl ${
                menus.link == path && "text-white"
              } text-2xl chakra `}
            >
              {menus.name}
            </p>
          </Link>
        ))}

        <hr className="border[1px] border-zinc-950 " />

        <div
          onClick={() => handleLogout()}
          className="flex mt-8 cursor-pointer"
        >
          <p className={`bi-arrow-bar-right text-white text-2xl me-4`}></p>
          <p className="lg:text-xl text-2xl chakra">Logout</p>
        </div>
        <div className="absolute bottom-24">
          <Link to="/license" className="chakra">
            License Agreement and Rules
          </Link>
          <p className="mt-3 lg:text-center text-white chakra">
            &copy; Zusebingo
          </p>
        </div>
      </div>
    </>
  );
};

export default Menu;
