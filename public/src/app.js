import 'angular';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'ngsticky';
import './home';
import './services';
import './staff';
import './directives/askDoc';

let southPine = angular.module('sp', [
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'ngSanitize',
  'sticky',
  'sp.home',
  'sp.service',
  'sp.staff',
  'sp.askDoc'
  ]);

southPine.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');


  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/views/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'home',
    })
    .state('services', {
      url: '/services',
      templateUrl: 'src/views/services/index.html',
      controller: 'ServiceCtrl'
    })
    .state('services.servicesContainer', {
      parent: 'services',
      url: '/:service',
      views: {
        'servicesContainer': {
          templateUrl: 'src/views/services/service.html',
          controller: 'ServiceTypesCtrl',
          controllerAs: 'service'
        }
      }
    })
    .state('staff', {
      url: '/meet-the-staff',
      templateUrl: 'src/views/staff/index.html',
      controller: 'StaffCtrl',
      controllerAs: 'staff'
    })
    .state('askDoc', {
      url: '/ask-the-doc',
      templateUrl: 'src/views/askDoc/index.html'
    }).state('emergency', {
      url: '/emergency-clinic',
      templateUrl: 'src/views/emergency/index.html'
    }).state('forms', {
      url: '/forms',
      templateUrl: 'src/views/forms/index.html'
    }).state('specials', {
      url: '/specials',
      templateUrl: 'src/views/specials/index.html'
    });
}).constant('API_URL', 'http://localhost:8000');

southPine.controller('spGlobal', function ($scope, $window, $document) {
  angular.element($window).bind('scroll', () => {

    let offsetTop = Math.round($document[0].body.offsetTop);

    this.stickyDisabled = (offsetTop > 100) ? true : false;

    $scope.$apply();

  });

});


export default southPine;
