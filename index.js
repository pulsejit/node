// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req,res)=>{
//     // if(req.url === '/'){
//     //     fs.readFile(path.join(__dirname, 'public', 'index.html'),(err, content)=>{
//     //             if(err) throw err;
//     //             res.writeHead(200,{ 'Content-Type': 'text/html' });
//     //             res.end(content);
//     //         }
//     //     );
//     // }

//     // if(req.url === '/path'){
//     //     fs.readFile(path.join(__dirname, 'public', 'about.html'),(err, content)=>{
//     //             if(err) throw err;
//     //             res.writeHead(200,{ 'Content-Type': 'text/html' });
//     //             res.end(content);
//     //         }
//     //     );
//     // }
//     //     // to create a rest api we'll be serveing not html but json
//     // if(req.url === '/api/users'){
//     //     const users = [
//     //         { name:'Jhon Doe', age: 40 },
//     //         { name: 'Jane Doe', age: 30 }
//     //     ];  
//     //     res.writeHead(200,{ 'Content-Type': 'application/JSON' });
//     //     res.end(JSON.stringify(users));
//     // }

//     // Build file path || Dynamic paths

//     const filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
//     console.log(filepath);
//     // extension name
//     const extname = path.extname(filepath);
//     // initial content type
//     const contentType = 'text/html';
//     // check for the other content types and change according
//     switch(extname){
//         case '.js': contentType = 'text/js';
//                     break;
//         case '.css': contentType = 'text/css';
//                     break;
//         case '.json': contentType = 'application/json';
//                     break;
//         case '.img': contentType = 'image/.img';
//                     break;
//     }

//     // res.end();
//     // read file
//     fs.readFile(filepath, (err,content)=>{
//         if(err == 'ENOENT'){
//             fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
//                 if(err) throw err;
//                 res.writeHead(200, { 'Content-Type': 'text/html' })
//                 res.end(content, 'utf8');
//             });
//         }
//     })

// });

// const port = process.env.port || 5002;

// server.listen(port, ()=>console.log(`server started on:${port}`));


// const EventEmmiter = require('events');
// const Logger = require('./reference/logger');
// const logger = new Logger();

// // register an event
// emiter.on('message', function(arg){
//     // if(err) throw err;
//     console.log('so the event is ', arg);
// });

// // provoking an event
// emiter.emit('message', { id: 1, e: 'Hola'});


// // register the event
// emiter.addListener('logging',(arg)=>{
//     console.log('so the emmited event is: ', arg);
// });
// // rise the event 
// emiter.emit('logging', { message: 'het there !!'});

// registering an event from the logger.js


// logger.addListener('logger',(content)=>{
//     console.log('event listened ', content);
// });
// logger.log('message');


// creating a server
const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("hello world");
        res.end();
    }
    if(req.url === '/api/users'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

// server.on('connection', (socket)=>{
//     console.log('new connection');
// });

server.listen(3000);
console.log('listening to port 3000...')