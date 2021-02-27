const fs = require('fs')
const http = require('http')

const myServer = http.createServer();

myServer.on('request',(req,res)=>{
    /*fs.readFile('BigVideo.mp4',(err,data)=>{
        if (err) {throw err;}
        res.end(data);
    })*/
    const myReadStream = fs.createReadStream('BigVideo.mp4')
    myReadStream.pipe(res)
});
myServer.listen(3000);