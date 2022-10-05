import React, {useContext} from "react";
import CartContext from "../../context/cart-context";

const HeaderCountBadge = (props) => {
  const cartContext = useContext(CartContext);

  const calcTotal = () => {
    let total = 0;
    cartContext.cart.forEach((item) => {
      total += parseInt(item.amount);
    })
    return total;
  }
  return (
    <React.Fragment>
      <span className={props.className}>{calcTotal()}</span>
    </React.Fragment>
  )
}

export default HeaderCountBadge;