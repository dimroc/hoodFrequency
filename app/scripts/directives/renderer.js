'use strict';

angular.module('hoodFrequencyApp')
  .directive('renderer', ['hoodLoader', 'hoodRenderer', 'frequencyLoader', 'hoodFrequencyCoordinator',
             function (hoodLoader, hoodRenderer, frequencyLoader, hoodFrequencyCoordinator) {
    return {
      restrict: 'A',
      template: '<canvas class=\'hoods\'></canvas>',
      link: function (scope, elem) {
        console.log('Rendering: ', scope.frequencyFile);

        hoodLoader(scope.hoods).done(function(hoods) {
          frequencyLoader(scope.frequencyFile).done(function(frequency) {
            hoodFrequencyCoordinator(hoods, frequency);
            hoodRenderer(scope, hoods, elem.find('canvas')[0]);
          });
        });
      }
    };
  }]);

