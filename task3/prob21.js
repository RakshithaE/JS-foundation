// Problem:21

// Write a function called “getLastElement".
// Given an array, “getLastElement" returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.

// Input:
// getLastElement([1, 2, 3, 4]);

// Output:
// 4

function getLastElement(array){
     return array[array.length -1];
    }
    let ches=getLastElement([1,2,3,4])
    console.log(ches);