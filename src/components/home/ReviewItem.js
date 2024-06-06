import React from "react";
import Line from "../common/Line";
import styled from "styled-components";
import star from "../../assets/icon/star.svg";
import { useNavigate } from "react-router-dom";
const ReviewItem = () => {
  const navigate = useNavigate();
  return (
    <StyledReviewItem
      onClick={() => {
        navigate("/reviewDetail");
      }}
    >
      <Line />
      <ItemContainer>
        <PosterImg />
        <Text>
          <div className="title-createtime">
            <MovieTitle>녹색 광선</MovieTitle>
            <UploadTime>10분 전</UploadTime>
          </div>
          <div className="rate">
            <Username>myong님의 평가</Username>
            <Rate>
              <StarIcon src={star} />
              <RateScore>4.5</RateScore>
            </Rate>
          </div>
          <Review>
            두드리는 자에게 문이 열린다고 하지만, 그렇다면 매번 힘겹게 문을
            두드려야 하는 사람의 삶은 가혹한 것이 된다. 다가가지 못하고 그저
            멀찍이서 흐느끼는 여인에게 소소한 기적을 허용하며, 영화는 신을
            대신하여 관객에게도 그의 포용을 전달한다.
          </Review>
        </Text>
      </ItemContainer>
    </StyledReviewItem>
  );
};

export default ReviewItem;

const StyledReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ItemContainer = styled.div`
  display: flex;
  padding: var(--spacing-spacing-2xl, 24px) var(--spacing-spacing-md, 16px);
  align-items: flex-start;
  gap: var(--spacing-spacing-xs, 12px);
  align-self: stretch;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  .title-createtime {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
  }
  .rate {
    display: flex;
    height: 18px;
    align-items: center;
    gap: var(--spacing-spacing-4xs, 6px);
    align-self: stretch;
  }
`;
const PosterImg = styled.img`
  display: flex;
  width: 60px;
  height: 90px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: var(--radius-radius-sm, 4px);
`;
const MovieTitle = styled.h3`
  overflow: hidden;
  color: var(--text-text-primary, #202020);
  font-feature-settings: "dlig" on;
  text-overflow: ellipsis;

  /* Body/bold-sm */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
`;
const UploadTime = styled.h4`
  overflow: hidden;
  color: var(--text-text-secondary, #7c7c7c);
  font-feature-settings: "dlig" on;
  text-overflow: ellipsis;

  /* Body/medium-2xs */
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 15px */
`;
const Username = styled.h4`
  color: var(--text-text-secondary, #7c7c7c);
  font-feature-settings: "dlig" on;

  /* Body/medium-xs */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
`;
const Rate = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;
const StarIcon = styled.img``;
const RateScore = styled.h4`
  color: var(--text-text-secondary, #7c7c7c);
  font-feature-settings: "dlig" on;

  /* Body/medium-xs */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
`;
const Review = styled.h3`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  align-self: stretch;
  overflow: hidden;
  color: var(--text-text-primary, #202020);
  font-feature-settings: "dlig" on;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
`;
