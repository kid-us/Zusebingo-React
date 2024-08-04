import { useState } from "react";

const Deposit = () => {
  const [amount, setAmount] = useState<string>("10");
  const [error, setError] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (Number(amount) < 10) {
      setError(true);
      return;
    }
    setLoader(true);
    console.log(Number(amount));
  };

  return (
    <div className="mt-10">
      <p className="chakra">Deposit and Play</p>
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-md lg:mb-5 mb-4 grid grid-cols-10 py-3 shadow shadow-zinc-900 mt-2">
          <div className="col-span-1">
            <p className="bi-cash text-3xl ps-6 text-red-600"></p>
          </div>
          <div className="col-span-9 lg:ps-3 ms-5 border-l">
            <input
              type="number"
              className="focus:outline-none chakra pt-1 placeholder:text-gray-500 text-lg w-full pe-3"
              placeholder={`Amount`}
              min={1}
              onChange={(e) => setAmount(e.currentTarget.value)}
              value={amount}
            />
          </div>
        </div>
        {error && (
          <p className="text-xs text-white mb-5 bg-red-700 rounded ps-2 py-1 chakra">
            Deposit amount required and must be greater than 10 birr
          </p>
        )}

        {loader ? (
          <p className="py-3 text-black btn-bg w-full rounded flex justify-center font-poppins text-lg shadow shadow-zinc-950 chakra">
            <span className="loader rounded"></span>
          </p>
        ) : (
          <button
            type="submit"
            className={`py-3 font-poppins text-black btn-bg mt-2
           w-full rounded text-lg shadow shadow-zinc-950 chakra`}
          >
            Deposit
          </button>
        )}
      </form>
    </div>
  );
};

export default Deposit;
