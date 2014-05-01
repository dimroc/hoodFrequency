angular.module('hoodFrequencyApp').
  factory('hoodDirectory', function() {
    var manhattan = [
      'east-village',
      'clinton',
      'gramercy',
      'hamilton-heights',
      'chinatown',
      'stuyvesant-town-cooper-village',
      'battery-park-city-lower-manhattan',
      'yorkville',
      'midtown-midtown-south',
      'washington-heights-north',
      'turtle-bay-east-midtown',
      'lenox-hill-roosevelt-island',
      'murray-hill-kips-bay',
      'upper-east-side-carnegie-hill',
      'lower-east-side',
      'central-harlem-north-polo-grounds',
      'east-harlem-south',
      'upper-west-side',
      'lincoln-square',
      'washington-heights-south',
      'central-harlem-south',
      'soho-tribeca-civic-center-little-italy',
      'west-village',
      'hudson-yards-chelsea-flatiron-union-square',
      'manhattanville',
      'morningside-heights',
      'east-harlem-north',
      'marble-hill-inwood',
      'park-cemetery-etc-manhattan'
    ];

    return {
      manhattan: manhattan
    };
});
