import React from "react";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className="ml-10 flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer md:z-[1] xl:z-[1]">
    <div className="flex justify-center items-center flex-col bg-slate-900 w-[100%] h-[100%] rounded-full">
      <div className="flex justify-center flex-row">
        <p className="font-poppins font-medium mr-2 text-[18px] leading-[23px]">
          <span className="text-gradient">Get</span>
        </p>
          <img
            src={arrowUp}
            className="w-[23px] h-[23px] object-contain"
            alt="arrow"
          />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
