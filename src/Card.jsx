import "./Card.css";

function Card({ id, text, removeItem, markAsDone, isDone }) {
  return (
    <div className={`card ${isDone ? "done" : ""}`}>
      <p>{text}</p>
      {!isDone && (
        <>
          <button onClick={() => markAsDone(id)} className="done_button">
            Done
          </button>
          <button onClick={() => removeItem(id)} className="remove_button">
            Remove
          </button>
        </>
      )}
    </div>
  );
}

export default Card;
