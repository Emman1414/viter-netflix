import Banner from "./Banner";
import SliderMovie from "./SliderMovie";

const HomePage2 = () => {
  return (
    <>
      <Banner />
      <div className="py-24 mt-20 bg-dark"></div>
      <SliderMovie title="Top Picks" />
      <SliderMovie title="TV Shows" filter="Western" />
      <SliderMovie title="Anime" filter="Anime" />
      <SliderMovie title="KDrama" />
      <div className="h-[50vh]"></div>
    </>
  );
};

export default HomePage2;
