import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  { id: 1, src: "https://cdn3.iconfinder.com/data/icons/glypho-computers-andother-tech/64/charger-plugged-512.png", text: "Chargers" },
  { id: 2, src: "https://static.vecteezy.com/system/resources/previews/017/785/096/large_2x/headphone-icon-on-transparent-background-free-png.png", text: "Audio" },
  { id: 3, src: "https://cdn-icons-png.freepik.com/512/81/81126.png", text: "Cables" },
  { id: 4, src: "https://cdn-icons-png.flaticon.com/512/1047/1047796.png", text: "Protection" },
  { id: 5, src: "https://cdn1.iconfinder.com/data/icons/wireless-charging/64/Wireless_Charging_gadget_power-04-256.png", text: "Wireless" },
  { id: 6, src: "https://cdn4.iconfinder.com/data/icons/apple-interfaces/100/apple-watch-2-256.png", text: "MagSafe" },
  { id: 7, src: "https://icon-library.com/images/gamer-icon-png/gamer-icon-png-29.jpg", text: "Gaming" },
  { id: 8, src: "https://www.pngall.com/wp-content/uploads/5/Storage-PNG-Image.png", text: "Storage" },
];

const Categories = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };
  const smallsettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="p-5 overflow-x-hidden">
      <div className="lg:text-5xl text-center text-base md:text-lg">
        <h1>Shop by category</h1>
      </div>
      <div className="hidden md:block bg-gray-100">
        <Slider {...settings}>
          {items.map((d) => (
            <div className="h-[350px] text-black m-2 cursor-pointer flex justify-center" key={d.id}>
              <div className="rounded-full flex justify-center items-center h-[16rem] m-3 bg-white">
                <img src={d.src} alt="img" className="w-[100px]" />
              </div>
              <div className="mt-1 text-center">
                <p className="text-lg font-semibold">{d.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-10 bg-slate-100 sm:hidden bg-gray-100">
        <Slider {...smallsettings}>
          {items.map((d) => (
            <div className="bg-slate-100 h-[350px] text-black m-2" key={d.id}>
              <div className="rounded-full flex justify-center items-center h-[16rem] m-3 cursor-pointer bg-white">
                <img src={d.src} alt="img" className="w-[80px]" />
              </div>
              <div className="mt-1">
                <p className="text-lg font-semibold text-center">{d.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
