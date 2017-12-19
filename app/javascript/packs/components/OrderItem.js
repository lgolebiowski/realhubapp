import React from 'react';

const OrderItem = (props) => {
    
    const style =  {
      color: 'red',
      fontWeight: 'bold'
    };

    return (
          <div className="Product">
          <ul>
            <li>{props.product.quantity}</li>
            <li>{props.product.size}</li>
            <li>{props.product.name}</li>
            <li>
              <button 
                className="Button">
                Download
              </button>
              <button 
                className="Button"
                onClick = {props.click}>
                Change Status
              </button>
            </li>
            <li>
              {props.status === true?
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
export default OrderItem; 
