function person(name,age){
    this.age=age
    this.name=name
return 10
}

// let p=person('harry porter', 20)
// console.log(p)
// console.log(name)
// console.log(age)
let p=new person('harry porter', 20)
console.log(p)
let p2= new person('mayank',22)
console.log(p2)