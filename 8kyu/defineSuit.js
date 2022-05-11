function defineSuit(card) {
    // good luck
    const suit = card.charAt(card.length - 1);
    if (suit === '♣') {
      return 'clubs'
    } else if (suit === '♦') {
      return 'diamonds'
    } else if (suit === '♥') {
      return 'hearts'
    } else if (suit === '♠') {
      return 'spades'
    }
  }