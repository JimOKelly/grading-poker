var Tables = require('./tables');

var Card = function(options) {
  this.rank = options.rank;
  this.suit = options.suit;
};


Card.prototype.toShortCode = function() {
  return [ Tables.numbers[this.rank], this.suit[0].toUpperCase() ].join('');
};

module.exports = Card;
