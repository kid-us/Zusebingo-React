import { useState } from "react";
import Nav from "../Nav/Nav";
import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// import { useNavigate } from "react-router-dom";

const schema = z.object({
  phone: z.string().min(10, { message: "Phone number required." }),
  password: z.string().min(4, {
    message: "Password required and must be greater than 4 chars.",
  }),
  username: z
    .string()
    .min(1, { message: "Username required and must be greater than 3 chars." }),
});

type FormData = z.infer<typeof schema>;

const Setting = () => {
  // const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState(true);
  // const [language, setLanguage] = useState()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const handleLanguage = (value: string) => {
    console.log(value);
  };

  return (
    <div className="bg">
      <Nav />
      <div className="container mx-auto flex justify-center align-middle h-auto pt-24">
        <div className="lg:w-[38%] px-2">
          <p className="lg:mt-5 lg:mb-4 text-2xl">
            Change on your account setting
          </p>

          {/* <!-- Language --> */}
          <div className="flex justify-between my-10">
            <div className="flex bi-mic-fill text-white text-xl">
              <p className="text-black chakra ms-4">Change Sound</p>
            </div>

            <select
              onChange={(event) => handleLanguage(event.currentTarget.value)}
              className="px-5 py-1 rounded chakra"
            >
              <option className="fw-semibold" value="AmM">
                አማረኛ ወንድ
              </option>
              <option className="fw-semibold" value="AmF">
                አማረኛ ሴት
              </option>
              <option className="fw-semibold" value="EnM">
                English Male
              </option>
              <option className="fw-semibold" value="EnF">
                English Female
              </option>
              <option className="fw-semibold" value="OrF">
                ኦሮምኛ
              </option>
              <option className="fw-semibold" value="TgF">
                ትግርኛ
              </option>
            </select>
          </div>

          {/* <!-- Category Form --> */}
          <p className="text-white chakra">
            <span className="bi-quote text-black"></span>
            You can change your Username and Password Separately or Both at the
            same Time!
            <span className="bi-quote text-black"></span>
          </p>

          <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Username */}
            <div className="bg-white rounded-md lg:mb-4 mb-4 grid grid-cols-10 py-3 shadow shadow-zinc-900">
              <div className="col-span-1">
                <p className="bi-person-fill text-2xl ps-4 pt-1 text-red-500"></p>
              </div>
              <div className="col-span-8 lg:ps-3 ms-5 border-l">
                <input
                  {...register("username")}
                  type="text"
                  name="username"
                  className={`focus:outline-none chakra pt-1 lg:ps-0 ps-3 placeholder:text-gray-400 text-lg w-full pe-3`}
                  placeholder="Username"
                />
              </div>
            </div>
            {errors.username && (
              <p className="text-xs text-white mb-5 bg-red-700 rounded ps-2 py-1 chakra">
                {errors.username.message}
              </p>
            )}
            {/* Phone */}
            <div className="bg-white rounded-md lg:mb-4 mb-4 grid grid-cols-10 py-3 shadow shadow-zinc-900">
              <div className="col-span-1">
                <p className="bi-telephone-fill text-2xl ps-4 pt-1 text-red-500"></p>
              </div>
              <div className="col-span-8 lg:ps-3 ms-5 border-l">
                <input
                  {...register("phone")}
                  type="tel"
                  name="phone"
                  className={`focus:outline-none chakra pt-1 lg:ps-0 ps-3 placeholder:text-gray-400 text-lg w-full pe-3`}
                  placeholder="Phone"
                />
              </div>
            </div>
            {errors.phone && (
              <p className="text-xs text-white mb-5 bg-red-700 rounded ps-2 py-1 chakra">
                {errors.phone.message}
              </p>
            )}
            {/* Password */}
            <div className="bg-white rounded-md lg:mb-4 mb-4 grid grid-cols-10 py-3 shadow shadow-zinc-900">
              <div className="col-span-1">
                <p className="bi-lock-fill text-2xl ps-4 pt-1 text-red-500"></p>
              </div>
              <div className="col-span-8 lg:ps-3 ms-5 border-l border-r">
                <input
                  {...register("password")}
                  type={!passwordType ? "text" : "password"}
                  name="password"
                  className={`focus:outline-none chakra pt-1 lg:ps-0 ps-3 placeholder:text-gray-400 text-lg w-full pe-3`}
                  placeholder="Password"
                />
              </div>
              <div
                onClick={() => setPasswordType(!passwordType)}
                className="col-span-1 cursor-pointer"
              >
                <p
                  className={` ${
                    passwordType ? "bi-eye-fill" : "bi-eye-slash-fill"
                  } text-2xl pt-1 ps-2 text-red-500`}
                ></p>
              </div>
            </div>
            {errors.password && (
              <p className="text-xs text-white mb-5 bg-red-700 rounded ps-2 py-1 chakra">
                {errors.password.message}
              </p>
            )}

            <div className="mt-8 text-center">
              <button className="py-3 text-black btn-bg w-full rounded font-poppins text-lg shadow shadow-zinc-950 chakra">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
