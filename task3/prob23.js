// Problem:23

// Write a function called “addProperty".
// Given an object and a key, “addProperty" adds a new property on the given object with a value of true.

// let obj = {
// }

// Input:
// addProperty(obj, “mykey");

// Output:
// {
// mykey: true
// }
let obj = {
mykey: "value"
};
function addProperty(obj, key){
    return obj.mykey=true;
    }
    let fewm=addProperty(obj,"mykey")
    console.log(obj);
    