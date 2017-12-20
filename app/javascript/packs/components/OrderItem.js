import React, { Component } from 'react';

class OrderItem extends Component {
    
    state = {
        status: this.props.status_id 
    }

    toggleHandler = (event) => {
      const label = this.state.status;
      {label === 2 ? this.setState({
        status: 3 
      })
      : this.setState({
        status: 2 
      });
      }
    }

    render() {

    const style =  {
      color: 'red',
      fontWeight: 'bold'
    };

    return (
      <div className="Product">      
        <p className="Title">{this.props.address}</p>
        <ul>
          <li>{this.props.total}</li>
          <li>x</li>
          <li>{this.props.title}</li>
          <li>
            <button 
              className="Button">
              Download Artwork
            </button>
            <button 
              className="Button"
              onClick = {this.toggleHandler}>
              Change Status
            </button>
          </li>
          <li>
            {this.state.status === 2 ?
              <div
              className="Status"
              >approved</div>
              :
              <div className="Status"
              style = {style}
              >printed</div>
              }
          </li>
        </ul>   
      </div>
    );
  };    
};

export default OrderItem; 
