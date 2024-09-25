// Problem:2

// Write a function called “getOpposite".
// Given a number, return its opposite

// Input:
// getOpposite(5);
// getOpposite(0);
// getOpposite(-5);
// getOpposite(“5a");
// getOpposite(5.5);

// Output:
// -5
// 0
// 5
// -1
// -1

// let num = 5;
function getOpposite(num) 
{
if (typeof num === 'number')
 { return -num; 
} 
else 
{ return -1; 
}
}
 let result = getOpposite(5)
 console.log(result);
  result = getOpposite(0)
 console.log(result);
 result = getOpposite(-5)
 console.log(result);
 result = getOpposite("5a")
 console.log(result);
 result = getOpposite("5.5")
 console.log(result);