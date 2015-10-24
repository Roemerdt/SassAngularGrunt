var myApp = angular.module('ngclient', ['ngRoute']);
 
myApp.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: './views/about.html',
      controller: 'AboutCtrl'
    }).when('/', {
      templateUrl: './views/home.html',
      controller: 'HomeCtrl'
    }).otherwise({
      redirectTo: '/'
    });
});