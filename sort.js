let arr=[1,2,3,-1,-3]
console.log(arr)
//arr=arr.sort(); //galat sorting dega yeh

arr=arr.sort((a,b)=>b+a)//increasing order
console.log(arr)
arr=arr.sort((a,b)=>b-a)//decreasing odrder
console.log(arr)
arr=arr.sort((a,b)=>Math.abs(a+b));
console.log(arr)
arr=arr.sort((a,b)=>Math.abs(a-b))
console.log(arr)
arr=arr.sort((a,b)=>Math.abs(a)-Math.abs(b))
console.log(arr);