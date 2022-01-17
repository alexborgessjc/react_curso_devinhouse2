import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/Cart";
import { FaCartPlus } from "react-icons/fa";

function Menu() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="menu">
      <h1 className="menu-title">
        <Link to="/" className="menu-list-item">
          House do Código
        </Link>
      </h1>
      <div className="">
        <Link to="/cart" className="cart-list-item">
          {cart.length} <FaCartPlus size="20px" />
        </Link>
      </div>
    </nav>
  );
}

export default Menu;