const EventEmmiter = require('events');

class logger extends EventEmmiter{
    log(message){
        console.log(message);
        // fire up an event 
        this.emit('logger', { message: "log here !!" });
    }
}


module.exports = logger;   