import React, { useContext } from "react";
import { DetailsContext } from "../../contexts/Details";
import { CartContext } from "../../contexts/Cart";
import { FaCartArrowDown } from "react-icons/fa";

function Details() {
  const { details } = useContext(DetailsContext);
  const { addItem } = useContext(CartContext);

  return (
    <div>
      {details.map((detail) => (
        <div key={detail} className="detail-container">
          <div>
            <img src={detail.image} alt="livro"></img>
          </div>
          <div>
            <div className="title-detail">{detail.title}</div>
            <div className="price-detail">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(detail.price)}
            </div>
            <div className="description-detail">{detail.description}</div>
            <FaCartArrowDown
              className="cart-detail"
              size="35px"
              onClick={() => {
                addItem(detail);
              }}
            />
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
}

export default Details;