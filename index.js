//Exponentiation(**)
let x=5;
console.log(x**2);//25
let y=5;
console.log(y**=3);//y=y**3   y=5**3   5*5*5=125  
//same as below
console.log(Math.pow(x,2));//25

//in operator
const car={make:'Honda', model:'Accord', year:1998};
console.log('make' in car);//true
if('make' in car){
    console.log(car.make) ;
}
delete car.make;
if('make' in car===false){
    car.make='Suzuki'
    console.log(car.make) ;
}