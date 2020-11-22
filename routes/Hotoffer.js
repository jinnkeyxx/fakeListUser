var express = require('express');
var router = express.Router();
const url = `http://localhost:3001`
/* GET users listing. */
router.get('/', function(req, res, next) {

  // res.send('respond with a resource');
  if(req.params.num == 1){

  }
    let dataArr  = {
        toTal : 8,
        Product : [
            {
                title : 'Nuoc rua Bat',
                image : `${url}/images/1.png` ,
                newPrice : 600,
                oldPrice : 300,
                discount : 50,
            },
            {
                title : 'Nuoc rua Bat',
                image : `${url}/images/1.png` ,
                newPrice : 600,
                oldPrice : 300,
                discount : 50,
            },
            {
                title : 'Nuoc rua Bat',
                image : `${url}/images/1.png` ,
                newPrice : 600,
                oldPrice : 300,
                discount : 50,
            },
            {
                title : 'Nuoc rua Bat',
                image : `${url}/images/1.png` ,
                newPrice : 600,
                oldPrice : 300,
                discount : 50,
            },
        ]
    }
  res.json({
    data : dataArr
  })
});
router.get('/page/:num', function(req, res, next) {
   let dataArr = {}
    if(req.params.num == 1){
        dataArr  = {
            page : 1,
            toTal : 8,
            Product : [
                {
                    title : 'Nuoc rua Bat',
                    image : `${url}/images/1.png` ,
                    newPrice : 600,
                    oldPrice : 300,
                    discount : 50,
                },
                {
                    title : 'Nuoc rua Bat',
                    image : `${url}/images/1.png` ,
                    newPrice : 600,
                    oldPrice : 300,
                    discount : 50,
                },
                {
                    title : 'Nuoc rua Bat',
                    image : `${url}/images/1.png` ,
                    newPrice : 600,
                    oldPrice : 300,
                    discount : 50,
                },
                {
                    title : 'Nuoc rua Bat',
                    image : `${url}/images/1.png` ,
                    newPrice : 600,
                    oldPrice : 300,
                    discount : 50,
                },
            ]
        }
    }
    else {
        dataArr  = {
            page : 2,
            toTal : 8,
            Product : [
                {
                    title : 'Nuoc rua Chen',
                    image : `${url}/images/1.png` ,
                    newPrice : 600,
                    oldPrice : 300,
                    discount : 50,
                },
                {
                    title : 'Nuoc rua Chen',
                    image : `${url}/images/1.png` ,
                    newPrice : 600,
                    oldPrice : 300,
                    discount : 50,
                },
                {
                    title : 'Nuoc rua Chen',
                    image : `${url}/images/1.png` ,
                    newPrice : 600,
                    oldPrice : 300,
                    discount : 50,
                },
                {
                    title : 'Nuoc rua Chen',
                    image : `${url}/images/1.png` ,
                    newPrice : 600,
                    oldPrice : 300,
                    discount : 50,
                },
            ]
        }
    }
    res.json({
        data : dataArr
    })

})

module.exports = router;