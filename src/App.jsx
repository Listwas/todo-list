import "./App.css";
import Card from "./Card.jsx";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addItem = () => {
    const newItem = { id: nextId, component: <Card key={nextId} /> };
    setItems([...items, newItem]);
    setNextId(nextId + 1);
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
      <footer>
        <div id="horizontal_line" class="lines"></div>
        <button id="button1" onClick={addItem}>
          add
        </button>
        <button id="button2">remove</button>
      </footer>
    </>
  );
}

export default App;
