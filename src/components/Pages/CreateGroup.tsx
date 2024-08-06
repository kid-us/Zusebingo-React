import Nav from "../Nav/Nav";
import { Input } from "../BetInputs/Input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../store/useAuth";
import socket from "../../services/socket";

const CreateGroup = () => {
  const { id } = useAuth();
  const navigate = useNavigate();

  // Handle Category
  const handleCategory = (category: string) => {
    const data = {
      bet_amount: category,
      user_id: id,
    };

    socket.emit("create_group_game", data, () => {
      navigate("/my-group");
    });
  };

  return (
    <div className="bg">
      <Nav />
      <div className="container mx-auto flex justify-center align-middle h-auto pt-24">
        <div className="lg:w-[38%] px-2">
          <p className="lg:mt-5 text-2xl font-poppins">
            Choose the group entry amount.
          </p>

          {/* <!-- Category Form --> */}
          <form className="pt-5">
            <Input
              numAmount={10}
              amount="ten"
              onClick={() => handleCategory("ten")}
            />
            <Input
              numAmount={25}
              amount="twenty_five"
              onClick={() => handleCategory("twenty_five")}
            />
            <Input
              numAmount={50}
              amount="fifty"
              onClick={() => handleCategory("fifty")}
            />
            <Input
              numAmount={100}
              amount="hundred"
              onClick={() => handleCategory("hundred")}
            />

            <p className="mt-5 text-sm font-poppins">
              Please reach out to our{" "}
              <Link
                to="https://t.me/+UGpMJ8GPTVw2MGUx"
                className="text-white font-poppins"
              >
                Telegram
              </Link>{" "}
              customer support for assistance.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
