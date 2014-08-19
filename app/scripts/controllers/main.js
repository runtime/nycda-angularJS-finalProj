'use strict';

/**
 * @ngdoc function
 * @name nycdaAngularJsFinalProjApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nycdaAngularJsFinalProjApp
 */
angular.module('nycdaAngularJsFinalProjApp')
    .controller('MainCtrl', ['$scope', 'syncData', 'firebaseRef',
        function ($scope, syncData, firebaseRef) {

            $scope.theCaseStudies = syncData('/casestudies').$asObject();
            $scope.studies = $scope.theCaseStudies.studies;
            console.log($scope.studies);


//            var fbRef = firebaseRef('/users');
//
//            var authClient = new FirebaseAuthClient(fbRef, function(error, user) {
//                if (error) {
//                    alert(error);
//                    return;
//                }
//                if (user) {
//                    // User is already logged in.
//                    doLogin(user);
//                } else {
//                    // User is logged out.
//                    showLoginBox();
//                }
//            });






        }]);

