const http = require('http');

const myServer = http.createServer((request,response)=>{
    console.log("A Request from : ",request.url);
    console.log("A Request header : ",request.headers);

    response.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    // response.write("<b>Hello world Ç Ğ Ş İ Ü</b> from HTTP Server...");
    response.end("<b>Hello world</b> from HTTP Server In END METHOD with NodeMon...");
})

myServer.listen(3000);