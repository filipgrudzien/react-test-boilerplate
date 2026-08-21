import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClickMinus = (): void => {
    setCount((prev) => prev - 1);
  };

  const handleClickPlus = (): void => {
    setCount((prev) => prev + 1);
  };

  const handleResetButton = (): void => {
    setCount(0);
  };

  return (
    <main className="counter-app">
      <h1>Counter</h1>
      <p aria-label="counter-value" className="counter-value">
        {count}
      </p>
      <div className="counter-actions">
        <button type="button" onClick={handleClickPlus}>
          +
        </button>
        <button type="button" onClick={handleClickMinus}>
          -
        </button>
      </div>
      <div className="counter-actions">
        <button type="button" onClick={handleResetButton}>
          Reset
        </button>
      </div>
    </main>
  );
}

export default App;
