import React from "react";

function App() {
  const handleClick = () => {
    const { ipcRenderer } = window.require("electron");
    ipcRenderer.send("event", "HIHIHIHI");
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
