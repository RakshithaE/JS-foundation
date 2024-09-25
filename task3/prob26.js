// Problem:26

// Create a function that receives an array of numbers and returns an array containing only the positive numbers
// function getPositives(ar)
// {
// // your code here
// }
// let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let ar222 = getPositives(ar);
// console.log(ar222);
let arr=[-5,10,-3, 12, -9, 5, 90, 0, 1];

function getPositives(arr){
    return arr.filter(num => num > 0);
}


let ar222 = getPositives(arr);
console.log(ar222);