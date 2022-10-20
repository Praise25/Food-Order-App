import { useState } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const isInCart = (meal) => {
    let hasMeal = false;
    let foundItem = "";
    cart.forEach((item) => {
      if (meal.id === item.id) {
        hasMeal = true;
        foundItem = item;
        return;
      }
    });

    return [hasMeal, foundItem];
  };

  const addToCart = (meal, amount) => {
    const [isFound, foundItem] = isInCart(meal);
    if (isFound) {
      foundItem["amount"] = (
        parseInt(foundItem["amount"]) + parseInt(amount)
      ).toString();
      setCart((prev) => [...prev]);
    } else {
      meal["amount"] = amount;
      setCart((prev) => [...prev, meal]);
    }
  };

  const removeFromCart = (meal) => {
    const [isFound, foundItem] = isInCart(meal);
    if (isFound) {
      foundItem["amount"] = (parseInt(foundItem["amount"]) - 1).toString();
    }
    if (parseInt(foundItem["amount"]) < 1) {
      setCart((prev) => prev.filter((item) => !(item.id === foundItem.id)));
    } else {
      setCart((prev) => [...prev]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        onAddToCart: addToCart,
        onRemoveFromCart: removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;