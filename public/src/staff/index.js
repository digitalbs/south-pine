import angular from 'angular';
import '../resources';
import StaffCtrl from './staff';

let staffApp  = angular.module('sp.staff', ['sp.resources']);

staffApp.controller('StaffCtrl', StaffCtrl);

export default staffApp;
