import React from "react";
import styled from "styled-components";
import { BsHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsPage = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: black;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const NewsHeader = styled.div`
  width: 1300px;
  height: 290px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  margin-top: 120px;
`;

const NewsCal = styled.div`
  font-size: medium;
  position: relative;
  overflow: hidden;
  animation: fadein 1.5s ease-in-out;
  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

const NewsImgBackGround = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 80px;
  .News {
    width: 800px;
    height: 250px;
  }
  font-size: medium;
  position: relative;
  overflow: hidden;
  animation: fadein 1.5s ease-in-out;
  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

const NewsTitle = styled.p`
  color: white;
  font-size: 80px;
  margin: 0;
  padding: 0;
  margin-left: 120px;
  font-weight: 500;
`;

const NewsContant = styled.p`
  color: white;
  font-size: 20px;
  margin-left: 125px;
`;

const BrandMiddleMain = styled.div`
  width: 1300px;
  border: 1px solid white;
  display: flex;
  margin-right: 1px;
  .optionList {
    width: 250px;
    position: absolute;
    background-color: #fff;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s linear, visibility 1s linear;
    list-style: none;
  }
`;

const BrandHome = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid white;
  transition: all 0.9s;
  .house {
    color: white;
  }
`;

const Select = styled.div`
  width: 250px;
  height: 55px;
  display: flex;
  border-right: 1px solid white;
  justify-content: center;
  :hover .optionList {
    opacity: 1;
    visibility: visible;
  }
`;

const Option = styled.div`
  color: white;
  font-size: 17px;
  display: flex;
  text-align: center;
  align-items: center;
`;

const OptionListItem = styled.li`
  height: 55px;
  font-family: "Roboto", sans-serif;
  overflow: hidden;
  transition: all 0.8s;
  cursor: pointer;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: black;
  :hover {
    color: white;
    background-color: rgb(0, 1, 3, 5);
  }
`;

const NewsItem = [
  { id: "/News", key: "NEWS" },
  { id: "/Contact", key: "CONTACT" },
  { id: "/Brands", key: "BRANDS" },
  { id: "/Product", key: "PRODUCT" },
];

const News = () => {
  return (
    <>
      <NewsPage>
        <NewsHeader>
          <NewsCal className="fadein">
            <NewsTitle>News</NewsTitle>
            <NewsContant>파워이에드에 새로운 소식을 전합니다.</NewsContant>
          </NewsCal>
          <NewsImgBackGround className="fadein">
            <img src="./img/" className="News" alt="뉴스" />
          </NewsImgBackGround>
        </NewsHeader>
        <BrandMiddleMain>
          <Link to="/">
            <BrandHome>
              <BsHouseFill className="house" />
            </BrandHome>
          </Link>
          <Select>
            <Option className="option">
              <span>NEWS</span>
            </Option>
            <div class="optionList">
              {NewsItem.map((user) => (
                <Link to={user.id}>
                  <OptionListItem>{user.key}</OptionListItem>
                </Link>
              ))}
            </div>
          </Select>
        </BrandMiddleMain>
      </NewsPage>
    </>
  );
};
export default News;
