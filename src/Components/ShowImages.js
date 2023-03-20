import { useState, useEffect } from "react";
import image1 from "../Images2/img1.webp";

import axios from "axios";
import "./ShowImages.css";
import ShowAllImages from "./ShowAllImages";

function ShowImages() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const response = await axios.get(
      `https://api.unsplash.com/photos/?client_id=nYBMpwqbYNebzzhmXvVV2QD7hOypmxQnPX9owV6P7_U&per_page=4`
    );
    const data = await response.data;
    setImages(data);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <div className="first-container">
      <div className="parent-container">
        <div className="first-container">
          <img className="picOne" src={image1} alt="" onClick={handleClick} />
        </div>
        <div className="second-container">
          {images.length > 0 && (
            <>
              <img
                src={images[3].urls.small}
                alt={images[3].alt_description}
                onClick={handleClick}
              />
              <img
                src={images[1].urls.small}
                alt={images[1].alt_description}
                onClick={handleClick}
              />
              <img
                src={images[3].urls.small}
                alt={images[3].alt_description}
                onClick={handleClick}
              />
              <img
                src={images[1].urls.small}
                alt={images[1].alt_description}
                onClick={handleClick}
              />
            </>
          )}
        </div>
      </div>
      <ShowAllImages
        images={images} // Pass images as a prop to ShowAllImages
        open={openModal}
        handleGoBack={() => setOpenModal(false)}
      />
    </div>
  );
}

export default ShowImages;
