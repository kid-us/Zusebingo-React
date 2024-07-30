import { useEffect, useState } from "react";
import Number from "../Game/Number";

interface BingoBoard {
  B: number[];
  I: number[];
  N: (number | string)[];
  G: number[];
  O: number[];
}

const Game = () => {
  const startSeconds = localStorage.getItem("startSecond");
  const [markedNumber, setMarked] = useState<number[]>([]);
  const [board, setBoard] = useState<BingoBoard>({
    B: [],
    I: [],
    N: [],
    G: [],
    O: [],
  });

  useEffect(() => {
    const fetchData = () => {
      const storedData = localStorage.getItem("board");
      if (storedData) {
        const data: BingoBoard = JSON.parse(storedData);
        setBoard(data);
      } else {
        console.error("No data found in local storage");
      }
    };

    fetchData();
  }, [startSeconds]);

  const calledNumber = 35;
  const calledNumbers = [4, 2, 16, 23, 32, 73, 62, 44, 31];

  const handleNumberClick = (num: number) => {
    if (calledNumbers.includes(num)) {
      setMarked([...markedNumber, num]);
    }
  };

  return (
    <div className="bg2 h-[100vh]">
      <div className="container mx-auto flex justify-center">
        <div>
          <p className="font-poppins mb-5 mt-2 ps-2">
            Total Callout: <span className="chakra text-lg text-white">10</span>
          </p>
          <div className="grid grid-cols-5 text-center text-white font-extrabold">
            <h1 className="text-2xl">B</h1>
            <h1 className="text-2xl">I</h1>
            <h1 className="text-2xl">N</h1>
            <h1 className="text-2xl">G</h1>
            <h1 className="text-2xl">O</h1>
          </div>

          <div className="grid grid-cols-5 mt-2">
            {/* B */}
            <div>
              {board.B.map((b) => (
                <Number
                  key={b}
                  onMark={(num: number) => handleNumberClick(num)}
                  number={b}
                  calledNum={calledNumber}
                  markedNumbers={markedNumber}
                />
              ))}
            </div>

            {/* I */}
            <div>
              {board.I.map((i) => (
                <Number
                  key={i}
                  onMark={(num: number) => handleNumberClick(num)}
                  number={i}
                  calledNum={calledNumber}
                  markedNumbers={markedNumber}
                />
              ))}
            </div>

            {/* N */}
            <div>
              {board.N.map((n) => (
                <Number
                  key={n}
                  onMark={(num: number) => handleNumberClick(num)}
                  number={n}
                  calledNum={calledNumber}
                  markedNumbers={markedNumber}
                />
              ))}
            </div>

            {/* G */}
            <div>
              {board.G.map((g) => (
                <Number
                  key={g}
                  onMark={(num: number) => handleNumberClick(num)}
                  number={g}
                  calledNum={calledNumber}
                  markedNumbers={markedNumber}
                />
              ))}
            </div>

            {/* O */}
            <div>
              {board.O.map((o) => (
                <Number
                  key={o}
                  onMark={(num: number) => handleNumberClick(num)}
                  number={o}
                  calledNum={calledNumber}
                  markedNumbers={markedNumber}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-white font-poppins mt-3 ps-2 text-lg">
              Payout{" "}
              <span className="text-black font-bold font-poppins">490br</span>
            </p>
            <p className="text-white font-poppins mt-3 pe-2 text-lg">
              Board{" "}
              <span className="text-black font-bold font-poppins">#20</span>
            </p>
          </div>
          <div className="my-8 text-center px-2">
            <button className="py-3 text-black btn-bg w-full rounded font-poppins text-lg shadow shadow-zinc-950 chakra">
              Bingo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
