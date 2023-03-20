import "./ImageSlider.css";
import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import image1 from "../Images2/img1.webp";
import image2 from "../Images2/img2.webp";
import image3 from "../Images2/img3.webp";
import image4 from "../Images2/img4.webp";
import image5 from "../Images2/img5.webp";

function ImageSlider({ openTwo, handleCloseSlider }) {
  // const image2 = <img src={images[2].urls.small} alt={images[2].alt_description} />;
  // const image3 = <img src={images[1].urls.small} alt={images[1].alt_description} />;
  // const image4 = <img src={images[2].urls.small} alt={images[2].alt_description} />;
  // const image5 = <img src={images[1].urls.small} alt={images[1].alt_description} />;

  const slides = [image1, image2, image3, image4, image5];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const handleClose = () => {
    handleCloseSlider(false);
  };

  return openTwo ? (
    <div className="sliderContainer">
      <div className="allSliders">
        <button className="goBackArrow" onClick={handleClose}>
          <AiOutlineClose /> Close
        </button>

        <div className="max-w-[1200px] h-[780px] w-full m-auto py-16 px-4 relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex]})` }}
            className="w-full h-full rounded-2xl big-center bg-cover duration-500"
          ></div>
          <div className=" hidden group-hover:block absolute top-[50%] - translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <AiOutlineLeft onClick={prevSlide} size={30} />
          </div>

          <div className="hidden group-hover:block  absolute top-[50%] - translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <AiOutlineRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer text-white"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
export default ImageSlider;
