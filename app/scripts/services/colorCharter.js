'use strict';

angular.module('hoodFrequencyApp').
  factory('colorCharter', function() {
    var calculator = function (frequencyMap) {
      var values = [];
      for (var key in frequencyMap) {
        values.push(frequencyMap[key]);
      }

      var totalFrequency = _(values).reduce(function(memo, num) { return memo + num }, 0);
      var maxFrequency = _(values).max();
      console.log("Total Frequency:", totalFrequency);
      console.log("Max Frequency:", maxFrequency);

      var normalizedFrequency = {};
      for (var key in frequencyMap) {
        normalizedFrequency[key] = frequencyMap[key] / maxFrequency;
      }

      return normalizedFrequency;
    };

    return calculator;
  });

