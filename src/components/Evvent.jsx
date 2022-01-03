import React from 'react';
import ReactDOM from 'react-dom';

function Football() {
  const shoot = (a, b) => {
    alert(b.type);
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}

export default Football;