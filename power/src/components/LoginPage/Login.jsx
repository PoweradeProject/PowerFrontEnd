import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';  

const Login = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const onClickBtn = () => {
    if (inputId === "" || inputPw === "") {
      window.alert("아이디와 비밀번호 입력해주세요.")
    }
  }
  return (
    <LoginP>
      <LoginDiv>
        <Title>로그인</Title>
        <InputForm action="" method="POST">
          <InputIdBox>
            <InputId
              onChange={(e) => {
                setInputId(e.target.value)
              }}  
              id="username"
              type="text"
              name="username"
              placeholder="아이디"
            />
            <Label for="username">아이디</Label>
          </InputIdBox>
          <InputPwBox>
            <InputId
              onChange={(e) => {
                setInputPw(e.target.value)
              }}
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호"
            />
            <Label for="password">비밀번호</Label>
          </InputPwBox>
        </InputForm>
        <LoginBtn id="Btn" onClick={onClickBtn}>로그인</LoginBtn>
        <Link to="/SignUp">
          <Sign>회원가입</Sign>
        </Link>
      </LoginDiv>
    </LoginP>
  );
};
export default Login;

const LoginP = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const InputForm = styled.form`
  input:placeholder-shown + label {
    color: white;
    font-size: 13pt;
    top: 15px;
  }
  input:focus + label,
  label {
    color: white;
    font-size: 10pt;
    pointer-events: none;
    position: absolute;
    left: 0px;
    top: 0px;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
  }
  input:focus,
  input:not(:placeholder-shown) {
    border-bottom: solid 1px white;
    outline: none;
  }
`;

const InputIdBox = styled.div`
  width: 270px;
  position: relative;
  margin-top: 40px;
  input::placeholder {
    color: transparent;
  }
  > input {
    background: transparent;
    border: none;
    border-bottom: solid 1px white;
    padding: 20px 0px 5px 0px;
    font-size: 14pt;
    width: 100%;
  }
`;

const InputPwBox = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 30px;
  input::placeholder {
    color: transparent;
  }
  > input {
    background: transparent;
    border: none;
    border-bottom: solid 1px white;
    padding: 20px 0px 5px 0px;
    font-size: 14pt;
    width: 100%;
  }
`;

const LoginDiv = styled.div`
  width: 450px;
  height: 550px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  margin-top: 120px;
  border-radius: 3px;
`;

const Title = styled.p`
  font-size: 35px;
  color: white;
  margin: 0;
  margin-top: 110px;
`;

const LoginBtn = styled.button`
  width: 270px;
  height: 45px;
  border-radius: 15px;
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

const Label = styled.label``;
const InputId = styled.input`
  color: white;
  font-size: 10px;
`;