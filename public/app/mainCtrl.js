angular.module('bcApp')
.controller('mainCtrl', function($scope, mainSvc) {

    $scope.getProducts = function(){
        mainSvc.getProducts().then(function(res) {
            console.log('prods: ', res);
            $scope.products = res;
        })
    }
    $scope.getProducts();
    
})