'use strict';

angular.module('bcApp', ['ui.router', 'angular-stripe']).config(function ($stateProvider, $urlRouterProvider, stripeProvider) {

    stripeProvider.setPublishableKey('pk_test_7MIM5JEOa6cRXaIzNXOPGr2f');

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
    }).state('shoppingCart', {
        url: '/shoppingCart',
        templateUrl: 'app/views/shoppingCart/shoppingCart-tmpl.html',
        controller: 'shoppingCartCtrl'
    }).state('searchProducts', {
        url: '/searchProducts/:search',
        templateUrl: 'app/views/searchProducts/searchProducts-tmpl.html',
        controller: 'searchProductsCtrl'
    }).state('checkout', {
        url: '/checkout/:order',
        templateUrl: 'app/views/checkout/checkout-tmpl.html',
        controller: 'checkoutCtrl'
    }).state('congrats', {
        url: '/congrats',
        templateUrl: 'app/views/congrats/congrats-tmpl.html',
        controller: 'congratsCtrl'
    });
});
'use strict';

angular.module('bcApp').controller('mainCtrl', function ($scope, productSvc, authSvc) {

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

				this.getCurrentUser = function () {
								return $http.get('/api/me').then(function (res) {
												return res;
								});
				};

				this.editUser = function (user) {
								return $http({
												method: 'PUT',
												url: "/api/user/current",
												data: user
								}).then(function (response) {
												return response;
								});
				};
});
'use strict';

angular.module('bcApp').service('orderSvc', function ($http) {

  this.addToCart = function (id, qty) {
    return $http({
      method: 'POST',
      url: '/api/order/add',
      data: {
        product_id: id,
        qty: qty
      }
    });
  };

  this.getOrder = function () {
    return $http({
      method: 'GET',
      url: '/api/order'
    });
  };

  this.deleteItem = function (id) {
    return $http({
      method: 'DELETE',
      url: '/api/order/delete/' + id
    });
  };

  this.checkout = function (id) {
    return $http.get('/api/checkout/' + id).then(function (res) {
      return res.data;
    });
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

    this.searchQuery = function (searchterm) {
        return $http.get('/api/search/' + searchterm).then(function (res) {
            return res.data;
        });
    };
});
'use strict';

angular.module('bcApp').directive('carouselDir', function () {

    return {
        restrict: 'EA',
        link: function link(scope, elem, attr) {
            // $('.carousel').slick({
            // infinite: true,
            // speed: 1000,
            // slidesToShow: 1,
            // autoplay: true,
            // autoplaySpeed: 4000,
            // centerMode: true,
            // variableWidth: true
            // });


            if ($(window).width() > 1300) {
                console.log('working');

                $('.carousel').slick({
                    centerMode: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    speed: 1000,
                    centerPadding: '20%'
                });
            }

            if (0 <= $(window).width() && $(window).width() <= 400) {
                console.log('working');

                $('.carousel').slick({
                    centerMode: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    speed: 1000,
                    centerPadding: '5%'
                });
            }

            if (401 <= $(window).width() && $(window).width() <= 1300) {
                console.log('working');

                $('.carousel').slick({
                    centerMode: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    speed: 1000,
                    centerPadding: '10%'
                });
            }
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

            $('.dim').hover(function () {
                $('.get-dim').fadeIn(200);
            }, function () {
                $('.get-dim').fadeOut(200);
            });
        }
    };
});
'use strict';

angular.module('bcApp').controller('brandsCtrl', function ($scope, productSvc) {});
'use strict';

angular.module('bcApp').controller('checkoutCtrl', function ($scope, $stateParams, stripe, $state, orderSvc, $http) {

    $scope.checkout = function () {
        var id = $stateParams.order;
        orderSvc.checkout(id).then(function (res) {
            console.log('chk', res);
            $scope.checkoutInfo = res;
            console.log('theres', res);
            $scope.total = 0;
            for (var i = 0; i < res.length; i++) {
                $scope.total += res[i].price * res[i].qty;
            }
            console.log('total', $scope.total);
        });
    };
    $scope.checkout();

    $scope.payment = {};

    $scope.charge = function () {
        return stripe.card.createToken($scope.payment.card).then(function (res) {
            console.log('token created for card ending in ', res.card.last4);
            var payment = angular.copy($scope.payment);
            payment.card = void 0;
            payment.token = res.id;

            return $http({
                method: 'POST',
                url: '/api/payment',
                data: {
                    amount: $scope.total,
                    payment: payment
                }
            });
        }).then(function (payment) {
            console.log('successfully submitted payment for $', payment);
            $state.go('congrats');
        }).catch(function (err) {
            if (err.type && /^Stripe/.test(err.type)) {
                console.log('Stripe error: ', err.message);
                alert(err.message);
            } else {
                console.log('Other error occurred, possibly with your API', err.message);
                alert(err.message);
            }
        });
    };
});
'use strict';

angular.module('bcApp').controller('congratsCtrl', function ($scope) {});
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

angular.module('bcApp').controller('oneProductCtrl', function ($scope, $stateParams, productSvc, orderSvc, $state) {
    $scope.qty = 1;

    $scope.getOneProduct = function () {
        var id = $stateParams.id;
        productSvc.getOneProduct(id).then(function (res) {
            $scope.oneProduct = res;
            console.log('theone', res);
        });
    };
    $scope.getOneProduct();

    $scope.addToCart = function (id, qty) {
        // console.log(id, qty);
        orderSvc.addToCart(id, qty).then(function (response) {
            console.log('order', response);
            $state.go("shoppingCart");
        });
    };
});
'use strict';

angular.module('bcApp').controller('searchProductsCtrl', function ($scope, $stateParams, productSvc, orderSvc, $state) {

    $scope.searchQuery = function () {
        var searchterm = $stateParams.search;
        console.log('search: ', $stateParams);
        productSvc.searchQuery(searchterm).then(function (res) {
            $scope.srch = $stateParams.search;
            $scope.searchItems = res;
            console.log('query', res);
        });
    };
    $scope.searchQuery();
});
'use strict';

angular.module('bcApp').controller('shoppingCartCtrl', function ($scope, orderSvc) {

    $scope.getTotal = function () {
        var total = 0;
        for (var i = 0; i < $scope.orderData.products.length; i++) {
            total += $scope.orderData.products[i].price * $scope.orderData.products[i].qty;
        }
        $scope.total = total;
    };

    $scope.getOrder = function () {
        orderSvc.getOrder().then(function (res) {
            console.log('order: ', res.data);
            $scope.orderData = res.data;
            $scope.getTotal();
        });
    };
    $scope.getOrder();

    $scope.deleteItem = function (id) {
        orderSvc.deleteItem(id).then(function (res) {
            $scope.getOrder();
        });
    };
});
//# sourceMappingURL=bundle.js.map
