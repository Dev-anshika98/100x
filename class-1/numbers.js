function explainParseInt(value){
    console.log("original value", value);
    let result = parseInt(value);
    console.log("after parsing", result);
}
//Example Usage for parseInt
explainParseInt("123");
explainParseInt("127.1");
explainParseInt("42px");

console.log(parseInt("123"));
console.log(parseInt("127.1"));
console.log(parseInt("42px"));

console.log(parseFloat("123"));
console.log(parseFloat("127.1"));
console.log(parseFloat("42px"));