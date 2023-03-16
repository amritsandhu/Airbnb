import { useState, useEffect } from "react";
import React from "react";
import { auth } from "../firebase";
import "./Review.css";
import { Form, Input } from "reactstrap";

function Reviews() {
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
    <div className="ourReview">
      <div className="reviewContainers">
        <div className="reviewContainerOne">
          <h2>Amrit:</h2>
          <span className="reviewOne">
            Beautiful location, the soaking tub was awesome and feels very
            private with a great view. Easy to find, and not far from the
            Sacramento area. Hosts were very responsive.
          </span>
        </div>

        <div className="reviewContainerTwo">
          <h2>Harman:</h2>
          <span className="reviewTwo">
            Excellent experience! Being in the hot tub around the sunset
            provided absolutely beautiful views. The cottage had everything I
            could ask for and more.
          </span>
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
          {/* <button className="logoutButton" onClick={handleLogout}>
            Logout
          </button> */}
        </div>
      )}
    </div>
  );
}

export default Reviews;
