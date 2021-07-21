//ECMAScript or ES6 
//let, const, templating string, class

var a = 30;
var a = 40;
console.log(a);  //O/P = 40

console.log("*******");

let b = 30;
function f1 () {
    let b = 40;    //this gave error when declared independently!
    console.log(b);
}
f1();
console.log(b); 

console.log("########");

const c = {
    "name":"Hermione Granger",
    "age": 18
}
c.email="abc@xyz.com";
c.age = 20;
console.log(c);

console.log("********");

var name1 = "Ron Weasley";
var age1 = 18;

console.log("Hi %s, you are %s years old!", name1, age1);
//OR
console.log("Hi "+name1+", you are "+age1+" years old!");
//OR
console.log(`Hi ${name1}, you are ${age1} years old!`);  //template string. Notice the tilde operator!

console.log("/////////////////////////////////////////////////");

class Users{
    constructor(){
        this.name2 = "Neville Longbottom";
        this.age2 = 18;
    }

    getName(){
        this.email2 = "def@uvw.com";
        return this.name2;
    }

    getAge(){
        return this.age2;
    }

    getEmail(){
        return this.email2;
    }
}

var obj = new Users();
console.log(obj.getName());
console.log(obj.getAge());
console.log(obj.getEmail());

//OR

class Users1{
    constructor(name, age){    //I changed them back to name and age instead of name3 and age3!
        this.name3 = name;
        this.age3 = age;
    }

    getName(){
        this.email3 = "ghi@rst.com";
        return this.name3;
    }

    getAge(){
        return this.age3;
    }

    getEmail(){
        return this.email3;
    }
}

var obj1 = new Users1("Ginny Weasley", 18);
console.log(obj1.getName());
console.log(obj1.getAge());
console.log(obj1.getEmail());



//You cannot change the value of const once declared, but if you have created this as an object, you can change and 
//define its value.
//When getEmail() is called without calling the getName function, we get an "undefined" value for return this.email,
//because it has been defined in the getName() function