import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const StarRate = ({onChange, value}) => {
  const handleRating = (rate) => {
    onChange(rate);
  };
  
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
