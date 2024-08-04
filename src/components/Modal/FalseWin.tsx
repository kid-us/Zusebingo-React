interface Props {
  message?: boolean;
}

const FalseWin = ({ message }: Props) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="fixed flex z-50 justify-center w-full h-full items-center">
        <div className="lg:w-[27%] md:w-[28%] w-[90%] rounded bg-red-800 py-5 shadow shadow-gray-400">
          <h1 className="bi-heartbreak-fill text-center text-6xl text-white"></h1>

          {message ? (
            <>
              <h1 className="mt-7 text-white px-10 text-lg">Game Over.</h1>
              <p className="text- font-poppins mt-3 text-white px-10">
                While you were refreshing the page, another user won the game!
              </p>
            </>
          ) : (
            <>
              <h1 className="mt-7 text-white px-10 text-lg">
                You are out of the game.
              </h1>
              <p className="text- font-poppins mt-3 text-white px-10">
                You must not click the bingo button unless you have won.
                Clicking it without winning will result in elimination!
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FalseWin;
