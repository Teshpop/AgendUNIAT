import React from "react";
import "../css/index.css";

const BtnDays = ({ children, OpenPopUp }) => {
  return (
    <>
      <button
        className=" bg-BtnColor w-[7rem] h-[7rem] rounded-[20%] drop-shadow-[0_5px_0_rgba(0,0,0,0.5)] hover:bg-BtnColorHover shadow-hover ease-out duration-150"
        onClick={OpenPopUp}
      >
        <span className="text-[2.5rem] text-TextColor text-center">
          {children}
        </span>
      </button>
    </>
  );
};

export default BtnDays;
