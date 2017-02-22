'use strict';

angular.module('bcApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/views/home/home-tmpl.html',
        controller: 'homeCtrl'
    }).state('allBrands', {
        url: '/brands',
        templateUrl: 'app/views/brands/brands-tmpl.html',
        controller: 'brandsCtrl'
    });
});
'use strict';

angular.module('bcApp').controller('mainCtrl', function ($scope, mainSvc) {});
'use strict';

angular.module('bcApp').service('mainSvc', function ($http) {});
'use strict';

angular.module('bcApp').directive('createAccountDir', function () {

    return {
        restrict: 'EA',
        templateUrl: './app/directives/create-account/create-account.html',
        link: function link(scope, elem, attr) {

            $('.createacct').click(function () {
                $('.create-user').css('display', 'initial');
                $('.create-user').dimBackground();
                $('.login').css('display', 'none');
            });
            $('.exit').click(function () {
                $('.create-user').undim();
                $('.create-user').css('display', 'none');
                $('.login').css('display', 'none'); // Note: We could also use `$.undim();`
            });
            $('.signinpage').click(function () {
                $('.create-user').undim();
                $('.create-user').css('display', 'none');
                $('.login').css('display', 'initial');
                $('.login').dimBackground();
            });
        }
    };
});
'use strict';

angular.module('bcApp').directive('carouselDir', function () {

    return {
        restrict: 'EA',
        link: function link(scope, elem, attr) {
            $('.carousel').slick({
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                centerMode: true,
                variableWidth: true
            });
        }
    };
});
'use strict';

angular.module('bcApp').directive('loginDir', function () {

    return {
        restrict: 'EA',
        templateUrl: './app/directives/login/login.html',
        link: function link(scope, elem, attr) {

            $('.account').click(function () {
                $('.login').css('display', 'initial');
                $('.login').dimBackground();
            });
            $('.exit').click(function () {
                $('.login').undim(); // Note: We could also use `$.undim();`
            });
            $('.createacct').click(function () {
                $('.login').undim();
            });
        }
    };
});
'use strict';

angular.module('bcApp').directive('navbarDir', function () {

    return {
        restrict: 'EA',
        templateUrl: './app/directives/navbar/navbar.html'
    };
});
'use strict';

angular.module('bcApp').controller('brandsCtrl', function ($scope) {});
'use strict';

angular.module('bcApp').controller('homeCtrl', function ($scope) {});
//# sourceMappingURL=bundle.js.map
