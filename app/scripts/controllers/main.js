'use strict';

/**
 * @ngdoc function
 * @name nycdaAngularJsFinalProjApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nycdaAngularJsFinalProjApp
 */


angular.module('nycdaAngularJsFinalProjApp')
    .controller('MainCtrl', ['$scope', '$rootScope', 'syncData', 'firebaseRef', '$firebaseSimpleLogin', '$location',
        function ($scope, $rootScope, syncData, firebaseRef, $firebaseSimpleLogin, $location) {

            $scope.theCaseStudies = syncData('/casestudies').$asObject();

            // assume we are loading asyncronous so we need to wait for it to be loaded
            // before we try to do something
            $scope.theCaseStudies.$loaded().then(function (caseStudies) {
                //console.log(caseStudies.securitylevels);
                //Do whatever you need to here
                $scope.securitylevels = caseStudies.securitylevels;

            });


            $scope.securitylevel = 0;
            $rootScope.loggedIn = false;


            //////////////////////////////////////

            var _isNewUser = true;
            $scope.err = "";
            $scope.user = {};


            var fbRef = firebaseRef('/users');


            // FBSL

            var authClient = new FirebaseSimpleLogin(fbRef, function(error, user) {
                if (error) {
                    // an error occurred while attempting login
                    console.log(error);
                    $scope.err = error;
                } else if (user) {
                    if (_isNewUser) {
                        console.log("new user: " + user.email + "/ " + user.id);
                        // set and save user security level
                        // use rootscope
                        $rootScope.user = user;
                        console.log("$scope.user: " + $scope.user);
                        fbRef.child('users').child(user.uid).set({
                            userEmail: user.email,
                            provider: user.provider,
                            userID: user.id

                        });


                        var len = $scope.securitylevels.length;

                        for (var i=0; i<len; i++) {
                            if (user.email == $scope.securitylevels[i].user) {
                                $scope.securitylevel = $scope.securitylevels[i].securityLevel;
                                //console.log("!! securityLevel: " + $scope.securitylevel);
                            }
                        }

                        $rootScope.loggedIn = true;


                    }
                    // user authenticated with Firebase
                   // console.log('user.uid: ' + user.uid + ', user.provider: ' + user.provider);
                    $scope.$apply(function () {
                        $location.path('/main');
                    });
                } else {
                    // user is logged out
                }
            });


           $scope.authClient = authClient;

            var authRef = new Firebase("https://case-studies.firebaseio.com/.info/authenticated");
            authRef.on("value", function(snap) {
                if (snap.val() === true) {
                    //alert("authenticated");
                } else {
                    //alert("not authenticated");
                }
            });


            $scope.submit = function (password) {
                console.log('$scope.user' + $scope.user);
                authClient.login('password', $scope.user);
            };

            $scope.logout = function() {
                // console.log("logout");
                authClient.logout();
                // delete is better than null;
                delete $rootScope.user;
                $location.path('/');
            }




        }]);

