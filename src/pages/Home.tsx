import { useState } from "react";
import { LayoutHome } from "../components/Layout";
import motif from "../assets/motif.png";
import qr from "../assets/qr.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Modal.css";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const banners = [
    { id: 1, image: "../assets/logo technopartner.png" },
    { id: 2, image: "../assets/react.svg" },
    { id: 3, image: "../assets/motif.png" },
  ];
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <LayoutHome>
        <div
          className="flex flex-col justify-center items-center py-5"
          style={{
            backgroundImage: `url(${motif})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-white rounded-lg flex items-center w-5/6 h-auto p-5">
            <div className="flex flex-col gap-3">
              <div className="capitalize text-black text-base font-semibold">
                Good Afternoon,{" "}
              </div>
              <div className="capitalize text-black text-lg font-bold">
                Guntur{" "}
              </div>
              <div className="flex flex-row">
                <button
                  className="rounded-full shadow-lg p-5 w-5/12 text-center mr-10"
                  onClick={toggleModal}
                >
                  QR
                </button>
                <div className="w-7/12 flex flex-col justify-center items-center gap-y-4">
                  <div className="capitalize font-medium text-gray-600">
                    saldo:{" "}
                  </div>
                  <div className="capitalize font-medium text-gray-600">
                    point:{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-5">
          <Slider className="banner-slider" {...settings}>
            {banners.map((banner) => (
              <div key={banner.id}>
                <img src={banner.image} alt={`Banner ${banner.id}`} />
              </div>
            ))}
          </Slider>
          <style>
            {`
            .banner-slider{
                position:relative;
            }
          .slick-dots-custom {
            position: absolute;
            right: 10px;
            bottom: 10px;
          }
        `}
          </style>
        </div>
        {isOpen && (
          <div className="modal-overlay">
            <div className="modal-content flex flex-col">
              <button className="close-button" onClick={toggleModal}>
                X
              </button>
              <div className="text-center">
                Show the QR Code below to the cashier
              </div>
              <img src={qr} alt="" />
            </div>
          </div>
        )}
      </LayoutHome>
    </>
  );
};
