import React, { Component } from 'react';

class OrderItem extends Component {
    
    state = {
        status: this.props.status_id
    }

    toggleHandler = (event) => {
    const label = this.state.status;
    this.setState({
      status: !label
    });
    }

    render() {

    const style =  {
      color: 'red',
      fontWeight: 'bold'
    };

    return (
      <div className="Product">      
        <p>{this.props.title}</p>
        <p>{this.props.address}</p>
        <ul>
          <li>{this.props.total}</li>
          <li>{this.props.id}</li>
          <li>{this.props.status_id}</li>
          <li>
            <button 
              className="Button">
              Download
            </button>
            <button 
              className="Button"
              onClick = {this.toggleHandler}>
              Change Status
            </button>
          </li>
          <li>
            {this.state.status === true?
              <div
              className="Status"
              style = {style}
              >printed</div>
              :
              <div className="Status">approved</div>
              }
          </li>
        </ul>   
      </div>
    );
  };    
};

export default OrderItem; 
