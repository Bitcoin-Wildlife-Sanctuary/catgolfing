import ParticipationStep from "./ParticipationStep";
import v1 from "../../assets/how-to-participate.mp4";
import v1Mini from "../../assets/how-to-participate-mini.gif";

function HowToParticipate() {
  return (
    <div className="relative h-fit">
      <video preload="auto" autoPlay loop muted className="tab:flex hidden">
        <source src={v1} type="video/mp4" />
      </video>
      <img
        preload="auto"
        autoPlay
        loop
        muted
        className="flex tab:hidden"
        src={v1Mini}
      />
    </div>
  );
}

export default HowToParticipate;
