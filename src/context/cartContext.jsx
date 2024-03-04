import { useState, createContext, useContext } from "react";
const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartItems = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartItems;
