angular.module('bcApp', ['ui.router', 'angular-stripe'])
.config(function($stateProvider, $urlRouterProvider, stripeProvider) {

    stripeProvider.setPublishableKey('pk_test_7MIM5JEOa6cRXaIzNXOPGr2f');

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
    .state('oneProduct', {
        url: '/oneProduct/:id',
        templateUrl: 'app/views/oneProduct/oneProduct-tmpl.html',
        controller: 'oneProductCtrl'
    })
    .state('shoppingCart', {
        url: '/shoppingCart',
        templateUrl: 'app/views/shoppingCart/shoppingCart-tmpl.html',
        controller: 'shoppingCartCtrl'
    })
    .state('searchProducts', {
        url: '/searchProducts/:search',
        templateUrl: 'app/views/searchProducts/searchProducts-tmpl.html',
        controller: 'searchProductsCtrl'
    })
    .state('checkout', {
        url: '/checkout/:order',
        templateUrl: 'app/views/checkout/checkout-tmpl.html',
        controller: 'checkoutCtrl'
    })
    .state('congrats', {
        url: '/congrats',
        templateUrl: 'app/views/congrats/congrats-tmpl.html',
        controller: 'congratsCtrl'
    })
    
})