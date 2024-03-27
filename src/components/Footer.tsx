import React, { FC } from "react";
import Home1 from "../assets/home1.png";
import Home2 from "../assets/home2.png";
import Menu1 from "../assets/menu1.png";
import Menu2 from "../assets/menu2.png";

export const Footer: FC = () => {
  return (
    <nav className="sticky bottom-0 w-full border-gray-200 bg-white px-2 py-2.5 sm:px-4">
      <div className="flex flex-row w-full justify-around">
        <img src={Home1} alt="Home's Icon" width={32} height={32} />
        <img src={Menu1} alt="Menu's Icon" width={32} height={32} />
      </div>
    </nav>
  );
};
