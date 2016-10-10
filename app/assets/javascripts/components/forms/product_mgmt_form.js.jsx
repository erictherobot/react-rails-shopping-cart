var ProductMgmtForm = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({ qty: 1 });
  },

  handlePlus: function (e) {
    e.preventDefault();
    if (this.state.qty + 1 <= 5) {
      this.setState({ qty: this.state.qty + 1 });
    }
  },

  handleMinus: function (e) {
    e.preventDefault();
    if (this.state.qty - 1 >= 0) {
    this.setState({ qty: this.state.qty - 1 });
    }
  },

  addToCart: function (e) {
    e.preventDefault();
    var newCart = CartStore.all();
    newCart.push({product: this.props.product, quantity: this.state.qty });
    if (this.props.userId) {
      this.updateCart(newCart);
    } else {
      this.updateCart(newCart, this.updateCookieCart);
    }
  },

  updateCart: function (newCart, updateCookieCart) {
    CartApiUtils.updateRemoteCartItems(newCart, function () {
      this.history.pushState(null, "/cart");
    }.bind(this), updateCookieCart);
  },

  updateCookieCart: function (newCart) {
    reactCookie.save('cookieCart', newCart);
  },

  render: function () {

    var qtyMinusClass = "js-qty-enabled";
    var qtyPlusClass = "js-qty-enabled";
    if (this.state.qty === 0) {
      qtyMinusClass = "js-qty-disabled";
    } else if (this.state.qty === 5) {
      qtyPlusClass = "js-qty-disabled";
    }

    return (
      <fieldset className="box-inner">
        <form className="mgmt-form">
          <span className="product-price-summary">
            <strong className="product-price">${(this.props.product.price / 100).toFixed(2)}</strong>
          </span>
          <div className="cart-wrapper">
            <div className="qty-button-wrapper">
              <button className={"i-minus " + qtyMinusClass}
                onClick={this.handleMinus}>
                <img title="minus one quantity" src={appImages.minusSign}/>
              </button>
              <div className="quantity-indicator">{this.state.qty}</div>
              <button className={"i-plus " + qtyPlusClass} onClick={this.handlePlus}>
                <img title="plus one quantity" src={appImages.plusSign} />
              </button>
            </div>
            <br/>
            <button onClick={this.addToCart} className="cart-button">
              <p className={"cart-button-txt " + qtyMinusClass}>Add to Cart</p>
            </button>
          </div>
        </form>
      </fieldset>
    );

  }

});
