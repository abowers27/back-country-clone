angular.module('bcApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'views/home/home-tmpl.html',
        controller: 'homeCtrl'
    })
    
})