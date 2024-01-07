console.log("hello");
const a=2;

console.log(a);

let Name = "Rahul";
let age = 22;
let isMale = false;
console.log("My name is " +    Name  +" " + "and my age is " + age )

console.log("my name is")
console.log(Name)
if(isMale == true )
{
console.log( Name +" " + "is male")
}
else{
    console.log( Name +" " + "is not a male")
}

let answer =0;
for(let i=0; i<10;i++){
    answer=answer+i;
}
console.log(answer);


wap prints all  even numbers in array
const arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for (let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log("Even Numbers are")
        console.log(arr[i]);
    }
    if(arr[i]%2!=0){
        console.log("Odd Numbers are")
        console.log(arr[i]);
    }

}
const allUsers=[
{
    Name:"Rahul",
    gender:"male"
},
{
    Name:"Radha",
    gender:"female"
},
{
    Name:"Ram",
    gender:"male",
    metadata:{
        age:22,
        address:"delhi"

    }

},
]
for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i].Name)   
    }
   
}
Function find sum
function sum(a,b){
    return a+b;
}
const value=sum(2,5)
console.log(value)
 function sum(a,b){
    const value = a+b;
        return value;
    }
    const value=sum(2,5)
    console.log(value)
