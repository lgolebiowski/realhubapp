import React, { Component } from 'react';

class OrderItem extends Component {
    
    state = {
        status: false
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
        <p>{this.props.name}</p>
        <p>{this.props.email}</p>
        <ul>
          <li>{this.props.postID}</li>
          <li>{this.props.id}</li>
          <li>{this.props.email}</li>
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
