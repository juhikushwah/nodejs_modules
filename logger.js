
const EventEmitter = require('events');  
/* const emitter = new EventEmitter(); */ //we don't need this emitter object anymore. After changes, haven't used anywhere.

//var x=;
console.log(__filename);    //function(exports, etc etc) that works like a wrapper, eg, car x=; shows error with fields,
                            //our code converts to the above during runtime.
console.log(__dirname);

var url = 'http://mylogger.io/log/juhi'; //This is a made up url. We are sending HTTP request to this endpoint(url).


class Logger extends EventEmitter {      //I created a class named Logger and moved the function log inside it.

  /* function */ log(message){    //removed the 'function' keyword, coz when we defined a function inside a class, we don't need that keyword.
    //to send an HTTP request     //and now this function will be referred to as method, since it is inside a class.

    console.log(message);

    //Raise an event
   /* emitter */this.emit('messageLogged', {id: 1, url: 'http://' });   //commenting out emitter object and using 'this' keyword.
    //Back in the app module, we will load the logger module and call the log function.
}
}


//module.exports.log = log;  //in app.js file, when we called 'module' in the command prompt, the exports field was empty.
                        //in this, we are adding a method called 'log' to exports object and setting it this 'log'(function).
module.exports.url = url;
module.exports.endPoint = url; //internally we call it 'url'(the one we defined), but when exporting, we can change the name too.        

//module.exports = log;

//Now, instead of exporting the log function, we will export the Logger class(commenting out loc 27)
module.exports = Logger;  //Also, I want this logger class to have all the capabilities of the above event emitter, so I will
//use 'extends' keyword above. Logger will now have all the functionalities of EventEmitter and now we can remove the emitter
//object while raising an event and use 'this' keyword instead. Also, we won't need emitter object anymore(loc 3).
//Also, in the app module, we will change log to Logger in the require method.

/* In order to load a module, you first export it, so
    1. Exported a module named log above
    2. Used 'require' in app.js to load this module.

  In your modules, you can export a single function or an object(instead of just object like we did).
   -in our logger module, we don't necessarily need an object because we have a single method. An object would be useful
    if we had multiple methods or properties.
   -alternative: module.exports = log and in app.js, logger('example)


 module.exports.log = log;  correct
 module.exports = log; correct
 exports.log = log; correct

 exports = log; Incorrect  because this exports is a reference to module.exports and we can't change that reference
*/
 