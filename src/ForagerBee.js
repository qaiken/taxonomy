var ForagerBee = function() {
  Bee.call(this);

  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function() {

  var items = [].slice.call(arguments);

  this.treasureChest = this.treasureChest.concat(items);
};
