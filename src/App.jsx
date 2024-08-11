import "./App.css";
import Card from "./Card.jsx";
import { useState, useRef, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const [id, setId] = useState(1);
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState("");

  const inputRef = useRef(null);

  const addItem = () => setShowInput(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      const newItem = { id, text: inputText };
      setItems([...items, newItem]);
      setId(id + 1);
      setShowInput(false);
      setInputText("");
    }
  };

  const handleInputChange = (e) => setInputText(e.target.value);

  const removeItem = (id) => setItems(items.filter((item) => item.id !== id));

  const markAsDone = (id) => {
    const doneItem = items.find((item) => item.id === id);
    setDoneItems([...doneItems, doneItem]);
    removeItem(id);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && !showInput) {
        setShowInput(true);
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showInput]);

  return (
    <>
      <div id="main_cont">
        <div id="left_cont">
          <h1>To Do 😠😡</h1>
          {items.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              text={item.text}
              removeItem={removeItem}
              markAsDone={markAsDone}
            />
          ))}
        </div>
        <div>
          <div id="vertical_line" className="lines"></div>
        </div>
        <div id="right_cont">
          <h1>Done 😉😲</h1>
          {doneItems.map((item) => (
            <Card key={item.id} text={item.text} isDone />
          ))}
        </div>
      </div>
      <div id="horizontal_line" className="lines"></div>
      <footer>
        {showInput ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Enter text"
              className="input_style"
              ref={inputRef}
            />
          </form>
        ) : (
          <button id="button1" onClick={addItem}>
            Add
          </button>
        )}
      </footer>
    </>
  );
}

export default App;
