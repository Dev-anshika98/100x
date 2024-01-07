// Code: String  //length
function getLength(str){
    console.log(str)
    console.log(str.length)
}
getLength( "anshika gupta");

//indexOf
function findIndexOf(str,target){
    console.log("original string", str)
    console.log("index of ", str.indexOf(target))
}
findIndexOf("anshika gupta"," gupta")


function findIndexOf(str,target){
    console.log("original string", str)
    console.log("index of ", str.indexOf(target))
}
findIndexOf("anshika gupta","anshika")

function findIndexOf(str,target){
    console.log("original string", str)
    console.log("index of ", str.indexOf(target))
}
findIndexOf("anshika gupta","k")
lastIndexOf


function findIndexOf(str,target){
    console.log("original string", str)
    console.log("index of ", str.lastIndexOf(target))
}
findIndexOf("anshika guptaa guptaa guptaa"," guptaa")




// slice


function findIndexOf(str,start,end){
    console.log("original string", str)
    console.log("After slice ", str.slice(start,end))
}
findIndexOf("anshika gupta",0,5)

let ans = "Amit Gupta".slice(0,4)
console.log(ans)

let ans1 = "Amit Gupta".substr(5,3)
console.log(ans1)

function cutIt(str, startIndex, endIndex){
  let newStrr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIndex && i <= endIndex) {
      newStrr += str[i];
    }
  }
  return newStrr;
}
const value ="anshika gupta"
console.log(cutIt(value,2,5))


// strReplace
const str = "hello world";
console.log(str.replace("hello", "hi"));

//split
const value1 ="hi my name is anshika"
const words =value1.split("");
console.log(words)   

const value ="hi my name is anshika"
const word =value.split(" ");
console.log(word)


// trim - remove extra space from the beginning and end of the string
const value= "     anshika     gupta    "
console.log(value.trim())


// // toUpperCase
const value1= "anshika gupta"
console.log(value1.toUpperCase())

// // toLowerCase
const value2= "ANSHIKA GUPTA"
console.log(value2.toLowerCase())





