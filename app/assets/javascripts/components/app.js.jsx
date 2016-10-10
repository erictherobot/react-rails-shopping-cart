var App = React.createClass({

  _onCartChange: function () {
    this.setState({ cart: CartStore.all() });
  },

  _onSignIn: function () {
    if (CurrentUserStore.signedIn()) {
      var user = CurrentUserStore.currentUser();
      this.setState({ id: user.id, full_name: user.full_name, cart: CartStore.all() });
    } else {
      this.setState({ id: null, full_name: "", cart: CartStore.all() });
    }
  },

  getInitialState: function () {
    return ({ id: null, full_name: "", cart: reactCookie.load('cookieCart') || [] });
  },

  totalPrice: function () {
    sum = 0;
    this.state.cart.forEach(function (item) {
      sum += (item.quantity * item.product.price);
    });
    return sum;
  },

  redirectFromCheckout: function () {
    if (this.props.location.pathname === "/checkout") {
      this.props.history.pushState(null, "/sign_in?redirect=checkout");
    }
  },

  componentDidMount: function () {
    UserApiUtil.fetchCurrentUser(this.redirectFromCheckout);
    CurrentUserStore.addChangeListener(this._onSignIn);
    CartStore.addChangeListener(this._onCartChange);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeListener(this.onSignIn);
    CartStore.removeChangeListener(this._onCartChange);
  },

  render: function () {
    var newChildren = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, { cart: this.state.cart, userId: this.state.id, subtotal: this.totalPrice() });
    }.bind(this));
    return (
      <main>
        <NavBar userName={this.state.full_name} cart={this.state.cart} subtotal={this.totalPrice()} location={this.props.location}/>
        { newChildren }
      </main>
    );
  }
});
