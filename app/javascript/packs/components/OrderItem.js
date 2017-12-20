import React, { Component } from 'react';

class OrderItem extends Component {
    
    state = {
        status: this.props.status_id, 
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

    handleDownload = (uri, name) => {
      var link = document.createElement("a");
      link.download = name;
      link.href = uri;
      link.click();
    }

    render() {

    const style =  {
      color: 'red',
      fontWeight: 'bold'
    };

    const buttonStyle =  {
      border: '1px solid red'
    };

    return (
      <div className="Product">      
        <p className="Title">{this.props.address}</p>
        <ul>
          <li>{this.props.total}</li>
          <li>x</li>
          <li>{this.props.title}</li>
          <li>
            {this.props.uri ? 
            <button
              style = {buttonStyle}
              className="Button"
              onClick={(event) => {
                event.preventDefault();
                this.handleDownload(this.props.uri, 'Artboard.jpg');
              }}
                >
              Download Artwork
            </button>  
             :
            <button 
              className="Button"
              >
              No Artwork
            </button>
            }
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
