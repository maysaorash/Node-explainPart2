const fs = require('fs')
const file = 'Video.mp4'

const myReadStream = fs.createReadStream(file);
const myWriteStream = fs.createWriteStream('VideoNew.mp4');

myReadStream.pipe(myWriteStream);

myWriteStream.on('finish',()=>{
    console.log('New file created....');
})
