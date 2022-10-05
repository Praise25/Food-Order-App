import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import MealsList from "./components/Meals/MealsList";
import Modal from "./components/UI/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  }

  const hideModalHandler = () => {
    setShowModal(false);
  }

  return (
    <React.Fragment>
      {showModal && <Modal onHideModal={hideModalHandler} />}
      <Header onShowModal={showModalHandler} />
      <MealsSummary />
      <MealsList />
    </React.Fragment>
  );
}

export default App;
