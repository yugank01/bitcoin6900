import banner from "../assets/video1.MOV";
import logo from "../assets/logo.png"

const Hero = () => {
  return (
    <section className="relative bg-black/40 text-white flex flex-col items-center justify-center text-center">
      {/* <h1 className="orbitron-gradient glow-hero font-[900] text-3xl sm:text-[9rem] mt-10 relative z-10 md:top-8 tracking-tight leading-tight">
        BITCOIN 6900
      </h1> */}
      <img src={logo} alt="BITCoIN 6900" className="w-full" />
      <video autoPlay loop muted playsInline className="w-full relative ">
        <source src={banner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-black/90 p-6 rounded-xl shadow-lg mt-8">
        <p className="text-xl md:text-8xl mb-6 orbitron-black font-extrabold max-w-3xl text-red-500 glow-red">
          The Signal in the Noise
        </p>
      </div>
    </section>
  );
};

export default Hero;
