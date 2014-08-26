'use strict';

/**
 * @ngdoc function
 * @name nycdaAngularJsFinalProjApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the nycdaAngularJsFinalProjApp
 */
angular.module('nycdaAngularJsFinalProjApp')
  .controller('HeaderCtrl', [ '$scope', '$rootScope', 'firebaseRef', '$firebaseSimpleLogin',
        function ($scope, $rootScope, firebaseRef, $firebaseSimpleLogin) {
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];


            $scope.logout = function() {
                // console.log("logout");
                $scope.authClient.logout();
                // delete is better than null;
                delete $rootScope.user;
                $location.path('/');
            }


  }]);
