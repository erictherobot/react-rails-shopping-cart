(function (root) {
  var _product, ShowStore, CHANGE_EVENT;

  CHANGE_EVENT = "change event";

  _product = {};

  function _resetProduct(newProduct) {
    if (typeof newProduct === undefined) {
      newProduct = {};
    }
    _product = newProduct;
    return _product;
  }

  ShowStore = root.ShowStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _product;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {

      switch (payload.actionType) {
        case ProductConstants.SHOW_RECEIVED:
          _resetProduct(payload.product);
          ShowStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
