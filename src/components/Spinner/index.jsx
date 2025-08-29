const Spinner = ({ size = 32 }) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className="border-[3px] border-t-secondColor border-r-secondColor border-transparent rounded-full animate-spinSlow"
    ></div>
  );
};

export default Spinner;
