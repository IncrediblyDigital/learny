'use strict';

/**
 * @ngdoc overview
 * @name learnyApp
 * @description
 * # learnyApp
 *
 * Main module of the application.
 */
angular
  .module('learnyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      // $locationProvider.html5Mode(true);
  });
