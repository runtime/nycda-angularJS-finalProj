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
            console.log("MainCtrl $scope.studies: " + $scope.studies);

        console.log("MainCtrl $scope.theCaseStudies" +  $scope.theCaseStudies );

        $scope.securitylevels = $scope.theCaseStudies.securitylevels;
        console.log("MainCtrl $scope.securitylevels: " + $scope.securitylevels);

        console.log("MainCtrl $scope.user.email: " + $scope.fbRef);

        }]);

