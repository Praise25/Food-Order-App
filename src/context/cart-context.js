import React from "react";

const CartContext = React.createContext({
  cart: [],
  onAddToCart: (meal, amount) => {},
  onRemoveFromCart: (meal) => {},
});

export default CartContext;
