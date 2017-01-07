function Car(color, number){
    this.color = color;
    this.number = number;
}
// create a carGarage array
var carGarage = [], car, i;
// create a loop that creates cars and places them in carGarage
for (i = 0; i < 10; i++){
    if(i < 4){
        car =  new Car("green", i);
        carGarage.push(car);
    }
    else{
        car =  new Car("blue", i);
        carGarage.push(car);
    }
}
// test code
for(var i=0;i<carGarage.length;i++){
    car = carGarage[i];
    console.log(car.color + " car #" + car.number);
}