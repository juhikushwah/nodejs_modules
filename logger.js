
var url = 'http://mylogger.io/log/juhi'; //This is a made up url. We are sending HTTP request to this endpoint(url).

function log(message){
    //to send an HTTP request

    console.log(message);
}

module.exports.log = log;  //in app.js file, when we called 'module' in the command prompt, the exports field was empty.
                        //in this, we are adding a method called 'log' to exports object and setting it this 'log'(function).
module.exports.url = url;
module.exports.endPoint = url; //internally we call it 'url'(the one we defined), but when exporting, we can change the name too.        
                