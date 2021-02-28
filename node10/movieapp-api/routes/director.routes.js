const express = require('express')
const router = express.Router()
//Model
const DirectorModel = require('../models/Director')

router.get('/',(req,res,next)=>{
    DirectorModel.aggregate([
        {
            $lookup:{
                from:'movies',
                localField:'_id',
                foreignField:'director_id',
                as:'movies'
            }
        },
        {
            $project:{
                _id:0,
                name:1,
                surname:true,
                'movies.title':1,
                'movies.imdb_score':1
            }
        }
    ])
    .then((directorList)=>{res.json(directorList)})
    .catch((err)=>{next({message:err});})
})
router.post("/",(req,res,next)=>{
    const newDirector = new DirectorModel(req.body)
    newDirector.save()
                .then((director)=>{res.json(director)})
                .catch((err)=>{next({message:err});
                     /*res.json(err)*/})
})


module.exports = router