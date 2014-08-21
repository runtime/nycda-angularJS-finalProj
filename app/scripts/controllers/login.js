'use strict';

/**
 * @ngdoc function
 * @name nycdaAngularJsFinalProjApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nycdaAngularJsFinalProjApp
 */
angular.module('nycdaAngularJsFinalProjApp')
  .controller('LoginCtrl', ['$scope', 'firebaseRef', '$firebaseSimpleLogin', '$location',
        function ($scope, firebaseRef, $firebaseSimpleLogin, $location ) {


    // boilerplate
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.err = "";
     $scope.user = {};
     //console.log($scope.awesomeThings);

    var fbRef = firebaseRef('/users');


    // FBSL Example on site
    var authClient = new FirebaseSimpleLogin(fbRef, function(error, user) {
        if (error) {
            // an error occurred while attempting login
            console.log(error);
            $scope.err = error;
        } else if (user) {
            // user authenticated with Firebase
            console.log('user.uid: ' + user.uid + ', user.provider: ' + user.provider);
            $scope.$apply(function () {
                $location.path('/');
            });
        } else {
            // user is logged out
        }
    });


    var authRef = new Firebase("https://case-studies.firebaseio.com/.info/authenticated");
    authRef.on("value", function(snap) {
        if (snap.val() === true) {
//            alert("authenticated");
        } else {
//            alert("not authenticated");
        }
    });




  $scope.submit = function (password) {
      console.log('submit');
      authClient.login('password', $scope.user);
  };

  $scope.logout = function() {
      console.log("logout");
      authClient.logout();
      $location.path('/login');
      //todo we need to send the user back to the main page
  }





  }]);
