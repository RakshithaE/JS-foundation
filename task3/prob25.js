// Problem:25

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let ar22 = function countPositivesSumNegatives(arr) {

// }
// console.log(ar22)
let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function countPositivesSumNegatives(arr) {
    if (arr == null || arr.length === 0) return [];

    let countPositives = 0;
    let sumNegatives = 0;

    arr.forEach((num) => {
        if (num > 0) {
            countPositives++;
        } else if (num < 0) {
            sumNegatives += num;
        }
    });

    return [countPositives, sumNegatives];
}

console.log(countPositivesSumNegatives(arr)); // Output: [5, -17]
