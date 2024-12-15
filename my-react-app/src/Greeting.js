import React from 'react';

function Greeting(props) {
    return (
      <div>
        <h3>Welcome to our SkillCaptain Family, {props.name}!</h3>
        <p>{props.message}</p>
      </div>
    );
  }
export default Greeting;