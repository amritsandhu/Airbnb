import "./ShowAllImages.css";
import ImageSlider from "./ImageSlider";
import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import image1 from "../Images2/img1.webp";

const ShowAllImages = ({ images, open, handleGoBack }) => {
  // Add images prop
  const [openModalSlider, setOpenModalSlider] = useState(false);

  const handleSlider = () => {
    setOpenModalSlider(true);
  };

  const handleCloseSlider = () => {
    setOpenModalSlider(false);
  };

  if (!open) return null;

  const handleCloseModal = () => {
    handleGoBack(false);
  };

  return (
    <div className="allPics">
      <div className="goBack" onClick={handleCloseModal}>
        <AiOutlineLeft />
      </div>
      {images.length > 0 && (
        <>
          <img src={image1} alt="" onClick={handleSlider} />

          <img
            src={images[3].urls.small}
            alt={images[3].alt_description}
            onClick={handleSlider}
          />
          <img
            src={images[1].urls.small}
            alt={images[1].alt_description}
            onClick={handleSlider}
          />
          <img
            src={images[3].urls.small}
            alt={images[3].alt_description}
            onClick={handleSlider}
          />
          <img
            src={images[1].urls.small}
            alt={images[1].alt_description}
            onClick={handleSlider}
          />
        </>
      )}
      <ImageSlider
        images={images}
        openTwo={openModalSlider}
        handleCloseSlider={handleCloseSlider}
      />
    </div>
  );
};

export default ShowAllImages;
