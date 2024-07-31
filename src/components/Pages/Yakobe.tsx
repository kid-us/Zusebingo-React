// import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import { useEffect, useState } from "react";
import socket from "../../services/socket";
import { useLocation, useNavigate } from "react-router-dom";

const Yakobe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  useEffect(() => {
    // Connect
    socket.on("connect", () => {
      console.log("Connected");
    });

    // Enter Room
    let room = { room: category };
    socket.emit("enter_room", room, (response: any) => {
      setSelectedNumbers(response);
    });

    // Card Taken
    socket.on("cardTaken", (response: number[]) => {
      setSelectedNumbers(response);
    });
  }, [socket]);

  // 1: Card already exist  2 : Already games exist, 3 : Balance

  // Handle Number selecting
  const handleSelectedNumber = (num: number): void => {
    const data = {
      username: "Lorem",
      user_id: 434,
      cards: [num],
      room: "ten",
    };

    socket.emit("join_game", data, (response: any) => {
      console.log(response);
      if (response[0] === true) {
        localStorage.setItem("startSecond", response[2]);

        const board = JSON.stringify(response[3]);
        localStorage.setItem("board", board);
        localStorage.setItem("card", num.toString());
        navigate("/play2");
      }
    });
  };

  return (
    <div className="bg lg:h-[100vh] h-[auto] pb-5">
      <Nav />
      <div className="container mx-auto flex justify-center pt-24 lg:px-0 px-2">
        <div className="lg:w-[50%] w-full lg:px-2">
          <p className="lg:mt-4 lg:mb-4 text-xl font-poppins">
            Select Your Playing Cards
          </p>
          <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-8 mt-6 h-auto">
            {numbers.map((number) => (
              <div
                key={number}
                onClick={() => handleSelectedNumber(number)}
                className={`${
                  selectedNumbers.includes(number)
                    ? "bg-gray-900 shadow-none"
                    : "bg-white cursor-pointer hover:shadow-none"
                }   shadow-zinc-900 rounded shadow me-1 mb-2 lg:p-2 p-1`}
              >
                <p
                  className={`text-center chakra pt-1 ${
                    selectedNumbers.includes(number)
                      ? "text-gray-400"
                      : "text-red-700"
                  } text-xl`}
                >
                  {number}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yakobe;
