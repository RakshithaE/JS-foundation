// Problem:4
// Create a function that takes a string and returns it as an integer.

// Examples
// toInteger(“6") ➞ 6
// toInteger(“1000") ➞ 1000
// toInteger(“12") ➞ 12

// let mystr = "5";
function toInteger(mystr) 
{

   if(typeof mystr=="string")
   {
    return parseInt(mystr);

   }
   else
   {
    return -1;
   }

}

let myint = toInteger("6")
 console.log(myint); 
 myint = toInteger("10000")
 console.log(myint); 
 myint = toInteger("12")
 console.log(myint); 
 myint = toInteger(6)
 console.log(myint); 