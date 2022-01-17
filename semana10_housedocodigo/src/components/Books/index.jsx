import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

import { CartContext } from "../../contexts/Cart";
import { DetailsContext } from "../../contexts/Details";

function Books({ data }) {
  // console.log(id);
  const { addItem } = useContext(CartContext);
  const { addDetails } = useContext(DetailsContext);

  return (
    <div className="item-book">
      <img src={data.image} alt="Foto do livro" className="image-book" />
      <div className="title">{data.title}</div>
      {/* <div className="price">R$ {price.toFixed(2).toString().replace(".", ",")}</div> */}
      <div className="price">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(data.price)}
      </div>
      <div className="btn">
        <FaCartArrowDown
          className="cart-icon"
          size="20px"
          onClick={() => {
            addItem(data);
          }}
        />

        <Link to="/details">
          <button
            onClick={() => {
              addDetails(data);
            }}
          >
            Detalhes
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Books;