var express = require('express');
var router = express.Router();
const url = `http://localhost:3001`
const mongoose = require('mongoose')
const hotoffer = require('../models/hotoffer')
/* GET users listing. */
router.get('/', async (req, res, next) => {
    await hotoffer.find((err, result) => {
        if (err)  console.log(err);
        res.json({data : result , totalItem : result.length});
    });
});
router.post('/addoffer' , (req , res , next) => {
    const Hotoffer = new hotoffer({
        _id: new mongoose.Types.ObjectId(),
        title : req.body.title,
        image: req.body.image,
        newPrice: req.body.newPrice,
        oldPrice: req.body.oldPrice,
        discount: req.body.discount,
      });
      hotoffer
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: "Handling POST requests to /products",
            hotoffer: result
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
})
router.get('/page/:num/:limit', async(req, res, next) => {
    let dataArr = []
    await hotoffer.find()
    .exec()
    .then(docs => {
    const num = req.params.num
    const limit = req.params.limit
    const startIndex = (num - 1) * limit
    const endIndex = num * limit
    const result = docs.slice(startIndex , endIndex)
      res.status(200).json({data : result , totalItem : result.length});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
})

module.exports = router;