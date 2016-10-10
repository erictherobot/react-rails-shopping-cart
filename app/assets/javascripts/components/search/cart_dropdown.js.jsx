var CartDropdown = React.createClass({

  componentWillReceiveProps: function (nextProps) {

  },

  render: function () {
    var cartPreviewList, totalPrice;

    if (this.props.cart.length > 0) {
      subtotal = 0;
      cartPreviewList = this.props.cart.map(function (item) {
        var price = item.product.price * item.quantity;
        subtotal += price;
        return (
          <div key={"item-sum-" + item.product.product_name} className="cart-prev-drop group">
            <img key={"item-sum-img-" + item.product.product_name} src={item.product.image.thumb_url} />
            <span key={"item-sum-name-" + item.product.product_name} >{item.product.product_name}</span>
          </div>
          );
        });
        cartPreviewList.push(<div key="full-ct-1" className="nav-all drop-item">Order Total: ${(this.props.subtotal / 100).toFixed(2)}</div>);
        cartPreviewList.push(<div key="full-ct-2" className="nav-all drop-item"><a href="#/cart" className="small-button">See your cart.</a></div>);
    } else {
      cartPreviewList = ([
        <div key="empty-ct-1" className="nav-all drop-item">Nothing in your cart!</div>,
        <div key="empty-ct-2" className="nav-all drop-item">Click "Add to Cart" on a product to get started.</div>
      ]);

    }

    return (
      <div className="nav-drop-box right-box">
        <div className="drop-box-inner right-box-inner">
          { cartPreviewList }
        </div>
      </div>
    );

  }

});
