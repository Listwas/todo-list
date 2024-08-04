import "./App.css";
import Card from "./Card.jsx";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(1);
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState("");

  const add = () => {
    setShowInput(true);
  };

  const submit = (e) => {
    e.preventDefault();
    const newItem = {
      id,
      text: inputText,
      component: <Card key={id} text={inputText} />,
    };
    setItems([...items, newItem]);
    setId(id + 1);
    setShowInput(false);
    setInputText("");
  };

  const change = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <div id="main_cont">
        <div id="left_cont">
          <h1>To do😠😡</h1>
          {items.map((item) => item.component)}
        </div>
        <div>
          <div id="vertical_line" class="lines"></div>
        </div>
        <div id="right_cont">
          <h1>done😉😲</h1>
          <h3>total:</h3>
          <p id="info">asd</p>
        </div>
      </div>
      <div id="horizontal_line" class="lines"></div>

      <footer>
        {showInput ? (
          <form onSubmit={submit}>
            <input
              type="text"
              value={inputText}
              onChange={change}
              placeholder="Enter text"
              className="input_style"
            />
          </form>
        ) : (
          <button id="button1" onClick={add}>
            add
          </button>
        )}
        <button id="button2">remove</button>
      </footer>
    </>
  );
}

export default App;
