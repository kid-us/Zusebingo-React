import { Link } from "react-router-dom";

interface Props {
  user: string;
  payout?: number | string;
}

const Lose = ({ user }: Props) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="fixed flex z-50 justify-center w-full h-full items-center">
        <div className="lg:w-[27%] md:w-[28%] w-[90%] rounded bg-white py-5 shadow-lg shadow-red-950">
          <h1 className="bi-heartbreak-fill text-center text-6xl text-red-800"></h1>

          <p className="text-center font-poppins mt-5 text-xl">
            User{" "}
            <span className="text-green-800 font-extrabold font-poppins">
              {user}
            </span>{" "}
            has won the game.
          </p>
          <h1 className="text-center font-bold font-poppins mt-2 mb-5">
            Good Luck next time
          </h1>
          <div className="mx-16">
            <Link to={"/"}>
              <p className="font-poppins text-center btn-bg shadow shadow-zinc-900 rounded py-3 font-extrabold">
                Try Again
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lose;
