var NavBar = React.createClass({

  componentWillReceiveProps: function (nextProps) {
  },

  feelingLucky: function () {
    var randNum = Math.floor(Math.random() * 19) + 1;
    return "#/products/" + randNum;
  },

  render: function (){
    var departmentList, cartSize;

    departmentList = ["Furniture", "Office Supplies"].map( function(dept) {
      return (
        <div key={dept + 219} className="nav-dept nav-all drop-item">
          {dept}
        </div>
      );
    });
    cartSize = (this.props.cart.length) ? <p className="cart-qty">Cart: {this.props.cart.length}</p> : null;
    return (
      <header className="header">

        <section className="nav-search group">
          <nav className="nav-logo"><a href="#/">Sunfish</a></nav>
          <div className="nav-links">
            <ul>
              <li><a href="#/">Home</a></li>
            </ul>
          </div>
            <div className="right-hand-wrapper">
              <div key="cart-prev-nav-1" className="nav-drop">
                <div className="cart nav-all">
                  <a href="#/cart" className="nav-drop-link">
                     {cartSize}
                  </a>
                  {/*  <CartDropdown cart={this.props.cart} subtotal={this.props.subtotal}/> */}
                </div>
              </div>
            </div>
        </section>

      </header>
    );
  }

});
