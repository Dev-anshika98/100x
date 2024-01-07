// const dog={
//     name:"doggie",
//     legcount:4,
//     speaks:"bark",
//     color:"black",
// }
// const cat={
//     name:"cat",
//     legcount:4,
//     speaks:"meow",
//     color:"black",
// }

// function printstr(animal){
//     console.log("animal" + " " + animal["name"] + " " + animal["speaks"])
// return
// }
// console.log(printstr(dog))
// console.log(printstr(cat))

// console.log("animal" + " " + dog["name"] + " " + dog["speaks"])
// console.log("animal" + " " + cat["name"] + " " + cat["speaks"])

class Animal{
    constructor(name, legcount, speaks, color){
        this.name =name;
        this.legcount=legcount;
        this.speaks=speaks; 
        this.color=color;   
    }
    speak(){
        console.log(this.name + " " + this.speaks)
    
    }
  
}
let dog = new Animal("doggie",4,"bark","black") //create object
let cat = new Animal("kitty",4,"meow","black")
dog.speak()// call function on object
cat.speak()