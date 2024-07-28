import Nav from "../Nav/Nav";
import { Input } from "../BetInputs/Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [balanceError, setBalanceError] = useState(false);
  const handleCategory = (category: string) => {
    let balance = 20;
    if (balance < Number(category)) {
      setBalanceError(true);
    } else {
      navigate(`/card-picker?category=${category}`);
    }
  };

  return (
    <div className="bg">
      <Nav />
      <div className="container mx-auto flex justify-center align-middle h-auto pt-24">
        <div className="lg:w-[38%] px-2">
          <p className="lg:mt-5 lg:mb-4 text-2xl">Choose Bet Category</p>
          {balanceError && (
            <div className="flex justify-between bg-red-600 rounded py-1 my-5">
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
            {/* <Input amount="5" /> */}
            <Input
              amount="10"
              onClick={(category: string) => handleCategory(category)}
            />
            <Input
              amount="25"
              onClick={(category: string) => handleCategory(category)}
            />
            <Input
              amount="50"
              onClick={(category: string) => handleCategory(category)}
            />
            <Input
              amount="100"
              onClick={(category: string) => handleCategory(category)}
            />

            <div className="mt-8 text-center">
              <button className="py-3 text-black btn-bg w-full rounded font-poppins text-lg shadow shadow-zinc-950 chakra">
                Create Group Game
              </button>
            </div>
            <p className="mt-5 text-sm ">
              Please reach out to our{" "}
              <Link to="https://t.me/+UGpMJ8GPTVw2MGUx" className="text-white">
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
