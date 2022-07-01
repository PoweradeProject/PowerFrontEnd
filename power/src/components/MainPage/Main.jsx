import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainPage = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh; 
  display: flex;
  align-items: center;
`;

const MainPageTwo = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const MainLeft = styled.div`
  float: left;
  width: 60%;
  font-size: medium;
  position: relative;
  overflow: hidden;
  animation: fadein 1.5s ease-in-out;
  @keyframes fadein{
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

const MainRight = styled.div`
  float: right;
  width: 40%;
  justify-content: center;
  .powerMain {
    width: 190px;
    height: 420px;
    margin-left: 45px;
  }
`;

const LogoMain = styled.p`
  color: white;
  font-size: 65px;
  margin: 0;
  font-weight: 500;
  margin-left: 345px;
`;

const Writing = styled.p`
  color: white;
  margin-top: 0;
  margin-left: 345px;
  font-size: 18px;
  box-sizing: border-box;
`;

const MoreBtn = styled.button`
  background-color: white;
  width: 90px;
  height: 40px;
  font-size: 15px;
  border-radius: 14px;
  font-weight: bolder;
  cursor: pointer;
  margin-bottom: 50px;
  margin-left: 345px;
  transition: all 0.8s;
  :hover {
    color: white;
    background-color: #0080ff;
  }
`;

const Main = () => {
  return (
    <>
      <MainPage>
        <MainLeft className='fadein'>
          <LogoMain>SPORTS DRINK</LogoMain>
          <Writing>
            비타민B와 4가지 전해질 ION4로 업그레이드된
            <br />
            저칼로리 스포츠음료, 파워에이드
          </Writing>
          <Link to='/Brands'>
            <MoreBtn>자세히</MoreBtn>
          </Link>
        </MainLeft>
        <MainRight>
          <img
            src="./Img/powermain.png"
            className="powerMain"
            alt="파워에이드 캔"
          />
        </MainRight>
      </MainPage>
      <MainPageTwo>
      </MainPageTwo>
    </>
  );
};
export default Main;
