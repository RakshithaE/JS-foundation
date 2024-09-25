// Problem:13

// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

// Examples
// divisibleByFive(5) ➞ true
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false
function divisibleByFive(num1)
 {
    return num1% 5 == 0;
}
 let divisible = divisibleByFive(5)
 console.log(divisible);
 divisible = divisibleByFive(-55)
 console.log(divisible);
 divisible = divisibleByFive(37)
 console.log(divisible);