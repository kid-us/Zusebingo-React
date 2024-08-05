import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

const Groups = () => {
  return (
    <div className="bg">
      <Nav />
      <div className="container mx-auto flex justify-center align-middle h-auto pt-24">
        <div className="lg:w-[38%] px-2">
          <p className="chakra text-xl">
            Join groups with your desired entry amount and win!
          </p>
          {/* Titles */}
          <div className="grid grid-cols-4 mt-5 text-white ps-2">
            <div className="col-span-2">
              <p className="chakra text-lg">Game ID</p>
            </div>
            <div>
              <p className="chakra text-lg">Payout</p>
            </div>
            <div>
              <p className="chakra text-lg text-end me-5">Entry</p>
            </div>
          </div>

          {/* Groups */}
          <Link
            to={"/card-picker?gameid=AbrhamT94x"}
            className="grid grid-cols-4 mt-5 bg-white text-black rounded py-5 ps-2 shadow-md shadow-zinc-900 cursor-pointer"
          >
            <div className="col-span-2">
              <p className="chakra text-lg text-nowrap text-ellipsis overflow-hidden">
                AbrhamT94x
              </p>
            </div>
            <div>
              <p className="chakra text-lg">100br</p>
            </div>
            <div className="text-end me-5">
              <p className="chakra text-lg">10br</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Groups;
