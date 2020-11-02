import React from 'react';
import classnames from 'classnames';


class Product extends React.Component {

  state = {
    showBG2: false,
  }

  toggleBG = () => {
    this.setState( prevState => (
      {
        showBG2: !prevState.showBG2,
      }
    ));
  };

render() {

  const BGImage1 = require('./images/'+this.props.prod.primaryImage);
  const BGImage2 = require('./images/'+this.props.prod.secondaryImage);

  const bgVar = {
    '--background-src-1': 'url('+BGImage1.default+')',
    '--background-src-2': 'url('+BGImage2.default+')',
  };

    return(
      <div
      className={
        classnames('product', {'showBG2': this.state.showBG2})
      }
      style={
        bgVar
      }
      onMouseEnter={this.toggleBG}
      onMouseLeave={this.toggleBG}
      >

        <div className="prod_top">
          <p>{this.props.prod.name}</p>
          <p className="price">${this.props.prod.price}</p>
          <p className="ingredients">{'ingredients: '+this.props.prod.ingredients}</p>
        </div>
        <div className="prod_bottom">
          <p className="description">{this.props.prod.description}</p>
        </div>
      </div>
    )
  }
}

export default Product;
