'use strict';

/**
 * @ngdoc function
 * @name nycdaAngularJsFinalProjApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nycdaAngularJsFinalProjApp
 */
//angular.module('nycdaAngularJsFinalProjApp')
//    .controller('MainCtrl', ['$scope', 'syncData',
//        function ($scope, syncData) {
//
//            $scope.theCaseStudies = syncData('/casestudies').$asObject();
//            $scope.studies = $scope.theCaseStudies.studies;
//            console.log("MainCtrl $scope.studies: " + $scope.studies);
//
//            console.log("MainCtrl $scope.theCaseStudies" +  $scope.theCaseStudies );
//
//            $scope.securitylevels = $scope.theCaseStudies.securitylevels;
//            console.log("MainCtrl $scope.securitylevels: " + $scope.securitylevels);
//
//            console.log("MainCtrl $scope.user: " + $scope.user);
//            console.log("MainCtrl $scope.awesomeThings " + $scope.awesomeThings);
//
//            $scope.securitylevel = 3;
//
//        }]);


angular.module('nycdaAngularJsFinalProjApp')
    .controller('MainCtrl', ['$scope', 'syncData', 'firebaseRef', '$firebaseSimpleLogin', '$location',
        function ($scope, syncData, firebaseRef, $firebaseSimpleLogin, $location) {

            $scope.theCaseStudies = syncData('/casestudies').$asObject();

           // $scope.studies = $scope.theCaseStudies.studies;
          //  console.log("$scope.studies: " + $scope.studies);

            console.log("$scope.theCaseStudies" +  $scope.theCaseStudies );

          //  $scope.securitylevels = $scope.theCaseStudies.securitylevels;
            console.log("securitylevels: " + $scope.theCaseStudies);

           // console.log("MainCtrl $scope.user: " + $scope.user);
           // console.log("MainCtrl $scope.awesomeThings " + $scope.awesomeThings);

            $scope.securitylevel = 3;
            $scope.loggedIn = false;


            //////////////////////////////////////

            var _isNewUser = true;
            $scope.err = "";
            $scope.user = {};


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
                        console.log("$scope.user: " + $scope.user);
                        fbRef.child('users').child(user.uid).set({
                            userEmail: user.email,
                            provider: user.provider,
                            userID: user.id

                        });

                        $scope.loggedIn = true;


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
                console.log('$scope.user' + $scope.user);
                authClient.login('password', $scope.user);
            };

            $scope.logout = function() {
                // console.log("logout");
                authClient.logout();
                $location.path('/');
            }




        }]);

