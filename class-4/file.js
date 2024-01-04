const fs = require("fs")
// filesystem module
fs.readFile("a.txt", "urf-8", function(err, data){
    console.log(data)
})     //asynchronous
console.log("hi there");
let a = 1;
//takes very longer than the file read
for (let i =0;i<100000000;i++){
 
    a = a+i;
}   
console.log("hi there again")

// two asynochronous functions---
// 1. setTimeout()
// 2. fs.readFile()

// when there is a callback queue function, it is asynchronous
// when there is no callback function, it is synchronous--->>> callstack works here ,,
//twho things are happening at the same time--->>>web api and callback queue--->>ascynhronous