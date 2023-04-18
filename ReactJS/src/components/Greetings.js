import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (<center>
    <div>
      <Greeting name="Techno" />
      <Greeting name="Tree" />
      <Greeting name="Trainees" />
    </div></center>
  );
}

export default App;