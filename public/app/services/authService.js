angular.module('bcApp')
.service('authSvc', function($http) {

    this.login = function() {
        return $http.get('/auth')
    }

   
    
})