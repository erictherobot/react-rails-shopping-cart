var FeaturedIndex = React.createClass({

  getInitialState: function () {
    return ({ products: FeaturedStore.byFeature(this.props.feature) });
  },

  render: function () {
    var images = this.state.products.map(function (product) {
      return (
        <div key={product.id}>
          <FeaturedItem
            item={product.image[0]}
            productId={product.id} />
        </div>
      );
    });
    return (
        <div className="container">
          <div className="featured" id={this.props.feature.title.toLowerCase()}>
            <h2 className="featured-dept"><a href="#" className="dept-link">{this.props.feature.title}</a></h2>
            <hr />



            <div className="carousel">
              <ul className="carousel-viewport" onMouseEnter={this.handleHover} onMouseLeave={this.handleStopHover}>
                { images }
              </ul>
            </div>
          </div>
        </div>
    );
  },

  handleHover: function (e) {
    var holdThis = (
      <div>

      <button className="arrow-button slide-left" onClickCapture={this.handleButtonClick}>
        <img src={appImages.leftArrow} alt="left arrow" />
      </button>
      <button className="arrow-button slide-right" onClickCapture={this.handleButtonClick} >
        <img src={appImages.rightArrow} alt="right arrow" />
      </button>

      </div>
    );
  },

  handleStopHover: function (e) {

  },

  handleButtonClick: function (e) {
    e.preventDefault();
  },


// saving for later. done with carousel attemps for now
  jQVars: function () {
    var el = $("#" + this.props.feature.title.toLowerCase());
    var pics = el.find(".carousel-card");
    var viewPort = el.find(".carousel-viewport");
    var viewWidth = el.find(".carousel").width();
    var leftAnchorIdx = 0;
    var max = viewPort.width();
    var maxDisplacement = -1 * (max - viewWidth);
  },

  jQMoveViewPort: function (dir) {
    var currPosition = viewPort.position().left;
    var displace = dir * viewWidth + currPosition;
    if (dir === -1) {
      this.slideRight(displace);
    } else if (dir === 1) {
      this.slideLeft(displace);
    }
  },

  jQslideLeft: function(displace) {
    if (displace >= 0) {
      displace = 0;
      $(".slide-left").addClass("disabled");
    }
      if ($(".slide-right").hasClass("disabled")) {
      $(".slide-right").removeClass("disabled");
    }
    var sum = 0;
    var nextIdx = anchorIdx - 1;
    var offSet;
    while (true) {
      sum += this.state.products[nextIdx].image[0].width;
      // only works if you only ever click the left button
      // need to check anchor based on direction to get either to work
      if (sum > viewWidth) {
        anchorIdx = nextIdx;
        offSet = viewWidth - sum + this.state.products[nextIdx].image[0].width;
        break;
      }
      nextIdx++;
    }
    viewPort.css("left", displace - offSet );
  },

  jQslideRight: function(displace) {
    if (displace <= maxDisplacement) {
      displace = maxDisplacement;
      $(".slide-right").addClass("disabled");
    }
      if ($(".slide-left").hasClass("disabled")) {
      $(".slide-left").removeClass("disabled");
    }
    var sum = 0;
    var nextIdx = leftAnchorIdx;
    var offSet;
    while (true) {
      sum += this.state.products[nextIdx].image[0].width;
      if (sum > viewWidth) {
        this.anchorIdx = nextIdx;
        offSet = viewWidth - sum + this.state.products[nextIdx].image[0].width;
        break;
      }
      nextIdx++;
    }
    viewPort.css("left", displace + offSet );
  }

});
