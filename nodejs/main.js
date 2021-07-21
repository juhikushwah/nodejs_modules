//anonymous function

var person = function(){
    console.log("This is an anonymous function");
}

person();

//arrow function
var name = "Harry Potter";
var users = (a,b) => {
    var c = a + b;
    console.log("Total:"+c);
}

users(4,5);

module.exports.abc=name;