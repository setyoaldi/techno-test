import { LayoutHome } from "../components/Layout";
import motif from "../assets/motif.png";
import { CardUser } from "../components/Card";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
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
      <LayoutHome title={"Home"}>
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
            <CardUser />
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
      </LayoutHome>
    </>
  );
};
