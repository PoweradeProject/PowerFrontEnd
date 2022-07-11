import React from "react";
import styled from "styled-components";
import { BsHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const BrandItem = [
  { id: "/Brands", key: "BRANDS" },
  { id: "/Product", key: "PRODUCT" },
  { id: "/News", key: "NEWS" },
  { id: "/Contact", key: "CONTACT" },
];

const Brand = ({header}) => {
  return (
    <>
      <ExplanationPage>
        <BrandHeader>
          <BrandCal className="fadein">
            <BrandTitle>Brands</BrandTitle>
            <BrandContents>
              무탄산 스포츠 음료로 1988년에 출시되었다.
            </BrandContents>
          </BrandCal>
          <BrandImgBackGround className="fadein">
            <img src="./img/Brand.png" className="Brand" alt="브랜드" />
          </BrandImgBackGround>
        </BrandHeader>
        <BrandMiddleMain>
          <Link to="/">
            <BrandHome>
              <BsHouseFill className="house" />
            </BrandHome>
          </Link>
          <Select>
            <Option className="option">
              <span>BRANDS</span>
            </Option>
            <div class="optionList">
              {BrandItem.map((user) => (
                <Link to={user.id}>
                  <OptionListItem>
                    {user.key}
                  </OptionListItem>
                </Link>
              ))}
            </div>
          </Select>
        </BrandMiddleMain>
      </ExplanationPage>
      <BrandPage>
      </BrandPage>
    </>
  );
};
export default Brand;

const BrandPage = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: black;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ExplanationPage = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: black;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BrandHeader = styled.div`
  width: 1300px;
  height: 290px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-top: 120px;
`;

const BrandCal = styled.div`
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

const BrandTitle = styled.p`
  width: 250px;
  color: white;
  font-size: 80px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  margin-left: 120px;
`;

const BrandImgBackGround = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 80px;
  .Brand {
    width: 600px;
    height: 150px;
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

const BrandContents = styled.div`
  color: white;
  font-size: 20px;
  margin-left: 125px;
  margin-top: 20px;
  margin-bottom: 20px;
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