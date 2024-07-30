interface Props {
  number: number | string;
  calledNum?: number;
  markedNumbers: number[];
  onMark: (num: number) => void;
}
const Number = ({ number, calledNum, markedNumbers, onMark }: Props) => {
  const style =
    number === "FREE" &&
    "bg-red-700 text-white border border-gray-600 py-[5px]";

  const otherStyles =
    "mb-1 rounded-md text-center font-poppins text-[20px] font-extrabold shadow shadow-zinc-400 cursor-pointer lg:p-[14px] py-[13px] px-[13px] m-[3px] ";

  // Handle Mark
  const handleMark = (num: number) => {
    if (markedNumbers.includes(num)) {
      return "bg-red-700 text-white border border-gray-200 py-[5px]";
    } else {
      return "bg-white text-red-800 py-[5px] border border-gray-200";
    }
  };

  return (
    <p
      onClick={() => typeof number === "number" && onMark(number)}
      className={`${style} ${calledNum === number && "blink"} 
      ${typeof number === "number" && handleMark(number)}  ${otherStyles}`}
    >
      {number}
    </p>
  );
};

export default Number;
