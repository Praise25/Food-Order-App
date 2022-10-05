import classes from './CartItems.module.css';

const CartItem = (props) => {
  const price = `$${parseInt(props.price).toFixed(2)}`;

  const onAddHandler = () => {
    props.onAdd(props.meal, 1);
  }

  const onRemoveHandler = () => {
    props.onRemove(props.meal);
  }

  return (
    <div className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveHandler}>-</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </div>
  );
};

export default CartItem;