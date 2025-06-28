export const TitleBar = ({ title }) => {
  return (
    <div className="relative w-full my-6">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 transform skew-y-2 bg-primary"></div>
      <div className="absolute inset-0 z-0 transform -skew-y-2 ml-6 bg-secondary"></div>

      {/* Foreground Content */}
      <div className="relative z-10 bg-white px-6 py-4 shadow-md">
        <p className=" text-secondary mt-1">{title}</p>
      </div>
    </div>
  );
};
