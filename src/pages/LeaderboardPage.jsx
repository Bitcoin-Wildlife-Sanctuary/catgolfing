import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../features/homePage/Footer";
import LeaderboardTable from "../features/leaderboardPage/LeaderboardTable";
import gridFloor from "../assets/grid-floor.png";
import spinCard from "../assets/spin-card.png";
import spinCardMini from "../assets/spin-card-mini.png";

function LeaderboardPage() {
  return (
    <div className="bg-[#000408] min-h-[100vh] text-white uppercase w-screen overflow-x-hidden">
      <div className="relative h-fit overflow-y-hidden">
        <img src={spinCard} className="absolute hidden tab:flex" alt="" />
        <img
          src={spinCardMini}
          className="absolute tab:hidden flex w-full"
          alt=""
        />
        <div className="z-[10] relative h-[97px]">
          <Navbar />
        </div>
      </div>
      <div className="font-iceberg px-6">
        <div className="font-bold text-[24px] tab:text-[52px] text-[#7DFF68] pt-5 tab:pt-[60px]">
          <h2 className="mb-8 tab:mb-[42px] text-center text-[#E8BB4A]">
            Top Contributors
          </h2>
          <LeaderboardTable />
        </div>
      </div>
      <img src={gridFloor} className="w-full" alt="" />
      <Footer />
    </div>
  );
}

export default LeaderboardPage;
