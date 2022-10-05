import Card from "../UI/Card/Card";
import MealItem from "./MealItem";
import { DUMMY_MEALS as dummyMeals } from "../../dummyMeals";
import classes from "./MealsList.module.css";

const MealsList = (props) => {
  return (
    <Card className={classes["meals-list"]}>
      <ul>
        {dummyMeals.map((meal) => (
          <li key={meal.id}>
            <MealItem
              meal={meal}
              mealName={meal.name}
              mealDesc={meal.description}
              mealPrice={meal.price}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default MealsList;
