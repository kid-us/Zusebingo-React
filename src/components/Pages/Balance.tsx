import { useState } from "react";
import Nav from "../Nav/Nav";
import Deposit from "../Balance/Deposit";
import Withdraw from "../Balance/Withdraw";
import History from "../Balance/History";

const Balance = () => {
  const [balanceView, setBalanceView] = useState("deposit");
  return (
    <div className={`${balanceView === "withdraw" ? "bg3 pb-10" : "bg"}`}>
      <Nav />
      <div className="container mx-auto flex justify-center align-middle h-auto pt-24">
        <div className="lg:w-[40%] lg:px-2 px-4">
          <p className="lg:mt-5 lg:mb-4 text-2xl">Balance</p>
          {/* Current Balance */}
          <div className="bg-white rounded-md lg:mb-5 mb-4 grid grid-cols-10 py-3 shadow shadow-zinc-900">
            <div className="col-span-1">
              <p className="bi-cash text-3xl ps-6 text-red-600"></p>
            </div>
            <div className="col-span-8 lg:ps-3 ms-5 border-l">
              <input
                type="number"
                className="focus:outline-none chakra pt-1 ps-10 placeholder:text-black text-xl"
                readOnly
                placeholder={`300 birr`}
              />
            </div>
          </div>
          {/* Buttons */}
          <div className="grid grid-cols-3 gap-x-5 pt-5">
            <button
              onClick={() => setBalanceView("deposit")}
              className={`py-2 ${
                balanceView === "deposit" ? "btn-bg" : "text-gray-200"
              } w-full rounded text-lg shadow shadow-zinc-950 chakra`}
            >
              Deposit
            </button>
            <button
              onClick={() => setBalanceView("withdraw")}
              className={`py-2  ${
                balanceView === "withdraw" ? "btn-bg" : "text-gray-200"
              } w-full rounded text-lg shadow shadow-zinc-950 chakra`}
            >
              Withdraw
            </button>
            <button
              onClick={() => setBalanceView("history")}
              className={`py-2 ${
                balanceView === "history" ? "btn-bg" : "text-gray-200"
              } w-full rounded text-lg shadow shadow-zinc-950 chakra `}
            >
              History
            </button>
          </div>

          {/* View */}
          {balanceView === "deposit" && <Deposit />}
          {balanceView === "withdraw" && <Withdraw />}
          {balanceView === "history" && <History />}
        </div>
      </div>
    </div>
  );
};

export default Balance;
