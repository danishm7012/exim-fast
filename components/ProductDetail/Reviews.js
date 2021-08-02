import React from "react";
import ReactStars from "react-rating-stars-component";
import CommentBox from "./Comment";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const Reviews = () => {
  return (
    <div>
      <div className="comment-section">
        <p>
          Your Rating <span className="text-danger">*</span>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </p>
        <CommentBox />
      </div>
    </div>
  );
};

export default Reviews;
