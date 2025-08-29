const SkeletonTable = ({ columns = 5, rows = 6, minColumnWidth = 60 }) => {
  return (
    <div
      className="grid gap-14 bg-[#003F62] rounded-lg shadow w-full p-10 place-items-center"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(${minColumnWidth}px, 1fr))`,
      }}
    >
      {Array.from({ length: columns * rows }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded bg-[#21709C] w-24 h-6"
        ></div>
      ))}
    </div>
  );
};

export default SkeletonTable;
