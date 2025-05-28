import video from "../assets/video2.mp4";

export default function BitcoinSection() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-black/70 text-white">
      {/* Content Container */}
      <div className="relative z-20 w-full max-w-8xl mx-auto px-6 flex flex-col md:flex-row justify-between h-full">
        {/* Left Text */}
        <div className="text-left">
          <h1 className="text-[10vw] md:text-[12vw] orbitron-gradient glow-hero font-extrabold leading-none text-red-600 tracking-tight uppercase">
            BITCOIN
            <br />
            6900
          </h1>
        </div>

        {/* Right Video/Animation */}
        <div className="md:w-1/2 w-full flex justify-center items-center mt-10 md:mt-0 relative">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-[90%] md:w-[500px] max-w-full rounded-lg shadow-5xl brightness-110 contrast-125 saturate-150"
          />
        </div>
      </div>
      <div className="orbitron-black md:text-6xl font-[900] tracking-wider glow-red max-w-5xl text-center">
        A 100% COMMUNITY-RUN MEMECOIN
      </div>
    </section>
  );
}
