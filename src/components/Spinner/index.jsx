const Spinner = ({ size = 30, color = "#104270" }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: "2px solid transparent",
        borderTopColor: color,
        borderRightColor: color,
      }}
      className="rounded-full animate-spinSlow"
    ></div>
  );
};

export default Spinner;
