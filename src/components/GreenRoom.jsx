import { p } from "framer-motion/client";
import { useState, useEffect } from "react";
import { Calendar } from "./CalendarComponents";

const GreenRoom = () => {
  return (
    <>
      <section
        id="GreenRoom"
        className="flex flex-col justify-center items-center h-screen w-full bg-OrangeBG"
      >
        <div className="flex justify-center items-center h-[13%] w-full bg-GreenTitleBG drop-shadow-contH1">
          <h1 className="text-[3.2rem] text-TextColor drop-shadow-outline uppercase">
            Green Room
          </h1>
        </div>

        <Calendar />
      </section>
    </>
  );
};

export default GreenRoom;
