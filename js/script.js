var Main = function ($scope) {
  $scope.portfolio = [
    {title: 'GABRIEL', description: 'Polished steel desk with solid wood drawer. Custom hand grinding creates a warm silver/bronze color and feels as smooth as silk. 48" wide by 27" deep by 30" high. Custom sizes and finishes available.', images: ['']}
    , {title: '', description: '', images: ['']}
  ]
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