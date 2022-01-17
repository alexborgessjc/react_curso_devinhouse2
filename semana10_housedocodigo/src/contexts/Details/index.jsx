import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'; 

export const DetailsContext = createContext([])
export const CartContext = createContext([])

export function DetailsProvider({children}) {

  const [details, setDetails] = useState([])
  const [cart, setCart] = useState([])
  

  
  function handleDetails(data) {


    const description = {
      image: data.image,
      title: data.title,
      price: data.price,
      description: data.description,
      id: data.description,
      idCart: uuidv4()
    }

    setDetails([description])
   
  }

  function handleRemoveItemInCart(idCart) {
    const cartFiltered = cart.filter(item => {
      if (item.idCart === idCart) {
        return false // Remove item do carrinho
      } else {
        return true // permanece item no carrinho
      }
    })
    setCart(cartFiltered)
    localStorage.setItem("cart", JSON.stringify(cartFiltered));
    alert('Removido do item')
  }

  return (
    <DetailsContext.Provider value={{
      details: details, 
      addDetails: handleDetails,
      removeItem: handleRemoveItemInCart
      }}>
      {children}
    </DetailsContext.Provider>
  );
}