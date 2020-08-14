const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req);
});

const port = process.env.port || 5000;

server.listen(port,()=>{
    console.log(`server started at port ${port}` );
});