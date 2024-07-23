import v1 from "../../assets/about-the-contest.mp4";
import v1Mini from "../../assets/about-the-contest-mini.gif";
// import v1Minip from "../../assets/about-the-contest-mini.webp";
import github from "../../assets/githubLogo.svg";

function AboutTheContest() {
  return (
    <div className="relative tab:h-fit h-[720px] flex flex-col items-center pb-[60px] tab:pb-[128px] px-[24px] mt-[-90px]">
      <video preload="auto" autoPlay loop muted class="tab:block hidden h-auto">
        <source src={v1} type="video/mp4" />
      </video>
      {/* <video
        preload="auto"
        autoPlay
        loop
        muted
        class="tab:hidden h-auto"
        poster="../../assets/about-the-contest-mini.webp"
      >
        <source src={v1Mini} type="video/mp4" />
      </video> */}
      <img
        src={v1Mini}
        preload="auto"
        autoPlay
        loop
        muted
        className="w-full tab:hidden flex"
      />
      <div className="flex w-full mx-auto absolute  top-[580px] tab:top-[840px] justify-center">
        <a
          href="https://github.com/Bitcoin-Wildlife-Sanctuary/catgolfing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 rounded-full bg-[#F7F9FB] py-[8.5px] tab:py-[13px] px-[19px] tab:px-[82px] text-base tab:text-[31px] font-sans capitalize leading-6 tab:leading-[48px] text-[#000003]"
        >
          Github Repo{" "}
          <img
            src={github}
            className="tab:w-[35px] w-[17.4px] h-[17.4px] tab:h-[35px]"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default AboutTheContest;
