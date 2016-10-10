(function (root) {
  var _features, FeaturedStore, CHANGE_EVENT;

  CHANGE_EVENT = "change event";

  _features = [];

  function _resetProducts(newProducts) {
    _features = newProducts;
  }

  FeaturedStore = root.FeaturedStore = $.extend({}, EventEmitter.prototype, {


    allFeatures: function () {
      return _features.slice();
    },

    byFeature: function (feature) {
      var target = _features.filter(function (dept) {
        return dept.id === feature.id;
      });
      return target[0].products.slice();
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {

      switch (payload.actionType) {
        case ProductConstants.FEATURED_PRODUCTS_RECEIVED:
          _resetProducts(payload.products);
          FeaturedStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
