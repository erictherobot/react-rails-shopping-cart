var ShowProduct = React.createClass({

  getInitialState: function () {
    return ({ product: { product_name: "", price: 0, description: "", specs: [], stock: false} });
  },

  componentWillReceiveProps: function (nextProps) {
    if (this.props.params.productId !== nextProps.params.productId) {
      ApiUtil.fetchSingleProduct(nextProps.params.productId);
    }
  },

  componentDidMount: function () {
    ApiUtil.fetchSingleProduct(this.props.params.productId);
    ShowStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    ShowStore.removeChangeListener(this._onChange);
    this.setState({ product: { product_name: "", price: 0, description: "", specs: [], stock: false} });
  },

  _onChange: function () {
    return this.setState({ product: ShowStore.all() });
  },

  render: function () {
    var imageIndex = <div className="loading" src={appImages.loadingGif}></div>;
    if (this.state.product.images) {
      imageIndex = <ShowImageIndex images={this.state.product.images} location={this.props.location}/>;
    }

    var specs = (
      <ul>
      {
        this.state.product.specs.map(function (spec, i) {
          return <li key={i}>- {spec}</li>;
        })
      }
      </ul>
    );
    var description = (
      <ul className="desc-list">
        <p>{this.state.product.description}</p>
        <li className="desc-item">
          <p><strong className="desc-tagline">Dimensions:</strong> {((Math.random() * (20 - 2)) + 2).toFixed(1)} x {((Math.random() * (20 - 2)) + 2).toFixed(2)} x {((Math.random() * (20 - 2)) + 2).toFixed(2)} inches</p>
        </li>
        <li className="desc-item">
          <p><strong className="desc-tagline">Weight:</strong> {((Math.random() * (20 - 2)) + 2).toFixed(1)} ounces</p>
        </li>
        <li className="desc-item">
          <p><strong className="desc-tagline">Release Date:</strong> October {Math.floor(((Math.random() * (30 - 2)) + 2))}, 2016</p>
        </li>
      </ul>
    );

    return(
      <main className="show-product-main">
        <section className="product-image-specs-cart-wrapper group">
          <div className="product-image-specs-wrapper">
            <div className="product-image-index">
              { imageIndex }
            </div>

              <h1 className="product-name">{this.state.product.product_name}</h1>

              <span className="stock">{this.state.product.stock}</span>
              <p>{ specs }</p>
              <h2 className="description-header">Description</h2>
              <hr/>
              <p>{ description }</p>
            </div>

          <div className="form-outer-box">
            <ProductMgmtForm product={this.state.product} userId={this.props.userId} />
          </div>
        </section>

      </main>
    );
  },
});
