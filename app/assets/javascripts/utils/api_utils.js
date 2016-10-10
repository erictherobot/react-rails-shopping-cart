var ApiUtil = {

  fetchFeaturedProducts: function () {

    $.ajax({
      url: "/api/products",
      type: "get",
      data: { home: true },
      success: function (data) {
        ProductActions.receiveFeaturedProducts(data);
      }
    });
  },

  fetchProducts: function () {
    $.ajax({
      url:"/api/products",
      type: "get",
      success: function (data) {
        ProductActions.receiveProducts(data);
      }
    });
  },

  fetchSingleProduct: function (productId) {
    $.ajax({
      url:"/api/products/" + productId,
      type: "get",
      success: function (data) {
        ShowActions.receiveProduct(data);
      }
    });
  }
};
