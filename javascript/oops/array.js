let arr=[1,2,3]
console.log(arr.length)
let arr2=[1,"hello",false,[0,2]]
console.log(typeof arr2[0])
 for(let i=0;i<arr.length;i++){
     console.log(arr[i])
 }
 //other way
 for(let val of arr){
     console.log(val)
 }