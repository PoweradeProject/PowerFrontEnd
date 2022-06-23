import React from "react";
import styled from "styled-components";

const BrandPage = styled.div`
  width: 100%;
  height: calc(100vh - 91px);
  position: relative;
  background-color: black;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: center;
`;

const BrandHeader = styled.div`
  width: 1300px;
  height: 290px;
  border: 1px solid white;
  display: flex;
  align-items: center;
`;

const BrandTitle = styled.p`
  width: 250px;
  color: white;
  font-size: 80px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  margin-left: 100px;
`;

const BrandImgBackGround = styled.div`
  display: flex;
  justify-content: center;
  .Brand {
    width: 600px;
    height: 150px;
  }
`;

const BrandContents = styled.div`
  color: white;
  font-size: 23px;
`;

const Brand = () => {
  return (
    <>
      <BrandPage>
        <BrandHeader>
          <BrandTitle>Brands</BrandTitle>
          <BrandContents>
            코카콜라에서 개발한 무탄산 스포츠 음료로 1988년에 출시되었다.
          </BrandContents>
          <BrandImgBackGround>
            <img src="./img/Brand.png" className="Brand" />
          </BrandImgBackGround>
        </BrandHeader>
      </BrandPage>
    </>
  );
};
export default Brand;
