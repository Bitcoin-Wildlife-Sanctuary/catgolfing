import { NavLink } from "react-router-dom";
import arr from "../assets/typcn_arrow-up.svg";

function MobileMenu({ toggleMenu }) {
  const handleOverlayClick = () => {
    toggleMenu();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="absolute inset-0 flex justify-center pt-[120px] bg-black bg-opacity-55 backdrop-blur-sm z-[200]"
      onClick={handleOverlayClick}
    >
      <div
        className="py-[37px] px-[24px] bg-white w-[343px] h-fit rounded-[10px]"
        onClick={handleContentClick}
      >
        <ul className="navigation w-full text-xs tracking-widest leading-[19px] flex flex-col gap-y-[30px] capitalize font-streamer">
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
              <svg
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[11px] h-[11px]"
              >
                <path
                  d="M17.4004 2.08038L6.44859 0.306441C6.23257 0.271451 6.01177 0.27935 5.7988 0.329691C5.58584 0.380032 5.38487 0.471827 5.20738 0.599835C5.02988 0.727843 4.87934 0.889557 4.76435 1.07574C4.64935 1.26193 4.57216 1.46895 4.53717 1.68497C4.50218 1.90099 4.51008 2.12179 4.56042 2.33476C4.61076 2.54772 4.70255 2.74869 4.83056 2.92618C4.95857 3.10367 5.12028 3.25422 5.30647 3.36921C5.49266 3.48421 5.69967 3.5614 5.9157 3.59639L11.2508 4.46056L0.996175 11.8562C0.63766 12.1148 0.396541 12.5052 0.325863 12.9415C0.255186 13.3779 0.360741 13.8244 0.619304 14.1829C0.877867 14.5415 1.26826 14.7826 1.7046 14.8533C2.14094 14.9239 2.58749 14.8184 2.946 14.5598L13.2006 7.16413L12.3365 12.4992C12.3008 12.7153 12.3083 12.9363 12.3583 13.1496C12.4084 13.3628 12.5002 13.564 12.6283 13.7416C12.7564 13.9193 12.9183 14.0698 13.1048 14.1846C13.2913 14.2995 13.4987 14.3763 13.715 14.4107C13.931 14.4459 14.1519 14.4381 14.3649 14.3878C14.578 14.3376 14.779 14.2458 14.9566 14.1178C15.1341 13.9897 15.2846 13.8279 15.3996 13.6416C15.5145 13.4554 15.5916 13.2482 15.6264 13.0321L17.4004 2.08038Z"
                  fill="#000000"
                />
              </svg>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
