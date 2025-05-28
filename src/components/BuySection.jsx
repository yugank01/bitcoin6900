import telegram from "../assets/telegram.svg";
import twi from "../assets/x.svg";
import uniswap from "../assets/Uniswap.svg";
import dex from "../assets/Dexscreener.svg";
import ethscan from "../assets/ethscan.svg";

export default function BuySection() {
  return (
    <div className="bg-black/70 text-center py-8 px-4">
      {/* Button Row */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button className="px-5 py-2 border-3 border-red-600 text-red-600 md:text-3xl font-extrabold orbitron-black rounded-xl hover:bg-red-600 hover:text-black transition-all duration-200 tracking-wider glow-red">
          BUY NOW ON UNISWAP
        </button>
      </div>

      {/* Icon Row */}
      <div className="flex justify-center gap-6 md:gap-8 flex-wrap text-red-600">
        <a href="#">
          <img src={telegram} alt="telegram" className="w-16 h-16" />
        </a>
        <a href="#">
          <img src={twi} alt="x" className="w-16 h-16" />
        </a>
        <a href="#">
          <img src={uniswap} alt="uniswap" className="w-16 h-16" />
        </a>
        <a href="#">
          <img src={dex} alt="dex screener" className="w-16 h-16" />
        </a>
        <a href="#">
          <img src={ethscan} alt="eth scan" className="w-16 h-16" />
        </a>
      </div>
    </div>
  );
}
