import { logo } from "../../assets";
import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
// import { useState } from "react";

const schema = z.object({
  phone: z.string().min(10, { message: "Phone number required." }),
});

type FormData = z.infer<typeof schema>;

const ForgotPassword = () => {
  // const [loginError, setLoginError] = useState(false);
  const [loader, setLoader] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    setLoader(true);
    console.log(data);
  };
  return (
    <div className="bg">
      <div className="container mx-auto flex justify-center align-middle h-auto pt-24">
        <div className="lg:w-[38%] px-2">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="w-28" />
          </div>
          <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
            {/* {loginError && (
              <p className="text-sm text-white mb-5 bg-red-700 rounded ps-2 py-2 text-center bi-heartbreak">
                &nbsp; Invalid username and Password.
              </p>
            )} */}

            <h1 className="text-white text-2xl">Forgot your password?</h1>
            <p className="my-4 chakra">
              No problem! Just enter the phone number that you signed up with to
              reset it.
            </p>

            {/* Phone */}
            <div className="bg-white overflow-hidden rounded-md lg:mb-4 mb-4 grid grid-cols-13 h-14 shadow shadow-zinc-900">
              <div className="col-span-2">
                <p className="bi-telephone-fill text-2xl text-center pt-3 text-red-500"></p>
              </div>
              <div className="col-span-11 border-l">
                <input
                  {...register("phone")}
                  type="tel"
                  name="phone"
                  className={`focus:outline-none chakra px-3 h-full placeholder:text-gray-400 text-md w-full`}
                  placeholder="Phone Number"
                />
              </div>
            </div>
            {errors.phone && (
              <p className="text-xs text-white mb-5 bg-red-700 rounded ps-2 py-1 chakra">
                {errors.phone.message}
              </p>
            )}

            <div className="mt-8 text-center">
              {loader ? (
                <p className="py-3 text-black btn-bg w-full rounded flex justify-center font-poppins text-lg shadow shadow-zinc-950 chakra">
                  <span className="loader rounded"></span>
                </p>
              ) : (
                <button className="py-3 text-black btn-bg w-full rounded font-poppins text-lg shadow shadow-zinc-950 chakra">
                  Reset Password
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
