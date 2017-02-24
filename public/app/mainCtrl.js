angular.module('bcApp')
.controller('mainCtrl', function($scope, productSvc) {

    $scope.getProducts = function(){
        productSvc.getProducts().then(function(res) {
            console.log('prods: ', res);
            $scope.products = res;
        })
    }
    $scope.getProducts();
    
})