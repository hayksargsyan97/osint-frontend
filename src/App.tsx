import React from "react";
import ScanList from "./ScanList"; // Import the ScanList component
import "./App.css"; // Keep styles if needed

function App() {
  return (
      <div className="App">
        <h1>Domain Scanner</h1>
        <ScanList /> {/* Render your component here */}
      </div>
  );
}

export default App;
