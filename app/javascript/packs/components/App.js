import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Order from './Order'

class App extends Component {
  


  render() {
    return (
      <div className="App">
        <h1>Orders</h1>
        <div className="Content">
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
        </div>
      </div>
    );
  }
}

export default App;

