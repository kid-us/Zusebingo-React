// import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import { useState } from "react";

const CardPicker = () => {
  //   const location = useLocation();
  //   const searchParams = new URLSearchParams(location.search);
  //   const category = searchParams.get("category");

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

  const handleSelectedNumber = (num: number): void => {
    if (selectedNumbers.length < 3 || selectedNumbers.includes(num)) {
      setSelectedNumbers((prevSelected) => {
        if (prevSelected.includes(num)) {
          return prevSelected.filter((number) => number !== num);
        } else {
          return [...prevSelected, num];
        }
      });
    }
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
                  selectedNumbers.length === 3 &&
                  !selectedNumbers.includes(number)
                    ? "bg-gray-900"
                    : selectedNumbers.includes(number)
                    ? "bg-green-800"
                    : "bg-white"
                }  shadow-zinc-900 rounded shadow lg:w-12 lg:h-12 w-11 h-11 me-1 mb-2 cursor-pointer hover:shadow-none`}
              >
                <p
                  className={`text-center chakra pt-2 ${
                    selectedNumbers.includes(number)
                      ? "text-white"
                      : "text-gray-600"
                  } text-xl`}
                >
                  {number}
                </p>
              </div>
            ))}
          </div>
          {selectedNumbers.length > 0 && (
            <div className="mt-8 text-center">
              <button className="py-3 text-black btn-bg w-full rounded font-poppins text-lg shadow shadow-zinc-950 chakra">
                View Cartela
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPicker;
