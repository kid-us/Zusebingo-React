import socket from "../../services/socket";

interface Props {
  onTerminate: () => void;
  gameId: string | number;
}

const Terminate = ({ onTerminate, gameId }: Props) => {
  const handleTerminate = () => {
    socket.emit("terminate", gameId, () => {
      window.location.href = "/create-group";
    });
  };

  return (
    <>
      <div className="overlay z-50"></div>
      <div className="fixed flex z-50 justify-center w-full h-full items-center">
        <div className="lg:w-[30%] md:w-[30%] w-[95%] rounded bg-white py-5 shadow-lg shadow-green-950 px-5">
          <p className="font-poppins ">
            Are you sure? Do you want to terminate the group game session?
          </p>

          <div className="flex justify-between gap-x-10 mt-5">
            <button
              onClick={() => onTerminate()}
              className="bg-blue-600 col-span-3 rounded h-12 shadow shadow-zinc-900 text-white font-poppins w-full"
            >
              Cancel
            </button>
            <button
              onClick={() => handleTerminate()}
              className="bg-red-600 col-span-3 rounded h-12 shadow shadow-zinc-900 text-white font-poppins w-full"
            >
              Terminate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminate;
