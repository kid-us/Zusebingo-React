import { Link } from "react-router-dom";
import { BingoBoard } from "../Pages/Game";

interface Props {
  user: string;
  payout?: number | string;
  pattern?: (number | string)[];
  winnerBoard?: BingoBoard;
}

const Lose = ({ user, winnerBoard, pattern }: Props) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="fixed flex z-50 justify-center w-full h-full items-center">
        <div className="lg:w-[27%] md:w-[28%] w-[90%] rounded bg-white py-5 shadow-lg shadow-red-950">
          <h1 className="bi-heartbreak-fill text-center text-6xl text-red-800"></h1>
          <h1 className="text-center font-bold font-poppins mt-2">
            Good Luck next time
          </h1>
          <p className="text-center font-poppins mt-1 text-lg">
            User{" "}
            <span className="text-green-700 font-extrabold font-poppins">
              {user}
            </span>{" "}
            has won the game.
          </p>
          <div className="grid grid-cols-5 mt-5 ms-14 font-poppins">
            <h1>B</h1>
            <h1>I</h1>
            <h1>N</h1>
            <h1>G</h1>
            <h1>O</h1>
          </div>
          {/* Bingo Numbers */}
          <div className="grid grid-cols-5  mt-2 mx-10">
            {/* B */}
            <div>
              {winnerBoard?.B.map((b) => (
                <p
                  key={b}
                  className={`${
                    pattern?.includes(b)
                      ? "bg-green-900 text-white"
                      : "bg-white text-black"
                  } border rounded font-poppins text-center shadow shadow-zinc-900 py-3 font-extrabold m-[1px]`}
                >
                  {b}
                </p>
              ))}
            </div>

            {/* I */}
            <div>
              {winnerBoard?.I.map((i) => (
                <p
                  key={i}
                  className={`${
                    pattern?.includes(i)
                      ? "bg-green-900 text-white"
                      : "bg-white text-black"
                  } border rounded font-poppins text-center shadow shadow-zinc-900 py-3 font-extrabold m-[1px]`}
                >
                  {i}
                </p>
              ))}
            </div>

            {/* N */}
            <div>
              {winnerBoard?.N.map((n) => (
                <p
                  key={n}
                  className={`${
                    pattern?.includes(n)
                      ? "bg-green-900 text-white"
                      : "bg-white text-black"
                  } border rounded font-poppins text-center shadow shadow-zinc-900 py-3 font-extrabold m-[1px]`}
                >
                  {n}
                </p>
              ))}
            </div>

            {/* G */}
            <div>
              {winnerBoard?.G.map((g) => (
                <p
                  key={g}
                  className={`${
                    pattern?.includes(g)
                      ? "bg-green-900 text-white"
                      : "bg-white text-black"
                  } border rounded font-poppins text-center shadow shadow-zinc-900 py-3 font-extrabold m-[1px]`}
                >
                  {g}
                </p>
              ))}
            </div>

            {/* O */}
            <div>
              {winnerBoard?.O.map((o) => (
                <p
                  key={o}
                  className={`${
                    pattern?.includes(o)
                      ? "bg-green-900 text-white"
                      : "bg-white text-black"
                  } border rounded font-poppins text-center shadow shadow-zinc-900 py-3 font-extrabold m-[1px]`}
                >
                  {o}
                </p>
              ))}
            </div>
          </div>
          <div className="mx-11 mt-5">
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
