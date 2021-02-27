const express = require('express')
const router = express.Router()


router.get('/User/:id?/:jobId',(req,res)=>{res.send("Id="+req.params.id+" JobId="+req.params.jobId)})
router.post('/User',(req,res,next)=>{
    const user = false;
    if(user){
        res.send("User Page... (USER POST Method)")
    } else {
     return next({status:404,message:'This user was not fount.'})
    }
    
    })


module.exports = router;