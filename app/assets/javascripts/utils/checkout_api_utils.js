var CheckoutApiUtils = {

  fetchShippingAddresses: function () {
    $.ajax({
      url: "api/shipping_addresses",
      type: "get",
      dataType: "json",
      success: function (data) {
        CheckoutActions.receiveShippingAddresses(data);
      }
    });
  },

  createFinishedPayment: function(token, amount, success) {
    $.ajax({
      url: "api/checkout",
      type: "post",
      dataType: "json",
      data: { token: token, amount: amount },
      success: function (data) {
        CartActions.receiveCart(data.cart);
        success && success();
      }
    });
  }

};
