angular.module("sn.app2", [
]).config(['$httpProvider', function ($httpProvider) {
    delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);


