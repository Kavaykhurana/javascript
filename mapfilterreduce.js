//map basically agar mjhe ek array ek aur array banana hai usse related some specific changes

function twice(ele){
    return 2*ele
}

function square(ele){
    return ele*ele
}

let arr=[1,2,3,4]
console.log(arr)
let brr=arr.map(twice)//pass function to update the value as per need
let crr=arr.map(function(ele){
    return ele+100
});
// for(let i=0;i<arr.length;i++){
//     brr.push(arr[i]*2);
// }
let drr=arr.map((ele)=>{
    return ele+1000
});

let krr=arr.map(ele=>ele*ele*ele)
console.log(brr)
console.log(crr)
console.log(drr)
console.log(krr)
