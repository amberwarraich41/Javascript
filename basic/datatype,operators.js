/* datatypes 
str , int , symbol , objects , null, boolean , undefined 
type converstion
null ki type object hai
"" -> false show ho ga 
"Amber" -> true 
*/
let name ="Amber";
console.log(typeof name);
let value = Number(name)
console.log(typeof value);
let score = null
console.log(typeof score);
// *****************************Operations*******************
let num=-3;
console.log(num);
//Create a simple calculator using user input.
//const prompt=require('prompt-sync')();
let first1=Number('Enter your first number:') ;
let second2=Number('Enter your second number:');
let sum=first1+second2
let subtraction=first1-second2
let multiplication=first1*second2
let division=first1/second2
let modulus=first1%second2
console.log('sum=',sum);
console.log('multiplication=',multiplication);
console.log('subtraction=',subtraction);
console.log('division=',division);
console.log('modulus=',modulus);
// add str
let str1="hello";
let str2="world";
let str3=str1+str2;
console.log(str3);
console.log("1"+2+4);



