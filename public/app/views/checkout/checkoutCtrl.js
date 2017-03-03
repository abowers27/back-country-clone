angular.module('bcApp')
.controller('checkoutCtrl', function($scope, $stateParams, stripe, $state, orderSvc, $http) {

    $scope.checkout = function() {
        var id = $stateParams.order;
        orderSvc.checkout(id).then(function(res) {
            console.log('chk', res);
            $scope.checkoutInfo = res;
            console.log('theres', res)
            $scope.total = 0;
            for (var i = 0; i < res.length; i++) {
                $scope.total += res[i].price * res[i].qty;
            }
            console.log('total', $scope.total)
        })
    }
    $scope.checkout();


    $scope.payment = {};

    $scope.charge = function() {
        return stripe.card.createToken($scope.payment.card)
        .then(function(res) {
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
            })
        })
        .then(function(payment) {
            console.log('successfully submitted payment for $', payment);
            $state.go('congrats')
        })
        .catch(function (err) {
       if (err.type && /^Stripe/.test(err.type)) {
         console.log('Stripe error: ', err.message);
         alert(err.message)
       }
       else {
         console.log('Other error occurred, possibly with your API', err.message);
         alert(err.message)
       }
     });
    }


    
})