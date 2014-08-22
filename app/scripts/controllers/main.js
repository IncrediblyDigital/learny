'use strict';

/**
 * @ngdoc function
 * @name learnyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learnyApp
 */
angular.module('learnyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
