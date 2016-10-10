var DepartmentDropdown = React.createClass({

  ComponentWillReceiveProps: function (nextProps) {

  },

  render: function () {
    signInGreeting = this.props.userName.split(" ")[0];
    signInNav = "#/";
    signDropdown = ([
      <li key="sign-in-1" className="nav-sign-out drop-item"><button key="small-button-1" className="small-button" onClick={this.signOut}>Sign out!</button></li>
    ]);


    signInGreeting = "Sign in to";
    signInNav = "#/sign_in";
    signDropdown = ([
        <li key="sign-out-1" className="nav-sign-in drop-item"><a key="small-button-3" href="#/sign_in" className="small-button"> Sign in!</a> </li>,
        <li key="sign-out-2" className="nav-sign-tag drop-item">Don't have an account?</li>,
        <li key="sign-out-3" className="nav-sign-up drop-item"> <a key="small-button-4" href="#/sign_up" className="small-button"> Sign up!</a> </li>,
    ]);


    return (
      <div></div>
    );

  }

});
