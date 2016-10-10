var WishListDropdown = React.createClass({

  ComponentWillReceiveProps: function (nextProps) {

  },

  render: function () {
    var wishList;

    if (this.props.userName) {
      wishList = ([
        <div key="sign-in-wl-1" className="nav-all drop-item">Nothing in your wish list!</div>
      ]);
    } else {
      wishList = ([
        <div key="sign-out-wl-1" className="nav-all drop-item">Sign in to see your wish list.</div>,
        <div key="sign-out-wl-2" className="nav-all drop-item"> <a href="#/sign_in" className="small-button"> Sign in!</a> </div>
      ]);
    }
    return (
      <div key="wish-list-nav-1" className="nav-drop">
        <div className="nav-all wish-list">
          <a href="#" className="nav-drop-link">
            <small>Your</small>
            <strong>Wish list</strong>
          </a>

          <div key="wl-dropdown-box-1" className="nav-drop-box">
            <div key="wl-dropdown-box-2" className="drop-box-inner right-box-inner">
              { wishList }
            </div>
          </div>
        </div>
      </div>
    );

  }

});
