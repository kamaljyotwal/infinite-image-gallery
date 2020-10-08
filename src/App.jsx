import React, { useState } from "react";
import "./App.css";
import PrimaryComponent from "./PrimaryComponent";
import styled from "styled-components";

const Maindiv = styled.div`
  width: 80%;
  margin: 0 auto;
`;

function App() {
  return (
    <div className="App">
      <header>
        <h1>Infinite Image Gallery</h1>
        <p>Developed by Kamal Jyotwal</p>
      </header>
      <Maindiv>
        <PrimaryComponent />
      </Maindiv>
    </div>
  );
}

export default App;
