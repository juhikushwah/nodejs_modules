function sayHello(name){
    console.log('Hello ' + name);
}

sayHello('Juhi');
console.log(module);







/*
   console.log(); //global object
   setTimeout();
   clearTimeout();
   setInterval();
   clearInterval();

   All these functions belong to window objects. 'window' represents
   global scope.

   window.console.log or console.log  
   window.setTimeout
 
   var message='';          
   window.message           //this message is available via window object

   NOTE: In node, we don't have window object, we have another object called 'global'.

   global.console.log
   global.setTimeout

   var message='';          //variables that we define here are not added to global object
   console.log(global.message);   //undefined

   In node, every file is a module and the variables and functions defined in that file are scoped 
   to that module. They are not available outside that module.
*/ 