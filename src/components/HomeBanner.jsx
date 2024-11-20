import { Play } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { imgPath } from "./helpers/functions-general";

const HomeBanner = () => {
  return (
    <section>
      <div className="wrapper relative text-white">
        <img
          src={`${imgPath}/banner-wall.jpg`}
          alt=""
          className="w-screen h-[calc(z)] object-cover relative"
        />
        <div className="banner-content absolute top-80 left-20 ">
          <p className="mb-2">
            2022 Mecha 2h 50min <small>HD</small>
          </p>
          <h2 className="mb-2">Gundam: Hathaway Flash</h2>
          <p className="mb-5 max-w-[650px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id debitis
            doloribus incidunt porro laboriosam saepe ab minima minus libero
            earum corrupti cum sed, animi nesciunt, eaque labore! Facilis,
            consectetur temporibus.
          </p>
          <div className="flex justify-between px-10 max-w-[350px]">
            <button className="bg-secondary text-white rounded-md flex py-2 px-6 gap-2">
              <Play />
              <NavLink to="/">Play</NavLink>
            </button>
            <button className="bg-white text-black rounded-md flex py-2 px-6 gap-2">
              <NavLink to="/">More Info</NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
