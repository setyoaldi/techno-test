import { useState, useEffect } from "react";
import { LayoutMenu } from "../components/Layout";
import { CardMenu } from "../components/Card";
import logoreact from "../assets/react.svg";

export const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const handleMenuClick = (itemName: string) => {
    setActiveMenu(itemName);
  };
  document.addEventListener("scroll", () => {
    let header: any = document.getElementById("menu");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  return (
    <>
      <LayoutMenu>
        <div className="flex flex-col" id="menu">
          <div className="flex flex-row justify-around mt-5 px-5 sticky top-0 z-50 bg-white">
            <a
              href="#home"
              className={`px-1  text-center ${
                activeMenu === ""
                  ? "border-b-2 border-b-black font-bold"
                  : "font-semibold"
              }`}
              onClick={() => {
                handleMenuClick("");
              }}
            >
              Seasonal Product
            </a>
            <a href="#BS">
              <button
                onClick={() => handleMenuClick("BS")}
                className={`px-1  text-center  ${
                  activeMenu === "BS"
                    ? "border-b-2 border-b-black font-bold"
                    : "font-semibold"
                }`}
              >
                Best Seller
              </button>
            </a>
            <a href="#CF">
              <button
                onClick={() => handleMenuClick("CF")}
                className={`px-1  text-center  ${
                  activeMenu === "CF"
                    ? "border-b-2 border-b-black font-bold"
                    : "font-semibold"
                }`}
              >
                Coffe
              </button>
            </a>
            <a href="#CB">
              <button
                onClick={() => handleMenuClick("CB")}
                className={`px-1  text-center  ${
                  activeMenu === "CB"
                    ? "border-b-2 border-b-black font-bold"
                    : "font-semibold"
                }`}
              >
                Cold Brew
              </button>
            </a>
          </div>
          {/* Menu */}
          <div data-name="home" className="items-start py-5" id="home">
            {/* SP */}
            <div className="bg-slate-100 w-full pl-5 py-3">
              <p className="capitalize font-bold">Seasonal Product</p>
            </div>
            <div className="bg-white flex flex-col gap-y-2">
              {" "}
              <CardMenu
                pict={logoreact}
                name={"Lorem Ipsum"}
                desc={"ini desc"}
                price={"40.000"}
              />
              <CardMenu
                pict={logoreact}
                name={"Lorem Ipsum"}
                desc={"ini desc"}
                price={"40.000"}
              />
              <CardMenu
                pict={logoreact}
                name={"Lorem Ipsum"}
                desc={"ini desc"}
                price={"40.000"}
              />
            </div>
          </div>
          <div data-name="BS" className="items-start py-5" id="BS">
            {/* BS */}
            <div className="bg-slate-100 w-full pl-5 py-3">
              <p className="capitalize font-bold">Best Product</p>
            </div>
            <div className="bg-white flex flex-col gap-y-2">
              {" "}
              <CardMenu
                pict={logoreact}
                name={"Lorem Ipsum"}
                desc={"ini desc"}
                price={"40.000"}
              />
              <CardMenu
                pict={logoreact}
                name={"Lorem Ipsum"}
                desc={"ini desc"}
                price={"40.000"}
              />
              <CardMenu
                pict={logoreact}
                name={"Lorem Ipsum"}
                desc={"ini desc"}
                price={"40.000"}
              />
            </div>
          </div>
          <div data-name="CF" className="items-start py-5" id="CF">
            {/* CF */}
            <div className="bg-slate-100 w-full pl-5 py-3">
              <p className="capitalize font-bold">Coffe</p>
            </div>
            <div className="bg-white flex flex-col gap-y-2">
              {" "}
              <CardMenu
                pict={logoreact}
                name={"Lorem Ipsum"}
                desc={"ini desc"}
                price={"40.000"}
              />
              <CardMenu
                pict={logoreact}
                name={"Lorem Ipsum"}
                desc={"ini desc"}
                price={"40.000"}
              />
              <CardMenu
                pict={logoreact}
                name={"Lorem Ipsum"}
                desc={"ini desc"}
                price={"40.000"}
              />
            </div>
          </div>
          <div data-name="CB" className="items-start py-5" id="CB">
            {/* SP */}
            <div className="bg-slate-100 w-full pl-5 py-3">
              <p className="capitalize font-bold">Cold Brew</p>
            </div>
            <div className="bg-white flex flex-col gap-y-2">
              {" "}
              <CardMenu
                pict={logoreact}
                name={"Lorem Ipsum"}
                desc={"ini desc"}
                price={"40.000"}
              />
              <CardMenu
                pict={logoreact}
                name={"Lorem Ipsum"}
                desc={"ini desc"}
                price={"40.000"}
              />
              <CardMenu
                pict={logoreact}
                name={"Lorem Ipsum"}
                desc={"ini desc"}
                price={"40.000"}
              />
            </div>
          </div>
        </div>
      </LayoutMenu>
    </>
  );
};
