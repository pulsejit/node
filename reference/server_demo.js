const http = require('http');

// creating a server for the first time in my life
http.createServer((req,res)=>{
    res.write('hello world');
    res.end();
}).listen(5100,()=>{console.log('server is running')});
