// Problem:15

// Write a function called “areBothOdd".
// Given 2 numbers, “areBothOdd" returns whether or not both of the given numbers are odd.

// Input:
// areBothOdd(1, 3);
// areBothOdd(1, 4);
// areBothOdd(2, 3);
// areBothOdd(0, 0);

// Output:
// true
// flase
// flase
// flase

function areBothOdd(num1, num2){
    return (num1%2!=0) && (num2 % 2!=0);
    }
    let odd=areBothOdd(1,3)
    console.log(odd);
    odd=areBothOdd(1,4)
    console.log(odd);
    odd=areBothOdd(2,3)
    console.log(odd);
    odd=areBothOdd(0,0)
    console.log(odd);