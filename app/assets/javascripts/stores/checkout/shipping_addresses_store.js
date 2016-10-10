(function (root) {

  var _shippingAddresses = [];

  function _resetShippingAddresses(newAddresses) {
    _shippingAddresses = newAddresses || [];
  }

  var CHANGE_EVENT = "change event";

  ShippingAddressStore = root.ShippingAddressStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _shippingAddresses.slice();
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {

      switch (payload.actionType) {
        case CheckoutConstants.ADDRESSES_RECEIVED:
          _resetShippingAddresses(payload.addresses);
          ShippingAddressStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
