import angular from 'angular';

let askDoc  = angular.module('sp.askDoc', []);

askDoc.directive('askDoc', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'src/views/directives/askDoc.html',
    scope: false,
    link: function($scope) {

    }
  };
});

export default askDoc;



