// Problem:9

// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// 83 + 34 = 117
function lessThan100(num1,num2)
 {
    let sum=num1+num2;
    return sum<100;
    }
     let res = lessThan100(22,15)
     console.log(res);
     res = lessThan100(83,34)
     console.log(res);
     res = lessThan100(50,50)
     console.log(res);