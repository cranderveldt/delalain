var Main = function ($scope) {
  
};
var app = angular.module('delalain', []);
app.controller('Main',['$scope', Main]);
app.directive('dlFunction', function () {
  return {
    replace: false,
    transclude: false,
    restrict: 'A',
    scope: false,
    link: function ($scope, element, attrs) {
      
    }
  };
});