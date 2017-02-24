angular.module('bcApp')
.service('productSvc', function($http) {

    this.getProducts = function() {
        return $http.get('/api/products').then(function(res) {
            return res.data;
        })
    };

    this.getBrand = function(name) {
        return $http.get('/api/brands/' + name)
        .then(function(res) {
            return res.data;
        })
    }

    this.getOneProduct = function(id) {
        return $http.get('/api/products/' + id)
        .then(function(res) {
            return res.data;
        })
    }

   
    
})