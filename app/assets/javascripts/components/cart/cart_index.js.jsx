var CartIndex = React.createClass({

  componentWillReceiveProps: function (nextProps) {

  },

  render: function () {
    var numItems, subtotal, cartItems, checkoutNav;

    numItems = this.props.cart.length === 1 ? " item" : " items";
    numItems = this.props.cart.length + numItems;

    subtotal = 0;
    cartItems = this.props.cart.map(function (product) {
      subtotal += (product.product.price * product.quantity);
      return (
        <article key={"cart-idx-item-" + product.product.id}>
          <CartItem qty={product.quantity} upClick={this.handlePlus} downClick={this.handleMinus} product={product.product} />
        </article>
      );
    }.bind(this));

    if (this.props.userId) {
      checkoutNav = "#/checkout";
    } else {
      checkoutNav = "#/sign_in?redirect=checkout";
    }

    return (
      <main className="cart-index group">
        <h2>Cart</h2>

        <section className="cart-items">
          {cartItems}
        </section>

        <section className="checkout-form">
          <div className="box-inner">
            <span className="product-price-summary">Subtotal ({numItems}): ${(subtotal / 100).toFixed(2)}</span>
          </div>

          <div className="cart-wrapper">
              <button className="cart-button">
                <a href={checkoutNav}><p className="cart-button-txt">Checkout</p></a>
              </button>
          </div>
        </section>

      </main>
    );

  }

});
