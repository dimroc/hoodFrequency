'use strict';

angular.module('hoodFrequencyApp')
  .directive('renderer', ['hoodLoader', 'hoodRenderer', 'frequencyLoader', 'colorCharter',
             function (hoodLoader, hoodRenderer, frequencyLoader, colorCharter) {
    return {
      restrict: 'A',
      template: '<canvas class="hoods"></canvas>',
      link: function (scope, elem, attrs) {
        console.log("Rendering: ", scope.frequencyFile);

        var assignFrequency = function(hoods, frequency) {
          _(hoods).each(function(hood) {
            hood.frequency = frequency[hood.slug];
          });
        };

        hoodLoader(scope.hoods).done(function(hoods) {
          frequencyLoader(scope.frequencyFile).done(function(frequency) {
            assignFrequency(hoods, frequency);
            var colorChart = colorCharter(frequency);
            hoodRenderer(scope, hoods, colorChart, elem.find('canvas')[0]);
          });
        });
      }
    };
  }]);

