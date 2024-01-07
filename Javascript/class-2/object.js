//Examples of objects
function objectMethods(obj){
console.log(obj)

let keys = Object.keys(obj)
console.log("after object.keys():",keys)

let values = Object.values(obj)
console.log("after object.values():",values)

let entries = Object.entries(obj)
console.log("after object.entries():",entries)

let hasProperty = Object.hasOwnProperty("property");
console.log("after object.hasOwnProperty():",hasProperty);

let newObject = Object.assign({},obj,{newProperty:"new value"});
console.log("after object.assign():",newObject);
}
// let obj ={
//     name:"anshika",

// }
// console.log(obj.hasOwnProperty("name"))



const obj = {
    key1:"value1",
    key2:"value2",
    key3:"value3",
};
let newObject = Object.assign({},obj,{newProperty:"new value"});;
console.log("after object.assign():",newObject);