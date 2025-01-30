import React from "react";
import "../css/index.css";

const timeSlots = [
  '7:00- 9:00',
  '9:00-11:00',
  '11:00-1:00',
  '1:00-3:00',
  '3:00-4:00'
]

export default function Popout({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 font-sans">
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50" onClick={onClose}></div>
      <div className="bg-[#FF8C00] rounded-[2rem] p-4 w-80 shadow-[0_0_0_12px_#FF6600] relative z-10">
        <div className="absolute -top-6 left-0 right-0 flex justify-center">
          <div className="bg-[#8A2BE2] text-white text-4xl font-bold py-2 px-12 rounded-full shadow-md">
            Lunes
          </div>
        </div>
        <div className="mt-12 space-y-4">
          {timeSlots.map((slot, index) => (
            <div
              key={index}
              className={`w-full ${
                index % 2 === 0 ? 'bg-white' : 'bg-[#FFB366]'
              } text-black text-2xl font-bold py-3 rounded-[1rem] flex items-center justify-center`}
            >
              {slot}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}