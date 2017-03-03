angular.module('bcApp')
.service('authSvc', function($http) {

   this.getCurrentUser = function() {
       return $http.get('/api/me')
       .then(function(res) {
           return res;
       })
   };

   this.editUser = function(user) {
			return $http({
					method: 'PUT',
					url: "/api/user/current",
					data: user
				})
				.then(function(response) {
					return response;
				});
		};
    
})