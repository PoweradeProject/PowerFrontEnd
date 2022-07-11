import React from "react";
import styled from "styled-components";

const HeaderShop = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-bottom: 1px solid white;
`;

const ShoppingBasketP = styled.div`
  background-color: black;
  width: 100%;
  height: calc(100vh - 201px);
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Basket = styled.div`
  color: white;
  font-size: 50px;
`;

const BasketBox = styled.div`
  width: 650px;
  height: 200px;
  border: 1px solid white;
`;

const Name = styled.p`
  color: white;
  font-size: 20px;
  margin: 0;
`;

const Price = styled.p`
  color: white;
  margin: 0;
`;

const PICK = styled.div`
  background-color: white;
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`;

const CancelBtn = styled.button`
  width: 50px;
  height: 30px;
`;

const ShoppingBasket = () => {
  return (
    <>
      <HeaderShop>
        <Basket>BASKET</Basket>
      </HeaderShop>
      <ShoppingBasketP>
        <BasketBox>
          <PICK>
            <img src="./img/mountblue.png" className="mount" alt='마운트'/>
          </PICK>
          <Name>MOUNTAIN BLAST</Name>
          <Price>1700원</Price>
          <CancelBtn>Cancel</CancelBtn>
        </BasketBox>
      </ShoppingBasketP>
    </>
  );
};
export default ShoppingBasket;
