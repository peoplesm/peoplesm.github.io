import React from 'react';

const name = 'Matt Peoples';

function about() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
        </div>
      </div>
    </div>
  );
}

export default about;
