const fs = require('fs');
const path = require('path');

// create folder
// fs.mkdir(path.join(__dirname,'/test'),{},function(err){
//     if(err) throw err;
//     console.log('folder is created...');
// });

// creating file and writing the data inside it 
const data = "hello world !!";
fs.writeFile('message.txt', data, {}, (err)=>{
    if(err) throw err;
})