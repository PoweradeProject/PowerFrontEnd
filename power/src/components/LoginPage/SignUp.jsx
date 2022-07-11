import styled from "styled-components";

const SignUp = () => {
  return (
    <SignP>
      <SignUpDiv>
        <Title>회원가입</Title>
        <InputForm action="" method="POST">
          <InputIdBox>
            <InputId
              id="username"
              type="text"
              name="username"
              placeholder="아이디"
            />
            <Label for="username">이름</Label>
          </InputIdBox>
          <InputIdBox>
            <InputId
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호"
            />
            <Label for="password">아이디</Label>
          </InputIdBox>
          <InputIdBox>
            <InputId
              id="username"
              type="text"
              name="username"
              placeholder="아이디"
            />
            <Label for="username">비밀번호</Label>
          </InputIdBox>
          <InputIdBox>
            <InputId
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호"
            />
            <Label for="password">비밀번호 확인</Label>
          </InputIdBox>
        </InputForm>
        <SignBtn>회원가입</SignBtn>
      </SignUpDiv>
    </SignP>
  );
};
export default SignUp;

const SignP = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const SignUpDiv = styled.div`
  width: 450px;
  height: 550px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  margin-top: 140px;
  border-radius: 3px;
`;

const Title = styled.p`
  font-size: 35px;
  color: white;
  margin: 0;
  margin-top: 80px;
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
  margin: 23px;
  position: relative;
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

const SignBtn = styled.button`
  width: 270px;
  height: 45px;
  border-radius: 15px;
  font-size: 18px;
  background-color: #0080ff;
  color: white;
  cursor: pointer;
`;