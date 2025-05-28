import videoFile from "../assets/banner.mp4";

const Sections = () => {
  return (
    <div className="bg-black/70 space-y-20 py-20 px-6 mx-auto">
      <section className="flex gap-8 items-center justify-center">
        <div className=" max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">The Legend</h2>
          <p className="text-gray-300 leading-relaxed">
            Born in darkness, coded in chaos. Bitcoin 6900 seeks to rule the
            Pepeverse with his memetic mastery and unholy liquidity pool.
          </p>
        </div>
      </section>

      <section className="text-center">
        <video
          className="mx-auto rounded-xl shadow-md w-full max-w-4xl"
          controls
          muted
          autoPlay
          loop
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <p className="mt-4 text-gray-400">Broadcast from the Dork Citadel</p> */}
      </section>
    </div>
  );
};

export default Sections;
