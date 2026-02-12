import { useState } from 'react';
import './PalleteApp.css';

export default function PalleteApp() {
  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = [
    '#d6fb41',
    '#a8f542',
    '#7ce84d',
    '#50dc5a',
    '#24d068',
    '#00c576'
  ];

  const handleIncrement = () => {
    setCount(count + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    setColorIndex((colorIndex - 1 + colors.length) % colors.length);
  };

  const handleReset = () => {
    setCount(0);
    setColorIndex(0);
  };

  return (
    <div className="counter-app">
      <div className="counter-container">
        <h1 className="counter-title">Color Counter</h1>
        
        <div className="counter-display">
          <div 
            className="color-preview"
            style={{ backgroundColor: colors[colorIndex] }}
          ></div>
          <span className="counter-number">{count}</span>
        </div>

        <div className="button-group">
          <button 
            className="btn btn-decrement"
            onClick={handleDecrement}
          >
            − Decrease
          </button>
          <button 
            className="btn btn-reset"
            onClick={handleReset}
          >
            Reset
          </button>
          <button 
            className="btn btn-increment"
            onClick={handleIncrement}
          >
            Increase +
          </button>
        </div>

        <div className="color-info">
          <p>Current Color: <code>{colors[colorIndex]}</code></p>
          <p>Total Clicks: <strong>{Math.abs(count)}</strong></p>
        </div>
      </div>
    </div>
  );
}
