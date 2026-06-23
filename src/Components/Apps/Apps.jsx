const Apps = () => {
  return (
    <div id="apps" className="pb-30 pt-30 bg-black px-4">
      <div className="text-center  max-w-[1500px] mx-auto">
        <h1 className="relative text-2xl md:text-4xl font-bold mb-10 border-6 border-primary px-6 py-2 inline-block border-t-0 border-r-0 text-white">
          📲 My <span className="text-primary">Apps</span>
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className=" border p-4 border-primary">
          <div className="">
            <div className="flex items-center">
              <img src="/assets/logo2.png" alt="MBBL App" className="w-12" />
              <h1 className="text-white text-2xl">MBBL</h1>
            </div>
            <p className="text-white">All in one application</p>
          </div>

          <button className=" px-33 mt-2 rounded bg-primary text-black font-bold cursor-pointer hover:bg-white hover:text-primary">
            <a href="/apk/MBBL.apk">Install Now</a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Apps;
