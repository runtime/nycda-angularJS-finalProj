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


     //authClient.login('1234'); // this could be "facebook", "twitter", "password", etc...


    // var auth = initAuth(fbRef);

     // FBSL example in details
//   function initAuth(fbRef) {
//            return new FirebaseSimpleLogin(fbRef, function (err, user) {
//                // if there is an error then display it
//                if (err) {
//                    displayError(err);
//                } else if (user) {
//                    // we only want to log people in through the email/password provider
//                    if( user.provider !== 'password' ) {
//                        auth.logout();
//                    }
//                    else {
//                        // logged in!
//                        uid = user.uid;
//                        // save the user to our firebase
//                        fbRef.child(user.uid).set({
//                            id: user.id,
//                            uid: user.uid,
//                            email: user.email
//                        });
//                        // switch over the the user info screen
//                        switchView('userInfo');
//                    }
//                } else {
//                    // logged out!
//                    console.log('not logged in');
//                }
//            });
//        }

//    function displayError(err) {
//
//    }
//
//
//    function switchView(view) {
//
//    }


  $scope.submit = function (password) {
      console.log('submit');
      authClient.login('password', $scope.user);
  };



  }]);
