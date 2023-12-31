const intialArray = [1,2,3]
intialArray.push(4)
console.log(intialArray)

const intialArray1 = [1,2,3]
intialArray1.pop()
console.log(intialArray1)   

const intialArray2 = [1,2,3]
intialArray2.shift()
console.log(intialArray2) 

const intialArray3 = [1,2,3]
intialArray3.unshift(0)
console.log(intialArray3) 

//concat merge

const intialArray4 = [1,2,3];
const intialArray5 = [4,5,6];
// console.log(intialArray4.concat(intialArray5));
// for(let i=0;i<intialArray5.length;i++){
//     intialArray4.push(intialArray5[i])
// }


// for(let i=0;i<intialArray5.length;i++){
//     console.log(intialArray5[i])
// }
function logThings(item){
    console.log(item)
}
//[1,2,3]
intialArray4.forEach(logThings)
logThings(1)
logThings(2)
logThings(3)

//callback function
function log(){
    console.log("hello")
}
function log1(){
    console.log("hello1")
}
function log2(){
    console.log("hello2")
}
function logwhatsPresent(fun){
    fun();
}
logwhatsPresent(log2)