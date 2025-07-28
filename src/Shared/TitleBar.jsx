export const TitleBar = ({ title }) => {
  return (
    <div className="relative w-full mb-10">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 transform skew-y-2 bg-primary"></div>
      <div className="absolute inset-0 z-0 transform -skew-y-2 ml-6 bg-secondary"></div>

      {/* Foreground Content */}
      <div className="relative z-10 bg-gradient-to-r from-[#939994] to-[#456339] px-6 py-4 shadow-md">
        <p className=" text-white mt-1">{title}</p>
      </div>
    </div>
  );
};
