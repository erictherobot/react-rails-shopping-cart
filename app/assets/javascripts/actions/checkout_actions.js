var CheckoutActions = {

  receiveShippingAddresses: function (addresses) {
    AppDispatcher.dispatch({
      actionType: CheckoutConstants.ADDRESSES_RECEIVED,
      addresses: addresses
    });
  }

};
