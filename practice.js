function Animal(voice){
  this.voice = voice || "dumb";
}
Animal.prototype.speak = function(){
  console.log(this.voice);
};

function Dog(){
    this.friendly = true;
    this.loyal = true;
    Animal.call(this, "bark");
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

var billy = new Dog();
billy.speak();
console.log(billy.constructor);

//what happens behind the scenes in Object.create
//assuming this is an older browser

if (Object.create === undefined){
    Object.create = function(proto){
        var constructor = function(){};
        constructor.prototype = proto;
        return new constructor();
    }
}

var car = {
    speed: 0,
    increaseSpeed: function(){
        this.speed += 5;
        console.log(this.speed +" after upping speed");
    }
};

var closure = car.increaseSpeed;
closure.call(car);
console.log(car.speed);