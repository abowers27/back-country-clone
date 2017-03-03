angular.module('bcApp')
.service('orderSvc', function($http) {

    this.addToCart = function(id, qty) {
    return $http({
      method: 'POST',
      url: '/api/order/add',
      data: {
        product_id: id,
        qty: qty
      }
    });
  };

  this.getOrder = function() {
    return $http({
      method: 'GET',
      url: '/api/order'
    });
  };

  this.deleteItem = function(id) {
    return $http({
      method: 'DELETE',
      url: '/api/order/delete/' + id
    });
  };

  this.checkout = function(id) {
    return $http.get('/api/checkout/' + id)
    .then(function(res) {
      return res.data;
    })
  }
    
})