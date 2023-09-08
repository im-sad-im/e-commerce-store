import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { TrendingItem } from "./TrendingItem";

export const TrendingSlider = () => {
  const slideLeft = ()=>{
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 258;
  }
  const slideRight = ()=>{
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 258;
  }
  return (
    <section style={{paddingTop: "10rem"}}>
        <div className="container">
        <div className="header-btns d-flex justify-content-between">
          <h3>Trending</h3>
        <div className="btns">
        <AiOutlineArrowLeft size={25} onClick={slideLeft} />
        <AiOutlineArrowRight size={25} onClick={slideRight}/>
        </div>
        </div>
            <div className="scroll-container d-flex gap-3" id="slider">
              <TrendingItem />
            </div>
        </div>
    </section>
  )
}
