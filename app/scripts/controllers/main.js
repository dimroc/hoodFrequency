'use strict';

angular.module('hoodFrequencyApp')
  .controller('MainCtrl', function ($scope, $routeParams, hoodDirectory) {
    $scope.hoods = hoodDirectory.manhattan;
    $scope.frequencyFile = $routeParams.frequencyFile || 'knicks';

    $scope.isActive = function(file) {
      if ($scope.frequencyFile == file) {
        return "active";
      }
    };

    $scope.tailStyle = {visibility: 'hidden'};
    $scope.updateTail = function(event) {
      if ($scope.hood) {
        $scope.tailStyle = {left: event.pageX + 20, top: event.pageY};
      } else {
        $scope.tailStyle = {visibility: 'hidden'};
      }
    };

    $scope.$on("hood.selected", function(event, hood) {
      $scope.hood = hood;
    });

    $scope.$on("hood.deselected", function(event) {
      $scope.hood = null;
    });
  });
