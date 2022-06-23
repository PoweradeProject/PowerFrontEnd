import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/MainPage/Header";
import Main from "./components/MainPage/Main";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/LoginPage/SignUp";
import Brands from './components/SubePage/Brands';
import Product from './components/SubePage/Product';
import News from './components/SubePage/News';
import Contact from './components/SubePage/Contact';
import ShoppingBasket from "./components/ShopPage/ShoppingBasket";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/ShoppingBasket" element={<ShoppingBasket/>}></Route>
        <Route path="/Brands" element={<Brands/>}></Route>
        <Route path="/Product" element={<Product/>}></Route>
        <Route path="/News" element={<News/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;