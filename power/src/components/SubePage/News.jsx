import React from "react";
import styled from "styled-components";

const NewsPage = styled.div`
  width: 100%;
  height: calc(100vh - 91px);
  position: relative;
  background-color: black;
  border-bottom: 1px solid white;
`;

const NewsTitle = styled.p`
  color: white;
  font-size: 55px;
  margin: 0;
  padding: 0;
`;

const News = () => {
  return (
    <NewsPage>
      <NewsTitle>소개</NewsTitle>
    </NewsPage>
  );
};
export default News;
