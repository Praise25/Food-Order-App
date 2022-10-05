import { useContext, useState } from "react";
import Input from "../UI/Input/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../context/cart-context";

const MealItemForm = (props) => {
  const cartContext = useContext(CartContext);
  const [amount, setAmount] = useState("1");

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const addMealToCart = (event) => {
    event.preventDefault();
    cartContext.onAddToCart(props.meal, amount);
    setAmount("1");
  };

  return (
    <form className={classes["form"]}>
      <Input
        type="number"
        label="Amount"
        id="amount"
        value={amount}
        onChange={amountChangeHandler}
      />
      <button onClick={addMealToCart}>+Add</button>
    </form>
  );
};

export default MealItemForm;
