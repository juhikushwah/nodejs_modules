function sayHello(name){
    console.log('Hello ' + name);
}

sayHello('Juhi');
console.log(module);


var logger = require('./logger.js');  //we use this function to load a module. It only takes one argument, i.e. the path name.
                                      //require is not global. it is local to each module.
console.log(logger);            //on cmd, we'll get an object which has a single method called 'log' returning a function
                       
logger.log('example');       //we can call this function in app.js

//logger('example1');       //logger-experimenting with 'require' and 'exports'

const path = require('path');  //node assumes this is a built-in module. If there is no built-in module by the name specified here,
                               //node looks for the existence of a relative path '../../path' to a file in this application.

var pathObj = path.parse(__filename);

console.log(pathObj);  //NOTE: it's easier to work with path modules than with strings.

//Lines I added from events.js module.
const EventEmitter = require('events');  
/* const emitter = new EventEmitter(); */ //don't need it anymore

/* //Register an event. I have moved this portion in the logger.js because that module will signal or emit saying that
   the message is logged.
emitter.on('messageLogged', (e) => {  
   console.log('Listener called', e);
})
//Raise an
emitter.emit('messageLogged', {id: 1, url: 'http://' }); */
//End!!

//Loading the logger module and calling the log function.
const /* log */ Logger = require('./logger');
const logger1 = new Logger();  //new object named logger1, on which we want to listen to the registered event, and don't need the above EventEmitter.

//We will register this listener on the above logger object. Hey logger, when you raise this messageLogged event, I want to 
//execute this code. And we finally delete the emitter object from this as well(line 26).
/* emitter */logger1.on('messageLogged', (e) => {  
   console.log('Listener called', e);
})

logger1.log('message');
/* console.log('message'); */  //log('message'); 
//When I run this after commenting out the lines below, I will only see 'message' and not 'listener called', implying
//that our event listener from events.js was not called. REASON: Here we are working with 2 different event emitters(class),
//one in app.js and another in logger.js. Class is like a blue print and object is like an actual instance. Thus, we are
//also working with 2 different objects. In the logger module, our emitter object is emitting an event, whereas in app
//module, we are using another event emitter object to handle that event. These are completely different! So when you 
//register a listener here, it is only registered with this event emitter and is different from the other event emitter.
//That's why you don't want to work with this event emitter directly!!(see events.js for more info.), so now, we will
//create a class in logger.js named 'Logger' which has additional method 'log'. Now when you run this application, after
//commenting out the lines below and line 13, you will get both the messages in the terminal, unlike previously, because
//we are using the same logger1 object for registering an event listener and also for raising an event, we're going to see
//this message(Listener called) on the console.

const memod = require('./memod.js');   //files and directories
console.log(memod); 

const eventfunc = require('./events.js');  //events
console.log(eventfunc); 


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

   The path module provides utilities for working with file and directory paths. It can be accessed using:
      const path = require('path');  //we get an object(path) and store it in const. This object also has useful methods.
   (In the above case, we are loading the building module and storing it in a constant).

   Look for nodejs documentation for certain methods.

   Quick recap of all the changes I made in this module:
   1. logger.js
    -If you want to raise events in your application to signal that something has happened, you need to create a class(Logger)
     that extends that event emitter (EventEmitter).
    -With this, that class will have all the functionality defined in event emitter, but we can also add additional 
     functionality, in this case- 'log' function, ability to log a message.
    -And then, inside the class, whenever you want to raise an event, use 'this.emit': this references 'Logger' class itself
     which extends 'EventEmitter'
    -So, all the methods defined in EventEmitter will also be a part of this (Logger) class.
    -Finally, in

   2. app.js
    - Instead of using an instance of EventEmitter(deleted one), you will use the instance of custom class that you have defined
      (const logger1 = new Logger();), that extends EventEmitter.

   NOTE: Comment out appropriate lines of code for running this application.
*/ 