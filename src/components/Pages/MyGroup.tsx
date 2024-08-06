import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Terminate from "../Modal/Terminate";
import socket from "../../services/socket";
import useAuth from "../../store/useAuth";

const MyGroup = () => {
  const { id } = useAuth();
  const [terminate, setTerminate] = useState<boolean>();
  const [group, setMyGroup] = useState<(number | string)[]>([]);

  useEffect(() => {
    const user_id = id;
    socket.emit("my_games", user_id, (response: any) => {
      setMyGroup(response);
    });
  }, [socket, group]);

  return (
    <>
      {terminate && (
        <Terminate
          gameId={group ? group[0] : ""}
          onTerminate={() => setTerminate(false)}
        />
      )}
      <div className="bg">
        <Nav />
        <div className="container mx-auto flex justify-center align-middle h-auto pt-32">
          <div className="lg:w-[47%] px-2">
            <p className="font-poppins">
              Hey there group game creator, your group game is created
              successfully under{" "}
              <span className="text-white font-poppins">
                {" "}
                {group ? group[1] : ""}{" "}
              </span>{" "}
              birr category. And this is your game id
              <span className="text-white font-poppins">
                {" "}
                {group ? group[0] : ""}
              </span>{" "}
              you can ask players to join this group.
            </p>

            <div className="grid grid-cols-3 gap-x-5 mt-32">
              <div className="bg-white rounded  shadow shadow-zinc-900 p-4">
                <p className="text-center font-poppins font-bold">PLAYERS</p>
                <h1 className="text-center text-3xl mt-1 font-poppins font-bold">
                  {group ? group[2] : ""}
                </h1>
              </div>
              <div className="flex items-center">
                <button className="bg-green-600 rounded  shadow shadow-zinc-900 p-4 w-full text-center text-white font-poppins ">
                  Start
                </button>
              </div>
              <div className="bg-white rounded  shadow shadow-zinc-900 p-4">
                <p className="text-center font-poppins font-bold">PAYOUT</p>
                <h1 className="text-center text-3xl mt-1 font-poppins font-bold">
                  {group ? group[3] : ""}
                </h1>
              </div>

              <button
                onClick={() => setTerminate(true)}
                className="bg-red-600 col-span-3 mt-20 rounded h-12 shadow shadow-zinc-900 text-white font-poppins"
              >
                Terminate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyGroup;
