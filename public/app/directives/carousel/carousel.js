angular.module('bcApp')
.directive('carouselDir', function() {

    return {
        restrict: 'EA',
        link: function(scope, elem, attr) {
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
    }

})