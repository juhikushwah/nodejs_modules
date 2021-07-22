function add(){
console.log("This is addition module!");
return "abc";
}
var a = 20;

module.exports.addition=add;    //if I don't include this and then run the main file, nothing happens!
module.exports.aval=a; 

//OR

module.exports={
   addition:function(){
       console.log("This is an addition module!");
   },
   aval:20
}

//I prefer the 2nd approach because when we were creating functions, we had to export, now we are just creating it 
//directly inside the exports and the names of function or variables don't change unlike the former method.