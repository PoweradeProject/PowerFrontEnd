import React, { useState } from "react";
import styled from "styled-components";
import { MdDone } from "react-icons/md";

const SignUp_email = () => {
  const [inputEmail, setInputEmail] = useState("");
  const onClickBtn = () => {
    if (inputEmail === "") {
      window.alert("이메일 일력해주세요.");
    }
  };
  return (
    <LoginP>
      <img
        src=""
        className="background"
        alt='background'
      />
      <Title>Email</Title>
      <InputForm action="" method="POST">
        <InputIdBox>
          <InputId
            onChange={(e) => {
              setInputEmail(e.target.value);
            }}
            id="email"
            type="text"
            name="email"
            placeholder="email"
          />
          <Label for="username">Email</Label>
          <MdDone className="check" onClick={onClickBtn} />
        </InputIdBox>
      </InputForm>
    </LoginP>
  );
};
export default SignUp_email;

const LoginP = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .background {
    width: 100%;
    height: calc(100vh - 80px);
  }
`;

const Title = styled.p`
  font-size: 50px;
  color: white;
  position: absolute;
  margin-bottom: 100px;
`;

const InputForm = styled.form`
  position: absolute;
  margin-top: 100px;
  input:placeholder-shown + label {
    color: white;
    font-size: 15pt;
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
  }
  input:focus,
  input:not(:placeholder-shown) {
    border-bottom: solid 1px white;
    outline: none;
  }
`;

const InputIdBox = styled.div`
  width: 500px;
  position: relative;
  margin-top: 40px;
  display: flex;
  .check {
    width: 40px;
    height: 40px;
    color: white;
    cursor: pointer;
    margin-top: 8px;
  }
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

const Label = styled.label``;
const InputId = styled.input`
  color: white;
  font-size: 10px;
`;
