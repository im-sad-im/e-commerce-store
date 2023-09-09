import { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { TrendingItem } from "./TrendingItem";

export const TrendingSlider = () => {
  const sliderRef = useRef(null);
  
  const slideLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft -= 258;
  };
  const slideRight = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft += 258;
  };
  return (
    <section style={{ paddingTop: "10rem" }}>
      <div className="container">
        <div className="header-btns d-flex justify-content-between">
          <h3>Trending</h3>
          <div className="btns d-flex gap-1">
          <button className="px-2" onClick={slideLeft}>
            <AiOutlineArrowLeft size={20} />
          </button>
          <button className="px-2"  onClick={slideRight}>
            <AiOutlineArrowRight size={20} />
          </button>
          </div>
        </div>
        <div className="scroll-container d-flex gap-3" ref={sliderRef}>
          <TrendingItem />
        </div>
      </div>
    </section>
  );
};
