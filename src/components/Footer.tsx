import React, { FC } from "react";
import Home1 from "../assets/home1.png";
import Home2 from "../assets/home2.png";
import Menu1 from "../assets/menu1.png";
import Menu2 from "../assets/menu2.png";

export const Footer: FC = () => {
  return (
    <nav className="sticky bottom-0 w-full border-gray-200 bg-white px-2 py-2.5 sm:px-4">
      <div className="grid grid-flow-row auto-rows-max grid-cols-2">
        <div className="h-8 w-8 text-white">
          <Home1 />
        </div>
        <div className="h-8 w-8 text-white">
          <Menu1 />
        </div>
      </div>
    </nav>
  );
};
