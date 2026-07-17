// Reverse a string 
let str="hello";
let reversed="";
for(let i=str.length-1;i>=0;i--) {
    reversed=reversed + str[i];
}
console.log(reversed);
//Find maximum number 
let number=[20,40,80,90];
let largest=number[0];
for(let i=1;i<number.length;i++){
    if(number[i]>largest){
        largest=number[i];
    }
}
 console.log(largest);