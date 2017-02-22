angular.module('bcApp')
.controller('oneBrandCtrl', function($scope, $stateParams, mainSvc) {
    
    $scope.getBrand = function() {
        var name = $stateParams.name;
        mainSvc.getBrand(name).then(function(res) {
        
            console.log('res: ', res);
            $scope.brand = res;
        })
    }
    $scope.getBrand();

    
})