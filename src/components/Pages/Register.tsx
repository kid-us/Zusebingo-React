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
  phone: z.string().min(10, { message: "Phone number required." }),
  username: z
    .string()
    .min(3, { message: "Username must be at least than 3 chars." }),
});

type FormData = z.infer<typeof schema>;

const Register = () => {
  const navigate = useNavigate();

  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [registerError, setRegisterError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [passwordType, setPasswordType] = useState<boolean>(true);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] =
    useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    if (data.password !== confirmPassword) {
      setConfirmPasswordError(true);
      return;
    }
    setLoader(true);

    const RegData = {
      username: data.username,
      password: data.password,
      phone_number: data.phone,
    };

    axios
      .get(`${baseUrl}/auth/check-username?username=${data.username}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        axios
          .get(`${baseUrl}/auth/check-phone?phone_number=${data.phone}`, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(() => {
            axios
              .post(`${baseUrl}/auth/pre-register`, RegData, {
                headers: {
                  "Content-Type": "application/json",
                },
              })
              .then(() => {
                navigate(`/verify?phone=${data.phone}`);
              })
              .catch((error) => {
                setLoader(false);
                console.log(error);
                setRegisterError(true);
              });
          })
          .catch((error) => {
            setLoader(false);
            console.log(error);
            setPhoneError(true);
          });
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
        setUsernameError(true);
      });
  };

  return (
    <div className="bg3 pb-14">
      <div className="container mx-auto flex justify-center align-middle h-auto pt-14">
        <div className="lg:w-[38%] px-2">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="w-28" />
          </div>
          <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
            {usernameError && (
              <p className="text-sm text-white mb-5 bg-red-700 rounded ps-2 py-2 text-center bi-heartbreak font-poppins">
                &nbsp; Username already taken!
              </p>
            )}
            {registerError && (
              <p className="text-sm text-white mb-5 bg-red-700 rounded ps-2 py-2 text-center bi-heartbreak font-poppins">
                &nbsp; Something went wrong.
              </p>
            )}
            {phoneError && (
              <p className="text-sm text-white mb-5 bg-red-700 rounded ps-2 py-2 text-center bi-heartbreak font-poppins">
                &nbsp; Phone number already exists!
              </p>
            )}
            {/* Username */}
            <div className="bg-white overflow-hidden rounded-md lg:mb-4 mb-4 grid grid-cols-13 h-14 shadow shadow-zinc-900">
              <div className="col-span-2">
                <p className="bi-person-fill text-2xl text-center pt-3 text-red-500"></p>
              </div>
              <div className="col-span-11  border-l">
                <input
                  {...register("username")}
                  type="text"
                  name="username"
                  className={`focus:outline-none chakra px-3 h-full placeholder:text-gray-400 text-md w-full pe-3`}
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
            <div className="bg-white overflow-hidden rounded-md lg:mb-4 mb-4 grid grid-cols-13 h-14 shadow shadow-zinc-900">
              <div className="col-span-2">
                <p className="bi-lock-fill text-2xl text-center pt-3 text-red-500"></p>
              </div>
              <div className="col-span-9 border-l border-r">
                <input
                  {...register("password")}
                  type={!passwordType ? "text" : "password"}
                  name="password"
                  className={`focus:outline-none chakra px-3 h-full placeholder:text-gray-400 text-md w-full pe-3`}
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
                  } text-2xl pt-1 ps-2 text-red-500`}
                ></p>
              </div>
            </div>
            {errors.password && (
              <p className="text-xs text-white mb-5 bg-red-700 rounded ps-2 py-1 chakra">
                {errors.password.message}
              </p>
            )}

            {/* Confirm Password */}
            <div className="bg-white rounded-md lg:mb-4 mb-4 grid grid-cols-13 h-14 shadow shadow-zinc-900">
              <div className="col-span-2">
                <p className="bi-lock-fill text-2xl text-center pt-3 text-red-500"></p>
              </div>
              <div className="col-span-11 border-l border-r">
                <input
                  type="password"
                  name="password"
                  className={`focus:outline-none chakra px-3 h-full placeholder:text-gray-400 text-md w-full pe-3`}
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                />
              </div>
            </div>
            {confirmPasswordError && (
              <p className="text-xs text-white mb-5 bg-red-700 rounded ps-2 py-1 chakra">
                Password not match.
              </p>
            )}

            {/* Referral Code */}
            <div className="bg-white overflow-hidden rounded-md lg:mb-4 mb-4 grid grid-cols-13 h-14 shadow shadow-zinc-900">
              <div className="col-span-2">
                <p className="bi-envelope-fill text-2xl text-center pt-3 text-red-500"></p>
              </div>
              <div className="col-span-11 border-l">
                <input
                  type="text"
                  name="referral"
                  className={`focus:outline-none chakra px-3 h-full placeholder:text-gray-400 text-md w-full pe-3`}
                  placeholder="Referral Code"
                />
              </div>
            </div>

            {/* Check box */}
            <div id="checkbox-container" className="p-2 rounded shadow mt-3">
              <div className="fw-semibold">
                <label className="cyberpunk-checkbox-label text-white chakra">
                  <input
                    type="checkbox"
                    name="agree_terms"
                    className="cyberpunk-checkbox"
                    required
                  />
                  I agree to the terms of use
                </label>
              </div>
              <div className="mt-3 fw-semibold">
                <label className="cyberpunk-checkbox-label text-white chakra">
                  <input
                    type="checkbox"
                    name="age_18"
                    className="cyberpunk-checkbox"
                    required
                  />
                  I here by certify I am over 18 years old!
                </label>
              </div>
            </div>

            <div className="mt-8 text-center">
              {loader ? (
                <p className="py-3 text-black btn-bg w-full rounded flex justify-center font-poppins text-lg shadow shadow-zinc-950 chakra">
                  <span className="loader rounded"></span>
                </p>
              ) : (
                <button className="py-3 text-black btn-bg w-full rounded font-poppins text-lg shadow shadow-zinc-950 chakra">
                  Register
                </button>
              )}
            </div>
            <p className="mt-5 text-sm font-poppins">
              Already have an Account?{" "}
              <Link to="/login" className="text-white font-poppins">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
