import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <div className={classes["meal"]}>
      <div>
        <h3>{props.mealName}</h3>
        <p className={classes["description"]}>{props.mealDesc}</p>
        <p className={classes["price"]}>${props.mealPrice}</p>
      </div>
      <MealItemForm meal={props.meal} />
    </div>
  );
};

export default MealItem;
