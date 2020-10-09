import React from "react";
import "./App.css";
import PrimaryComponent from "./PrimaryComponent";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Infinite Image Gallery</h1>
        <p>Developed by Kamal Jyotwal</p>
      </header>
      <div className="maindiv">
        <PrimaryComponent />
      </div>
    </div>
  );
}

export default App;
