import "./style.css";

const ButtonComponent = (props) => {
  return (
    <button
      className="myButton"
      style={{ backgroundColor: props.color1, color: props.color2 }}
    >
      {props.title} {props.title2}
    </button>
  );
};

export default ButtonComponent;
