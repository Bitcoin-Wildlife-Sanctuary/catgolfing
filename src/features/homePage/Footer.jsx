import github from "../../assets/githubLogo.svg";
import linkedIn from "../../assets/linkedinIcon.svg";
import twitter from "../../assets/twitterIcon.svg";
import telegram from "../../assets/telegram-icon.svg";
function Footer() {
  return (
    <div className="py-[60px] tab:py-[100px] px-6 tab:px-[200px] text-white text-center font-streamer">
      <h3 className="mb-5 text-base tab:text-[40px] leading-7  tab:leading-[56px]">
        Optimize. Compete. Stack Sats.
      </h3>
      <p className="mb-4 tab:mb-10 text-xs tab:text-sm leading-[22px] tab:w-[790px] mx-auto font-sans">
        Join the Catgolfing community today and be a part of something big.
        Optimize, compete, and win with your Bitcoin script expertise.
      </p>
      <button className="flex items-center gap-x-2 font-sans rounded-full bg-[#F7F9FB] py-[6px] px-5 text-sm leading-[22px] text-[#000003] mx-auto">
        Telegram <img src={telegram} alt="" />
      </button>
      <div className="mt-[60px] tab:mt-[100px] border-t-[3px] border-t-[#F7931A] w-full pt-[36px] flex gap-y-4 tab:flex-row flex-col justify-between items-center">
        <h3 className="font-streamer text-[20px] leading-[31px]">CatGolf</h3>
        <h6 className="font-normal text-sm font-sans">© 2024 CATGOLF</h6>
        <div className="tab:flex hidden  items-center gap-x-4">
          <img src={linkedIn} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
