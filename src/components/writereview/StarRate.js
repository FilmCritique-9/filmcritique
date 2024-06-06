import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const StarRate = () => {
  const [, setRating] = useState(0);

  const handleRating = (rate) => setRating(rate);
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className="box">
      <div className="demo">
        <Rating
          onClick={handleRating}
          size={30}
          transition
          allowFraction
          fillColor="#202020"
        />
      </div>
    </div>
  );
};

export default StarRate;
