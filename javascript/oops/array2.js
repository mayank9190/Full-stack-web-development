let fruits=["apple","mango","banana"]
//push and pop

fruits.push("melon")
console.log(fruits)
fruits.pop()
console.log(fruits)

//shift se phle item hat jaega

fruits.shift();
console.log(fruits)
fruits.unshift("kiwi")
console.log(fruits)

let note=["la","me","to","do"]
note.slice(2)
console.log(note)
note.splice(2)
console.log(note)


note.splice(0,3, 'sa','re','ga')
console.log(note)


console.log(note.concat("sa"))