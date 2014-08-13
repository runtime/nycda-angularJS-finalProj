'use strict';

/**
 * @ngdoc overview
 * @name nycdaAngularJsFinalProjApp
 * @description
 * # nycdaAngularJsFinalProjApp
 *
 * Main module of the application.
 */
angular
  .module('nycdaAngularJsFinalProjApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularfire.firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
