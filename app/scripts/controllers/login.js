'use strict';

/**
 * @ngdoc function
 * @name nycdaAngularJsFinalProjApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nycdaAngularJsFinalProjApp
 */
angular.module('nycdaAngularJsFinalProjApp')
  .controller('LoginCtrl', ['$scope', 'firebaseRef',
        function ($scope, firebaseRef ) {


            //$firebaseSimpleLogin

    // boilerplate
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     var fbRef = firebaseRef('/users');

     var authClient = new FirebaseAuthClient(fbRef, function(error, user) {
        if (error) {
            alert(error);
            return;
        }
        if (user) {
            // User is already logged in.
           // doLogin(user);
        } else {
            // User is logged out.
           // showLoginBox();
        }
     });



  }]);
