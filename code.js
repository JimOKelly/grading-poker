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

var suits = 'hearts clubs diamonds spades'.split(' ');
var ranks = winningOrder;

var deck = ranks.flatMap(function(rank) {
  return suits.map(function(suit) {
    return new Card({ rank: rank, suit: suit });
  });
});

var cardFromShortCode = function(code) {
  var rank = Tables.rankfromRankCode[code[0]];
  var suit = Tables.suitfromSuitCode[code[1]];
  return new Card({rank: rank, suit: suit});
};

var hands = "8C TS KC 9H 4S 7D 2S 5D 3S AC".split(' ');
var p1 = [];
var p2 = [];

for (var i=0; i< hands.length; i++) {
  var p = (i<5) ? p1 : p2;
  p.push(cardFromShortCode(hands[i]));
}

console.log(p1);
console.log(p2);
