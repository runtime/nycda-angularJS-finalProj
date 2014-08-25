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

     var _isNewUser = true;
     $scope.err = "";
     $scope.user = {};
     console.log("login awesomethings: " + $scope.awesomeThings);
     console.log("login - casestudies: " + $scope.theCaseStudies);
     //console.log("login - casestudies.securitylevels: " + $scope.theCaseStudies.securitylevels);

     //COMPARE SECURITY LEVELS TO USER EMAIL TO SET $SCOPE CURRSECURITY LEVEL
     $scope.currsecuritylevel = 0;


    var fbRef = firebaseRef('/users');

    //$scope.fbRef = fbRef;



    // FBSL Example on site
    var authClient = new FirebaseSimpleLogin(fbRef, function(error, user) {
        if (error) {
            // an error occurred while attempting login
            console.log(error);
            $scope.err = error;
        } else if (user) {
            if (_isNewUser) {
                console.log("new user: " + user.email + "/ " + user.id);
                // set and save user security level
                console.log("login $scope.user: " + $scope.user);
             fbRef.child('users').child(user.uid).set({
                 userEmail: user.email,
                 provider: user.provider,
                 userID: user.id

             });


            }
            // user authenticated with Firebase
            console.log('user.uid: ' + user.uid + ', user.provider: ' + user.provider);
            // set curresecuritylevel here
            $scope.$apply(function () {
                $location.path('/main');
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
      console.log('login: $scope.user' + $scope.user);
      authClient.login('password', $scope.user);
  };

  $scope.logout = function() {
     // console.log("logout");
      authClient.logout();
      $location.path('/login');
  }





  }]);
