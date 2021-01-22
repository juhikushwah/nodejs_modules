
const EventEmitter = require('events');  //EventEmitter is a class(notice the naming convention), for raising events
const emitter = new EventEmitter();  //this emitter(object) is an instance of EventEmitter(class)


//Register an event
emitter.on('messageLogged', (e) => {  //this function is the actual listener; 2 arguments; called when the event is raised.
   console.log('Listener called', e);
})

//Raise an event
emitter.emit('messageLogged');  //1 argument-messageLogged:event name, every time we log a message, we will raise this event
//making a noise, produce-signalling; o/p: Listener called undefined


/*Raise an event with additional data
emitter.emit('messageLogged', 1, url);  //Arguments: 1 as in ID and url; This declaration is sort of confusing though.
//this gave me an error stating 'url' not defined.

*/

// If you want to send multiple values about an event, it's a better practice to encapsulate those values inside an object
//So, rewriting the above method:
emitter.emit('messageLogged', {id: 1, url: 'http://' }); //we refer to this object{id:, url:} as 'event argument'

module.exports.func2 = EventEmitter;

/*
   We use some methods like 'emit' to raise an event. Also, it's important to note that those events need a listener, so
   the order in which we raise an event and define a listener matters!

   emitter.emit('messageLogged');  
     -When you run this application, nothing will happen in the terminal! Why? Because, even though we have raised an event
      here but nowhere in our application we have registered a listener that is interested in that event.
     -Listener is a function which is called when that event is raised.
     -Fix for above: register a listener for 'messageLogged' before raising it!
     -So, without registering, when you raise an event(by calling the emit method), nothing would have happened because this
      emitter iterates over all the registered listeners and calls them synchronously.

   Sometimes when you raise an event, you also want to send some data about that event. We haven't done so in the above method,
   but it's a possibility.
   
   1.
   Thus, function() will now receive the event arguments too! Also, we add another parameter called arg(or some people use 'e', 
   or eventArg). The above function was:

   emitter.on('messageLogged', function(){ 
   console.log('Listener called');
   })
   OUTPUT: Listener called undefined
   
   2.
   It changes to:

   emitter.on('messageLogged', function(e){ 
   console.log('Listener called',e);
  })
  OUTPUT: Listener called { id: 1, url: 'http://' }

  3.
  We can make this code simpler by using arrow function(ES6 feature):

  emitter.on('messageLogged', (e) => {      //get rid of function name
   console.log('Listener called',e);
  })

  This is the final registered event which you see above.

  In the real world, working with EventEmitter object directly is rare!! Instead, you want to create a class that has all
  the capabilities of the event emitter and then you will use that class in your code.
  SEE THE LOGGER MODULE(In the logger module, you want to raise an event(after displaying the message), then later in 
  app module, we will listen for that event and  do something).

  Changes I made:
    -Whatever stuff I mentioned in this module. I will be copying that in the app.js module, and from there I will listen
     for that event. 

 */