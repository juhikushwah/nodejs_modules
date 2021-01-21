
const EventEmitter = require('events');  //EventEmitter is a class(notice the naming convention)
const emitter = new EventEmitter();  //this emitter(object) is an instance of EventEmitter(class)


//Register an event
emitter.on('messageLogged', function(){  //this function is the actual listener; 2 arguments; called when the event is raised.
   console.log('Listener called');
})

//Raise an event
emitter.emit('messageLogged');  //1 argument-messageLogged:event name, every time we log a message, we will raise this event
                                //making a noise, produce-signalling

module.exports.func2 = EventEmitter;

/*
   We use some methods like 'emit' to raise an event. Also, it's important to note that those events need a listener, so
   the order in which we raise an event and define a listener matters!

   emitter.emit('messageLogged');  
     -When you run this application, nothing will happen in the terminal! Why? Because, even though we have raised an event
      here but nowhere in our application we have registered a listener that is interested in that event.
     -Listener is a function which is called when that event is raised.
     -Fix for above: register a listener for 'messageLogged' before raising it!
 */