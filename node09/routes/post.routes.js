const express = require('express')
const { modelName } = require('../models/Post')
const router = express.Router()

/*Model */
const PostModel = require('../models/Post')

router.get('/', (req, res) => {
    /*PostModel.find()
                    .then((resultData)=>{res.json(resultData)})
                    .catch((error)=>{res.json(error)});*/
    PostModel.find((resultData,error)=>{
        if(error) res.json(error)
        res.json(resultData)
    })
})


router.get('/find', (req, res) => {
    PostModel.find({isActive:false,subTitle:'My Subtitle'},'title isActive')
                    .then((resultData)=>{res.json(resultData)})
                    .catch((error)=>{res.json(error)});    
})

router.get('/findOne', (req, res) => {
    PostModel.findOne({isActive:false,subTitle:'My Subtitle'},'title')
                    .then((resultData)=>{res.json(resultData)})
                    .catch((error)=>{res.json(error)});    
})

router.get('/findById', (req, res) => {
    PostModel.findById('6032d72db905323a284faf8e')
                    .then((resultData)=>{res.json(resultData)})
                    .catch((error)=>{res.json(error)});    
})

router.post('/', function (req, res) {
    const myPostModel = new PostModel({
        title:"My new title 2",
        subTitle:"My Subtitle 2",
        //createdDate:Date.now(),
        isActive:true,
        meta:{votes:54,favs:93},
        comments:[{message:'Good Job!'},{message:'Bad Job!'}]
    });
    myPostModel.save((err,data)=>{
        if(err) res.json(err)
        res.json(data)
    });
})

router.post('/add', function (req, res) {
    const myPostModel = new PostModel({
        title:req.body.title,
        subTitle:req.body.subTitle,
        //createdDate:Date.now(),
        isActive:req.body.isActive,
        meta:req.body.meta,
        comments:req.body.comments
    });
    myPostModel.save((err,data)=>{
        if(err) res.json(err)
        res.json(data)
    });
})

router.post('/addAll', function (req, res) {
    const myPostModel = new PostModel(req.body);
    myPostModel.save((err,data)=>{
        if(err) res.json(err)
        res.json(data)
    });
})

router.put('/updateMany',(req,res)=>{
    PostModel.updateMany({isActive:false,title:'My new title'}
    ,{title:'Title Updated.'})
    .then((result)=>{res.json(result);})
    .catch((error)=>{res.json(error)})
})

router.put('/updateOne',(req,res)=>{
    PostModel.updateOne({isActive:false,title:'Title Updated.'}
    ,{title:'Title Updated.updateOne',subTitle:'Sub title updated with updateOne'})
    .then((result)=>{res.json(result);})
    .catch((error)=>{res.json(error)})
})

router.put('/updateOneFromBody',(req,res)=>{
    PostModel.updateOne({isActive:req.body.filterisActive}
    ,{title:req.body.title,isActive:req.body.isActive})
    .then((result)=>{res.json(result);})
    .catch((error)=>{res.json(error)})
})



router.put('/findByIdAndUpdate',(req,res)=>{
    PostModel.findByIdAndUpdate('6032d72db905323a284faf8e'
    ,{title:'Title Updated.findByIdAndUpdate',subTitle:'Sub title updated with updateOne'})
    .then((result)=>{res.json(result)})
    .catch((error)=>{res.json(error)})
})

router.delete('/deleteMany',(req,res)=>{
    PostModel.deleteMany({isActive:false})
                .then((result)=>{res.json(result)})
                .catch((error)=>{res.json(error)})
})

router.delete('/deleteOne',(req,res)=>{
    PostModel.deleteOne({isActive:true})
                .then((result)=>{res.json(result)})
                .catch((error)=>{res.json(error)})
})


router.delete('/findByIdAndDelete',(req,res)=>{
    PostModel.findByIdAndDelete('603705f18e3373351875a1c0')
                .then((result)=>{res.json(result)})
                .catch((error)=>{res.json(error)})
})

router.delete('/findByIdAndRemove',(req,res)=>{
    PostModel.findByIdAndRemove('6037144f09062439b0e67d6a')
                .then((result)=>{res.json(result)})
                .catch((error)=>{res.json(error)})
})


router.get('/sorting',(req,res)=>{
    PostModel.find()
                .sort({'meta.votes':'ascending','meta.favs':-1})
                .skip(2)
                .limit(2)
                .then((result)=>{res.json(result)})
                .catch((error)=>{res.json(error)})
})
// 1 | asc | ascending
// -1 | desc |descending

/*modelName.functionName(filter,objectData)
            .then((result)=>{res.json(result)})
            .catch((error)=>{res.json(error)})*/







module.exports = router