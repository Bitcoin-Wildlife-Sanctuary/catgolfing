import { useState } from "react";

function FaqItem({ question, answer, id, open, setOpen }) {
  return (
    <div
      className="w-[1173px] bg-[#F7931A] h-fit text-[#121212] uppercase"
      onClick={() => {
        setOpen(null);
        if (open === id) {
          return;
        }

        setOpen(id);
      }}
    >
      <div className="py-[29px] text-center">
        <h4 className="text-xl leading-[45px] font-medium">{question}</h4>
      </div>
      <div
        className={`${
          open === id ? "h-fit py-[16px]" : "h-0"
        } transition-all ease-in-out duration-300 border-t-[#121212] border-t-[1px]`}
      >
        <h4 className="text-base font-semibold leading-[45px] text-center">
          {answer}
        </h4>
      </div>
    </div>
  );
}

export default FaqItem;
