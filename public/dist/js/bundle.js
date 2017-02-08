'use strict';

angular.module('bcApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {});
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
"use strict";
//# sourceMappingURL=bundle.js.map
