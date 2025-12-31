// let  s="     raghav           ";
// console.log(s)
// console.log(s.toUpperCase())//does not change the original string
// console.log(s)
// console.log(s,s.length);
// //console.log(s.toLocaleLowerCase())
// console.log(s.trim());//removes the extra spaces from start and end of the string
// console.log(s.trim(),s.trim().length);
// console.log(s.indexOf('a'));
// console.log(s.lastIndexOf('a'));
// console.log(s.charAt(7));
// console.log(s[7]);

// let s="raghav garg";//substring from index i to end
// console.log(s.slice(2,5));//substring from index i to index j-1

// let s="raghav is a teacher";
// console.log(s);
// let arr=s.split(' ');
// console.log(arr)

let s="a,d,sd,s,dsdsd,sd,s,d,sd,s";
console.log(s);
let arr=s.split(',');
for(const ele of arr){
    console.log(ele);
}