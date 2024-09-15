import React from "react";
import { monthName, days } from "../Const.js";
import { BtnDays } from "./index.js";

const Calendar = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="flex justify-center items-center w-full h-[13%]">
          <h2 className="text-TextColor drop-shadow-outline text-[3.2rem] uppercase text-center">
            {monthName}
          </h2>
        </div>
        <div className="w-[70%] h-full grid grid-cols-7 gap-[1rem] items-center justify-items-center">
          {days.map((d) => (
            <BtnDays key={d} OpenPopUp={() => console.log("Abrir popUp")}>
              {d}
            </BtnDays>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
