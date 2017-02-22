angular.module('bcApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'app/views/home/home-tmpl.html',
        controller: 'homeCtrl'
    })
    .state('allBrands', {
        url: '/brands',
        templateUrl: 'app/views/brands/brands-tmpl.html',
        controller: 'brandsCtrl'
    })
    .state('oneBrand', {
        url: '/oneBrand/:name',
        templateUrl: 'app/views/oneBrand/oneBrand-tmpl.html',
        controller: 'oneBrandCtrl'
    })
    
})