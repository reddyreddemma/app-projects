import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a JSX example.</p>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;

