import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";
import { MdDelete } from "react-icons/md";

function Cart() {
  const { cart, removeItem } = useContext(CartContext);

  let total = cart.reduce((total, valor) => total + valor.price, 0);

  return (
    <div className="cart-container">
      <div className="valor-total-carrinho">
        Total:{" "}
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(total)}
      </div>
      <table className="table-cart">
        <thead className="header-table">
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="row-table">
              <td>
                <img
                  src={item.image}
                  alt="Foto da carta"
                  className="table-image"
                />
              </td>
              <td className="title-table">{item.title}</td>
              <td className="price-table">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.price)}
              </td>
              <td>
                <MdDelete
                  className="delete-icon"
                  size={30}
                  color="#EC6D08"
                  onClick={() => removeItem(item.idCard)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;