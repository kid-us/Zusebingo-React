import Nav from "../Nav/Nav";
import { Input } from "../BetInputs/Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../store/useAuth";

const Home = () => {
  const { can_create_group_game, wallet } = useAuth();

  const navigate = useNavigate();

  // Balance Error
  const [balanceError, setBalanceError] = useState(false);

  // Handle Category
  const handleCategory = (numCategory: number, stringCategory: string) => {
    if (wallet) {
      if (wallet < Number(numCategory)) {
        setBalanceError(true);
      } else {
        navigate(`/card-picker?category=${stringCategory}`);
      }
    }
  };

  return (
    <div className="bg">
      <Nav />
      <div className="container mx-auto flex justify-center align-middle h-auto pt-24">
        <div className="lg:w-[38%] px-2">
          <p className="lg:mt-5 lg:mb-4 lg:text-2xl text-xl font-poppins">
            Choose Bet Category
          </p>

          <p className="text-white chakra lg:text-md text-sm mt-2">
            <span className="bi-gift-fill text-red-700"></span> Rev up the Fun:
            Join Group Games & Score Big Wins!
          </p>

          <div className="mt-5 text-center w-full">
            {/* {!can_create_group_game && ( */}
            <Link to={"/groups"}>
              <p className="py-3 text-black btn-bg w-full rounded font-poppins text-lg shadow shadow-zinc-950 chakra">
                Join Group Games
              </p>
            </Link>
            {/* )} */}
          </div>

          {balanceError && (
            <div className="flex justify-between bg-red-600 rounded py-1 mt-5">
              <p className=" animate__animated animate__fadeIn text-gray-100 ps-5 text-sm">
                Your balance is too Low! Deposit and Play
              </p>
              <Link
                to="/balance"
                className="px-8 me-1 text-sm rounded shadow shadow-white text-md bg-sky-600 text-white"
              >
                Deposit Here
              </Link>
            </div>
          )}

          {/* <!-- Category Form --> */}
          <form className="pt-5">
            <Input
              numAmount={10}
              amount="ten"
              onClick={(numCategory: number, stringCategory: string) =>
                handleCategory(numCategory, stringCategory)
              }
            />
            <Input
              numAmount={25}
              amount="twenty_five"
              onClick={(numCategory: number, stringCategory: string) =>
                handleCategory(numCategory, stringCategory)
              }
            />
            <Input
              numAmount={50}
              amount="fifty"
              onClick={(numCategory: number, stringCategory: string) =>
                handleCategory(numCategory, stringCategory)
              }
            />
            <Input
              numAmount={100}
              amount="hundred"
              onClick={(numCategory: number, stringCategory: string) =>
                handleCategory(numCategory, stringCategory)
              }
            />

            {can_create_group_game && (
              <div className="mt-8 text-center">
                <Link to={"/create-group"}>
                  <p className="py-3 text-black btn-bg w-full rounded font-poppins text-lg shadow shadow-zinc-950 chakra">
                    Create Group Game
                  </p>
                </Link>
              </div>
            )}

            <p className="mt-5 text-sm font-poppins">
              Please reach out to our{" "}
              <Link
                to="https://t.me/+UGpMJ8GPTVw2MGUx"
                className="text-white font-poppins"
              >
                Telegram
              </Link>{" "}
              customer support for assistance.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
