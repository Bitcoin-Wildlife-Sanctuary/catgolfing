import { useState } from "react";
import FaqItem from "./FaqItem";

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div className="pt-[150px] pb-[200px] text-white px-[124px] flex flex-col items-center">
      <h2 className="text-[40px] leading-[45px] font-streamer mb-[78px] text-center">
        Frequently asked questions
      </h2>
      <div className="flex flex-col items-center gap-y-10">
        <FaqItem
          question={"Who can participate in the contest?"}
          id={1}
          answer={"Every developer who wants to try the challenge."}
          open={open}
          setOpen={setOpen}
        />
        <FaqItem
          question={"Is there an entry fee?"}
          id={2}
          answer={"No entry fee required!"}
          open={open}
          setOpen={setOpen}
        />
        <FaqItem
          question={"What happens if I don't beat the current benchmarks?"}
          id={4}
          answer={"You get rewarded with sats."}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
}

export default FAQ;
