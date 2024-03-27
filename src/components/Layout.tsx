import { FC } from "react";
import { LayoutTypes } from "../utils/types/componen";
import Logo from "../assets/logo technopartner.png";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const LayoutLogin: FC<LayoutTypes> = (props) => {
  return (
    <>
      <head>
        <title>{props.title}</title>
        <link rel="icon" href={Logo} />
      </head>
      <main className="flex justify-center bg-white">
        <div className="layout-container min-w-full bg-white md:min-w-[480px] md:max-w-[480px]">
          <div className="h-full w-full overflow-auto">{props.children}</div>
        </div>
      </main>
    </>
  );
};

export const LayoutHome: FC<LayoutTypes> = (props) => {
  return (
    <>
      <head>
        <title>{props.title}</title>
        <link rel="icon" href={Logo} />
      </head>
      <main className="flex justify-center bg-black">
        <div className="layout-container min-w-full bg-white md:min-w-[480px] md:max-w-[480px]">
          <Header />
          <div className="h-full w-full overflow-auto">{props.children}</div>
          <Footer />
        </div>
      </main>
    </>
  );
};
