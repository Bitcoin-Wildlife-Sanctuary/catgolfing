import React from "react";
import "./App.css";
import ReportTable from "./components/ReportTable";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cat Golfing Challenge for Bitcoin Circle Stark</h1>
        <h2>🐺 - 🐱</h2>
        <p>
          Can you beat those numbers? If yes, submit a PR{" "}
          <a href="https://github.com/Bitcoin-Wildlife-Sanctuary/bitcoin-circle-stark">
            here
          </a>
        </p>
      </header>
      <ReportTable />
    </div>
  );
};

export default App;
