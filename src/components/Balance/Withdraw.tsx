import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import axios from "axios";

interface Bank {
  name: string;
  code: string;
}

const schema = z.object({
  amount: z
    .number()
    .min(50, { message: "Minimum withdraw amount is 50 birr." }),
  number: z.number().min(3, { message: "Account number required." }),
  name: z.string().min(1, {
    message: "Account name required and must be greater than 6 chars.",
  }),
});

type FormData = z.infer<typeof schema>;

const Withdraw = () => {
  const [bank, setBank] = useState<Bank[]>([]);
  useEffect(() => {
    axios
      .get("https://api.zusebingo.com/api/v1/payments/banks", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setBank(response.data.banks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="mt-10">
      <p className="chakra">Withdraw your Money</p>
      <div className="rounded bg-sky-700 text-white text-sm w-full p-3 mt-4">
        <p className="font-poppins mb-2 bi-info">Withdraw Info</p>
        <p className="chakra bi-hash"> Minimum withdrawal amount is: 50 ETB</p>
        <p className="chakra bi-hash"> Maximum withdrawal Per 24 hrs is: 3</p>
      </div>
      <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
        {/* Account name */}
        <div className="bg-white rounded-md lg:mb-4 mb-4 grid grid-cols-10 py-3 shadow shadow-zinc-900">
          <div className="col-span-1">
            <p className="bi-person-fill text-xl ps-6 pt-1 text-red-500"></p>
          </div>
          <div className="col-span-8 lg:ps-3 ms-5 border-l">
            <input
              {...register("name")}
              type="text"
              name="username"
              className={`focus:outline-none chakra pt-1 lg:ps-0 ps-3 placeholder:text-gray-400 w-full pe-3`}
              placeholder="Account Name"
            />
          </div>
        </div>
        {errors.name && (
          <p className="text-xs text-white mb-5 bg-red-700 rounded ps-2 py-1 chakra">
            {errors.name.message}
          </p>
        )}
        {/* Account Number */}
        <div className="bg-white rounded-md lg:mb-4 mb-4 grid grid-cols-10 py-3 shadow shadow-zinc-900">
          <div className="col-span-1">
            <p className="bi-123 text-2xl ps-6 pt-1 text-red-500"></p>
          </div>
          <div className="col-span-8 lg:ps-3 ms-5 border-l">
            <input
              {...register("number")}
              type="number"
              name="phone"
              className={`focus:outline-none chakra pt-1 lg:ps-0 ps-3 placeholder:text-gray-400 w-full pe-3`}
              placeholder="Phone"
            />
          </div>
        </div>
        {errors.number && (
          <p className="text-xs text-white mb-5 bg-red-700 rounded ps-2 py-1 chakra">
            {errors.number.message}
          </p>
        )}
        {/* Withdraw Amount */}
        <div className="bg-white rounded-md lg:mb-5 mb-4 grid grid-cols-10 py-3 shadow shadow-zinc-900 mt-2">
          <div className="col-span-1">
            <p className="bi-cash text-2xl ps-6 text-red-600"></p>
          </div>
          <div className="col-span-9 lg:ps-3 ms-5 border-l">
            <input
              {...register("amount")}
              type="number"
              className="focus:outline-none chakra pt-1 placeholder:text-gray-500 w-full pe-3"
              placeholder={`Amount`}
              min={50}
            />
          </div>
        </div>
        {errors.amount && (
          <p className="text-xs text-white mb-5 bg-red-700 rounded ps-2 py-1 chakra">
            {errors.amount.message}
          </p>
        )}

        {/* Bank */}
        <div className="bg-white rounded-md lg:mb-5 mb-4 grid grid-cols-10 py-3 sshadow shadow-zinc-900 mt-2">
          <div className="col-span-1">
            <p className="bi-bank text-xl ps-6 text-red-600"></p>
          </div>
          <div className="col-span-9 lg:ps-3 ms-5 border-l">
            <select
              name="bank"
              className="focus:outline-none cursor-pointer chakra pt-1 w-full pe-3"
            >
              {bank.map((banks) => (
                <option key={banks.name} value={banks.code}>
                  {banks.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="py-3 text-black btn-bg w-full rounded font-poppins text-lg shadow shadow-zinc-950 chakra">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Withdraw;
