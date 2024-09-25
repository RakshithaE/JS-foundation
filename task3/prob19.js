// Problem:19

// Create a function to calculate the distance between two points defined by their x, y coordinates
// console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}
let good=getDistance(100, 100, 400, 300)
console.log(good);