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
console.log(alphabet.lastIndexOf("e"));