// Problem:10

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// Examples
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0
function remainder(num1,num2)
 {
    return num1%num2;
   }
    let res = remainder(1,3)
    console.log(res);
     res = remainder(3,4)
    console.log(res);
    res = remainder(-9,45)
    console.log(res);
    res = remainder(6,6)
    console.log(res);
    res = remainder(2,9)
    console.log(res);