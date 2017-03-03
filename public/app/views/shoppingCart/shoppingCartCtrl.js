angular.module('bcApp')
.controller('shoppingCartCtrl', function($scope, orderSvc) {

    $scope.getTotal = function() {
    var total = 0;
    for (var i = 0; i < $scope.orderData.products.length; i++) {
      total += $scope.orderData.products[i].price * $scope.orderData.products[i].qty
    }
    $scope.total = total;
  }

    $scope.getOrder = function() {
        orderSvc.getOrder().then(function(res) {
            console.log('order: ', res.data)
            $scope.orderData = res.data;
            $scope.getTotal();
        })
    }
    $scope.getOrder();

    $scope.deleteItem = function(id) {
        orderSvc.deleteItem(id).then(function(res) {
            $scope.getOrder();
        });
    };
    
})