import Nav from "../Nav/Nav";
import { Input } from "../BetInputs/Input";
import { Link } from "react-router-dom";

const CreateGroup = () => {
  // Handle Category
  const handleCategory = (category: string) => {
    console.log(category);
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
            {/* <Input amount="5" /> */}
            <Input
              numAmount={10}
              amount="10"
              onClick={(category: string) => handleCategory(category)}
            />
            <Input
              numAmount={25}
              amount="25"
              onClick={(category: string) => handleCategory(category)}
            />
            <Input
              numAmount={50}
              amount="50"
              onClick={(category: string) => handleCategory(category)}
            />
            <Input
              numAmount={100}
              amount="100"
              onClick={(category: string) => handleCategory(category)}
            />

            <p className="mt-5 text-sm font-poppins">
              Please reach out to our{" "}
              <Link to="https://t.me/+UGpMJ8GPTVw2MGUx" className="text-white">
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
