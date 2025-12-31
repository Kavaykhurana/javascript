const modules=require("./module.js");
function printmessage(message){
    console.log(message);
}

printmessage("hello world");

console.log("add", modules.add(2,3));
console.log("multiply",modules.multiply(2,3));