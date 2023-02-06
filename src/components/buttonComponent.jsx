const ButtonComponent = (props) => {
  return (
    <button style={{ backgroundColor: props.color1, color: props.color2 }}>
      {props.title}
    </button>
  );
};

export default ButtonComponent;
