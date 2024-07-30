// import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import { useEffect, useState } from "react";
import socket from "../../services/socket";
import { useLocation } from "react-router-dom";

const Yakobe = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");
    });

    let room = { room: category };

    socket.emit("enter_room", room, (response: any) => {
      console.log(response);
      setSelectedNumbers(response);
    });
  }, []);

  // 1: Card already exist  2 : Already games exist, 3 : Balance

  //   const location = useLocation();
  //   const searchParams = new URLSearchParams(location.search);
  //   const category = searchParams.get("category");

  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

  const handleSelectedNumber = (num: number): void => {
    const data = {
      username: "Lorem",
      user_id: 434,
      cards: [num],
      room: "ten",
    };

    socket.emit("join_game", data, (response: any) => {
      console.log("Server response:", response);
    });

    // if (selectedNumbers.length < 3 || selectedNumbers.includes(num)) {
    // setSelectedNumbers((prevSelected) => {
    //   // if (prevSelected.includes(num)) {
    //   //   return prevSelected.filter((number) => number !== num);
    //   // } else {
    //   //   return [...prevSelected, num];
    //   // }
    // });
    // }
  };

  return (
    <div className="bg">
      <Nav />
      <div className="container mx-auto flex justify-center align-middle h-auto pt-24">
        <div className="lg:w-[50%] lg:px-2">
          <p className="lg:mt-4 lg:mb-4 text-2xl">Select Your Playing Cards</p>
          <div className="grid lg:grid-cols-12 grid-cols-7 mt-6 overflow-y-scroll lg:h-auto h-[60vh] ">
            {numbers.map((number) => (
              <div
                key={number}
                onClick={() => handleSelectedNumber(number)}
                className={`${
                  selectedNumbers.includes(number)
                    ? "bg-gray-900 shadow-none"
                    : "bg-white cursor-pointer hover:shadow-none"
                }   shadow-zinc-900 rounded shadow lg:w-12 lg:h-12 w-11 h-11 me-1 mb-2`}
              >
                <p
                  className={`text-center chakra pt-2 ${
                    selectedNumbers.includes(number)
                      ? "text-gray-400"
                      : "text-gray-600"
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
