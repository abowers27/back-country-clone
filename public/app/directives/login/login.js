angular.module('bcApp')
.directive('loginDir', function() {

    return {
        restrict: 'EA',
        templateUrl: './app/directives/login/login.html',
        link: function(scope, elem, attr) {
           
                $('.account')
                .click(function() {
                    $('.login').css('display', 'initial');
                    $('.login').dimBackground();
                })
                $('.exit')
                .click(function() {
                    $('.login').undim();        // Note: We could also use `$.undim();`
                })
                $('.createacct')
                .click(function() {
                    $('.login').undim();
                });
           
        }
    }

})