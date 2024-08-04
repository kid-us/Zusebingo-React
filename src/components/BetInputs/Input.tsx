interface Props {
  numAmount: number;
  amount: string;
  onClick: (numCategory: number, stringCategory: string) => void;
}

export const Input = ({ amount, numAmount, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(numAmount, amount)}
      className="cursor-pointer bg-white rounded-md lg:mb-5 mb-4 grid grid-cols-10 py-3 shadow shadow-zinc-900"
    >
      <div className="col-span-1">
        <p className="bi-cash text-3xl ps-5 text-red-600"></p>
      </div>
      <div className="col-span-8 lg:ps-3 ms-5 border-l">
        <input
          type="number"
          data-category={amount}
          className="cursor-pointer focus:outline-none chakra pt-1 lg:ps-0 ps-3 placeholder:text-black text-xl"
          placeholder={`${numAmount} Birr`}
          readOnly
        />
      </div>
      <div className="col-span-1">
        {/* <p className="bi-cash text-3xl"></p> */}
      </div>
    </div>
  );
};
