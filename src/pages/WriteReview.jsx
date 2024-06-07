import React, { useRef, useState } from "react";
import Header from "../components/common/Header";
import WriteReviewSection from "../components/writereview/WriteReviewSection";
import { useNavigate } from "react-router-dom";
import { instance } from "../api/instance";
const WriteReview = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [reviewData, setReviewData] = useState({
    poster: {},
    title: "",
    rating: "",
    review: "",
    username: "",
    password: "",
    dateWatched: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("title", reviewData.title);
    formdata.append("rating", reviewData.rating);
    formdata.append("review", reviewData.review);
    formdata.append("username", reviewData.username);
    formdata.append("password", reviewData.password);
    formdata.append("date_watched", reviewData.dateWatched);
    formdata.append("poster", reviewData.poster);

    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "multipart/form-data",
    };
    try {
      console.log("Submitting review data:", formdata);
      console.log("Submitting review data:", reviewData.poster);

      const response = await instance.post("/critique/review/", formdata, {
        headers,
      });
      if (response.status === 201) {
        console.log("Review submitted successfully!");
        navigate(`/`);
      } else {
        console.error("Failed to submit review!");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      if (error.response && error.response.data) {
        console.error("Server response:", error.response.data);
      }
    }
  };

  const handleReviewDataChange = (data) => {
    setReviewData(data);
  };
  const handleButtonClick = () => {
    formRef.current.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  };
  return (
    <div>
      <Header onButtonClick={handleButtonClick}/>
      <WriteReviewSection 
        onReviewDataChange={handleReviewDataChange}
        reviewData={reviewData}
        onSubmit={handleSubmit}
        formRef={formRef}
        />
    </div>
  );
};

export default WriteReview;
