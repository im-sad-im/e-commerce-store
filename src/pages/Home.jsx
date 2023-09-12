import { Banner } from "../components/Banner";
import { Hero } from "../components/Hero";
import { TrendingSlider } from "../components/TrendingSlider";
import { bannerData } from "../components/bannerData";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner customClassName={""} title={bannerData[0].title} description={bannerData[0].description} img={bannerData[0].img}/>
      
      <TrendingSlider />
      <Banner customClassName={"flex-row-reverse"} title={bannerData[1].title} description={bannerData[1].description} img={bannerData[1].img} />
    </>
  );
}
