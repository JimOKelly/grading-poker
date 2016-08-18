// hand player 1        player 2        winner
// 1    5C 6S 7S KD     2C 3S 8S 8D TD  
//      Pair of Fives   Pair of Eights  Player 2
// 2    5D 8C 9S JS AC  2C 5C 7D 8S QH  
//      High card A     High card Queen Player 1
//

var Tables = require('./lib/tables');
var Card = require('./lib/card');

Array.prototype.flatMap = function(fn) {
  return Array.prototype.concat.apply([], this.map(fn));
};

var winningHands = [
  'royal-flush straight-flush four-of-a-kind full-house',
  'flush straight three-of-a-kind two-pairs one-pair high-card'
].join(' ')
 .split(' ');

var winningOrder = 'two three four five six seven eight nine ten jack queen king ace'
  .split(' ')
  .reverse();

var codes = {
  '2C': { rank: 'two', suit: 'clubs'}
};

var suits = 'hearts clubs diamonds spades'.split(' ');
var ranks = winningOrder;

var deck = ranks.flatMap(function(rank) {
  return suits.map(function(suit) {
    return new Card({ rank: rank, suit: suit });
  });
});


var convertToFull = function(shortCodes) {
  // 8C TS KC 9H 4S
  var codes = shortCodes.split(' ');
};

console.log(Tables.rankfromRankCode()['A']);

//deck.forEach(function(card) {
//  console.log(card.toShortCode());
//});
