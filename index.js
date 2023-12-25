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

let str="Apple, Banana, Kiwi";
console.log(str.length);
console.log(str.slice(-25).length);//still return as the length of str even it is over
console.log(str.slice(-1));//returns the last character in the string
console.log(str.slice(-2,-1));//returns the 2nd to the last character
console.log(str.slice(0,1));//returns the first character
console.log(str.slice(1,2));//returns the 2nd character