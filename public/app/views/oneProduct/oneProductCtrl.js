angular.module('bcApp')
.controller('oneProductCtrl', function($scope, $stateParams, mainSvc) {
    
   $scope.getOneProduct = function() {
       var id = $stateParams.id;
       mainSvc.getOneProduct(id).then(function(res) {
           $scope.oneProduct = res;
           console.log('theone', res)
       })
   }
   $scope.getOneProduct();
    
})