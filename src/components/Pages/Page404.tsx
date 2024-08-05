import { Link } from "react-router-dom";
import { logo, notFound } from "../../assets";

const Page404 = () => {
  return (
    <div className="bg">
      <div className="container mx-auto flex mt-5">
        <div className="flex">
          <img src={logo} alt="Logo" className="w-14" />
          <Link to={"/"}>
            <p className="content-center font-poppins ms-2 mt-4">Zusebingo</p>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center h-[80vh]">
        <div className="text-center">
          <div className="flex justify-center">
            <img src={notFound} alt="" className="lg:w-96 w-56" />
          </div>

          <p className="font-poppins text-4xl font-bold mb-4 mt-5">
            Page not Found
          </p>
          <p className="font-poppins tex-xl font-bold">
            The page you tried to vist doesn't exis.
          </p>
          <p className="font-poppins text-white text-xs">
            This is usually caused by an incorrect or outdated link.
          </p>
          <div className="flex justify-center">
            <Link to="/">
              <p className="btn-bg bi-house-fill w-32 rounded px-3 py-1 mt-3 font-poppins">
                &nbsp; Home
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
