//print 1 to 10 with delay of 1s after each number gets printed
// function print(){
//     console.log("hello")
// }
// function display(){
//     for(i=1;i<=10;i++){
//     console.log(i);}
// }
// setTimeout(print,2*1000)//settimeout(function name,second*1000)
// setTimeout(display,1*1000)

// for(let i=1;i<=10;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000)
// }


// for(let i=3000;i>=0;i--){
//     setTimeout(function(){
//         console.log(3000-i);
//     },i*10)
// }

// for(let i=0;i<=100;i++){
//     setTimeout(function(){
//         console.log(Math.floor(Math.random()*10)) 
//     },i*500)
// }

for(let i=0;i<=100;i++){
    setTimeout(function(){
        console.log(i);
    },i*100)
}