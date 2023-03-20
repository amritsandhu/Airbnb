import React from "react";

export const IndividualImage = ({ image }) => {
  return (
    <div className="photo2">
      <img src={image.urls.small} alt="" />
    </div>
  );
};
