import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieSlider from "./MovieSlider";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MovieCollection = () => {
  const movieCollectionArray = [
    {
      img: "movie-1.jpg",
      quality: "HD",
      duration: "1hr 50min",
      genre: "Comedy",
      title: "Lorem ipsum",
      actor: "Lorem Lorem Lorem",
    },
    {
      img: "movie-2.jpg",
      quality: "HD",
      duration: "1hr 50min",
      genre: "Comedy",
      title: "Lorem ipsum",
      actor: "Lorem Lorem Lorem",
    },
    {
      img: "movie-3.jpg",
      quality: "HD",
      duration: "1hr 50min",
      genre: "Comedy",
      title: "Lorem ipsum",
      actor: "Lorem Lorem Lorem",
    },
    {
      img: "movie-4.jpg",
      quality: "HD",
      duration: "1hr 50min",
      genre: "Comedy",
      title: "Lorem ipsum",
      actor: "Lorem Lorem Lorem",
    },
    {
      img: "movie-5.jpg",
      quality: "HD",
      duration: "1hr 50min",
      genre: "Comedy",
      title: "Lorem ipsum",
      actor: "Lorem Lorem Lorem",
    },
    {
      img: "movie-6.jpg",
      quality: "HD",
      duration: "1hr 50min",
      genre: "Comedy",
      title: "Lorem ipsum",
      actor: "Lorem Lorem Lorem",
    },
    {
      img: "movie-7.jpg",
      quality: "HD",
      duration: "1hr 50min",
      genre: "Comedy",
      title: "Lorem ipsum",
      actor: "Lorem Lorem Lorem",
    },
    {
      img: "movie-8.jpg",
      quality: "HD",
      duration: "1hr 50min",
      genre: "Comedy",
      title: "Lorem ipsum",
      actor: "Lorem Lorem Lorem",
    },
    {
      img: "movie-9.jpg",
      quality: "HD",
      duration: "1hr 50min",
      genre: "Comedy",
      title: "Lorem ipsum",
      actor: "Lorem Lorem Lorem",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="movie-collection py-3 bg-primary text-white">
      <div className="container">
        <div className="title flex justify-between items-center mt-10">
          <h2>Top Movies</h2>
          <ul className="flex gap-4">
            <li>
              <ChevronLeft size={18} />
            </li>
            <li>
              <ChevronRight size={18} />
            </li>
          </ul>
        </div>
        <Slider {...settings}>
          {movieCollectionArray.map((item, key) => (
            <MovieSlider item={item} key={key} />
          ))}
        </Slider>
        <div className="title flex justify-between items-center mt-10">
          <h2>Trending Movies</h2>
          <ul className="flex gap-4">
            <li>
              <ChevronLeft size={18} />
            </li>
            <li>
              <ChevronRight size={18} />
            </li>
          </ul>
        </div>
        <Slider {...settings}>
          {movieCollectionArray.map((item, key) => (
            <MovieSlider item={item} key={key} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MovieCollection;
