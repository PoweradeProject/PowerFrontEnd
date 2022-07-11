import styled from "styled-components";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const subePage = [
  { id: "/Brands", key: "BRANDS" },
  { id: "/Product", key: "PRODUCT" },
  { id: "/News", key: "NEWS" },
  { id: "/Contact", key: "CONTACT" },
];

const Header = () => {
  return (
    <Head>
      <Headleft>
        <Link to="/">
          <img src="./img/poweraderogo.png" className="logo" alt="로고" />
        </Link>
      </Headleft>
      <Headright>
        {subePage.map((user) => (
          <Link to={user.id}>
            <SubeBox>
              <p className="brand">{user.key}</p>
            </SubeBox>
          </Link>
        ))}
      </Headright>
      <LoginBtn>
        <Link to="/Login">
          <FaUser className="user" />
        </Link>
        <Link to="/ShoppingBasket">
          <FaShoppingCart className="market" />
        </Link>
        <FaSearch className="login" />
      </LoginBtn>
    </Head>
  );
};
export default Header;

const Head = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  display: flex;
  z-index: 99;
  align-items: center;
  justify-content: space-around;
  background-color: #0a0f12;
  .logo {
    width: 180px;
    height: 45px;
  }
  p {
    color: white;
    margin: 0;
    cursor: pointer;
  }
`;

const Headleft = styled.div`
  float: left;
  width: auto;
  display: flex;
  justify-content: end;
  margin-left: 200px;
`;

const Headright = styled.div`
  float: right;
  width: 31%;
  display: flex;
  justify-content: space-around;
  font-family: Light 300;
  .li:hover {
    color: #2e9afe;
  }
`;

const LoginBtn = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-around;
  margin-right: 245px;
  .user,
  .login,
  .market {
    color: white;
    width: 17px;
    height: 17px;
    cursor: pointer;
  }
`;

const SubeBox = styled.div`
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  :hover {
    > p {
      color: #2e9afe;
    }
    border-bottom: 3px solid #2e9afe;
    box-sizing: border-box;
  }
`;