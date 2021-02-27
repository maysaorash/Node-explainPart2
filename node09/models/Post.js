const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title:String,
    subTitle:{type:String,required:true,unique:true},
    createdDate:{type:Date,default:Date.now},
    isActive:{type:Boolean,default:true},
    comments:[{message:String}],
    meta:{votes:{type:Number,default:0},favs:Number}    
})

module.exports =  mongoose.model('post',PostSchema)