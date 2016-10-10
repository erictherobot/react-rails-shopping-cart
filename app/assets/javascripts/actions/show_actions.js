var ShowActions = {

  receiveProduct: function (product) {
    var actionType = ProductConstants.SHOW_RECEIVED;
    AppDispatcher.dispatch({
      actionType: actionType,
      product: product
    });
  }

};
