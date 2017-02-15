'use strict';

angular.module('bcApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home/home-tmpl.html',
        controller: 'homeCtrl'
    });
});
'use strict';

angular.module('bcApp').controller('mainCtrl', function ($scope, mainSvc) {});
'use strict';

angular.module('bcApp').service('mainSvc', function ($http) {});
'use strict';

angular.module('bcApp').directive('navbarDir', function () {

    return {
        restrict: 'EA',
        templateUrl: './directives/navbar/navbar.html'
    };
});
'use strict';

angular.module('bcApp').controller('homeCtrl', function ($scope) {});
//# sourceMappingURL=bundle.js.map
