let a=10
console.log(a);
let b=[1,2,3,4,5]
console.log(b);
console.log("hello world");

// variable,array,loops,functions,classes, objec


c=10 //global varibale
let d=20 //function scope
var e=30 //block scope

function fun(){
    let a=5
    if(a==5){
        let b=10 //if i use var instead of let the value of outsie-b will change
        console.log("inside ", b)

    }
    console.log("outside", b)
}
console.log("global ", b)




function squareroot(n){ // we dont have to delace the return type in function
console.log(1)
    // return Math.sqrt(n)
}

// funtion hoisting

var sqrttt= function(){
    console.log(2)
}

//out of these 2 code if we call the above at the starting of the code only the 1st one will work because of hoisting
