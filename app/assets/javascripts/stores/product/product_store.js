(function (root) {
  var _products, ProductStore, CHANGE_EVENT;

  CHANGE_EVENT = "change event";

  _products = [];

  function _resetProducts(newProducts) {
    _products = newProducts || [];
  }

  ProductStore = root.ProductStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      _products.slice();
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {

      switch (payload.actionType) {
        case ProductConstants.PRODUCTS_RECEIVED:
          _resetProducts(payload.products);
          ProductStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
