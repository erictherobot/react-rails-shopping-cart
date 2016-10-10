var UserActions = {

  receiveCurrentUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECEIVED,
      user: user
    });
  },

  setAnonymousUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ANONYMOUS_USER_RECEIVED
    });
  }

};
