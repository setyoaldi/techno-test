import React, { FC } from "react";
import { InputTypes } from "../utils/types/componen";

export const TextInput: FC<InputTypes> = (props) => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-gray-400 capitalize text-center">{props.text}</p>
        <input
          type={props.type}
          className="w-1/2 h-12 p-3 rounded-lg bg-white shadow-lg text-black outline-none"
        />
      </div>
    </>
  );
};
