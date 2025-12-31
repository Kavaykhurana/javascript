//object is kind of like map/dictionary where we have key-value pairs
var details=["raghav",24,92.5,false]
let x={name:"raghav", age:24, percentage: 92.5, ismarried:false}
let car={}
console.log(x)
console.log(x.age)
console.log(x['age']);

// for(const key in x){
//     if (object.hasownproperty.call(x,key)){
//         console.log(key,x[key]);
//     }
// }

for(const key in x){
        console.log(key,x[key]);
}