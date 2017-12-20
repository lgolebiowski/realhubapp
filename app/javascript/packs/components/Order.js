import React, { Component } from 'react';
import './Order.css';
import axios from 'axios';
import OrderItem from './OrderItem';


class Order extends Component {
  
  state = {
      orders: this.props.orders
    }

  render() {
   
    const orders = this.state.orders.map((order) => {
      return <OrderItem 
        key= {order.id}
        title = {order.title} 
        address = {order.shipping_address} 
        total = {order.total} 
        id={order.id} 
        status_id={order.status_id} 
        uri={order.uri}
        />;
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