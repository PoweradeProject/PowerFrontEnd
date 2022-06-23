import React, { useState } from "react";
import styled from "styled-components";

const SignP = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 81px);
`;

const SignUpDiv = styled.div`
  width: 450px;
  height: 550px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  margin-top: 40px;
  border-radius: 3px;
`;

const Title = styled.p`
  font-size: 40px;
  color: white;
  margin: 0;
  margin-top: 80px;
`;

const InputIdBackGround = styled.div`
  background-color: white;
  width: 290px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 65px;
  margin-bottom: 20px;
`;

const InputId = styled.input`
  width: 260px;
  height: 40px;
  font-size: 14px;
  border-radius: 10px;
  border: 0;
  outline: 0;
`;

const InputPwBackGround = styled.div`
  background-color: white;
  width: 290px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const InputPw = styled.input`
  width: 260px;
  height: 40px;
  font-size: 14px;
  border-radius: 10px;
  border: 0;
  outline: 0;
`;

const InputPwCheckBackGround = styled.div`
  background-color: white;
  width: 290px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 40px;
`;

const InputPwCheck = styled.input`
  width: 260px;
  height: 40px;
  font-size: 14px;
  border-radius: 10px;
  border: 0;
  outline: 0;
`;

const SignBtn = styled.button`
  width: 288px;
  height: 40px;
  border-radius: 10px;
  font-size: 18px;
  background-color: #0080ff;
  color: white;
  cursor: pointer;
`;

const SignUp = () => {
  return (
    <SignP>
      <SignUpDiv>
        <Title>Sign-Up</Title>
        <InputIdBackGround>
          <InputId placeholder="USER NAME" />
        </InputIdBackGround>
        <InputPwBackGround>
          <InputPw placeholder="PASSWORD" />
        </InputPwBackGround>
        <InputPwCheckBackGround>
          <InputPwCheck placeholder="RE-ENTER PASSWORD" />
        </InputPwCheckBackGround>
        <SignBtn>Sign up</SignBtn>
      </SignUpDiv>
    </SignP>
  );
};
export default SignUp;
