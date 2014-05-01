'use strict';

angular.module('hoodFrequencyApp')
  .controller('MainCtrl', function ($scope, $routeParams, hoodDirectory) {
    $scope.hoods = hoodDirectory.manhattan;
    $scope.frequencyFile = $routeParams.frequencyFile || 'knicks';

    $scope.isActive = function(file) {
      if ($scope.frequencyFile === file) {
        return 'active';
      }
    };

    $scope.tailStyle = {visibility: 'hidden'};
    $scope.updateTail = function(event) {
      if (this.hood) {
        this.tailStyle = {left: event.pageX + 20, top: event.pageY};
      } else {
        this.tailStyle = {visibility: 'hidden'};
      }
    };

    $scope.$on('hood.selected', function(event, hood) {
      event.currentScope.hood = hood;
    });

    $scope.$on('hood.deselected', function(event) {
      event.currentScope.hood = null;
    });
  });
