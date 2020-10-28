import React from 'react';


class Product extends React.Component {

  render() {
    var BGImage2 = require('./images/'+this.props.prod.secondaryImage);
    console.log(BGImage2);
    return(
      <div
      className="product"
      >
        <h1>{this.props.prod.name}</h1>
        <img
          width="100%"
          alt={'product image for ' + this.props.prod.name}
          src={BGImage2.default}
        />
        <p className="price">${this.props.prod.price}</p>
        <p className="description">{this.props.prod.description}</p>
      </div>
    )
  }
}

export default Product;
