angular.module('bcApp')
.controller('oneBrandCtrl', function($scope, $stateParams, productSvc) {
    
    $scope.getBrand = function() {
        var name = $stateParams.name;
        productSvc.getBrand(name).then(function(res) {
        
            $scope.brand = res;
        })
    }
    $scope.getBrand();

    
})