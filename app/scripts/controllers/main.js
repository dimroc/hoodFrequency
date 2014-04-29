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
  });
