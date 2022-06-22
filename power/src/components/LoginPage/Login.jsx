import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginP = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
`;

const LoginDiv = styled.div`
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
  font-size: 15px;
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
  margin-bottom: 40px;
`;

const InputPw = styled.input`
  width: 260px;
  height: 40px;
  font-size: 15px;
  border-radius: 8px;
  border: 0;
  outline: 0;
`;

const LoginBtn = styled.button`
  width: 290px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #0080ff;
  font-size: 18px;
  color: white;
  margin-bottom: 10px;
`;

const Sign = styled.p`
  color: white;
  cursor: pointer;
`;

const Login = () => {
  return (
    <LoginP>
      <LoginDiv>
        <Title>Sign-In</Title>
        <InputIdBackGround>
          <InputId placeholder="USER NAME" />
        </InputIdBackGround>
        <InputPwBackGround>
          <InputPw placeholder="PASSWORD" />
        </InputPwBackGround>
        <LoginBtn id="Btn">Login</LoginBtn>
        <Link to="/SignUp">
          <Sign>Sign-Up</Sign>
        </Link>
      </LoginDiv>
    </LoginP>
  );
};
export default Login;
