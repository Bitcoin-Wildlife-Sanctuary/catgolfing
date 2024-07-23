import bg from "../../assets/heroBgVideo2.mp4";
import bgSmall from "../../assets/heroBgVideo2mini.gif";
import Navbar from "../../components/Navbar";

function HeroSection() {
  return (
    <div className="relative min-h-[100vh] w-full flex justify-center">
      <img
        preload="auto"
        autoPlay
        loop
        muted
        className="absolute z-[1] w-full tab:hidden flex"
        src={bgSmall}
      />
      <video
        preload="auto"
        autoPlay
        loop
        muted
        className="absolute z-10 w-full tab:flex hidden"
      >
        <source src={bg} type="video/mp4" />
      </video>
      <div className="relative z-30 w-full">
        <Navbar />
        <div className="pt-[54px] px-6 tab:px-[80px] flex flex-col items-center">
          <div className="bg-[#121212] rounded-[10px] bg-opacity-90 py-[22px] tab:py-8 px-3 tab:px-5 text-white text-center tab:w-fit w-full">
            <h2 className="leading-[22px] tab:leading-[47px] mb-[21px] font-streamer text-[20px] tab:text-[40px] uppercase">
              Cat Golfing Challenge for Bitcoin Circle Stark
            </h2>
            <h4 className="font-criteriacf font-bold text-[10px] tab:text-2xl uppercase leading-4 tab:leading-8">
              Optimize Bitcoin scripts and stack some sats{" "}
              <span className="text-[#51E343] font-bold">
                2 BTC up for grabs
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
