import { NavLink } from "react-router-dom";
import arr from "../assets/typcn_arrow-up.svg";

function NavigationLinks() {
  return (
    <ul className="flex navigation items-center justify-center w-full text-lg tracking-widest leading-[22px] gap-x-[95px] capitalize">
      <li>
        <NavLink to={"/"}>HOME</NavLink>
      </li>
      <li>
        <NavLink to={"/leaderboard"}>LEADERBOARD</NavLink>
      </li>
      <li>
        <NavLink
          to={"https://github.com/Bitcoin-Wildlife-Sanctuary/catgolfing"}
          className="flex items-center gap-x-1"
        >
          GITHUB
          <img src={arr} alt="" className="w-[14px] h-[14px]" />
        </NavLink>
      </li>
    </ul>
  );
}

export default NavigationLinks;
