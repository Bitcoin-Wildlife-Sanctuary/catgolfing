import v1 from "../../assets/why-participate.mp4";
import v1Mini from "../../assets/why-participate-mini.gif";

function WhyParticipate() {
  return (
    <div className="relative h-fit pt-[60px] tab:pt-[100px] px-4">
      <video preload="auto" autoPlay loop muted className="tab:flex hidden">
        <source src={v1} type="video/mp4" />
      </video>
      <img
        src={v1Mini}
        preload="auto"
        autoPlay
        loop
        muted
        className="flex tab:hidden"
      />
    </div>
  );
}

export default WhyParticipate;
