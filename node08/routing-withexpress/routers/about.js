const express = require('express')
const router = express.Router()
const isAuth= require('../helpers/isAuth')

router.get('/About',isAuth,(request,response)=>response.send("Hello world From GET Method..."))

router.post('/About',(request,response)=>response.send("Hello world From POST Method..."))

router.delete('/About',(request,response)=>response.send("Hello world From DELETE Method..."))

router.put('/About',isAuth,(request,response)=>response.send("Hello world From PUT Method..."))
.all('/About',isAuth,(request,response)=>response.send("Hello world From ALL(*) Method..."))


module.exports = router;