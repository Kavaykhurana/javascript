let arr=[1,2,3,4,4,5,6,765,43,654,3,5,43,4,3,4,343]
console.log(arr)
let x=arr.reduce(function(a,b){
    return a+b
})
console.log(x)

brr=[2,1,2,1,2,1,1,2,1,2,1,21,2];
console.log(brr);
let p=brr.reduce(function(a,b){
    return a*b;
})
console.log(p);