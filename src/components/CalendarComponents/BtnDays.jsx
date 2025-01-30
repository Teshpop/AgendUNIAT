import React from "react";
import "../css/index.css";

const BtnDays = ({ children, OpenPopUp }) => {
  return (
    <>
      <button
        className=" bg-BtnColor w-[5rem] h-[5rem] rounded-[20%] drop-shadow-[0_5px_0_rgba(0,0,0,0.5)] shadow-none-hover ease-in duration-150 btn-active active:bg-BtnColorHover"
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
