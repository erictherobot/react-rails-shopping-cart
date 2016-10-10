var UserApiUtil = {

  createUser: function (attrs, success) {
    $.ajax({
      url: "api/users",
      type: "post",
      dataType: "json",
      data: attrs,
      success: function (user) {
        UserActions.receiveCurrentUser(user);
        success && success();
      }
    });
  },

  signIn: function (credentials, success) {
    $.ajax({
      url: "api/session",
      type: "post",
      dataType: "json",
      data: credentials,
      success: function (data) {
        UserActions.receiveCurrentUser(data.user);
        success && success(data.cart);
      }
    });
  },

  signOut: function (success) {
    $.ajax({
      url: "api/session",
      type: "delete",
      dataType: "json",
      success: function () {
        UserActions.receiveCurrentUser({});
        CartActions.receiveCart([]);
        success && success;
      }
    });
  },

  fetchCurrentUser: function (callback) {
    $.ajax({
      url: "api/session",
      type: "get",
      dataType: "json",
      success: function (data) {
        UserActions.receiveCurrentUser(data.user);
        if (data.user.id) {
          CartActions.receiveCart(data.cart);
        } else {
          CartApiUtils.fetchCookieCart();
          callback && callback();
        }
      },
    });
  }



};
