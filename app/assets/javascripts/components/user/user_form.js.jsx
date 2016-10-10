var UserForm = React.createClass({

  mixins: [ReactRouter.History],

  onSubmit: function (e) {
    e.preventDefault();
    var user = $(e.currentTarget).serializeJSON();

    var path = this.props.location.pathname;
    if (path === "/sign_in" || path === "/sign_up") {
      path = "/";
    }

    UserApiUtil.createUser({ user }, function () {
      CartApiUtils.updateRemoteCartItems(CartStore.all());
      reactCookie.remove('cookieCart');
      this.history.pushState(null, path);
    }.bind(this));
  },

  render: function () {

    return (
      <fieldset className="f-box-inner">

        <form className="sign-up rt-form" onSubmit={this.onSubmit}>

          <h2 className="sign-header">Sign up</h2>
          <label id="sign-up-full-name" className="full-name-label form-label">
            Name
          </label>
          <input className="full-name-input form-input" type="text" name="full_name" tabIndex="1" placeholder=""></input>

          <label id="sign-up-email" className="email-label form-label">
            Email
          </label>
          <input className="email-input form-input" type="email" name="email" tabIndex="2" placeholder=""></input>

          <label id="sign-up-email" className="email-label form-label">
            Email Confirmation
          </label>
          <input className="email-input form-input" type="email" name="email_confirmation" tabIndex="3"></input>

          <label id="sign-up-password" className="password-label form-label">
            Password
          </label>
          <input className="password-input form-input" type="password" name="password" tabIndex="4" placeholder="at least 8 characters"></input>

          <label id="sign-up-password" className="password-label form-label">
            Password Confirmation
          </label>
          <input className="password-input form-input" type="password" name="password_confirmation" tabIndex="5"></input>

          <button className="form-button">Sign Up</button>

        </form>
        <div className="divider-section">

          <p>
            Or </p><a href="#/sign_in" className="normal-link">Sign in</a>
        </div>
        <div className="divider-section">
          <a href="#/sign_in?demoUser=true"className="form-button">DEMO USER</a>
        </div>

      </fieldset>
    );

  }

});
