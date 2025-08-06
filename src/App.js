import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <footer>
        <footer>
          This project was coded by{" "}
          <a href="" target="_blank">
            Felicia Z
          </a>
          , open-sourced on{" "}
          <a href="" target="_blank">
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="" target="_blank">
            Netlify
          </a>
          .
        </footer>
      </footer>
    </div>
  );
}

export default App;
