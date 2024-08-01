import React, { useState } from "react";

interface Props {
  number: number | string;
  calledNum?: number;
  markedNumbers: number[];
}

const Number: React.FC<Props> = ({ number, calledNum, markedNumbers }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = (num: number | string) => {
    if (typeof num === "number") {
      if (markedNumbers.includes(num)) {
        setIsClicked(true);
      }
    }
  };

  const isFree = number === "FREE";
  const isCalled = calledNum === number;

  const baseStyle =
    "mb-1 rounded-md text-center font-poppins text-[20px] font-extrabold shadow shadow-zinc-800 cursor-pointer p-[13px] m-[3px]";
  const freeStyle = "bg-red-700 text-white border border-gray-600";
  const numberStyle = "bg-white text-red-800 border border-gray-200";
  const clickedStyle = "bg-red-700 text-white border border-gray-600"; // Style for clicked numbers

  return (
    <p
      onClick={() => handleClick(number)}
      className={`${baseStyle} ${
        isFree ? freeStyle : isClicked ? clickedStyle : numberStyle
      }  ${number !== "FREE" && !isClicked && isCalled ? "blink" : ""}`}
    >
      {number}
    </p>
  );
};

export default Number;
