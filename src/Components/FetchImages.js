import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowImages from "./ShowImages";
import { Images } from "./Images";

function FetchImages() {
  const [images, setImages] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get(
      `https://api.unsplash.com/photos/?client_id=nYBMpwqbYNebzzhmXvVV2QD7hOypmxQnPX9owV6P7_U&per_page=4`
    );
    const data = await response.data;
    setImages(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="postImage">
      {images.length > 0 && <Images images={images} />}
    </div>
  );
}

export default FetchImages;
