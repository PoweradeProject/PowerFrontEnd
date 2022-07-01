import React from "react";
import styled from "styled-components";
import { BsHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";

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

const ProductPage = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: black;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProductHeader = styled.div`
  width: 1300px;
  height: 290px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  margin-top: 120px;
`;

const ProductCal = styled.div`
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

const ProductTitle = styled.p`
  width: 250px;
  color: white;
  font-size: 80px;
  margin: 0;
  padding: 0;
  margin-left: 120px;
  font-weight: 500;
`;

const ProductContant = styled.p`
  color: white;
  font-size: 20px;
  margin-left: 125px;
`;

const ProductMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductBox = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  border-radius: 13px;
  margin-right: 25px;
  display: flex;
  justify-content: center;
`;

const ProductMiddleMain = styled.div`
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

const ProductHome = styled.div`
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

const ProductItem = [
  { id: "/Product", key: "PRODUCT" },
  { id: "/News", key: "NEWS" },
  { id: "/Contact", key: "CONTACT" },
  { id: "/Brands", key: "BRANDS" },
];

const Product = () => {
  return (
    <>
      <ExplanationPage>
        <ProductHeader>
          <ProductCal className="fadein">
            <ProductTitle>Product</ProductTitle>
            <ProductContant>
              파워에이드에 여러가지 종류와 가격을 알려줍니다.
            </ProductContant>
          </ProductCal>
        </ProductHeader>
        <ProductMiddleMain>
          <Link to="/">
            <ProductHome>
              <BsHouseFill className="house" />
            </ProductHome>
          </Link>
          <Select>
            <Option className="option">
              <span>PRODUCT</span>
            </Option>
            <div class="optionList">
              {ProductItem.map((user) => (
                <Link to={user.id}>
                  <OptionListItem>{user.key}</OptionListItem>
                </Link>
              ))}
            </div>
          </Select>
        </ProductMiddleMain>
      </ExplanationPage>
      <ProductPage>
        <ProductMain>
        <ProductBox>
          <img src="./img/mountblue.png" alt="마운트" />
        </ProductBox>
        <ProductBox>
          <img src="./img/purplestorm.png" alt="스톰" />
        </ProductBox>
        <ProductBox>
          <img src="./img/mightyforce.png" alt="포스" />
        </ProductBox>
        <ProductBox>
          <img src="./img/goldrush.png" alt="러쉬" />
        </ProductBox>
      </ProductMain>
      </ProductPage>
    </>
  );
};
export default Product;
