import { useState, useEffect } from "react";
import React from "react";
import { auth } from "../firebase";
import "./Review.css";
import { Form, Input } from "reactstrap";

function Reviews({ id, body, title }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [reviews, setReviews] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  const handleReview = () => {
    const authUser = auth.currentUser;
    if (authUser) {
      setIsLoggedIn(true);
    } else {
      alert("You have to Sign In first to Post reviews.");
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setIsLoggedIn(false);
      setReviews("");
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  const onChange = (e) => {
    setReviews(e.target.value);
  };

  return (
    <div>
      <div className="ourReview">
        <div className="reviewContainers">
          <div className="reviewContainerOne">
            <h2>{title}:</h2>
            <span className="reviewOne">{body}</span>
          </div>
          <div className="reviewContainerTwo">
            <h2>{title}:</h2>
            <span className="reviewTwo">{body}</span>
          </div>
        </div>

        <div className="reviewButton" onClick={handleReview}>
          {isLoggedIn ? "You May Post a Review below" : "Post a Review"}
        </div>
        {isLoggedIn && (
          <div className="formContainer">
            <Form className="ourForm" onSubmit={onSubmit}>
              <Input
                type="textarea"
                className="reviews"
                value={reviews}
                onChange={onChange}
                placeholder="Write a review"
              />
              <button type="submit" className="submitReview">
                Submit Review
              </button>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reviews;
