// Problem:32

// Create a function that will merge two arrays and return the result as a new array
// let ar1 = [1, 2, 3];
// let ar2 = [4, 5, 6];
// let ar = mergeArrays(ar1, ar2);
// console.log(ar);
function mergeArrays(ar1, ar2) {
    let result = [];

    // Add the first array to the result array
    for (let el of ar1) {
        result.push(el);
    }

    // Add the second array to the result array
    for (let el of ar2) {
        result.push(el);
    }

    return result;
}

let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];
let ar = mergeArrays(ar1, ar2);
console.log(ar); // Output: [1, 2, 3, 4, 5, 6]

