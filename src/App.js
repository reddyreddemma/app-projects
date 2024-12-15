import React from 'react';

function App() {
  const items = ['Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
