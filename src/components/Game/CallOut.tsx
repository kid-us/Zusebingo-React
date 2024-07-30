import { useEffect, useState } from "react";

interface Props {
  calledNumber: number;
}

const CallOut = ({ calledNumber }: Props) => {
  const [numbers, setNumbers] = useState<number[]>([]);
  useEffect(() => {
    setNumbers([...numbers, calledNumber]);
  }, [calledNumber]);

  // Get the last 8 numbers from the array and reverse them
  const lastEightNumbers = numbers.slice(-8).reverse();

  return (
    <div className="lg:ms-16 md:mx-10 mx-1">
      <p className="font-poppins mb-5 mt-2">
        Total Callout: <span className="chakra text-lg text-white">10</span>
      </p>
      <div className="lg:grid md:grid flex md:grid-cols-7 lg:grid-cols-9 grid-cols-1">
        <div className="col-span-1">
          <p className="bg-green-700 rounded-full font-poppins w-12 h-12 pt-3 text-center text-white font-bold">
            {calledNumber}
          </p>
        </div>
        <div className="lg:grid md:grid grid lg:col-span-8 md:col-span-6 lg:ms-8 md:-7 ms-1 mt-2">
          <div className="flex gap-x-1 overflow-hidden">
            {numbers.length > 0 &&
              lastEightNumbers.map((num) => (
                <p
                  key={num}
                  className="bg-white lg:w-7 lg:h-6 md:w-7 md:h-6 w-9 h-7 pt-[2px] text-center rounded font-poppins shadow shadow-zinc-700 text-md"
                >
                  {num}
                </p>
              ))}
          </div>
          {/* <div className="flex gap-x-1 overflow-hidden mt-1">
            <p className="bg-white lg:w-7 lg:h-6 md:w-7 md:h-6 w-6 h-6 text-center rounded font-poppins shadow">
              3
            </p>
            <p className="bg-white lg:w-7 lg:h-6 md:w-7 md:h-6 w-6 h-6 text-center rounded font-poppins shadow">
              3
            </p>
            <p className="bg-white lg:w-7 lg:h-6 md:w-7 md:h-6 w-6 h-6 text-center rounded font-poppins shadow">
              3
            </p>
            <p className="bg-white lg:w-7 lg:h-6 md:w-7 md:h-6 w-6 h-6 text-center rounded font-poppins shadow">
              3
            </p>
            <p className="bg-white lg:w-7 lg:h-6 md:w-7 md:h-6 w-6 h-6 text-center rounded font-poppins shadow">
              3
            </p>
            <p className="bg-white lg:w-7 lg:h-6 md:w-7 md:h-6 w-6 h-6 text-center rounded font-poppins shadow">
              3
            </p>
            <p className="bg-white lg:w-7 lg:h-6 md:w-7 md:h-6 w-6 h-6 text-center rounded font-poppins shadow">
              3
            </p>
            <p className="bg-white lg:w-7 lg:h-6 md:w-7 md:h-6 w-6 h-6 text-center rounded font-poppins shadow">
              3
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CallOut;
