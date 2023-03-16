import { useState } from "react";
import image1 from "../Images2/img1.webp";

import "./ShowImages.css";
import ShowAllImages from "./ShowAllImages";

const images = [
  { src: require("../Images2/img2.webp"), className: "image-container" },
  { src: require("../Images2/img3.webp"), className: "image-container" },
  { src: require("../Images2/img4.webp"), className: "image-container" },
  { src: require("../Images2/img5.webp"), className: "image-container" },
];

function ShowImages() {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <div className="first-container">
      <div className="parent-container">
        <div className="first-container">
          <img className="picOne" src={image1} alt="" onClick={handleClick} />
          <ShowAllImages
            open={openModal}
            handleGoBack={() => setOpenModal(false)}
          />
        </div>
        <div className="second-container">
          {images.map((image, index) => (
            <div
              className={`mycontainer${index + 1}`}
              onClick={handleClick}
              key={index}
            >
              <img className={image.className} src={image.src} alt="" />
            </div>
          ))}
          <ShowAllImages
            open={openModal}
            handleGoBack={() => setOpenModal(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default ShowImages;
