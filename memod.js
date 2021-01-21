/* Playing around with some methods.
   Check them out here: https://nodejs.org/en/docs/
*/ 


const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);  //we can simplify this expression by using a template string, which 
                                              //is available in more recent versions of JS (i.e. ES6 or ES2015)
//We can build strings without concatenation

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

const fs = require('fs');

const files = fs.readdirSync('./') //using Sync form here as it's easy to understand; will return files for current(./) folder.        
console.log(files);

// Asynchronous form of the above method

fs.readdir('./', function(err, files){     //instead of './' , use something else to generate an error and see the o/p!
   if(err) console.log('Error', err);
   else console.log('Result', files);
} )      
 

module.exports.func1 = os;

/* When using node with JS, our code is executed outside of a browser, or as some people say, on the server.
   With this(ES6), we can get information about the OS, thus we can work with files, with network, we can build a web
   server that listens for HTTP requests on a given port, etc.
   (NOTE: Before Node, we could not get this kind of information using JS. JS used to run only inside of a browser and we 
    could only work with the window or document objects. We couldn't get the information about OS).
   
   fs module comes with synchronous(or blocking) and Asynchronous(non-blocking) methods and even though we have sync
   methods here for simplicity, in a real world application, we should use async methods(since non-blocking).
   
   Node process has a single thread. Eg. If you are using node to build the backend for your application, you might have several
   hundreds of thousands of clients connecting to that backend. If you keep that single thread busy, you won't be able to
   serve many clients, therefore, it is always advisable to use ASYNC methods.

   All these async methods take a function as their last argument, which node calls when that async operation completes(callback).

   In order to work with files and directories, require the 'fs' module first, and then you can use one or more methods defined
   in this module. Note, all these methods comes in pair(async and sync). Preferred:async methods.
 */