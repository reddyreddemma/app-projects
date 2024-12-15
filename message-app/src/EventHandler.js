import React from 'react';

const handleClick = (event) => {
  console.log('Clicked!', event);
};

function EventHandler() {
  return (
    <button onClick={handleClick}>
      Click me to see the event object in browser console
    </button>
  );
}

export default EventHandler;
