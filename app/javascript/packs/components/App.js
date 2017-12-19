import React, { Component } from 'react';
import './App.css';
import Order from './Order'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Orders</h1>
        <div className="Content">
          <Order />
        </div>
      </div>
    );
  }
}

export default App;

