// Problem:27

// Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
// n = 0 -> 2⁰ -> [1]
// n = 1 -> 2⁰, 2¹ -> [1,2]
// n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]

// Input:
// powersOfTwo(0)
// powersOfTwo(1)
// powersOfTwo(2)

// Output:
// 1
// 1,2
// 1,2,4
function powersOfTwo(n)
{
    return Array.from({ length: n + 1 }, (_, i) => 2 ** i);
}
let run=powersOfTwo(0)
console.log(run);
run=powersOfTwo(1)
console.log(run);
run=powersOfTwo(2)
console.log(run);