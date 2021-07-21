var student = function(){   //OR: function student(){ } | alternative syntax!
    this.name = "Dobby";
    this.age = 17;
    this.email = "jkl@opq.com"
}

student.prototype = {      //was getting "undefined" when student.prototype = function(){this.address}!
    address:"Hogwarts School of Witchcraft and Wizardry",
    getName:function(){
        return this.name;
    }
}

var stud = new student();
//console.log(stud);
//console.log(stud.name);
//console.log(stud.age);
//console.log(stud.email);
//console.log(stud.address);
console.log(stud.getName());

//in place of console.log(stud), I want to use getName() like feature & also keep the above function separate/untouched,
//this is where prototype comes into picture! Additional details like address, education, etc. can be added to the 
//above function/class without making any changes to the original block of code.
//You can add properties and functions using prototypes.