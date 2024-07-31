import { Link } from "react-router-dom";

const Win = () => {
  return (
    <>
      <div className="overlay"></div>
      <div className="fixed flex z-50 justify-center w-full h-full items-center">
        <div className="lg:w-[27%] md:w-[28%] w-[90%] rounded bg-white py-5">
          <h1 className="bi-trophy-fill text-center text-6xl text-green-900"></h1>

          <p className="text-center font-poppins my-5 text-xl">
            Congratulations you won
          </p>

          <div className="text-center btn-bg mx-16 shadow shadow-zinc-900 rounded py-3">
            <Link to={"/"} className="font-poppins font-bold">
              Win Again
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Win;
