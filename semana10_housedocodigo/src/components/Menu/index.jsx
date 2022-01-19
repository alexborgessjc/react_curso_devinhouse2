import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/Cart";
import { FaCartPlus, FaWpforms } from "react-icons/fa";

import styled from "styled-components";

const MenuStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0A1A6F;
  color: #fff;
  font-weight: bold;
  padding: 20px;
  text-align: center;
`;

const MenuTitle = styled.h1``;

function Menu() {
  const { cart } = useContext(CartContext);

  return (
    <MenuStyle>
      <MenuTitle>
        <Link to="/" className="menu-list-item">
          House do Código
        </Link>
      </MenuTitle>
      <div className="">
        <Link to="/form" className="cart-list-item">
          Formulário <FaWpforms/>
        </Link>
      </div>
      <div className="">
        <Link to="/cart" className="cart-list-item">
          {cart.length} <FaCartPlus size="20px" />
        </Link>
      </div>      
    </MenuStyle>
  );
}

export default Menu;