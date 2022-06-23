import React from "react";
import styled from "styled-components";

const MainPage = styled.div`
  background-color: black;
  width: 100%;
  height: calc(100vh - 91px);
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
`;

const MainLeft = styled.div`
  float: left;
  width: 60%;
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
  transition:all 0.9s, color 0.3;
  :hover {
    color: white;
    box-shadow:200px 0 0 0 rgba(0,0,0,0.5) inset;
  }
`;

const Main = () => {
  return (
    <>
      <MainPage>
        <MainLeft>
          <LogoMain>SPORTS DRINK</LogoMain>
          <Writing>
            비타민B와 4가지 전해질 ION4로 업그레이드된
            <br />
            저칼로리 스포츠음료, 파워에이드
          </Writing>
          <MoreBtn>자세히</MoreBtn>
        </MainLeft>
        <MainRight>
          <img src="./img/powermain.png" className="powerMain"/>
        </MainRight>
      </MainPage>

    </>
  );
};
export default Main;
