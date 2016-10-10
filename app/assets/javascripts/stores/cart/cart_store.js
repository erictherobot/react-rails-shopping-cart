(function (root) {
  var _products, CartStore, CHANGE_EVENT;

  CHANGE_EVENT = "change event";

  _products = [];

  function _resetCartProducts(newProducts) {
    _products = newProducts || [];
  }

  CartStore = root.CartStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _products.slice();
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {

      switch (payload.actionType) {
        case CartConstants.CART_RECEIVED:
          _resetCartProducts(payload.products);
          CartStore.emit(CHANGE_EVENT);

          break;
        case CartConstants.PRODUCT_ADDED:
          _addProduct(payload.product);
          CartStore.emit(CHANGE_EVENT);
          break;

      }
    })

  });

})(this);
