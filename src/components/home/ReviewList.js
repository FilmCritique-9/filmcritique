import React from "react";
import ReviewItem from "./ReviewItem";
import styled from "styled-components";

const ReviewList = () => {
  return (
    <ReviewItemContainer>
      <ReviewItem />
    </ReviewItemContainer>
  );
};

export default ReviewList;

const ReviewItemContainer = styled.div`
  padding: 16px;
  background: var(--surface-surface-primary, #f6f6f6);
`;
