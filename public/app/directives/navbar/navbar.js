angular.module('bcApp')
.directive('navbarDir', function() {

    return {
        restrict: 'EA',
        templateUrl: './app/directives/navbar/navbar.html',
        link: function(scope, elem, attrs) {
            var lastScrollTop = 70;
            $(window).scroll(function() {
            var st = $(this).scrollTop();
            
            if (st > lastScrollTop) {
                $('.upper').slideUp(300)
            } else {
                $('.upper').slideDown(200)
            }
            lastScrollTop = st;
        })

        $('.dim').hover(function() {
            $('.get-dim').fadeIn(200);

        }, function() {
            $('.get-dim').fadeOut(200);
        });
       
    }
    }

})