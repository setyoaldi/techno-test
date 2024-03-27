import React from "react";
import { CardMenuTypes } from "../utils/types/componen";

export const CardMenu: React.FC<CardMenuTypes> = (props) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-x-2 px-5 py-2">
        <div className="w-3/12 flex justify-center items-center">
          <img src={props.pict} alt="" />
        </div>
        <div className="w-6/12 flex flex-col justify-center items-start">
          <div className="text-black capitalize text-lg">{props.name}</div>
          <div className="text-gray-500 normal-case text-sm">{props.desc}</div>
        </div>
        <div className="w-3/12">{props.price}</div>
      </div>
    </>
  );
};
