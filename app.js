function sayHello(name){
    console.log('Hello ' + name);
}

sayHello('Juhi');
console.log(module);


var logger = require('./logger.js');  //we use this function to load a module. It only takes one argument, i.e. the path name.
                                      //require is not global. it is local to each module.
console.log(logger);            //on cmd, we'll get an object which has a single method called 'log' returning a function
                       
logger.log('example');       //we can call this function in app.js

//logger('example1');


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

    -jshint app.js: useful tool when you are not sure what to use: var or const
    -as var is generally avoided in javascript because you don't want to override 
    -reason: we don't want to accidentally over write the value of logger. if logger = 1; and then we call logger.log(logger)
       we will get an error stating 'logger.log is not a function'
    -it's a good javascript practice to store the result in a constant. 
    -if we use const, while logger = 1; is still defined, we will get another error-'Assignment to constant variable'
    -benefit of using constant over variable: if you accidentally reset an object(logger, both as a module and as 1), you'll get an error
       at compile time instead of run time.
*/ 