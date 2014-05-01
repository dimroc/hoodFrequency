angular.module('hoodFrequencyApp').
  factory('hoodLoader', function(ENV) {

    var getAll = function(paths) {
      return _(paths).map(function(path) {
        return $.getJSON(path);
      });
    };

    var pathFromSlug = function(slug) {
      if (ENV.name == "development") {
        return "static/manhattan/" + slug + ".json";
      } else {
        return "hoodFrequency/static/manhattan/" + slug + ".json";
      }
    };

    var loadHoods = function(hoods) {
      var paths =_(hoods).map(function(hood) { return pathFromSlug(hood) });
      var all = getAll(paths);
      var dfd = $.Deferred();

      var isMany = all.length > 1;
      $.when.apply($, all).done(function() {
        var retrieved = null;

        if(isMany) {
          retrieved = _(arguments).map(function(arg) { return arg[0]; });
        } else {
          retrieved = [arguments[0]];
        }

        dfd.resolve(retrieved);
      });

      return dfd;
    };


    return loadHoods;
  });
