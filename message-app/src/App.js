import React, { useState } from 'react';
import './App.css';
import EventHandler from './EventHandler';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <h1>Hello,Guys!</h1>
      <p>This is a Remainder.</p>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>
      {showMessage && <p>Hello, Have a Good Day!</p>}
      <EventHandler />
    </div>
  );
}

export default App;
