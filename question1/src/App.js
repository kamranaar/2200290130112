import React, { useState } from "react";
import StockSelector from "./components/StockSelector";

function App() {
  const [selectedTicker, setSelectedTicker] = useState("");

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Stock Selector</h2>
      <StockSelector onChange={(ticker) => setSelectedTicker(ticker)} />
      {selectedTicker && <p>Selected: {selectedTicker}</p>}
    </div>
  );
}

export default App;
