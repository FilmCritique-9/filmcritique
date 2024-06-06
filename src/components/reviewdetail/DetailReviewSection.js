import React from "react";
import styled from "styled-components";
import star from "../../assets/icon/whitestar.svg";
const DetailReviewSection = () => {
  return (
    <DetailReviewContainer>
      <PosterImg />
      <Dim />
      <div className="top">
        <MovieTitle>녹색 광선</MovieTitle>
        <Username>myong님의 평가</Username>
        <Rate>
          <StarIcon src={star} />
          <RateScore>4.5</RateScore>
        </Rate>
      </div>

      <div className="bottom">
        <Review>
          두드리는 자에게 문이 열린다고 하지만, 그렇다면 매번 힘겹게 문을
          두드려야 하는 사람의 삶은 가혹한 것이 된다. 다가가지 못하고 그저
          멀찍이서 흐느끼는 여인에게 소소한 기적을 허용하며, 영화는 신을
          대신하여 관객에게도 그의 포용을 전달한다.
        </Review>
        <div className="time">
          <WatchTime>관람일:2024.05.24</WatchTime>
          <UploadTime>작성일: 2024.06.01.17:42</UploadTime>
        </div>
      </div>
    </DetailReviewContainer>
  );
};

export default DetailReviewSection;

const DetailReviewContainer = styled.div`
  .top {
    display: flex;
    padding: var(--spacing-spacing-md, 16px);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-spacing-5xs, 4px);
    align-self: stretch;
    background: #0000004d;
  }

  .rate {
    display: flex;
    align-items: center;
    gap: 6px;
    align-self: stretch;
  }
  .bottom {
    display: flex;
    padding: var(--spacing-spacing-5xl, 36px) var(--spacing-spacing-md, 16px);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-spacing-md, 16px);
    align-self: stretch;
    background: #f6f6f6;
  }
  .time {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
  }
`;
const Dim = styled.div`
  background: #0000004d;
  height: 300px;
`;

const PosterImg = styled.img`
  width: auto;
  max-width: 100%;
  top: 0;
  height: 500px;
  align-self: stretch;
  position: absolute;
  z-index: -1;
`;
const MovieTitle = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
  overflow: hidden;
  color: #f6f6f6;
  font-feature-settings: "dlig" on;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`;
const UploadTime = styled.h4`
  color: var(--text-text-secondary, #7c7c7c);
  font-feature-settings: "dlig" on;

  /* Body/medium-xs */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
`;
const WatchTime = styled.h4`
  color: var(--text-text-secondary, #7c7c7c);
  font-feature-settings: "dlig" on;

  /* Body/medium-xs */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
`;
const Username = styled.h4`
  color: #f6f6f6;
  font-feature-settings: "dlig" on;

  /* Body/medium-sm */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;
const Rate = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;
const StarIcon = styled.img``;
const RateScore = styled.h4`
  color: #f6f6f6;
  font-feature-settings: "dlig" on;

  /* Body/medium-sm */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;
const Review = styled.h3`
  color: var(--text-text-primary, #202020);
  font-feature-settings: "dlig" on;

  /* Body/medium-sm */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;
