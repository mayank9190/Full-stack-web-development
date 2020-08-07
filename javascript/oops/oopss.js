//one way of creating an object
var apple={
    taste:"sweet",
    color:"red",
}



// another way
function fruit(taste,color){

    this.color=color;
    this.taste=taste;
}
let mango= new fruit("sweet", "yellow");
let orange= new fruit("sour","orange");

// class keyword (ECMAscript 2015)
class fruitclass{
constructor(taste,color){
this.taste= taste;
this .color=color;
}

};
let kiwi= new fruitclass("sour","green")

//class expression

let fruitclass2=class{
    constructor(taste,color){
        this.taste= taste;
        this .color=color;
        }
        
};
let kiwi2= new fruitclass2("sour","green");
