module.exports = (function() {
  var rankCodeFromRank = {
    'two':    '2',
    'three':  '3',
    'four':   '4',
    'five':   '5',
    'six':    '6',
    'seven':  '7',
    'eight':  '8',
    'nine':   '9',
    'ten':    'T',
    'jack':   'J',
    'queen':  'Q',
    'king':   'K',
    'ace':    'A'
  };

  var transposed = function() {
    return Object.keys(rankCodeFromRank).reduce(function(acc, key) {
      var val = rankCodeFromRank[key];
      acc[val] = key;
      return acc;
    }, {});
  };

  return {
    rankCodeFromRank: rankCodeFromRank,
    rankfromRankCode: transposed
  };
}());
