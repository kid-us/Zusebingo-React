import Nav from "../Nav/Nav";
import { Input } from "../BetInputs/Input";
import { Link } from "react-router-dom";

const CreateGroup = () => {
  // Handle Category
  const handleCategory = (category: number, cate: string) => {
    console.log(category, cate);
  };

  return (
    <div className="bg">
      <Nav />
      <div className="container mx-auto flex justify-center align-middle h-auto pt-24">
        <div className="lg:w-[38%] lg:px-2 px-4">
          <p className="lg:mt-5 text-2xl font-poppins">
            Choose the group entry amount.
          </p>

          {/* <!-- Category Form --> */}
          <form className="pt-5">
            <Input
              numAmount={10}
              amount="ten"
              onClick={(numCategory: number, stringCategory: string) =>
                handleCategory(numCategory, stringCategory)
              }
            />
            <Input
              numAmount={25}
              amount="twenty-five"
              onClick={(numCategory: number, stringCategory: string) =>
                handleCategory(numCategory, stringCategory)
              }
            />
            <Input
              numAmount={50}
              amount="fifty"
              onClick={(numCategory: number, stringCategory: string) =>
                handleCategory(numCategory, stringCategory)
              }
            />
            <Input
              numAmount={100}
              amount="hundred"
              onClick={(numCategory: number, stringCategory: string) =>
                handleCategory(numCategory, stringCategory)
              }
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
