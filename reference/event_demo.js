const EventEmmiter = require('events');

// triggering an event
class MyEmmiter extends EventEmmiter {};

const myEmmiter = new MyEmmiter();

myEmmiter.on('events',()=>{
    console.log('events triggered...');
})

myEmmiter.emit('events');