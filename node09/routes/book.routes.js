const express = require('express')
const router = express.Router()

//Model
const BookModel = require('../models/Book')

router.get('/', (req, res) => {
  BookModel.find({isbn:{$exists:false}},'title coAuthor isbn')
              .then((data)=>{res.json(data)})
              .catch((err)=>{res.json(err)})
})
const mongoose = require('mongoose')
router.get('/aggregate-lookup', (req, res) => {
    BookModel.aggregate([
      {
        $match:{_id: mongoose.Types.ObjectId("603abcc5d82f4731d8d645b0")}
      },
      {
        $lookup:{
          from:"authors",//AuthorModel.collection.name
          localField:"authorId",
          foreignField:"_id",
          as:"author"
        }
      },
      {
        $project:{title:1,authorName:"$author.name"}
      }
    ])
                  .then((data)=>{res.json(data)})
                  .catch((err)=>{res.json(err)})

})


router.post('/', function (req, res) {
 const newBook = new BookModel(req.body)
 newBook.save()
            .then((result)=>{res.json(result)})
            .catch((err)=>{res.json(err)})
})

module.exports = router