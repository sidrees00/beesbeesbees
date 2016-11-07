var Bee = function() {
	Grub.call(this);
	
	//Overwrite from superclass
	this.age = 5;
	this.color = 'yellow';
	
	//Inherited from superclass
	this.food = grub.food;
	this.eat = grub.eat;
	
	//new property
	this.job = 'keep on growing';


};


// Make the link between the superclass and the subclass

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Grub;



	






