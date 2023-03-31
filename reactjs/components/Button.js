import React from 'react';

function Button() {
    return (
      <button className="btn" onClick={() => window.open("https://www.google.com")}>
        Go to Google
      </button>
    );
  }
  

export default Button;
