import styled from "styled-components";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Head = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #0a0f12;
  .logo {
    width: 180px;
    height: 45px;
  }
  .brand,
  .product,
  .news,
  .contact {
    color: white;
    margin: 0;
    cursor: pointer;
    font-weight: 500;
    :hover {
      color: #00BFFF
    }
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
  .li:hover {
    color: #2E9AFE;
  }
`;

const LoginBtn = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-around;
  margin-right: 240px;
  .user,
  .login,
  .market {
    color: white;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const SubeBox = styled.div`
height: 85px;
display: flex;
justify-content: center;
align-items: center;
  :hover {
    color: #2E9AFE;
    border-bottom: 3px solid #2E9AFE
  }
`;

const Header = () => {
  return (
    <Head>
      <Headleft>
        <Link to="/">
          <img src="./img/poweraderogo.png" className="logo" />
        </Link>
      </Headleft>
      <Headright>
        <Link to="/Brands">
          <SubeBox>
            <p className="brand">Brands</p>
          </SubeBox>
        </Link>
        <Link to="/Product">
          <SubeBox>
            <p className="product">Product</p>
          </SubeBox>
        </Link>
        <Link to="/News">
          <SubeBox>
            <p className="news">News</p>
          </SubeBox>
        </Link>
        <Link to="/Contact">
          <SubeBox>
            <p className="contact">Contact</p>
          </SubeBox>
        </Link>
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
