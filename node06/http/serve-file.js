const fs = require('fs');
const http = require('http');

//GET - POST - PUT - DELETE
// https://domainname.com/login?user=yourname&password=12345
const myCustomServer = http.createServer((request,response)=>{
  fs.readFile('test.html', (err,data)=>{
      if(err){
          console.log(err);
      }
      response.end(data);
  })
});

myCustomServer.listen("3001");