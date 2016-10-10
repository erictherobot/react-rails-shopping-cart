var ProductActions = {

  receiveProducts: function (data) {
    var actionType = ProductConstants.PRODUCTS_RECEIVED;
    AppDispatcher.dispatch({
      actionType: actionType,
      products: data
    });
  },

  receiveFeaturedProducts: function (data) {
    var actionType = ProductConstants.FEATURED_PRODUCTS_RECEIVED;
    AppDispatcher.dispatch({
      actionType: actionType,
      products: data
    });
  }

};
