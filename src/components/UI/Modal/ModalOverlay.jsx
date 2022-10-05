import classes from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={`${classes["modal"]} ${props.className}`}>
      {props.children}
    </div>
  )
}

export default ModalOverlay;