import "./ShowAllImages.css";
// import image1 from "../Images2/img1.webp";
// import image2 from "../Images2/img2.webp";
// import image3 from "../Images2/img3.webp";
// import image4 from "../Images2/img4.webp";
// import image5 from "../Images2/img5.webp";
import ImageSlider from "./ImageSlider";
import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";

const images = [
  { src: require("../Images2/img1.webp"), className: "firstPic" },
  { src: require("../Images2/img2.webp"), className: "picTwo" },
  { src: require("../Images2/img3.webp"), className: "picThree" },
  { src: require("../Images2/img4.webp"), className: "picFour" },
  { src: require("../Images2/img5.webp"), className: "picFive" },
];

const ShowAllImages = ({ open, handleGoBack }) => {
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
      {images.map((image, index) => (
        <div
          className={`container${index + 1}`}
          onClick={handleSlider}
          key={index}
        >
          <img className={image.className} src={image.src} alt="" />
        </div>
      ))}
      <ImageSlider
        openTwo={openModalSlider}
        handleCloseSlider={handleCloseSlider}
      />
    </div>
  );
};

export default ShowAllImages;
