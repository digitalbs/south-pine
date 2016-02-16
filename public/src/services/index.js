import angular from 'angular';
import ServiceCtrl from './service';
import ServiceTypesCtrl from './serviceTypes';

let serviceApp  = angular.module('sp.service', []);

serviceApp.controller('ServiceCtrl', ServiceCtrl);
serviceApp.controller('ServiceTypesCtrl', ServiceTypesCtrl);

export default serviceApp;
