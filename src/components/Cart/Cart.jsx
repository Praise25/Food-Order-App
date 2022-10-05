import { useContext } from "react";
import classes from "./Cart.module.css";
import ModalOverlay from "../UI/Modal/ModalOverlay";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItems";
import CartTotalPrice from "./CartTotalPrice";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const onAddHandler = (mealObj, amount) => {
    cartCtx.onAddToCart(mealObj, amount);
  };

  const onRemoveHandler = (mealObj) => {
    cartCtx.onRemoveFromCart(mealObj);
  };

  return (
    <ModalOverlay className={classes["modal-overlay"]}>
      <ul>
        {cartCtx.cart.map((meal) => (
          <li key={meal.id}>
            <CartItem
              meal={meal}
              name={meal.name}
              price={meal.price}
              amount={meal.amount}
              onAdd={onAddHandler}
              onRemove={onRemoveHandler}
            />
          </li>
        ))}
      </ul>
      <div className={classes["total"]}>
        <p>Total Amount</p>
        <CartTotalPrice />
        <div className={classes["actions"]}>
          <button
            className={classes["button--alt"]}
            onClick={props.onHideModal}
          >
            Close
          </button>
          <button className={classes["button"]}>Order</button>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default Cart;
