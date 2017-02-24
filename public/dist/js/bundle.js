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
    }).state('oneBrand', {
        url: '/oneBrand/:name',
        templateUrl: 'app/views/oneBrand/oneBrand-tmpl.html',
        controller: 'oneBrandCtrl'
    }).state('oneProduct', {
        url: '/oneProduct/:id',
        templateUrl: 'app/views/oneProduct/oneProduct-tmpl.html',
        controller: 'oneProductCtrl'
    });
});
'use strict';

angular.module('bcApp').controller('mainCtrl', function ($scope, productSvc) {

    $scope.getProducts = function () {
        productSvc.getProducts().then(function (res) {
            console.log('prods: ', res);
            $scope.products = res;
        });
    };
    $scope.getProducts();
});
'use strict';

angular.module('bcApp').service('authSvc', function ($http) {

    this.login = function () {
        return $http.get('/auth');
    };
});
'use strict';

angular.module('bcApp').service('productSvc', function ($http) {

    this.getProducts = function () {
        return $http.get('/api/products').then(function (res) {
            return res.data;
        });
    };

    this.getBrand = function (name) {
        return $http.get('/api/brands/' + name).then(function (res) {
            return res.data;
        });
    };

    this.getOneProduct = function (id) {
        return $http.get('/api/products/' + id).then(function (res) {
            return res.data;
        });
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

angular.module('bcApp').directive('navbarDir', function () {

    return {
        restrict: 'EA',
        templateUrl: './app/directives/navbar/navbar.html',
        link: function link(scope, elem, attrs) {
            var lastScrollTop = 70;
            $(window).scroll(function () {
                var st = $(this).scrollTop();

                if (st > lastScrollTop) {
                    $('.upper').slideUp(300);
                } else {
                    $('.upper').slideDown(200);
                }
                lastScrollTop = st;
            });
        }
    };
});
'use strict';

angular.module('bcApp').controller('brandsCtrl', function ($scope, productSvc) {});
'use strict';

angular.module('bcApp').controller('homeCtrl', function ($scope) {});
'use strict';

angular.module('bcApp').controller('oneBrandCtrl', function ($scope, $stateParams, productSvc) {

    $scope.getBrand = function () {
        var name = $stateParams.name;
        productSvc.getBrand(name).then(function (res) {

            $scope.brand = res;
        });
    };
    $scope.getBrand();
});
'use strict';

angular.module('bcApp').controller('oneProductCtrl', function ($scope, $stateParams, productSvc) {

    $scope.getOneProduct = function () {
        var id = $stateParams.id;
        productSvc.getOneProduct(id).then(function (res) {
            $scope.oneProduct = res;
            console.log('theone', res);
        });
    };
    $scope.getOneProduct();
});
'use strict';

angular.module('bcApp').controller('shoppingCartCtrl', function ($scope, mainSvc) {});
//# sourceMappingURL=bundle.js.map
