var HoneyMakerBee = function() {
  //add properties
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = new Bee;

//Add new methods to prototype
HoneyMakerBee.prototype.makeHoney = function(){
  this.honeyPot++;
};
HoneyMakerBee.prototype.giveHoney = function(){
  this.honeyPot--;
}
HoneyMakerBee.prototype.constructor = HoneyMakerBee;