import React from 'react';


class Product extends React.Component {

render() {
  const BGImage1 = require('./images/'+this.props.prod.primaryImage);
  const BGImage2 = require('./images/'+this.props.prod.secondaryImage);
  console.log(BGImage2);
  const bgVar = {
    '--background-src-1': 'url('+BGImage1.default+')',
    '--background-src-2': 'url('+BGImage2.default+')',
  }

    return(
      <div
      className="product" style={
        bgVar
      }
      >
        <p>{this.props.prod.name}</p>
        <p className="price">${this.props.prod.price}</p>
        <p className="ingredients">{'ingredients: '+this.props.prod.ingredients}</p>
      </div>
    )
  }
}

export default Product;
