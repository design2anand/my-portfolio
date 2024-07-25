import { useState } from "react";
import { websites, mobileApps, logos, posters } from "./images";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaPlus,
  FaWindowClose,
} from "react-icons/fa";

const Work = () => {
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const handleClick = (i) => {
    setSlide(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNum;

    if (direction === "l") {
      newSlideNum = slide === 0 ? 8 : slide - 1;
    } else {
      newSlideNum = slide === 8 ? 0 : slide + 1;
    }

    setSlide(newSlideNum);
  };

  const filteredWebsites =
    filter === "All" || filter === "Web Apps" ? websites : [];
  const filteredMobileApps =
    filter === "All" || filter === "Mobile Apps" ? mobileApps : [];
  const filteredLogos = filter === "All" || filter === "Logos" ? logos : [];
  const filteredPosters =
    filter === "All" || filter === "Posters" ? posters : [];

  return (
    <div
      name="work"
      className="w-full md:h-full text-gray-300 bg-gradient-to-b from-gray-800 to-black py-16 "
    >
      {open && (
        <div className="slider invisible lg:visible">
          <FaWindowClose className="close" onClick={() => setOpen(false)} />
          <FaArrowAltCircleLeft
            className="arrow"
            onClick={() => handleMove("l")}
          />
          <div className="slideWrapper">
            <img src={posters[slide].src} alt="" className="slideImg" />
          </div>
          <FaArrowAltCircleRight
            className="arrow"
            onClick={() => handleMove("r")}
          />
        </div>
      )}

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-gray-300">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
          <div className="flex space-x-4 my-4">
            {["All", "Web Apps", "Mobile Apps", "Logos", "Posters"].map(
              (category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-md ${
                    filter === category
                      ? "bg-gray-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0">
          {filteredWebsites.map((website) => (
            <div
              key={website.src}
              style={{ backgroundImage: `url(${website.src})` }}
              className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Demo
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={website.href}
                  >
                    <button className="text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      <FaPlus />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {filteredMobileApps.map((mobile) => (
            <div
              key={mobile.src}
              style={{ backgroundImage: `url(${mobile.src})` }}
              className="shadow-lg shadow-black group container rounded-md cursor-pointer duration-200 hover:scale-105 flex justify-center items-center mx-auto mobile"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {mobile.name}
                </span>
              </div>
            </div>
          ))}

          {filteredLogos.map((logo) => (
            <div
              key={logo.src}
              style={{ backgroundImage: `url(${logo.src})` }}
              className="shadow-lg shadow-black group container rounded-md duration-200 hover:scale-105 flex justify-center items-center mx-auto logo"
            ></div>
          ))}

          {filteredPosters.map((poster, i) => (
            <div
              key={poster.src}
              onClick={() => handleClick(i)}
              style={{ backgroundImage: `url(${poster.src})` }}
              className="shadow-lg shadow-black group container rounded-md duration-200 hover:scale-105 flex justify-center items-center mx-auto content cursor-pointer"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
