(function (root) {
  CHANGE_EVENT = "change event";

  var _user = {};

  function _resetUser(newUser) {
    _user = newUser;
  }

  var CurrentUserStore = root.CurrentUserStore = $.extend( {}, EventEmitter.prototype, {

    currentUser: function () {
      return $.extend({}, _user);
    },

    signedIn: function () {
      if (typeof _user.id === undefined) {
        return false;
      }

      return true;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case UserConstants.CURRENT_USER_RECEIVED:
          _resetUser(payload.user);
          CurrentUserStore.emit(CHANGE_EVENT);
          break;
        case UserConstants.ANONYMOUS_USER_RECEIVED:
          _resetUser({});
          CurrentUserStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
