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

            $scope.myCaseStudies = syncData('/casestudies');

        }]);