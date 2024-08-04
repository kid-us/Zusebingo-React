import { useEffect, useState } from "react";

interface Props {
  calledNumber: number | undefined;
  totalCall: number[];
}

const CallOut = ({ calledNumber, totalCall }: Props) => {
  const [numbers, setNumbers] = useState<number[]>([]);

  useEffect(() => {
    if (calledNumber !== undefined) {
      setNumbers((prevNumbers) => [...prevNumbers, calledNumber]);
    }
  }, [calledNumber]);

  // Get the last 16 numbers from the array
  const lastSixteenNumbers = numbers.slice(-16).reverse();

  // Split the numbers into two groups of 8
  const topEightNumbers = lastSixteenNumbers.slice(0, 8);
  const bottomEightNumbers = lastSixteenNumbers.slice(8, 16);

  return (
    <div className="lg:ms-16 md:mx-10 mx-1">
      <p className="font-poppins mb-5 mt-2">
        Total Callout:{" "}
        <span className="chakra text-lg text-white">{totalCall.length}</span>
      </p>
      <div className="lg:grid md:grid flex md:grid-cols-7 lg:grid-cols-9 grid-cols-1">
        <div className="col-span-1">
          <p className="bg-green-700 rounded-full font-poppins w-12 h-12 pt-3 text-center text-white font-bold">
            {calledNumber}
          </p>
        </div>
        <div className="lg:grid md:grid grid lg:col-span-8 md:col-span-6 lg:ms-8 md:ms-7 ms-1 mt-2">
          <div className="flex gap-x-1 overflow-hidden">
            {numbers.length > 0 &&
              topEightNumbers.map((num, index) => (
                <p
                  key={index}
                  className={`${
                    typeof num === "string" ? "text-xs pt-2" : "text-md"
                  } bg-white lg:w-7 lg:h-6 md:w-7 md:h-6 w-9 h-7 pt-[2px] text-center rounded font-poppins shadow shadow-zinc-700`}
                >
                  {num}
                </p>
              ))}
          </div>

          <div className="flex gap-x-1 overflow-hidden mt-1">
            {numbers.length > 0 &&
              bottomEightNumbers.map((num, index) => (
                <p
                  key={index + 8}
                  className={`${
                    typeof num === "string" ? "text-xs pt-2" : "text-md"
                  } bg-white lg:w-7 lg:h-6 md:w-7 md:h-6 w-9 h-7 pt-[2px] text-center rounded font-poppins shadow shadow-zinc-700`}
                >
                  {num}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallOut;
