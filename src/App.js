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
          <a href="https://github.com/fellanz" target="_blank" rel="noreferrer">
            Felicia Z
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/FellanZ/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://github.com/FellanZ/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </footer>
    </div>
  );
}

export default App;
