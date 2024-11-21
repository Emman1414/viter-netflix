import React from "react";
import { imgPath } from "./helpers/functions-general";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieSlider = ({ item, key }) => {
  return (
    <div className="movie-cards py-5 " key={key}>
      <div className="movie relative group">
        <img
          src={`${imgPath}/${item.img}`}
          alt=""
          className=" h-[450px] object-cover w-[300px] mx-auto relative"
        />
        <span className="movie-content absolute bottom-0 left-[1.70rem] z-50 flex flex-col gap-2 bg-gray-950 bg-opacity-50 w-[300px] h-[450px] px-5 text-left justify-center">
          <small>
            {item.duration}
            <small>{item.quality}</small>
          </small>
          <small>{item.genre}</small>
          <small>{item.title}</small>
          <small>
            <p>{item.actor}</p>
          </small>
        </span>
      </div>
    </div>
  );
};

export default MovieSlider;
