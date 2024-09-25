// Problem:28

// Find the maximum number in an array of numbers
let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function findMax(ar) {
    let maxNumber = ar[0]; // Initialize inside the function
    for (let i = 1; i < ar.length; i++) {
        if (ar[i] > maxNumber) {
            maxNumber = ar[i];
        }
    }
    return maxNumber; // Return the result
}

console.log("Max:", findMax(ar));

