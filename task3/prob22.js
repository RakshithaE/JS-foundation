// Problem:22

// Write a function called “getProperty".
// Given an object and a key, “getProperty" returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

// let obj = {
// mykey: “value"
// };

// Input:
// getProperty(obj,’mykey’);
// getProperty(obj,’dummykey’);

// Output:
// value
// NA
let obj = {
mykey: "value"
 };
function getProperty(obj1, key) {
    return obj.mykey;
    }
    let bhem=getProperty(obj ,"mykey" );
    console.log(bhem);
    bhem=getProperty(obj , "dummykey")
    console.log(bhem);
    
    