function Card(props) {
  const style = {
    backgroundColor: "grey",
    padding: "10px",
    marginLeft: "60px",
    marginBottom: "10px",
    border: "1px solid grey",
    borderRadius: "5px",
  };
  return (
    <>
      <div style={style}>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default Card;
