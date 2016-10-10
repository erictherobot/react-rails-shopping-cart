(function () {


  $(document).ready(function () {

    var Router, Route, IndexRoute, home, routes, cookie;
    Router = ReactRouter.Router;
    Route = ReactRouter.Route;
    IndexRoute = ReactRouter.IndexRoute;
    routes = (
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="products/:productId" component={ShowProduct} />
          <Route path="sign_in" component={SessionForm} />
          <Route path="sign_up" component={UserForm} />
          <Route path="cart" component={CartIndex} />
          <Route path="checkout" component={Checkout} />
        </Route>
      </Router>
    );

    home = document.getElementById('content');
    React.render(routes, home);
  });

})();
