import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import Cart from "../../Cart/Cart";

const Backdrop = (props) => {
  return <div className={classes["backdrop"]} onClick={props.onHideModal} />
}

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideModal={props.onHideModal} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <Cart onHideModal={props.onHideModal}/>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  )
}

export default Modal;