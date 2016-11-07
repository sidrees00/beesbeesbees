var Bee = function() {
	
	//Overwrite from superclass
	this.age = 5;
	this.color = 'yellow';
	
	//Inherited from superclass
	//this.food = grub.food;
	//Bee.prototype.eat = grub.eat;
	
	// adding new properties
	this.job = 'keep on growing';

};

// Make the link between the superclass and the subclass

Bee.prototype = new Grub;
Bee.prototype.constructor = Bee;




	






