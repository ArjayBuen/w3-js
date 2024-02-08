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

/******************************* String Methods *********************************/ 
let str="Apple, Banana, Kiwi";
console.log(str.length);
console.log(str.slice(-25).length);//still return as the length of str even it is over
console.log(str.slice(-1));//returns the last character in the string
console.log(str.slice(-2,-1));//returns the 2nd to the last character
console.log(str.slice(0,1));//returns the first character
console.log(str.slice(1,2));//returns the 2nd character

let text="Please visit Microsoft and Microsoft!";
let newText=text.replace("Microsoft","W3Schools");//replaces the only first match word or characters
console.log(newText);//Please visit W3Schools and Microsoft!
let newText2=text.replace("MICROSOFT","W3Schools");//cannot replace it because of case sensitivity
console.log(newText2);//Please visit Microsoft and Microsoft!
let newText3=text.replace(/MICROSOFT/i,"W3Schools");//with regex /i it will not be case sensitive anymore
console.log(newText3);//Please visit W3Schools and Microsoft!
let newText4=text.replace(/MICROSOFT/ig,"W3Schools");//with regex /g it will replace all that it matches
console.log(newText4);//Please visit W3Schools and W3Schools!


let greetings ="   Hello world!      ";
console.log(greetings.trim());//Hello world! 
console.log(greetings.trimEnd());//removes only the whitespace at the end
console.log(greetings.trimStart());//removes only the whitespace at the start

let numString="5";
console.log(numString.padStart(4,0));
console.log(numString.padEnd(4,0));
console.log(numString.padStart(4,10));
console.log(numString.padEnd(4,10));
console.log(numString.padStart(4,11));

console.log(greetings.trim().charAt(0));
console.log(greetings.trim().charCodeAt(1));//returns 101 for e
console.log(greetings.trim()[0]);//property access
let charNum="abc123";
console.log(charNum.charAt(3));

let alphabet="a,b,c,d,e,f";
const arryAlphabet=alphabet.split(",");
console.log(arryAlphabet);
for(let i=0;i<arryAlphabet.length;i++){
    console.log(arryAlphabet[i]);
}
let phrase="Learning to code is worthwile";
console.log(phrase.split(" "));

console.log(phrase.endsWith("worthwile"));//returns true
console.log(phrase.includes("z"));//false
console.log(phrase.indexOf("a"));
console.log(phrase.lastIndexOf("e"));//returns the index of the last e

console.log(phrase.startsWith("learning"));//false because of case sensitivity

const paragraph='Big Bad Wolf';
console.log(paragraph.match(/[A-Z]/g));

let str1="Mr. Blue has a blue house";
console.log(str1.search("blue"));//returns index 15 for blue
console.log(str1.search(/blue/ig));//returns index 4 for Blue
//only logs one which is the first that matches
console.log(str1.search("ble"));//returns -1 because it doesnt find the match in the string

let toUp="Uppercase";
console.log(toUp.toLocaleUpperCase());

let toLow="LOWERCASE";
console.log(toLow.concat(" -> ",toLow.toLocaleLowerCase()));

let toRepeat="Mushi";
console.log(toRepeat.repeat(2));

// Numbers
let n='100'; //still a number but a typeof string
console.log(isNaN(n));//returns false

let fruits=100+"apple";
console.log(isNaN(fruits));//returns true 
console.log(typeof NaN);
console.log(typeof Infinity);

let infinite=2/0;
console.log(infinite);

let num=32;
let num2=num.toString();
console.log(typeof num2);
console.log(num.toString(2));

let exponential=9.656;
console.log(exponential.toExponential(6));
console.log(typeof(exponential.toExponential(6)));

console.log(9.656.toFixed(2));//toFixed(2) is perfect for working with money
console.log(typeof(9.656.toFixed(6)));

console.log(9.656.toPrecision(2)); 
console.log(typeof(9.656.toPrecision(2)));

Number(true); //returns 1
Number(false); //returns 0
Number("  10  "); //returns 10 without space
Number("10.33"); //returns 10.33
console.log(Number("10,333"));//returns NaN
Number("10  33");//returns NaN
 
parseInt("-10");//returns -10
parseInt("-10.33");//returns -10
parseInt("10");//returns 10
parseInt("10.33");//returns 10
parseInt("10 20 30");//returns 10
parseInt("10 years");//returns 10
parseInt("years 10");//returns NaN

parseFloat("10");//returns 10
parseFloat("10.33");//returns 10.33
parseFloat("10 20 30");//returns 10
parseFloat("10 years");//returns 10
parseFloat("years 10");//returns NaN

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

Number.isFinite(123);//returns true
Number.isFinite(-123);//returns true
Number.isFinite(5-2);//returns true
Number.isFinite(0);//returns true
Number.isFinite('123');//returns false
Number.isFinite('Hello');//returns false
Number.isFinite(Infinity);//returns false
Number.isFinite(-Infinity);//returns false

Number.isInteger(123);//returns true
Number.isInteger('123');//returns false because it is string type
Number.isInteger(-123);//returns true
Number.isInteger(5+2);//returns true
Number.isInteger(0);//returns true
Number.isInteger(0.5);//returns false because it is float
Number.isInteger(false);//returns false because it is boolean
Number.isInteger(Infinity);//returns false also in negative infinity

console.log(Math.PI);//3.141592653589793
console.log(Math.E);//2.718281828459045
console.log(Math.SQRT2);//1.4142135623730951
console.log(Math.SQRT1_2);//0.7071067811865476
console.log(Math.LN2);//0.6931471805599453
console.log(Math.LN10);//2.302585092994046
console.log(Math.LOG2E);//1.4426950408889634
console.log(Math.LOG10E);//0.4342944819032518

console.log(Math.round(4.5));//5
console.log(Math.round(4.4));//4
console.log(Math.round(-4.5));//-4
console.log(Math.round(-4.4));//-4

console.log(Math.ceil(4.5));//5
console.log(Math.ceil(4.4));//5
console.log(Math.ceil(-4.5));//-4
console.log(Math.ceil(-4.4));//-4

console.log(Math.floor(4.9));//4
console.log(Math.floor(4.4));//4
console.log(Math.floor(-4.5));//-5
console.log(Math.floor(-4.4));//-5

console.log(Math.trunc(4.9))//4
console.log(Math.trunc(4.4))//4
console.log(Math.trunc(-4.9))//-4
console.log(Math.trunc(-4.4))//-4

console.log(Math.sign(-4))//-1
console.log(Math.sign(0))//0
console.log(Math.sign(4))//1

console.log(Math.pow(8,2));//returns 64

console.log(Math.sqrt(64));//returns 8

console.log(Math.abs(-4.6));//returns 4.6

console.log(Math.sin(90 * Math.PI/180));//returns 1 (sine of 90 degrees)
console.log(Math.cos(0 * Math.PI/180));//returns 1 (cos of 0 degrees)
console.log(Math.tan(45 * Math.PI/180));