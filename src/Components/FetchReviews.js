import React, { useEffect, useState } from "react";

import Reviews from "./Reviews";

const FetchReviews = () => {
  const [reviews2, setReviews2] = useState([]);

  useEffect(() => {
    getReview();
  }, []);

  const getReview = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=2"
      );
      const data = await response.json();
      setReviews2(data);
    } catch (error) {
      alert("Cannot get Reviews");
    }
  };

  return (
    <div className="postReview">
      {reviews2.map((review) => (
        <Reviews
          id={review.id}
          key={review.id}
          body={review.body}
          title={review.title}
        />
      ))}
    </div>
  );
};

export default FetchReviews;
//
