'use strict';

angular.module('hoodFrequencyApp')
  .directive('renderer', ['hoodLoader', 'hoodRenderer', function (hoodLoader, hoodRenderer) {
    return {
      restrict: 'A',
      template: '<canvas class="hoods"></canvas>',
      link: function (scope, elem, attrs) {
        hoodLoader(scope.hoods).done(function(hoods) {
          hoodRenderer(hoods, elem.find('canvas')[0]);
        });
      }
    };
  }]);

