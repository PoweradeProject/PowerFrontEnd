import React from 'react';
import styled from 'styled-components';

function MainTwo() {
  return (
    <>
     <MainPageTwo></MainPageTwo>
    </>
  )
}
export default MainTwo;

const MainPageTwo = styled.div`
scroll-snap-align: start;
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  border-top: 1px solid white;
`;
