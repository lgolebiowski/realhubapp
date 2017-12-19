import React, { Component } from 'react';
import './Order.css';
import axios from 'axios';
import OrderItem from './OrderItem';

class Order extends Component {
  
  state = {
      orders: {},
      agency: {
        name: 'XYZ',
        address: '7/5 Waine St',
        campaign: '2018'
      },
      product: {
        quantity: '150',
        size: 'A4',
        name: 'Satin Brochure',
      },
      status: false
    }

// I had problems with fetching the JSON file from your API to Rails (which insn't configured yet), 
// but here is the way, how I would get them here and place to the state (that's why in the costructor method you see empty array of 'orders')    

  componentDidMount () {
    axios 
      .get('/orders')
      .then(response => {
        this.setState({orders: response.data});
          console.log(response)
      });
  }

    toggleHandler = (event) => {
      const label = this.state.status;
      this.setState({
        status: !label
      })
    }

  render() {

    // Here I map through the JSON file to get particular data to render (ie. title and body from another JSON example)
    // Then I can return {orders} in the render's return method (haven't placed it there because doesn't want to be commented out) 

    const orders = this.state.orders.map(order => {
    return (
      order.title,
      order.status_id
    )});

    return (
      <div className="Order">
        <div className="Agency">
          <ul>
            <li>{this.state.agency.name}</li>
            <li>{this.state.agency.address}</li>
            <li>{this.state.agency.campaign}</li>
          </ul>
        </div>
        <OrderItem 
          click = {this.toggleHandler}
          product = {this.state.product}
          status = {this.state.status}
        />
        {orders}
      </div>

    );
  }
}

export default Order;