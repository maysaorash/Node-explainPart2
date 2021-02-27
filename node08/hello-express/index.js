const express = require('express')
const myApp = express()

myApp.get('/',(req,res)=>{
    res.send('Hello world from ExpressJS...');
});

myApp.get('/About',(req,res)=>{
    res.send('Hello world from About Page in ExpressJS...');
});

myApp.listen(3005,()=>{console.log('Express Server Running...')})