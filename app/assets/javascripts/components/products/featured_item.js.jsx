var FeaturedItem = React.createClass({

  render: function () {

    return(
      <li className="carousel-card">
        <a href={"#/products/" + this.props.productId} className="feature-link">
          <img className="feature-image" src={this.props.item.url}/>
          <p className="feature-details-button">More Details</p>
        </a>
      </li>
    );
  }
});
