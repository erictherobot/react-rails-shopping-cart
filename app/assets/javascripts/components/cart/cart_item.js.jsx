var CartItem = React.createClass({

  componentWillReceiveProps: function (nextProps) {

  },

  shouldComponentUpdate: function (nextProps, nextState) {
    if (this.props.qty === nextProps.qty && this.props.product.id === nextProps.product.id) {
      return false;
    }
    return true;
  },


  render: function () {
    var linkBack, productName, inStock;

    var qtyMinusClass = "js-qty-enabled";
    var qtyPlusClass = "js-qty-enabled";
    if (this.props.qty === 0) {
      qtyMinusClass = "js-qty-disabled";
    } else if (this.props.qty === 5) {
      qtyPlusClass = "js-qty-disabled";
    }

    inStock = this.props.product.quantity ? "in Stock" : "not in Stock";

    linkBack = "#/products/" + this.props.product.id;
    productName = this.props.product.product_name;
    return (
      <div className="cart-item-wrapper group">
        <a href={linkBack} className="cart-prev carousel-card">
          <img src={this.props.product.image.url} />
        </a>

        <div className="product-summary-box">
          <span className="same-day-delivery">{productName}</span>
          <span className="small-stock">{inStock}</span>
          <span className="small-price">${(this.props.product.price / 100).toFixed(2)}</span>
        </div>
          { /* <div className="cart-qty-wrap">
            <div className="qty-button-wrapper">
              <button className={"i-minus " + qtyMinusClass}
                onClick={this.props.downClick}>
                <img title="minus one quantity" src={appImages.minusSign}/>
              </button>
              <div className="quantity-indicator">{this.props.qty}</div>
              <button className={"i-plus " + qtyPlusClass} onClick={this.props.upClick}>
                <img title="plus one quantity" src={appImages.plusSign} />
              </button>
            </div>
          </div>
          */}
      </div>
    );
  }


});
