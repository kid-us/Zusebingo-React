import { logo } from "../../assets";
import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../services/apiClient";

const schema = z.object({
  password: z.string().min(4, {
    message: "Password must be at least than 4 chars.",
  }),
  username: z
    .string()
    .min(3, { message: "Username must be at least than 3 chars." }),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const navigate = useNavigate();

  const [loader, setLoader] = useState<boolean>(false);
  const [loginError, setLoginError] = useState(false);
  const [passwordType, setPasswordType] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    setLoader(true);
    const logData = {
      username: data.username,
      password: data.password,
    };

    axios
      .post(`${baseUrl}/auth/login`, logData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(() => {
        axios
          .post(
            `${baseUrl}/auth/me`,
            {},
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          )
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setLoginError(true);
        setLoader(false);
      });
  };
  return (
    <div className="bg lg:h-[100dvh] w-full">
      <div className="container mx-auto flex justify-center align-middle h-auto pt-24">
        <div className="lg:w-[38%] lg:px-2 px-5">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="w-28" />
          </div>
          <form className="mt-16" onSubmit={handleSubmit(onSubmit)}>
            {loginError && (
              <p className="text-sm text-white mb-5 bg-red-700 rounded ps-2 py-2 text-center bi-heartbreak font-poppins">
                &nbsp; Invalid username and Password.
              </p>
            )}
            {/* Username */}
            <div className="bg-white rounded-md overflow-hidden lg:mb-4 mb-4 grid grid-cols-13 h-14 shadow shadow-zinc-900">
              <div className="col-span-2">
                <p className="bi-person-fill text-2xl text-center pt-3 text-red-500"></p>
              </div>
              <div className="col-span-11 border-l w-full">
                <input
                  {...register("username")}
                  type="text"
                  name="username"
                  className={`focus:outline-none chakra px-3 h-full placeholder:text-gray-400 text-md w-full`}
                  placeholder="Username"
                />
              </div>
            </div>
            {errors.username && (
              <p className="text-xs text-white mb-5 bg-red-700 rounded ps-2 py-1 chakra">
                {errors.username.message}
              </p>
            )}

            {/* Password */}
            <div className="bg-white rounded-md lg:mb-4 mb-4 grid grid-cols-13 h-14 shadow shadow-zinc-900">
              <div className="col-span-2">
                <p className="bi-lock-fill text-2xl text-center pt-3 text-red-500"></p>
              </div>
              <div className="col-span-9 border-l border-r w-full">
                <input
                  {...register("password")}
                  type={!passwordType ? "text" : "password"}
                  name="password"
                  className={`focus:outline-none chakra px-3 h-full placeholder:text-gray-400 text-md w-full`}
                  placeholder="Password"
                />
              </div>
              <div
                onClick={() => setPasswordType(!passwordType)}
                className="col-span-2 cursor-pointer pt-3"
              >
                <p
                  className={` ${
                    passwordType ? "bi-eye-fill" : "bi-eye-slash-fill"
                  } text-xl pt-1 text-red-500 text-center`}
                ></p>
              </div>
            </div>

            {errors.password && (
              <p className="text-xs text-white mb-5 bg-red-700 rounded ps-2 py-1 chakra">
                {errors.password.message}
              </p>
            )}

            <p className="text-sm text-end text-white">
              <Link to="/request" className="font-poppins">
                Forgot Password?
              </Link>
            </p>

            <div className="mt-8 text-center">
              {loader ? (
                <p className="py-3 text-black btn-bg w-full rounded flex justify-center font-poppins text-lg shadow shadow-zinc-950 chakra">
                  <span className="loader rounded"></span>
                </p>
              ) : (
                <button className="py-3 text-black btn-bg w-full rounded font-poppins text-lg shadow shadow-zinc-950 chakra">
                  Login
                </button>
              )}
            </div>
            <p className="mt-5 text-sm font-poppins">
              Don't have an Account?{" "}
              <Link to="/register" className="text-white font-poppins">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
