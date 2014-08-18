'use strict';

/**
 * @ngdoc function
 * @name nycdaAngularJsFinalProjApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nycdaAngularJsFinalProjApp
 */
angular.module('nycdaAngularJsFinalProjApp')
    .controller('MainCtrl', ['$scope', 'syncData',
        function ($scope, syncData) {

            $scope.theCaseStudies = syncData('/casestudies').$asObject();
            $scope.studies = $scope.theCaseStudies.studies;
            console.log($scope.studies);

//            var fbRef = new firebaseRef('https://case-studies.firebaseio.com/users');
//            var authClient = new FirebaseSimpleLogin(fbRef, function(error, user) {
//                if (error) {
//                    // an error occurred while attempting login
//                    console.log(error);
//                } else if (user) {
//                    // user authenticated with Firebase
//                    console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
//                } else {
//                    // user is logged out
//                }
//            });

        }]);

