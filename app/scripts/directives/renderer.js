'use strict';

angular.module('hoodFrequencyApp')
  .directive('renderer', ['hoodLoader', 'hoodRenderer', 'frequencyLoader', 'colorCharter',
             function (hoodLoader, hoodRenderer, frequencyLoader, colorCharter) {
    return {
      restrict: 'A',
      template: '<canvas class="hoods"></canvas>',
      link: function (scope, elem, attrs) {
        hoodLoader(scope.hoods).done(function(hoods) {
          frequencyLoader('knicks').done(function(frequency) {
            var colorChart = colorCharter(frequency);
            hoodRenderer(hoods, colorChart, elem.find('canvas')[0]);
          });
        });
      }
    };
  }]);

