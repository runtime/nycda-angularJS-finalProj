'use strict';

/**
 * @ngdoc function
 * @name nycdaAngularJsFinalProjApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nycdaAngularJsFinalProjApp
 */
angular.module('nycdaAngularJsFinalProjApp')
  .controller('LoginCtrl', ['$scope', 'firebaseRef', 'firebaseAuth',
        function ($scope, firebaseRef, $firebaseAuth ) {


    // boilerplate
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     console.log($scope.awesomeThings);

     var fbRef = firebaseRef('/users');

     console.log('fbRef: ' + fbRef);

     $scope.auth = $firebaseAuth(fbRef);

     console.log('user: ' + $scope.auth.user);

//     var authClient = new FirebaseAuthClient(fbRef, function(error, user) {
//        if (error) {
//           // alert(error);
//            return;
//        }
//        if (user) {
//            // User is already logged in.
//           // doLogin(user);
//        } else {
//            // User is logged out.
//           // showLoginBox();
//        }
//     });



  }]);
