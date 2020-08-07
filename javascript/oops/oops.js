//oops concent in js
var bird={
x:100,
y:20,
color: "blue",
eggs:[1,2,3,4],

//one way of creating javascript (json)-  javascript object notation

fly:function(){
    console.log("bird is flying", this.x,this.y);
}

};

for(let i=0;i<bird.eggs.length;i++){
    console.log(bird.eggs[i]);
};


