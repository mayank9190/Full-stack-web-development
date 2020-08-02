let arr=["apple","mango","guava"]
console.log(arr)

for(let i=0;i<5;i++){
    console.log(arr[i])
}

arr.push("banana") //insert at back
arr.pop() // remove from back
arr.shift() //insert fron front

arr.unshift("kiwi") // remove from front
arr.indexOf("kiwi")