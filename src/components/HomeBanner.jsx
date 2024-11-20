import { Play } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { imgPath } from "./helpers/functions-general";

const HomeBanner = () => {
  return (
    <section>
      <div className="wrapper relative text-white">
        <img
          src={`${imgPath}/banner-wallpaper.jpg`}
          alt=""
          className="w-screen h-[calc(100vh-55px)] object-cover relative"
        />
        <div className="banner-content absolute top-80 left-20 ">
          <p className="mb-2 text-[18px]">
            2023 Action 1h 50min{" "}
            <small className="border border-white px-0.5 text-sm">HD</small>
          </p>
          <h1 className="mb-2 font-bold">LOKI S1: Episode 6</h1>
          <p className="mb-5 max-w-[650px] text-[20px]">
            The mercurial villain Loki resumes his role as the God of Mischief
            in a new series that takes place after the events of “Avengers:
            Endgame.”
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
