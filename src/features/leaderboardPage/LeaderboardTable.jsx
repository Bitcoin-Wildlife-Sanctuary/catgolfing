import LeaderboardTableRow from "./LeaderboardTableRow";

function LeaderboardTable() {
  return (
    <div className="px-[7px] tab:px-[37px] pb-6 tab:pb-[28px] border-[1px] border-solid border-[#E8BB4A] text-white font-iceberg w-full tab:w-[1344px] mx-auto">
      <div className="grid grid-cols-[1fr_2fr_2fr] tab:grid-cols-[1fr_1fr_1fr] pt-5 tab:pt-[43px] pb-3 tab:pb-[24px] text-sm tab:text-xl leading-[17px] tab:leading-6">
        <div className="pl-[9px] tab:pl-[27px]">RANK</div>
        <div className="pl-[9px] tab:pl-[27px]">PARTICIPANT</div>
        <div className="pl-[24px] tab:pl-[50px]">SCORE</div>
      </div>
      <div className="flex flex-col gap-y-6">
        <LeaderboardTableRow
          contributor={"1"}
          contribution={"CATLOVER123"}
          size={"200"}
        />
        <LeaderboardTableRow
          contributor={"2"}
          contribution={"Calebux"}
          size={"1281"}
        />
        <LeaderboardTableRow
          contributor={"3"}
          contribution={"ODIN1"}
          size={"1100"}
        />
        <LeaderboardTableRow
          contributor={"4"}
          contribution={"SATOSHICAT"}
          size={"1000"}
        />
        <LeaderboardTableRow
          contributor={"5"}
          contribution={"add"}
          size={"40542"}
        />
        <LeaderboardTableRow
          contributor={"6"}
          contribution={"add_x_only"}
          size={"26791"}
        />
      </div>
    </div>
  );
}

export default LeaderboardTable;
