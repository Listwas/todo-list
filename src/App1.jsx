import "./App.css";
function App() {
  return (
    <>
      <div id="main_cont">
        <div id="left_cont">
          <h1>To do😠😡</h1>
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
        <button id="button1">add </button>
        <button id="button2">remove</button>
      </footer>
    </>
  );
}

export default App;
