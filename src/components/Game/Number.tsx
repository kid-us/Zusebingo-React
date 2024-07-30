interface Props {
  number: number | string;
  calledNum?: number;
  markedNumbers: number[];
  onMark: (num: number) => void;
}
const Number = ({ number, calledNum, markedNumbers, onMark }: Props) => {
  const style =
    number === "FREE" &&
    "bg-red-700 text-white border border-gray-600 p-[13px]";

  const otherStyles =
    "mb-1 rounded-md text-center font-poppins text-[20px] font-extrabold shadow shadow-zinc-800 cursor-pointer p-[13px] m-[3px] ";

  // Handle Mark
  const handleMark = (num: number) => {
    if (markedNumbers.includes(num)) {
      return "bg-red-700 text-white border border-gray-600";
    } else {
      return "bg-white text-red-800 border border-gray-200";
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
