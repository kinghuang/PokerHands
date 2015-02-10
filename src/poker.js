var poker = {
  // Returns the name of the input hand.
  // See the specs for the required formats.
  var Card = function(cardString) {
  	this.rank = cardString[0];
  	this.suit = cardString[1];
  }

  card.prototype.myFunnction = function () {

  };

  labelHand: function(hand) {

  	cards = hand.split(' ').map(function(cardString) {
  		return Card(cardString);
  	});
  }
};