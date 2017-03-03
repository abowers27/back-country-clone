angular.module('bcApp')
.controller('searchProductsCtrl', function($scope, $stateParams, productSvc, orderSvc, $state) {
    
    $scope.searchQuery = function() {
        var searchterm = $stateParams.search;
        console.log('search: ', $stateParams)
        productSvc.searchQuery(searchterm).then(function(res) {
            $scope.srch = $stateParams.search;
            $scope.searchItems = res;
            console.log('query', res)
        })
    }
    $scope.searchQuery();
    
})