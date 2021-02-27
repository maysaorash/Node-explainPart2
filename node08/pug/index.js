const express = require('express')
const app = express()
const port = 3000

app.set('view engine','pug')

// app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/', (req, res) => res.render('index'))
app.get('/', (req, res) => res.render('index.pug',{name:"Stewart",phone:'424.900.3096'}))
app.get('/home',(request,response)=>{response.render('home.pug')})
app.get('/contact',(req,res)=>{res.render('contact.pug')})

app.listen(port, () => console.log(`Example app listening on port!`))