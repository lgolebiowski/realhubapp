import React, { Component } from 'react';
import './Order.css';
import axios from 'axios';
import OrderItem from './OrderItem';


class Order extends Component {
  
  state = {
      orders: []
    }

  componentDidMount () {

    axios 
      .get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        this.setState({orders: response.data});
          console.log(response)
      });
    }

  render() {
   
    const orders = this.state.orders.map(order => {
      return <OrderItem name = {order.name} email = {order.email} product = {this.state.product} status = {this.state.status}/>;
    });

    return (

      <div className="Order">
        <div className="Agency">
          <ul>
            {orders}
          </ul>
        </div>

      </div>

    );
  }
}

export default Order;