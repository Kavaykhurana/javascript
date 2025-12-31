//filter out even elements
function fun(ele){
    if(ele%2!=0) return true;
    else return false;
}
let arr=[1,21,32,3,37]
//console.log(arr)

let brr=arr.filter(function(ele){
    if(ele%2!=0) return true;
    else return false;
})
let crr=arr.filter((ele)=>{
    if(ele==1) return false;
    else return true;
})

let drr=arr.filter((ele)=>{
    return (ele<30);
})

let krr=arr.filter((ele)=>(ele>7))
console.log(arr)
console.log(brr)
console.log(crr)
console.log(drr)
console.log(krr)