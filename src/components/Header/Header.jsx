import React from "react";
import mealImage from "./meals.jpg"
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <header className={classes["header"]}>
        <h1 className={classes["header-title"]}>ReactMeals</h1>
        <HeaderCartButton onShowModal={props.onShowModal} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Meal" />
      </div>
    </div>
  );
};

export default Header;
