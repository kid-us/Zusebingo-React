import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { logo } from "../../assets";

const Verify: React.FC = () => {
  const [code, setCode] = useState<string[]>(["", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value !== "" && index < 4) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const verificationCode = code.join("");
    console.log(verificationCode);
    // Implement verification logic here
  };

  const allInputsFilled = code.every((value) => value !== "");

  return (
    <div className="bg">
      <div className="container mx-auto flex justify-center align-middle h-auto pt-24">
        <div className="lg:w-[38%] px-2">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="w-28" />
          </div>
          <form className="mt-10" onSubmit={handleSubmit}>
            <h1 className="text-white text-2xl">Verify Phone Number</h1>

            <p className="mt-3 chakra">
              Enter the numbers we send to verify your phone number.
            </p>
            <div className="grid grid-cols-5 gap-x-3 mt-8">
              {code.map((value, index) => (
                <div key={index}>
                  <input
                    type="text"
                    className="w-full bg-white rounded lg:h-16 h-12 shadow shadow-zinc-900 focus:outline-none text-center text-3xl chakra"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    autoFocus={index === 0}
                  />
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              {allInputsFilled && (
                <button className="py-3 text-black btn-bg w-full rounded font-poppins text-lg shadow shadow-zinc-950 chakra">
                  Verify
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
