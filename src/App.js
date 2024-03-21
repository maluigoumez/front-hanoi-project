import React from "react";
import Header from "./Header.js"; // Change the import statement to match your file structure
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="controls">
        <input type="number" placeholder="Number of disks" />
        <button>See movements</button>
      </div>
    </div>
  );
}

export default App;
