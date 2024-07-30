interface Props {
  calledNum: number;
}

const Bingo75 = ({ calledNum }: Props) => {
  const numbers = Array.from({ length: 75 }, (_, i) => i + 1);
  return (
    <div className="flex lg:justify-center ms:justify-center justify-start ms-1 my-7">
      <div className="grid grid-cols-16 flex-wrap">
        {numbers.map((num) => (
          <p
            className={`text-black font-poppins mx-1 font-bold text-[18px] ${
              calledNum === num && "line-through blink text-white"
            } `}
          >
            {num}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Bingo75;
