import angular from 'angular';

let homeApp  = angular.module('sp.home', []);

homeApp.controller('HomeCtrl', function () {
  this.title = 'Welcome to South Pine';
});

export default homeApp;
