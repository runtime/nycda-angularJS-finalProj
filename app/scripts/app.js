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
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
//      .when('/login', {
//        templateUrl: 'views/login.html',
//        controller: 'LoginCtrl'
//      })
      .otherwise({
        redirectTo: '/'
      });
  });


// config means run this before aything else
// run means run secondly think of this as a way to initialize something
// before any controllers are called.