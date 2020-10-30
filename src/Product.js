import React from 'react';


class Product extends React.Component {

render() {
  const BGImage2 = require('./images/'+this.props.prod.secondaryImage);
  console.log(BGImage2);
  const bgVar = {
    '--background-src': 'url('+BGImage2.default+')', 
  }

    return(
      <div
      className="product" style={
        bgVar
      }
      >
        <p>{this.props.prod.name}</p>
        <p className="price">${this.props.prod.price}</p>
        {// <p className="description">{this.props.prod.description}</p>
        }
      </div>
    )
  }
}

export default Product;
