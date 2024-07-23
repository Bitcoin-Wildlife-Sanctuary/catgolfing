import Navbar from "../components/Navbar";
import Footer from "../features/homePage/Footer";

function ChallengePage() {
  return (
    <div className="bg-[#000408] min-h-[100vh] text-white uppercase">
      <Navbar />
      <div>
        <div className="flex items-center justify-center font-bold text-[24px] text-center font-streamer text-[#7DFF68] pt-[60px]">
          <h2>
            Can you Beat these numbers
            <span className="font font-criteriacf">?</span> If yes,{" "}
            <span className="text-[#E8BB4A]">submit a PR here</span>
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChallengePage;
