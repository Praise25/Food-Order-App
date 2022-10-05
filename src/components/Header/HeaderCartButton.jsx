import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import HeaderCountBadge from "./HeaderCountBadge";

const HeaderCartButton = (props) => {
  return (
    <div>
      <button className={classes["button"]} onClick={props.onShowModal}>
        <CartIcon className={classes["icon"]} />
        <p>Your Cart</p>
        <HeaderCountBadge className={classes["badge"]} />
      </button>
    </div>
  );
};

export default HeaderCartButton;
