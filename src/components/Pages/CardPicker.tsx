// import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import { useEffect, useState } from "react";
import socket from "../../services/socket";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../store/useAuth";

const CardPicker = () => {
  const { id, username } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    // Connect
    socket.on("connect", () => {
      console.log("Connected");
    });

    // Enter Room
    let room = { room: category, user_id: id };

    socket.emit("enter_room", room, (response: any) => {
      setSelectedNumbers(response);
    });

    // Enter Another Room
    socket.on("room_full", () => {
      console.log("Room Full");
      socket.emit("enter_room", room, (response: any) => {
        setSelectedNumbers(response);
      });
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
      username: username,
      user_id: id,
      cards: [num],
      room: "ten",
    };

    socket.emit("join_game", data, (response: any) => {
      if (response[0] === true) {
        const board = JSON.stringify(response[3]);
        localStorage.setItem("board", board);
        localStorage.setItem("startSecond", response[2]);
        localStorage.setItem("card", num.toString());
        navigate("/play");
      } else {
        if (response.length === 1) {
          setError(true);
          setErrorMsg(
            "Your chosen number is already taken by another player. Please choose a different one."
          );
        } else if (response.length === 2) {
          setError(true);
          setErrorMsg("You already exist in this game.");
        } else if (response.length === 2) {
          setError(true);
          setErrorMsg(
            "Your balance is low. Attempting to cheat will result in your account being banned."
          );
        }
      }
    });
  };

  return (
    <>
      {error && (
        <div className="fixed top-20 right-1 bg-red-500 rounded text-white p-2 lg:w-[30%] w-[98%] shadow-md shadow-zinc-900">
          <div className="relative">
            <p className="font-poppins text-sm lg:pe-0 ps-2 pe-10">
              {errorMsg}
            </p>
            <button
              onClick={() => setError(false)}
              className="absolute bi-x-lg top-0 right-0"
            ></button>
          </div>
        </div>
      )}
      <div className="bg2 lg:h-[100vh] h-[auto] pb-5">
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
    </>
  );
};

export default CardPicker;
