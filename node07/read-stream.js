const fs = require('fs');
const file = 'Video.mp4';

const readMyStream = fs.createReadStream(file);

readMyStream.on('data',(chunk)=>{
    console.log("A data came in...",chunk.length);
})

readMyStream.on('end',()=>{
    console.log("Data reading finished...");
})
