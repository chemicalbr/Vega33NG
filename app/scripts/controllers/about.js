'use strict';

/**
 * @ngdoc function
 * @name localApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the localApp
 */
angular.module('localApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
