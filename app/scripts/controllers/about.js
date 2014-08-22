'use strict';

/**
 * @ngdoc function
 * @name learnyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the learnyApp
 */
angular.module('learnyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
