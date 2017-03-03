angular.module('bcApp')
.directive('carouselDir', function() {

    return {
        restrict: 'EA',
        link: function(scope, elem, attr) {
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
                   console.log('working')
                

                   $('.carousel').slick({
                    centerMode:true,
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
                   console.log('working')
                

                   $('.carousel').slick({
                    centerMode:true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true, 
                    autoplaySpeed: 4000,
                    speed: 1000,
                    centerPadding: '5%'
                    });
               }

               if (401 <= $(window).width() && $(window).width()  <= 1300) {
                   console.log('working')
                

                   $('.carousel').slick({
                    centerMode:true,
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
    }

})