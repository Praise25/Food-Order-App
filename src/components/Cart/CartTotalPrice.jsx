import {useContext} from "react";
import CartContext from "../../context/cart-context";

const CartTotalPrice = (props) => {
  const cartCtx = useContext(CartContext);

  const calcTotal = () => {
    let total = 0;
    cartCtx.cart.forEach((meal) => {
      total += (parseFloat(meal.price) * parseFloat(meal.amount))
    })
    return total;
  }

  return (
    <p>${calcTotal().toFixed(2)}</p>
  )
}

export default CartTotalPrice;