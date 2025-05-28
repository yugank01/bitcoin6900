import videoFile from "../assets/banner.mp4";

const Sections = () => {
  return (
    <div className="bg-black/70 space-y-20 py-20 px-6 mx-auto">
      <section className="flex gap-8 items-center justify-center orbitron-black">
        <div className=" max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Legend</h2>
          <br />
          <p className="leading-relaxed">We are not holders.</p>
          <p className="leading-relaxed">
            We are interpreters of the code, defenders of the prophecy. We don’t
            chase pumps - we fulfill fate.
          </p>
          <br />
          <p className="leading-relaxed">
            You only need one. The rest is noise
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
