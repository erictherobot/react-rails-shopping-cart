var Checkout = React.createClass({

  mixins: [ReactRouter.History],

  _onAddressChange: function () {
    this.setState({ shippingAddresses: ShippingAddressStore.all() });
  },

  getInitialState: function () {
    var handler = StripeCheckout.configure({
      key: 'pk_test_5b1sxnEFqBwH1TvkdkcIyP1T',
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      allowRememberMe: false,
      token: function(token) {
        var that = this;
        CheckoutApiUtils.createFinishedPayment(token, this.props.subtotal, function () {
          that.history.pushState(null, "/");
        });
      }.bind(this)
    });

    return ({ shippingAddresses: [], handler: handler });
  },

  componentDidMount: function () {
    CheckoutApiUtils.fetchShippingAddresses();
    ShippingAddressStore.addChangeListener(this._onAddressChange);
  },

  componentWillUnmount: function () {
    ShippingAddressStore.removeChangeListener(this._onAddressChange);
  },

  shippingClick: function (e) {
    e.preventDefault();
    if (this.state.shippingAddresses.length > 0) {
      this.setState({ showForm: true });
    } else {
      this.setState({ shippingExpand: true });
    }
  },

  handleCheckout: function(e) {
    var numItems = CartStore.all().length;
    var desc = "# 4242 4242 4242 4242, 09/18, 999";
    this.state.handler.open({
      name: 'Sunfish',
      email: CurrentUserStore.currentUser().email,
      description: desc,
      amount: this.props.subtotal
    });
    e.preventDefault();
  },

  render: function () {
    var formModal;
    if (this.state.form) {
      formModal = (this.state.showForm === "shipping") ? <ShippingForm /> : "payment form";
    }

    return (
      <section className="checkout-landing group">
        <ul className="order-summary-wrapper">
          <li>
            <ShippingView shippingAddresses={this.state.shippingAddresses} shippingClick={this.shippingClick} expand={this.state.expand}/>
          </li>

        </ul>

        <div id="order-summary" className="checkout-form">
          <div className="inner-box">
            <h3>Order Details</h3>
            <hr />
            <ul className="subtotal-summary">
              <li className="small-line-item">
                <p className="left-text">Items: </p>
                <p className="right-text">${(this.props.subtotal / 100).toFixed(2)}</p>
              </li>
              <li className="small-line-item">
                <p className="left-text">Shipping: </p>
                <p className="right-text">$0.00</p>
              </li>
              <li className="small-line-item">
                <p className="left-text">Sales Tax: </p>
                <p className="right-text">${(this.props.subtotal / 100 * 8.65 / 100).toFixed(2)} (8.65%)</p>
              </li>
              <li className="small-line-item">
                <p className="left-text green-price">Order total: </p>
                <p className="right-text">${(this.props.subtotal / 100 + this.props.subtotal / 100 * 8.65 / 100).toFixed(2)}</p>
              </li>
            </ul>
            <hr />
            <button id="order-button" className="form-button pull-left" onClick={this.handleCheckout}>
              Place Order
            </button>
          </div>
        </div>
      </section>
    );

  },

  activeShipping: function (e) {
    e.preventDefault();
  }

});
