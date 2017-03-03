angular.module('bcApp')
.controller('oneProductCtrl', function($scope, $stateParams, productSvc, orderSvc, $state) {
    $scope.qty = 1;

   $scope.getOneProduct = function() {
       var id = $stateParams.id;
       productSvc.getOneProduct(id).then(function(res) {
           $scope.oneProduct = res;
           console.log('theone', res)
       })
   }
   $scope.getOneProduct();

   $scope.addToCart = function(id, qty) {
    // console.log(id, qty);
    orderSvc.addToCart(id, qty).then(function(response) {
      console.log('order', response);
      $state.go("shoppingCart")
    });
  };
    
})