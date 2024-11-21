import React from "react";
import Header from "./pages/backend/partials/Header";
import Footer from "./pages/backend/partials/Footer";
import HomeBanner from "./HomeBanner";
import MovieCollection from "./MovieCollection";

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      <MovieCollection />
    </>
  );
};

export default HomePage;
