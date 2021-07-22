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

//code for running addition.js module content
var cal = require('./addition');
cal.addition();
console.log(cal.addition()); //the string abc is being returned unlike the above string!
console.log(cal.aval);

module.exports.abc=name;

/******************************************************************************/

//module

//addition | this function will be called from the addition.js file
//subtraction
//multiplication
//division