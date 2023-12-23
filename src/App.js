import React from 'react';
import { UseState } from './UseState';
import { UseClass } from './UseClass';
import { UseReducer } from './UseReducer';
import { UseStateDeclarativo } from './UseStateDeclarativo';


import './App.css';


function App() {

  return (
    <div className="App">
      <UseState name= "Use State" />
      <UseClass  name = "Use Class" />
      <UseReducer name = " Use Reducer" />
      <UseStateDeclarativo name = " Use State declarativo" />

     
    </div>
  );
}

export default App;


