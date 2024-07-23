function LeaderboardTableRow({ contributor, contribution, size }) {
  return (
    <div className="grid grid-cols-[1fr_2fr_2fr] tab:grid-cols-[1fr_1fr_1fr]  pt-[27px] tab:pt-[39px] pb-[27px] tab:pb-[31px] border-b-[#7DFF68] border-b-[9px] tab:border-b-[19px] text-base tab:text-xl leading-4 tab:leading-6 border-x-[#7DFF68] border-x-[1px] border-t-[#7DFF68] border-t-[1px]">
      <div className="pl-[9px] tab:pl-[27px] text-[#E8BB4A]">{contributor}</div>
      <div className="pl-[9px] tab:pl-[27px]">{contribution}</div>
      <div className="pl-[24px] tab:pl-[50px]">{size}</div>
    </div>
  );
}

export default LeaderboardTableRow;
