import React from "react";
import "./App.css";
import PrimaryComponent from "./PrimaryComponent";
import styled from "styled-components";

const Maindiv = styled.div`
  width: 80%;
  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <div className="App">
      <header>
        <h1>Infinite Image Gallery</h1>
        {/* <input type="text" placeholder="search here" /> */}
        <p>Developed by Kamal Jyotwal</p>
      </header>
      <Maindiv>
        <PrimaryComponent />
      </Maindiv>
    </div>
  );
}

export default App;
