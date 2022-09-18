import { useState } from "react";
import "./index.scss";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{value === 11 ? setValue(0) : value}</h1>
        <button onClick={() => setValue(value - 1)} className="minus">
          - Минус
        </button>
        <button onClick={() => setValue(value + 1)} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
