'use strict';

angular.module('hoodFrequencyApp')
  .directive('renderer', ['hoodLoader', 'hoodRenderer', 'frequencyLoader',
             function (hoodLoader, hoodRenderer, frequencyLoader) {
    return {
      restrict: 'A',
      template: '<canvas class="hoods"></canvas>',
      link: function (scope, elem, attrs) {
        hoodLoader(scope.hoods).done(function(hoods) {
          frequencyLoader('knicks').done(function(frequency) {
            console.log(frequency);
            hoodRenderer(hoods, elem.find('canvas')[0]);
          });
        });
      }
    };
  }]);

