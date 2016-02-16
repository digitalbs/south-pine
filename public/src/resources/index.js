import 'angular-resource';
import staffResource from './staff';

var resourcesApp = angular.module('sp.resources', ['ngResource']);
resourcesApp.service('staffResource', staffResource);

export default resourcesApp;
