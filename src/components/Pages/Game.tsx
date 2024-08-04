import { useEffect, useState } from "react";
import Number from "../Game/Number";
import CallOut from "../Game/CallOut";
import Counter from "../Modal/Counter";
import socket from "../../services/socket";
import Win from "../Modal/Win";
import Lose from "../Modal/Lose";
import FalseWin from "../Modal/FalseWin";
import useAuth from "../../store/useAuth";
// import Bingo75 from "../Game/Bingo75";

export interface BingoBoard {
  B: number[];
  I: number[];
  N: (number | string)[];
  G: number[];
  O: number[];
}

const Game2 = () => {
  const { id, username } = useAuth();
  const [loader, setLoader] = useState<boolean>(false);

  const startSeconds = localStorage.getItem("startSecond");
  const cardNo = localStorage.getItem("card");
  let num;
  if (startSeconds) {
    num = parseInt(startSeconds);
  } else {
    num = 0;
  }
  const [seconds, setSeconds] = useState<number>(num);
  const [totalPayout, setTotalPayout] = useState<number>(0);
  const [caller, setCaller] = useState<number | undefined>();
  const [calledNumbers, setCalledNumbers] = useState<number[]>([]);
  const [winMessage, setWinMessage] = useState<boolean>(false);
  const [loseMessage, setLoseMessage] = useState<boolean>(false);
  const [falseWin, setFalseWin] = useState<boolean>(false);
  const [winUser, setWinUser] = useState();
  const [winnerBoard, setWinnerBoard] = useState<BingoBoard>();
  const [winnerPattern, setWinnerPattern] = useState<(number | string)[]>([]);
  const [board, setBoard] = useState<BingoBoard>({
    B: [],
    I: [],
    N: [],
    G: [],
    O: [],
  });

  // Seconds and Bingo Board
  useEffect(() => {
    const fetchData = () => {
      const storedData = localStorage.getItem("board");
      if (storedData) {
        const data: BingoBoard = JSON.parse(storedData);
        setBoard(data);
      }
    };

    fetchData();

    if (seconds > 0) {
      const interval = setInterval(() => {
        if (typeof seconds === "number") {
          setSeconds((prevSeconds) => prevSeconds - 1);
          localStorage.setItem("startSecond", (seconds - 1).toString());
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds]);

  // Sockets
  useEffect(() => {
    socket.on("payout", (response) => {
      setTotalPayout(response.payment);
    });

    socket.on("caller", (data) => {
      setCaller(data.current);
      setCalledNumbers(data.all);
    });

    socket.on("game_over", (data: any) => {
      if (data.winner !== username) {
        setLoseMessage(true);
        setWinUser(data.winner);
        setWinnerPattern(data.patterns);
        setWinnerBoard(data.board);
        localStorage.clear();
      }
    });
  }, [socket]);

  // Handle Bingo
  const handleBingo = () => {
    setLoader(true);
    const data = {
      card: cardNo,
      user_id: id,
    };

    socket.emit("bingo", data, (response: any) => {
      setLoader(false);
      response[0] === true ? setWinMessage(true) : setFalseWin(true);
      localStorage.clear();
    });
  };

  return (
    <>
      {winMessage && <Win />}
      {loseMessage && (
        <Lose
          pattern={winnerPattern}
          winnerBoard={winnerBoard}
          user={winUser ? winUser : ""}
          payout={totalPayout}
        />
      )}
      {falseWin && <FalseWin />}
      {seconds > 0 && <Counter number={seconds} />}

      <div className="bg2 h-[100vh] px-1">
        <button onClick={() => localStorage.clear()}>clear</button>

        <div className="container mx-auto">
          <div className="flex lg:justify-center md:justify-center justify-start lg:ms-0 md:ms-0 ms-3">
            <CallOut calledNumber={caller} totalCall={calledNumbers} />
          </div>
          {/* <Bingo75 calledNum={calledNumbers} /> */}
          <div className="flex justify-center mt-10">
            <div>
              {/* Bingo Title */}
              <div className="grid grid-cols-5 text-center text-Black font-extrabold">
                <h1 className="text-xl">B</h1>
                <h1 className="text-xl">I</h1>
                <h1 className="text-xl">N</h1>
                <h1 className="text-xl">G</h1>
                <h1 className="text-xl">O</h1>
              </div>
              {/* Bingo Numbers */}
              <div className="grid grid-cols-5 mt-2">
                {/* B */}
                <div>
                  {board.B.map((b) => (
                    <Number
                      key={b}
                      number={b}
                      calledNum={caller}
                      markedNumbers={calledNumbers}
                    />
                  ))}
                </div>

                {/* I */}
                <div>
                  {board.I.map((i) => (
                    <Number
                      key={i}
                      number={i}
                      calledNum={caller}
                      markedNumbers={calledNumbers}
                    />
                  ))}
                </div>

                {/* N */}
                <div>
                  {board.N.map((n) => (
                    <Number
                      key={n}
                      number={n}
                      calledNum={caller}
                      markedNumbers={calledNumbers}
                    />
                  ))}
                </div>

                {/* G */}
                <div>
                  {board.G.map((g) => (
                    <Number
                      key={g}
                      number={g}
                      calledNum={caller}
                      markedNumbers={calledNumbers}
                    />
                  ))}
                </div>

                {/* O */}
                <div>
                  {board.O.map((o) => (
                    <Number
                      key={o}
                      number={o}
                      calledNum={caller}
                      markedNumbers={calledNumbers}
                    />
                  ))}
                </div>
              </div>
              {/* Infos */}
              <div className="flex justify-between">
                <p className="text-white font-poppins mt-3 ps-2">
                  Payout{" "}
                  <span className="text-black font-bold font-poppins">
                    {totalPayout}br
                  </span>
                </p>
                <p className="text-white font-poppins mt-3 pe-2">
                  Board{" "}
                  <span className="text-black font-bold font-poppins">
                    #{cardNo}
                  </span>
                </p>
              </div>
              {/* Bingo Button */}
              <div className="mt-8 text-center px-2">
                {loader ? (
                  <p className="py-3 text-black btn-bg w-full rounded flex justify-center font-poppins text-lg shadow shadow-zinc-950 chakra">
                    <span className="loader rounded"></span>
                  </p>
                ) : (
                  <button
                    onClick={() => handleBingo()}
                    className="py-3 text-black btn-bg w-full rounded font-poppins text-lg shadow shadow-zinc-950 chakra"
                  >
                    Bingo
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game2;
