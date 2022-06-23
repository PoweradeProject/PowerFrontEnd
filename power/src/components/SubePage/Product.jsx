import React from "react";
import styled from "styled-components";

const ProductPage = styled.div`
  width: 100%;
  height: calc(100vh - 91px);
  position: relative;
  background-color: black;
  border-bottom: 1px solid white;
`;

const Title = styled.p`
  color: white;
  font-size: 55px;
  margin: 0;
  margin-top: 20px;
`;

const ProductHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
`;

const ProductMain = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductBox1 = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  border-radius: 13px;
  margin-right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  .mount {
    margin-top: 4px;
    width: 76px;
  }
`;

const ProductBox2 = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  border-radius: 13px;
  margin-right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  .storm {
    width: 77px;
  }
`;

const ProductBox3 = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  border-radius: 13px;
  margin-right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  .force {
    width: 71px;
  }
`;

const ProductBox4 = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  .rush {
    width: 74px;
  }
`;


const Product = () => {
  return (
    <ProductPage>
      <ProductHeader>
        <Title>제품소개</Title>
      </ProductHeader>
      <ProductMain>
        <ProductBox1>
          <img src="./img/mountblue.png" className="mount"/>
        </ProductBox1>
        <ProductBox2>
          <img src="./img/purplestorm.png" className="storm" />
        </ProductBox2>
        <ProductBox3>
          <img src="./img/mightyforce.png" className="force" />
        </ProductBox3>
        <ProductBox4>
          <img src="./img/goldrush.png" className="rush" />
        </ProductBox4>
      </ProductMain>
    </ProductPage>
  );
};
export default Product;
