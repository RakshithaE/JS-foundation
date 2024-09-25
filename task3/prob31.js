// Problem:31

// Reverse a string
// let s = reverseString("JavaScript");
// console.log(s);
function reverseString(s)
{
  return  s.split('').reverse().join('')
}
let s = reverseString("JavaScript");
console.log(s);