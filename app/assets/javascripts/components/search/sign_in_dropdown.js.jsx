var SignInDropdown = React.createClass({

  ComponentWillReceiveProps: function (nextProps) {

  },

  signOut: function () {
    UserApiUtil.signOut(function () {
      this.history.pushState(null, this.props.loc);
    }.bind(this));
  },

  render: function () {
    var signInGreeting, signInNav, signDropdown;
    if (this.props.userName) {
      signInGreeting = this.props.userName.split(" ")[0];
      signInNav = "#/";
      signDropdown = ([
        <div key="sign-in-1" className="nav-all drop-item"><button key="small-button-1" className="small-button" onClick={this.signOut}>Sign out!</button></div>
      ]);
    } else {
      signInGreeting = "Sign in to";
      signInNav = "#/sign_in?redirect=" + this.props.loc.slice(1);
      signDropdown = ([
          <div key="sign-out-1" className="nav-all drop-item"><a key="small-button-3" href={signInNav} className="small-button">Sign in!</a> </div>,
          <div key="sign-out-2" className="nav-all drop-item">Don't have an account?</div>,
          <div key="sign-out-3" className="nav-all drop-item"> <a key="small-button-4" href={signInNav} className="small-button">Sign up!</a> </div>,
          <div key="sign-out-4" className="nav-all drop-item">Want to do neither? Sign in as a</div>,
          <div key="sign-out-5" className="nav-all drop-item"> <a key="small-button-4" href="#/sign_in?demoUser=true" className="small-button">Demo User</a> </div>
      ]);
    }


    return (
      <div key="sign-in-nav-1" className="nav-drop">
        <div className="nav-all sign-in-link">
          <a key="sign-in-parent" href={signInNav} className="nav-drop-link">
            <small>{signInGreeting}</small>
            <strong>Your Account</strong>
          </a>
          <div key="sign-in-dropdown-1" className="nav-drop-box">
            <div key="sign-in-dropdown-2" className="drop-box-inner .sign-in-db">
              {signDropdown}
            </div>
          </div>
        </div>
      </div>
    );

  }

});
