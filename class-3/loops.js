// // sum of first 10 natural numbers
// let ans=0
// for(let i=1;i<=10;i++){
//     ans=ans+i
// }
// console.log(ans)    

// function sum(n){
//     let ans=0
//     for(let i=1;i<=n;i++){
//         ans=ans+i
//     }
//     return ans
// }
// let ans=sum(10)
// console.log(ans)
// let ans2=sum(100)
// console.log(ans2)

// //callback function
// //find the sum of  squares of number


// function squares(n){
//     return n * n
// }
// function cube(n){
//     return n * n * n
// }

// function sumOfSquares(a,b){
//    const val1= squares(a)
//    const val2= squares(b)
//    return val1+val2
// }

// function sumOfCube(a,b){
//     const val1= cube(a)
//     const val2= cube(b)
//     return val1+val2
 
// }
// const ans= sumOfSquares(2,3)
// console.log(ans)  

// const ans2= sumOfCube(2,3)
// console.log(ans2)


// for any function -----callback function
function square(a){
    return a*a
}
function cube(n){
    return n * n * n
}

function sumOfSomething(a,b,callback){
    console.log(a);
    console.log(callback);
    const val1 = callback(a);
    const val2 = callback(b);
    return val1+val2;
}
const ans = sumOfSomething(2,3,square) 
console.log(ans)    

//callback function---- 


