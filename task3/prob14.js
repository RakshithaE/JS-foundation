// Problem :14

// Write a function called “isEven".
// Given a number, “isEven" returns whether it is even.

// Input:
// isEven(12);
// isEven(0);
// isEven(11);
// isEven(“11h");

// Output:
// true
// true
// false
// -1

function isEven(num){
    return num% 2 === 0;
    }
     let even = isEven(5)
     console.log(even);
     even = isEven(12)
     console.log(even);
     even = isEven(0)
     console.log(even);
     even = isEven(11)
     console.log(even);
     even = isEven("11h")
     console.log(even);
    