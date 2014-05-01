angular.module('hoodFrequencyApp').
  factory('frequencyLoader', function() {

    var pathFromSlug = function(slug) {
      return "/static/frequencies/" + slug;
    };

    var hashFromFrequencyText = function(text) {
      var array = $.csv.toArrays(text, {
        separator:"\t" // sets a custom value delimiter character
      });

      var hash = {};
      _(array).each(function(tuple) {
        hash[tuple[0]] = parseInt(tuple[1]);
      });

      return hash;
    };

    var loadFrequency = function(frequency) {
      var path = pathFromSlug(frequency);
      var dfd = $.Deferred();

      $.ajax({
        url: path,
        dataType: 'text'
      }).success(function(text) {
        dfd.resolve(hashFromFrequencyText(text));
      }).error(function(_, message, error) {
        console.warn("Failed to get frequency", error);
      });

      return dfd;
    };

    return loadFrequency;
  });
