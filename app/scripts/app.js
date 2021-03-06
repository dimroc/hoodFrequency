angular
  .module('hoodFrequencyApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'config'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:frequencyFile', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
