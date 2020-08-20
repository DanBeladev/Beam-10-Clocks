import React from "react";
import{Clock} from "./Clock";
import "./styles.css";

export default function App() {
  const clocks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="App">
      <h1>Welcome to Clocks</h1>
      <div className="container">
      {clocks.map((delay) => (
        <Clock key={delay} pointer={delay} />
        ))}
        </div>
    </div>
  );
}
