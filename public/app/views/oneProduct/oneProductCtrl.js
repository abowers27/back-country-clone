angular.module('bcApp')
.controller('oneProductCtrl', function($scope, $stateParams, productSvc) {
    
   $scope.getOneProduct = function() {
       var id = $stateParams.id;
       productSvc.getOneProduct(id).then(function(res) {
           $scope.oneProduct = res;
           console.log('theone', res)
       })
   }
   $scope.getOneProduct();
    
})