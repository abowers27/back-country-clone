angular.module('bcApp')
.directive('createAccountDir', function() {

    return {
        restrict: 'EA',
        templateUrl: './app/directives/create-account/create-account.html',
        link: function(scope, elem, attr) {

            $('.createacct')
            .click(function() {
                $('.create-user').css('display', 'initial');
                $('.create-user').dimBackground();
                $('.login').css('display', 'none');
            })
            $('.exit')
            .click(function() {
                $('.create-user').undim();
                $('.create-user').css('display', 'none');
                $('.login').css('display', 'none');        // Note: We could also use `$.undim();`
            })
            $('.signinpage')
            .click(function() {
                $('.create-user').undim();
                $('.create-user').css('display', 'none');
                $('.login').css('display', 'initial');
                $('.login').dimBackground();
            })
            
        }
    }

})