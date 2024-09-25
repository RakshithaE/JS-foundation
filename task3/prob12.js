// Problem:12

// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Examples
// frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600
// frames(10, 25) ➞ 15000
function frames(num1,num2)
 {
    return 60*num1*num2;
}
 let fps = frames(1,2)
 console.log(fps);
 fps = frames(1,1)
 console.log(fps);
 fps = frames(10,1)
 console.log(fps);
 fps = frames(10,25)
 console.log(fps);
