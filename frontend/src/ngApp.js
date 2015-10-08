window.app = angular.module('contact', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('contact');
  $stateProvider
    .state('contact', {
      url: '/contact',
      templateUrl : '/pages/contact.html',
      controller : 'contactCtrl'
    })
});
