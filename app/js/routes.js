var wdApp = angular.module('wdApp', ['ui.router', 'ngSanitize', 'angular.filter'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise('/ideas');

      $stateProvider.state('home', {
        url: '/ideas',
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
        onEnter: function($state) {
          console.log('home/ideas');
        }
      });

    }
  ]);
