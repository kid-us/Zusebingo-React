interface Props {
  number: number;
}

const Counter = ({ number }: Props) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="fixed w-full flex h-full justify-center z-50 items-center">
        <p className="text-white text-8xl font-poppins">{number}</p>
      </div>
    </>
  );
};

export default Counter;
