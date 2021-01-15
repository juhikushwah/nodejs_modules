//var x=;
console.log(__filename);    //function(exports, etc etc) that works like a wrapper, eg, car x=; shows error with fields,
                            //our code converts to the above during runtime.
console.log(__dirname);

var url = 'http://mylogger.io/log/juhi'; //This is a made up url. We are sending HTTP request to this endpoint(url).

function log(message){
    //to send an HTTP request

    console.log(message);
}

module.exports.log = log;  //in app.js file, when we called 'module' in the command prompt, the exports field was empty.
                        //in this, we are adding a method called 'log' to exports object and setting it this 'log'(function).
module.exports.url = url;
module.exports.endPoint = url; //internally we call it 'url'(the one we defined), but when exporting, we can change the name too.        

//module.exports = log;



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
 